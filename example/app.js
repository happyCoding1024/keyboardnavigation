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
          'w': 'https://space.bilibili.com/421338049',
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