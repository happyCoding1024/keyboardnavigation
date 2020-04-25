[TOC]

# UpdateLog

## 2020年4月15日（使用 localStorage）

使用 localStorage 存储网址和字母的映射。

## 2020年4月16日（解决使用 import 引入组件失败的问题）

从昨天开始，当打包好后组件后，在本地使用  webpack-dev-server 可以跑起来，可是当使用 import 引入打包后的组件时，再使用 webpack-dev-server 就会报错。报错信息主要是下面这一种：

```js
"export 'default' (imported as 'add') was not found in './bundle'
```

> add 是用来测试时往外导出的组件，就是一个简单的 add 函数

一直认为是 webpack 打包的问题，所以一直在找相关的博客和 webpack 官网对应的章节来看，除此之外还在 Github 上 clone 了一些仓库，在本地进行打包，可是都没有成功。

我之前的测试方法一直是引入打包后的文件，还有使用 npm link，都不行，因此我又想到是不是和从 npm 上下载下来再引入不同（虽然内心知道是一样的，但还是决定试一下），所以我将打包后的文件上传到了 npm，在另一个项目中(使用自己创建的 webpack 配置文件)下载了这个安装包，然后引入，当使用 webpack-dev-server 时发现还是同样的问题。

这个时候又想会不会是自己 webapck 配置文件的文件，虽然能正常打包，可是项目运行是不是有些地方没有配置到，因此决定再使用 creat-react-app 尝试一下。在使用 create-react-app 创建了一个项目，然后下载这个组件，在使用这个组件后再执行 npm run start，发现竟然结果跑通了。

不仅感叹一声，webpack 的水真深呀，明明在不打包之前自己配置的 webpack 文件可以跑通，打包之后再引入就不行了。现在还不清楚 webpack 文件还少什么。

参考文章：

[webpack 官网 Authoring Libraries]( https://webpack.js.org/guides/author-libraries/#root )

[webpack官网 output.library 和 output.libraryExport ](https://webpack.js.org/configuration/output/#outputlibrary)

[如何创建一个前端 React 组件并发布到 NPM](https://www.jianshu.com/p/db6113c94dbc)

[如何使用 ES6 编写一个 React 模块, 并且编译后发布到 NPM](http://react-china.org/t/es6-react-npm/3879)

[react组件化开发发布到npm](https://www.cnblogs.com/Hsong/p/9938928.html)

[npm link的用法](https://www.cnblogs.com/asdfq/p/10994227.html)

[npm link用法总结](https://www.cnblogs.com/mengff/p/11743145.html)

[现代前端库开发指南系列（二）：使用 webpack 构建一个库](https://blog.csdn.net/array_huang/article/details/103415852)

[详解从 0 发布 react 组件到 npm 上]( https://www.jianshu.com/p/324f2756da8e )

[[译] 创建并发布一个小而美的 npm 包，没你想的那么难！](https://juejin.im/post/5c26c1b65188252dcb312ad6)

[Webpack打包UMD的export问题](https://twindy.org/webpackda-bao-umdde-exportwen-ti/)

[详解webpack的out.libraryTarget属性](https://blog.csdn.net/frank_yll/article/details/78992778)

## 2020年4月16日（解决 Minified React error #321 错误）

在解决了上一个问题之后，npm start 后发现报以下的错误

```js
Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
```

关于这个错误，参考 [react+ts组件打包发布到npm上不能用，报Minified React error #321](https://segmentfault.com/q/1010000020577029) 这篇文章。

> 我的react组件用的hooks打包后发到npm上的，然后在实际项目中用到时报错，因为组件一开始环境配置了react，然后项目中也配置了react，引起了冲突。
> 根据react官方文档要求，你可以认为这里有了两个react，所以会报错。
> 解决方法就是看我给出的链接，改npm组件中的webpack配置项，重新打包发到npm上，安装更新后的组件，不知道你的问题和我的是不是一样的。 
>
> [原文链接](https://github.com/lizhongzhen11/dailyGain/issues/57)

解决方法就是使用 externals 将 react，react-dom 等不要打包到 npm 包中，关于 externals 可以参考 [webpack externals 深入理解](https://segmentfault.com/a/1190000012113011?utm_source=tag-newest)，[Webpack 踩坑记 - 配置 externals 和 output](https://cloud.tencent.com/developer/article/1607190)这两篇文章。

更改后的 webapck 配置文件如下。

```js
  externals: {
    react: {
      root: '_',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    "@babel/polyfill": {
      root: '_',
      commonjs2: '@babel/polyfill',
      commonjs: '@babel/polyfill',
      amd: '@babel/polyfill'
    },
    "@babel/runtime": {
      root: '_',
      commonjs2: '@babel/runtime',
      commonjs: '@babel/runtime',
      amd: '@babel/runtime'
    },
    "@babel/runtime-corejs2": {
      root: '_',
      commonjs2: '@babel/runtime-corejs2',
      commonjs: '@babel/runtime-corejs2',
      amd: '@babel/runtime-corejs2'
    },
    "styled-components": {
      root: '_',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components'
    }
  }
```

如果 libraryExport 是 umd 那么必须写成上面的形式，不能这样写：

```js
externals: {
  react: 'react'
  react-dom: 'react-dom'
}
```

在 [如何创建一个前端 React 组件并发布到 NPM](https://github.com/lizhongzhen11/dailyGain/issues/57)中提到可以用 webpack-node-externals 中的 nodeExternals 方法使得打包的组件中不包括任何 node_modules 里面的第三方组件，起到减小体积的作用。 

```js
const nodeExternals = require('webpack-node-externals');

externals: [nodeExternals()]
```

在这里再提一下 peerDependencies， peerDependencies的作用是提示宿主环境去安装满足插件peerDependencies所指定依赖的包，然后在插件import或者require所依赖的包的时候，永远都是引用宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。 

例如，在插件 A 的 package.json 中有以下配置。

```js
"peerDependencies": {
  "PackageB": "1.0.0"
}
```

那么在项目中无论用没用到 PackageB，都会安装 PackageB（在项目目录下的 node_modules 中）。有关 peerDependencies 的详细介绍可参考 [探讨npm依赖管理之peerDependencies](https://www.cnblogs.com/wonyun/p/9692476.html)

**peerDenpendencies 和使用  externals 后项目中在安装依赖包时的区别。**

使用 externals 去除的包在引用组件的项目中会被安装到组件的 node_modules，在 peerDenpendencices 中指定的依赖包会被安装到项目根目录下的 node_modules。 


## 2020年4月22日（添加默认键盘导航状态等）

### 添加了默认导航状态

设置 open 参数来设置导航组件默认是否开启，true 表示开启，false 表示不开启。

listenUser 函数中接收到 false 时是开启导航，true 时是关闭导航，这有点和用户的习惯不同，因此在传递参数时让用户传递 true 表示开启，false 表示关闭，至于中间的逻辑在 listenUser 中去做。 

**收获**

学会及时停止，这个感悟我写了不止一遍，在个人日记中写了也很多遍了，对于我来说真的很受用，当觉得现在状态很差，晕头转头向的时候不要再去接着写程序了，这个时候是很难解决问题的，写不会写出什么好的程序。这个时候停一下，做点其它的或者休息一下，将之前程序的问题捋一遍，然后再去解决问题，心里一定要有逻辑，不要靠运气。

> TODO: (已完成)用户在线修改按键网址时，马上渲染出对应的图标
### 用户在线修改按键网址时，如何马上渲染出对应的图标？
通过在 KeyNav 组件的 state 中加一个 favChange 的属性，在 KeyNav 组件中添加一个方法 favChange()，将这个方法绑定 KeyNav 的 this 之后，然后传递给 createButton 函数，在 createbuton 函数中当点击 edit 时调用此方法来改变组件 KeyNav state 中的 favChange，然后组件就会被重新渲染，从而图标就会跟着更新。

部分代码
```js
// KeyNav 组件
favChange() {
  this.setState(({
    favChange: !this.state.favChange
  }))
}

// createButton 函数
 button.addEventListener('click', (e) => {
   ...
  // TODO: 当改变按键的网址时图标马上渲染出来
  // 改变 state 中 favChange 的状态，令改变的网址的图标重新渲染出来
  favChange();
 })
```
**收获**

其实这个逻辑之前就做了，但是由于正则匹配时正则表达式写的不完备，导致有错误没有及时发现，结果导致这个功能也不能正常实现，将正则修改正确后，这个功能也能正常实现了。

以后一定要多看 console 窗口，有错误及时解决。

### 如何兼容用户输入的网址
使用正则表达式，无论用户输入带https的或者不带https的都可以将一级域名解析出来。

```js
const reg = /^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/
const result = url.match(reg)
```

例如 

`https://www.baidu.com` 经过正则匹配之后，result[2] 中是 `www.baidu.com`

`https://www.baidu.com/104` 经过正则匹配之后， result[2] 中是 `www.baidu.com/104`

`baidu.com` 经过正则匹配之后， result[2] 中是 `baidu.com`


## 2020年4月23日（刷新变为用户输入的hash值）

> TODO:  现在现在当刷新页面时，组件重新加载后键盘的映射变为用户传入的 hash，在线设置的就是失效了，接下来要做的是比较 localStorage 中的值和用户传入的  hash 值，如果和 localStorage 中的值不相同那么就忽略用户输入的 hash 值
> TODO: 使用 GithubPage 预览

## 2020年4月25日（解决Alt+Q弹出多次输入框的问题）

在之前的代码中，componentDidMount 和 componentDidUpdate 中都写了绑定 keydown 事件的代码，这样当点击 Alt + Q 时如果组件的 props 或者 state 发生变化，那么这两个事件都会响应，那么就会产生多次弹出框。
其实这是没有必要的，只要在 componentDidMount 中绑定一次就好了，当时这样写的原因记得是为了当 this.props 中的值改变时便于接收用户传入的 input 元素数组，其实可以将接收用户传入的 input 元素数组的代码放在事件处理程序中也可以。
