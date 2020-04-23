!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.keyboardnavigation=t():e.keyboardnavigation=t()}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("@babel/runtime-corejs2/core-js/json/stringify")},function(e,t,o){"use strict";o.r(t);var n=o(2),i=o.n(n),r=o(0),a=o.n(r);var s=function(e,t=!1){document.onkeypress=o=>{if(!t){const t=o.key;let n;if(localStorage.getItem("hash")){n=JSON.parse(localStorage.getItem("hash"))[t]}else n=e[t];if(void 0===n)alert("此按键的网址还未设定");else{const e=/^(http:\/\/|https:\/\/)?([\w.\/]+)/,t=n.match(e);window.open("https://"+t[2],"_blank")}}}};var l=function(e=[],t){e.forEach(e=>{e&&e.addEventListener("focus",e=>{s(t,!0)})}),e.forEach(e=>{e&&e.addEventListener("blur",e=>{s(t,!1)})})},c=o(1),d=o.n(c);const p=d.a.div`
  position: relative;
  margin: 0;
  text-align: center;
  min-width: 630px;
  box-shadow: 0 0 4px 0 #ccc;
  background: linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%);
  display: inline-block;
  padding: 0 10px;
`,h=d.a.div`
  font-size: 14px;
  line-height: 21px;
  h1 {
    margin: 5px 0;
    font-size: 18px;
  }
  p {
    color: #555;
  }
`,f=d.a.div`
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 18px;
  kbd{
    display: inline-block;
    border: 1px solid red;
    width: 4em;
    height: 4em;
    text-transform: uppercase;
    position: relative;
  
  }
  kbd>button{
    position: absolute;
    right: 0;
    bottom: 0;
    display: none;
    transition: all 0.3s;
    border-radius: 2px;
    padding: 1px 1px;
    font-size: 12px;
  }
  kbd:hover>button{
    display: inline-block;
  }
  kbd>button:hover{
    background: rgb(237, 172, 226);
    color: #eee;
  }
  &>div:nth-child(2){
    margin-left: -30px;
  
  }
  &>div:nth-child(3){
    margin-left: -112px;
  }

  .kbd{
    margin: 4px;
    padding: 0;
    border: 1px solid #ccc;
    width: 51px;
    height: 39px;

    background: linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%);
    border-radius: 7px;

    box-shadow: 0 6px 1px 0 #767d81;
    color: #767D81;
    font-family: Helvetical;


    vertical-align: top;
    position: relative;
  }
  &>div{
    margin: 10px 0;
  }
  
  kbd img{
    width: 13px;
    height: 13px;
    position: absolute;
    left: 5px;
    bottom: 2px;
  }
  kbd .text{
    position: absolute;
    left: 7px;
    top: 4px;
  }
`,u=c.createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;class g extends r.Component{constructor(e){super(e),this.genKeyboard=this.genKeyboard.bind(this),this.favChange=this.favChange.bind(this),this.state={favChange:!1}}render(){return a.a.createElement(r.Fragment,null,a.a.createElement(u,null),a.a.createElement(p,{ref:e=>{this.KbdNavWrapperElem=e}},a.a.createElement(h,{className:"KdbNavDesc"},a.a.createElement("h1",null,this.props.title||"键盘导航"),a.a.createElement("p",null,this.props.subTitle||"键盘导航默认处于关闭状态，Alt+R开启键盘导航，Alt + Q 关闭键盘导航，可自定义设置键盘导航页面...")),a.a.createElement(f,{className:"kbdNav",ref:e=>{this.KbdNavElem=e}})))}componentDidMount(){this.props.navWidth&&(this.KbdNavWrapperElem.style.width=""+this.props.navWidth),this.props.navheight&&(this.KbdNavWrapperElem.style.height=""+this.props.navheight),this.KbdNavWrapperElem.style.background=""+(this.props.navBgc||"linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)"),this.hash=this.genKeyboard(this.KbdNavElem,this.props.hash);let e=!this.props.open;s(this.hash,e);const{inputElemArr:t}=this.props;document.addEventListener("keydown",e=>{const o=e.keyCode||e.which||e.charCode,n=e.altKey||e.metaKey;n&&81===o?n&&82===o||(alert("您已停用键盘导航，按alt+r可重新开启键盘导航"),s(this.hash,!0)):n&&82===o&&(alert("您已开启键盘导航，按alt+p可关闭键盘导航"),s(this.hash,!1),l(t,this.hash))})}componentDidUpdate(){const{inputElemArr:e}=this.props;alert("组件更新了"),document.addEventListener("keydown",t=>{const o=t.keyCode||t.which||t.charCode,n=t.altKey||t.metaKey;localStorage.getItem("hash")&&(this.hash=JSON.parse(localStorage.getItem("hash"))),n&&81===o?n&&82===o||(alert("您已停用键盘导航，按alt+r可重新开启键盘导航"),s(this.hash,!0)):n&&82===o&&(alert("您已开启键盘导航，按alt+p可关闭键盘导航"),s(this.hash,!1),l(e,this.hash))})}genKeyboard(e,t){let o=function(){let e={q:"cnblogs.com/zhangguicheng/",w:"https://space.bilibili.com/421338049",e:"github.com/happyCoding1024",r:"www.nowcoder.com",t:"leetcode-cn.com",y:"developer.mozilla.org/zh-CN",u:"www.imooc.com/",i:"www.jianshu.com/",o:"www.w3school.com.cn",p:"www.zhihu.com",a:"segmentfault.com",s:"juejin.im",d:"www.csdn.net/",f:"www.qq.com",g:"www.ruanyifeng.com/",h:"www.baidu.com",j:"jianshu.com",k:"dev.mysql.com/",l:"www.cnki.net/",z:"cn.vuejs.org/",x:"reactjs.org/",c:"www.babeljs.cn/",v:"www.iconfont.cn/",b:"webpack.js.org/",n:"jquery.com/",m:"regexper.com/"};return e=t||e,localStorage.setItem("hash",i()(e)),e=JSON.parse(localStorage.getItem("hash")),{keys:{0:{0:"q",1:"w",2:"e",3:"r",4:"t",5:"y",6:"u",7:"i",8:"o",9:"p",length:10},1:["a","s","d","f","g","h","j","k","l"],2:["z","x","c","v","b","n","m"],length:3},hash:e}}(),n=o.keys,r=o.hash;for(let t=0;t<n.length;t++){const o=a("div");e.appendChild(o);let i=n[t];for(let e=0;e<i.length;e++){let t=s(i[e]),n=c(i[e],this.favChange),d=l(r[i[e]]),p=a("kbd");p.className="kbd",void 0===r[i[e]]?p.setAttribute("title","未设置网站导航"):p.setAttribute("title",r[i[e]]),p.appendChild(t),p.appendChild(d),p.appendChild(n),p.style.width=""+(this.props.kbdWidth||"51px"),p.style.height=""+(this.props.kbdHeight||"39px"),p.style.margin=""+(this.props.kbdMargin||"4px"),p.style.background=""+(this.props.kbdBgc||"linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%);"),o.appendChild(p)}}function a(e){return document.createElement(e)}function s(e){let t=a("span");return t.textContent=e,t.className="text",t}function l(e){var t=a("img");const o=e.match(/^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/);return t.src=o?"http://"+o[2]+"/favicon.ico":"https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png",t.onerror=function(e){e.target.src="https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png"},t}function c(e,t){let o=a("button");return o.textContent="edit",o.id=e,o.addEventListener("click",e=>{let o=e.target.id,n=prompt("请输入一个网址，例如 baidu.com");r[o]=n,localStorage.setItem("hash",i()(r));let a=e.target.previousSibling;const s=n.match(/^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/);a.src="https://"+s[2]+"/favicon.ico",a.onerror=e=>{e.target.src="https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png"},t()}),o}return r}favChange(){this.setState({favChange:!this.state.favChange})}}t.default=g}])}));
//# sourceMappingURL=bundle.js.map