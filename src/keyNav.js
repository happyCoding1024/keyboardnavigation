import React, { Component, Fragment } from 'react';
import listenUser from './listenUser';
import handleFocus from './handleFocus';
import compareObject from './compareObject';
import { GlobalResetStyle } from './style/reset';
import { KbdNavWrapper, KbdNav, KbdNavdesc } from './style/style';
class KeyboardNavigation extends Component {

  constructor(props) {
    super(props);
    this.genKeyboard = this.genKeyboard.bind(this);
    this.favChange = this.favChange.bind(this);
    this.state = {
      favChange: false
    }
  }
 
  render() {
    return (
      <Fragment>
        <GlobalResetStyle />
        <KbdNavWrapper ref={(KbdNavWrapperElem) => {this.KbdNavWrapperElem = KbdNavWrapperElem}}>
          <KbdNavdesc className='KdbNavDesc'>
            <h1>{this.props.title || '键盘导航'}</h1>
            <p>{this.props.subTitle || '键盘导航默认处于关闭状态，Alt+R开启键盘导航，Alt + Q 关闭键盘导航，可自定义设置键盘导航页面...'}</p>
          </KbdNavdesc>
          <KbdNav className='kbdNav' ref={(KbdNav) => {this.KbdNavElem=KbdNav}}></KbdNav> 
        </KbdNavWrapper>
      </Fragment>
    )
  }

  componentDidMount() {
    const {navWidth, navHeight, navBgc, hash} = this.props;
    // 使用用户传递过来 KbdNavWrapperElem 的样式
    if (navWidth) {
      this.KbdNavWrapperElem.style.width = `${navWidth}`;
    }
    if (navHeight) {
      this.KbdNavWrapperElem.style.height = `${navHeight}`;
    }
    this.KbdNavWrapperElem.style.background = `${navBgc || 'linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)'}`;
    
    // 如果用户传递进来 hash 值，在 genKeyboard 中进行逻辑判断是否使用这个 hash 值
    this.hash = this.genKeyboard(this.KbdNavElem, hash);
    
    // 刚打开页面时，要能监听用户的按键。下面的componentDidUpdate要在更新数据之后才会响应。
    // 修改默认不开启键盘导航, true 表示关闭键盘导航，false 表示开启键盘导航
    // 正常思维下，true时为开启，但是程序的实现是不开启，为了照顾用户体验，当用户传递true时表示开启。
    // 用户传 true 时表示想开启，此时取反即可对应程序中不开启。当用户传 false 和不传时都默认不开启，此时取反为true，正好对应程序中的不开启。
    let openStatus = !this.props.open; 
    listenUser(this.hash, openStatus);
    // Ctrl + q 停用键盘导航
    document.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode || event.which || event.charCode;
      const altKey = event.altKey || event.metaKey;
      const { inputElemArr } = this.props;
      if (altKey && keyCode === 81) {
        if (!(altKey && keyCode === 82)) {
          alert('您已停用键盘导航，按alt+r可重新开启键盘导航');
          listenUser(this.hash, true);
        }
      } else if (altKey && keyCode === 82) {
        alert('您已开启键盘导航，按alt+p可关闭键盘导航');
        listenUser(this.hash, false);          
        handleFocus(inputElemArr, this.hash);
      }
    })
  }

  genKeyboard(keyboardNavElem, customHash) {
    
    let startHash = init();
    let keys = startHash.keys;
    let hash = startHash.hash;
    
    //遍历keys,生成kbd标签
    for (let index = 0, keyLen = keys.length; index < keyLen; index++) {
      // 每个 div 表示键盘上的一行
      const div = tag('div');
      // keyboardNavElem是通过ref获得的DOM元素，都挂载到这个元素上
      keyboardNavElem.appendChild(div);  
      // row 中存放着键盘每一行的字母
      let row = keys[index];
      for (let index2 = 0, rowLen = row.length; index2 < rowLen; index2++) {
        // row[index2]中的内容是字母
        let span = createSpan(row[index2]);
        let button = createButton(row[index2], this.favChange);
        // hash[row[index2]] 是网址
        let img = createImg(hash[row[index2]]);
        // 创建自定义标签 kbd
        let kbd = tag("kbd");
        kbd.className = 'kbd';
        if (hash[row[index2]] === undefined) {
            kbd.setAttribute('title', '未设置网站导航')
        } else {
            kbd.setAttribute('title', hash[row[index2]])
        }

        kbd.appendChild(span);
        kbd.appendChild(img);
        kbd.appendChild(button);
        
        // 设置 kbd 标签的样式
        kbd.style.width = `${this.props.kbdWidth || '51px'}`;
        kbd.style.height = `${this.props.kbdHeight || '39px'}`;
        kbd.style.margin = `${this.props.kbdMargin || '4px'}`;
        kbd.style.background = `${this.props.kbdBgc || 'linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%);'}`;

        div.appendChild(kbd);
      }
    }
  
    function init() {
      let keys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ];
      let hash = {
        'q': 'cnblogs.com/zhangguicheng/',
        'w': 'https://space.bilibili.com/421338049',
        'e': 'github.com/happyCoding1024',
        'r': 'www.nowcoder.com',
        't': 'leetcode-cn.com',
        'y': 'developer.mozilla.org/zh-CN',
        'u': 'www.imooc.com/',
        'i': 'www.jianshu.com/',
        'o': 'www.w3school.com.cn',
        'p': 'www.zhihu.com',
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
        'm': 'regexper.com/'
      };
      // 如果用户传递进来 hash 值就使用用户传递进来的 hash 值
      hash = customHash ? customHash : hash;
      // 判断 localStorage 中是否有值，如果有值是否和customHash相同
      if (localStorage.getItem('hash')) {
        const localHash = JSON.parse(localStorage.getItem('hash'));
        if (!compareObject(hash, localHash)) {
          hash = localHash;
        }
      }
      // 将hash对象写入到localStorage中，刷新页面后读取localStorage中的hash对象
      localStorage.setItem('hash', JSON.stringify(hash));
      // 从 localStorage 中获取 hash 值
      hash = JSON.parse(localStorage.getItem('hash'));
      return {
        keys,
        hash
      }
    }
  
    // 创建 HTML 标签
    function tag(tagename) {
      return document.createElement(tagename);
    }
  
    // 创建带文本的 span 标签
    function createSpan(textContent) {
      let span = tag("span");
      span.textContent = textContent;
      span.className = "text";
      return span;
    }
  
    // 创建图片标签
    function createImg(url) {
      var img = tag("img");
      // TODO: (已完成)解析 domin 提取出一级域名，这样才可以获取到对应的 favicon
      const reg = /^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/
      const result = url.match(reg)
      if (result) {
        //加http协议,不然会认为是路径
        img.src = 'http://' + result[2] + '/favicon.ico';
      } else {
        //如果src为空,就会进入当前的网址,导致图片显现不出来,所以给他一个存在的图片
        img.src = 'https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png';
      }
      img.onerror = function (ev) {
        //onerror事件,监听img的get请求错误事件
        ev.target.src = 'https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png';
        //把没有请求到的错误事件的src定为那个点
      };
      return img;
    }
  
    // 创建 edit 按钮
    function createButton(id, favChange) {
      let button = tag("button");
      button.textContent = "edit";
      // 每一个button的id都是row[index2],即kbd里面的内容,以便区分
      button.id = id;
      //添加button点击事件
      button.addEventListener('click', (e) => {
        // key 就是键盘上的字母
        let key = e.target.id;

        // 提示用户输入
        let url = prompt(`请输入一个网址，例如 baidu.com`);
        // 将新输入的网址替换原来的网址
        hash[key] = url;
        // TODO: (已完成)由于现在是存在变量中，当刷新页面后就会变成之前设置的
        // 将hash对象写入到localStorage中，刷新页面后读取localStorage中的hash对象
        localStorage.setItem('hash', JSON.stringify(hash))
        let button2 = e.target;
        // previousSibling:前一个兄弟节点
        // 在 kbd 标签中子节点的顺序 span img button
        let img2 = button2.previousSibling;

        // TODO: (已完成)提取 url 的一级域名，例如 baidu.com/login/a.html 提取后变为 baidu.com 这样就可以获取到 favicon
        const reg = /^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/
        const result = url.match(reg)
        img2.src = 'https://' + result[2] + '/favicon.ico';
        img2.onerror = (err) => {
          err.target.src = 'https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png';
        };

        // TODO: （已完成）当改变按键的网址时图标马上渲染出来
        // 改变 state 中 favChange 的状态，令改变的网址的图标重新渲染出来
        favChange();
      })
      return button;
    }
    // 取 localStorage 中的 hash 值返回
    return hash;
  }

  favChange() {
    this.setState(({
      favChange: !this.state.favChange
    }))
  }

}

export default KeyboardNavigation;
