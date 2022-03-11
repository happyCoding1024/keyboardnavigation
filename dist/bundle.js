!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.keyboardnavigation=t():e.keyboardnavigation=t()}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("@babel/runtime-corejs2/core-js/json/stringify")},function(e,t){e.exports=require("@babel/runtime-corejs2/core-js/object/get-own-property-names")},function(e,t){e.exports=require("react-dom")},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(4),a=o.n(i),l=o(2),s=o.n(l);var c=function(e,t=!1){document.onkeypress=o=>{if(!t){const t=o.key;let n;if(localStorage.getItem("hash")){n=JSON.parse(localStorage.getItem("hash"))[t]}else n=e[t];if(void 0===n)alert("此按键的网址还未设定");else{const e=/^(http:\/\/|https:\/\/)?([\w.\/]+)/,t=n.match(e);window.open("https://"+t[2],"_blank")}}}};var d=function(e=[],t){console.log("handleFocus inputElem",e),e.forEach(e=>{e&&e.addEventListener("focus",e=>{c(t,!0)})}),e.forEach(e=>{e&&e.addEventListener("blur",e=>{c(t,!1)})})},f=o(3),p=o.n(f);var h=function e(t,o){if("object"!=typeof t||"object"!=typeof o){if(t===o)return!0;if(t!==o)return!1}const n=p()(t),r=p()(o);if(n.length!==r.length)return!1;let i=!0;for(let r=0,a=n.length;r<a;r++){let a=n[r];if(i=e(t[a],o[a]),!i)break}return i},u=o(1),b=o.n(u);const m=u.createGlobalStyle`
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
`,g=b.a.div`
  position: relative;
  margin: 0;
  text-align: center;
  min-width: 630px;
  box-shadow: 0 0 4px 0 #ccc;
  background: linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%);
  display: inline-block;
  padding: 0 10px;
`,w=b.a.div`
  font-size: 14px;
  line-height: 21px;
  h1 {
    margin: 5px 0;
    font-size: 18px;
  }
  p {
    color: #555;
  }
`,v=b.a.div`
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
`;class y extends n.Component{constructor(e){super(e),this.genKeyboard=this.genKeyboard.bind(this),this.favChange=this.favChange.bind(this),this.state={favChange:!1}}render(){return r.a.createElement(n.Fragment,null,r.a.createElement(m,null),r.a.createElement(g,{ref:e=>{this.KbdNavWrapperElem=e}},r.a.createElement(w,{className:"KdbNavDesc"},r.a.createElement("h1",null,this.props.title||"键盘导航"),r.a.createElement("p",null,this.props.subTitle||"键盘导航默认处于关闭状态，Alt+R开启键盘导航，Alt + Q 关闭键盘导航，可自定义设置键盘导航页面...")),r.a.createElement(v,{className:"kbdNav",ref:e=>{this.KbdNavElem=e}})))}componentDidMount(){const{navWidth:e,navHeight:t,navBgc:o,hash:n}=this.props;e&&(this.KbdNavWrapperElem.style.width=""+e),t&&(this.KbdNavWrapperElem.style.height=""+t),this.KbdNavWrapperElem.style.background=""+(o||"linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)"),this.hash=this.genKeyboard(this.KbdNavElem,n);let r=!this.props.open;c(this.hash,r),document.addEventListener("keydown",e=>{const t=e.keyCode||e.which||e.charCode,o=e.altKey||e.metaKey,{inputElemArr:n}=this.props;o&&81===t?o&&82===t||(alert("您已停用键盘导航，按alt+r可重新开启键盘导航"),c(this.hash,!0)):o&&82===t&&(alert("您已开启键盘导航，按alt+p可关闭键盘导航"),c(this.hash,!1),d(n,this.hash))})}genKeyboard(e,t){let o=function(){let e={q:"cnblogs.com/zhangguicheng/",w:"https://space.bilibili.com/421338049",e:"github.com/happyCoding1024",r:"www.nowcoder.com",t:"leetcode-cn.com",y:"developer.mozilla.org/zh-CN",u:"www.imooc.com/",i:"www.jianshu.com/",o:"www.w3school.com.cn",p:"www.zhihu.com",a:"segmentfault.com",s:"juejin.im",d:"www.csdn.net/",f:"www.qq.com",g:"www.ruanyifeng.com/",h:"www.baidu.com",j:"jianshu.com",k:"dev.mysql.com/",l:"www.cnki.net/",z:"cn.vuejs.org/",x:"reactjs.org/",c:"www.babeljs.cn/",v:"www.iconfont.cn/",b:"webpack.js.org/",n:"jquery.com/",m:"regexper.com/"};if(e=t||e,localStorage.getItem("hash")){const t=JSON.parse(localStorage.getItem("hash"));h(e,t)||(e=t)}return localStorage.setItem("hash",s()(e)),e=JSON.parse(localStorage.getItem("hash")),{keys:[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]],hash:e}}(),n=o.keys,r=o.hash;for(let t=0,o=n.length;t<o;t++){const o=i("div");e.appendChild(o);let s=n[t];for(let e=0,t=s.length;e<t;e++){let t=a(s[e]),n=c(s[e],this.favChange),d=l(r[s[e]]),f=i("kbd");f.className="kbd",void 0===r[s[e]]?f.setAttribute("title","未设置网站导航"):f.setAttribute("title",r[s[e]]),f.appendChild(t),f.appendChild(d),f.appendChild(n),f.style.width=""+(this.props.kbdWidth||"51px"),f.style.height=""+(this.props.kbdHeight||"39px"),f.style.margin=""+(this.props.kbdMargin||"4px"),f.style.background=""+(this.props.kbdBgc||"linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%);"),o.appendChild(f)}}function i(e){return document.createElement(e)}function a(e){let t=i("span");return t.textContent=e,t.className="text",t}function l(e){var t=i("img");const o=e.match(/^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/);return o&&(t.src="http://"+o[2]+"/favicon.ico"),t.onerror=function(e){},t}function c(e,t){let o=i("button");return o.textContent="edit",o.id=e,o.addEventListener("click",e=>{let o=e.target.id,n=prompt("请输入一个网址，例如 baidu.com");r[o]=n,localStorage.setItem("hash",s()(r));let i=e.target.previousSibling;const a=n.match(/^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/);i.src="https://"+a[2]+"/favicon.ico",i.onerror=e=>{e.target.src="https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png"},t()}),o}return r}favChange(){this.setState({favChange:!this.state.favChange})}}var x=y;class k extends n.Component{render(){return r.a.createElement(x,{open:!1,inputElemArr:[],title:"键盘导航",subTitle:"键盘导航默认处于关闭状态，Alt+R开启键盘导航，Alt + Q 关闭键盘导航，可自定义设置键盘导航页面...",navWidth:"",navHeight:"",navBgc:"linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)",kbdWidth:"51px",kbdHeight:"39px",kbdMargin:"4px",kbdBgc:"linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%)",hash:{q:"cnblogs.com/zhangguicheng/",w:"https://space.bilibili.com/421338049",e:"github.com/happyCoding1024",r:"nowcoder.com",t:"leetcode-cn.com",y:"developer.mozilla.org/zh-CN",u:"imooc.com/",i:"jianshu.com/",o:"w3school.com.cn",p:"zhihu.com",a:"segmentfault.com",s:"juejin.im",d:"www.csdn.net/",f:"www.qq.com",g:"www.ruanyifeng.com/",h:"www.baidu.com",j:"jianshu.com",k:"dev.mysql.com/",l:"www.cnki.net/",z:"cn.vuejs.org/",x:"reactjs.org/",c:"www.babeljs.cn/",v:"www.iconfont.cn/",b:"webpack.js.org/",n:"jquery.com/",m:"baidu.com/"}})}}var j=k;a.a.render(r.a.createElement(j,null),document.getElementById("root"))}])}));
//# sourceMappingURL=bundle.js.map