# 基于React键盘导航组件

## 介绍

基于 React 简洁实用的键盘导航组件。

键盘导航组件页面

![键盘导航组件页面](https://raw.githubusercontent.com/happyCoding1024/image-hosting/master/img/键盘导航组件主页页面.png)

## 功能

- 键盘导航，按字母键跳转到设置的对应网站

- `Alt+Q` 关闭键盘导航，`Alt+R` 重新开启键盘导航 

- 设置导航组件是否默认开启

- 自定义设置键盘导航组件的大小，背景色，标题等

- 自定义设置键盘映射，刷新不会失效

- 输入框输入时自动屏蔽键盘导航

- 点击按键自定义设置网址,兼容用户输入的网址形式

- 点击按键设置网址时，图标会自动刷新

**注意**


- 输入框输入时自动屏蔽键盘导航功能需要将页面中的 input 节点作为导航组件的参数，具体设置见后面参数配置。

- 获取图标采用的是读取网站根目录下 favicon.ico，如果 favicon 不在根目录下，那么会请求不到。

## 下载

- 直接下载：` https://github.com/happyCoding1024/keyboardnavigation/releases `

- npm：`npm install 'keyboardnavigation'`

- CDN： `//unpkg.com/keyboardnavigation/dist/bundle.js`

## 使用示例

1）创建 React 项目（推荐使用 create-react-app）
```bash
# 如果没有安装 create-react-app, npm install create-react-app -g 安装即可
create-react-app Demo
```

2）安装 keyboardnavigation 组件

```bash
npm install keyboardnavigation
```

3）在 Demo 目录下新建 index.js 文件，内容如下

```js
import ReactDOM from 'react-dom';
import KeyNav from 'keyboardnavigation';

ReactDOM.render(<KeyNav />, document.getElementById(root))

```

4）运行

```bash
npm start
```

## 参数配置

上面的代码使用的都是导航组件的默认值，该组件提供了一些参数可以设置导航组件的一些属性，提供的参数如下：

参数|作用|示例
--|:--|--
open|可选，设置导航组件默认是否开启，true代表默认开启，false或不传代表不开启|open={true}
title|可选，设置导航组件的一级标题|title='键盘导航'
subTitle|可选，设置导航组件的二级标题|subTitle='Alt + Q 关闭键盘导航...'
navBgc |可选，设置导航组件的背景色|navBgc='#fff'
kbdWidth|可选，设置导航按键的宽度，默认51px|kbdWidth={\`linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)\`}
kbdHeight|可选，设置导航按键的高度，默认39px|kbdHeight={\`39px\`}
kbdMargin|可选，设置导航按键的外边距，默认4px|kbdMargin = {\`4px\`}
kbdBgc|可选，设置导航按键的背景色|kbdBgc='#fff'
navWidth|可选，设置导航组件的宽度，无默认值，不建议设置，因为组件会随着按键大小自适应|navWidth = {\`\`}
navHeight|可选，设置导航组件的高度，无默认值，不建议设置，因为组件会随着按键大小自适应|navHeight = {\`\`}
inputElemArr|可选，页面上input元素DOM节点组成的数组|inputElemArr={[input1DOM节点, input2DOM节点, ...]}
hash|可选，设置原始键盘映射|hash={{'q': 'qq.com', ...}}

**注意：**

- 在传 input 元素节点数组时，建议在传入之前打印一下，确保获取的是正确的 `input DOM` 节点。

- 如果感觉传递 input 元素 DOM 节点比较繁琐，可以在输入框中输入时利用 `Alt + Q` 关闭键盘导航，在输入完成后再利用 `Alt + R` 重新开启键盘导航。

- 键盘导航默认是关闭的状态，可按 `Alt + R` 开启，或者将 `open` 参数设置为 `true` 修改默认为开启状态。

参数配置完整示例
```js
import React, { Component, Fragment } from 'react';
import KeyNav from '../src/keyNav';

class App extends Component {

  render() {
    return (
      <KeyNav 
        open={false}
        inputElemArr={[]}
        title='键盘导航'
        subTitle='键盘导航默认处于关闭状态，Alt+R开启键盘导航，Alt + Q 关闭键盘导航，可自定义设置键盘导航页面...'
        navWidth = {''}
        navHeight = {''}
        navBgc = 'linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)'
        kbdWidth = {`51px`}
        kbdHeight = {`39px`}
        kbdMargin = {`4px`}
        kbdBgc = 'linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%)'
        hash = {{
          'q': 'cnblogs.com/zhangguicheng/',
          'w': 'link.bilibili.com/p/center/index#/my-room/start-live',
          'e': 'github.com/happyCoding1024',
          'r': 'nowcoder.com',
          't': 'leetcode-cn.com',
          'y': 'developer.mozilla.org/zh-CN',
          'u': 'imooc.com/',
          'i': 'jianshu.com/',
          'o': 'w3school.com.cn',
          'p': 'zhihu.com',
          'a': 'segmentfault.com',
          's': 'juejin.im',
          'd': 'www.csdn.net/',
          'f': 'www.qq.com',
          'g': 'www.ruanyifeng.com/',
          'h': 'www.baidu.com',
          'j': 'jianshu.com',
          'k': 'dev.mysql.com/',
          'l': 'www.cnki.net/',
          'z': 'cn.vuejs.org/',
          'x': 'reactjs.org/',
          'c': 'www.babeljs.cn/',
          'v': 'www.iconfont.cn/',
          'b': 'webpack.js.org/',
          'n': 'jquery.com/',
          'm': 'baidu.com/'
        }}
      >
      </KeyNav>
    )
  }
}

export default App;
```

## 项目开发

1）将此仓库 clone 到本地。

2）进入 keyboardnavigation 文件夹，在此处打开命令行工具，安装依赖包。 

```bash
npm install
```

3)依赖包安装完成后，运行。

```bash
npm run dev
```

## Update Log

记录新增的功能，修正的 bug，解决问题的方法，TodoList，开发感悟等。

[UpdateLog](doc/dev/UpdateLog.md)


## 联系作者

如果您发现此项目有任何问题，希望可以抽时间告诉作者，感谢您的贡献，非常感谢。

如果您感觉此项目还可以，欢迎 star 鼓励一下作者，非常感谢。

联系方式：

- [github issues](https://github.com/happyCoding1024/keyboardnavigation/issues)

- [博客园 前端旧约](https://www.cnblogs.com/zhangguicheng/)

- [b站 前端旧约](https://space.bilibili.com/421338049)

