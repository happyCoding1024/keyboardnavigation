# 基于React键盘导航组件

## 介绍

一个简单易用的 React 键盘导航组件。

键盘导航组件展示

![慧思博客项目主页](https://raw.githubusercontent.com/happyCoding1024/image-hosting/master/img/键盘导航页面.png)

## 功能列表

- 键盘导航，按字母键跳转到设置的对应网站
- 在页面输入框中输入时自动屏蔽键盘导航功能
- `Alt+Q` 关闭键盘导航，`Alt+R` 重新开启键盘导航 

- 点击按键自定义设置网址，重启不会失效
- 设置网址后自动加载对应的favicon

## TodoList

- 键盘导航换肤

- 自定义设置键盘导航标题和说明

- 自定义设置键盘导航起始按键网址

## 下载

- 直接下载：

- npm
- CDN

## 使用示例

在项目中安装键盘导航组件

```bash
npm install keynav
```

在项目中使用

```js
import ReactDOM from 'react-dom';
import KeyNav from 'keynav';

ReactDOM.render(<KeyNav />, document.getElementById(root))

```

[完整详细的示例及源代码]()

## 运行 Demo

- 下载源码 `git clone git@github.com:happyCoding1024/keyboardnavigation.git`
- 进入目录，安装依赖包 `cd keyboardnavigation` `npm install`
- 依赖包安装完成后，运行 `npm run dev`

## Update Log

[UpdateLog](doc/dev/UpdateLog.md)

