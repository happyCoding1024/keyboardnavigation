# 基于React键盘导航组件

## 介绍

一个基于 React 简洁实用的键盘导航组件。

键盘导航组件展示

![键盘导航组件页面]( https://images.cnblogs.com/cnblogs_com/zhangguicheng/1718410/o_200416161204键盘导航组件页面.png )

## 功能列表

- 键盘导航，按字母键跳转到设置的对应网站
- `Alt+Q` 关闭键盘导航，`Alt+R` 重新开启键盘导航 

- 点击按键自定义设置网址，重启不会失效
- 设置网址后自动加载对应的favicon

## TodoList

- 输入框输入时自动关闭键盘导航

- 键盘导航换肤

- 自定义设置键盘导航标题和说明

- 自定义设置键盘导航起始按键网址
- 如果请求不到对应的 icon 则显示用户输入的文字

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

3）将 src 文件夹下的 index.js 替换为下面的代码

```js
import ReactDOM from 'react-dom';
import KeyNav from 'keyboardnavigation';

ReactDOM.render(<KeyNav />, document.getElementById(root))

```

4）运行

```bash
npm start
```

## 项目开发

1）下载源码 

```bash
git clone git@github.com:happyCoding1024/keyboardnavigation.git
```

2）进入项目根目录，安装依赖包 

```bash
cd keyboardnavigation
npm install
```

3)依赖包安装完成后，运行

```bash
npm run dev
```

## Update Log

[UpdateLog(记录遇到的问题和新增的功能等)](doc/dev/UpdateLog.md)


## 联系作者

- 在 [github issues](https://github.com/happyCoding1024/FrontendLearningTool/issues) 提交问题

- [博客园 codingOrange](https://www.cnblogs.com/zhangguicheng/)

- [b站直播前端学习(一天12小时以上)](https://space.bilibili.com/421338049)

