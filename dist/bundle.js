!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.keyboardnavigation=e():t.keyboardnavigation=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("styled-components")},function(t,e){t.exports=require("@babel/runtime-corejs2/core-js/json/stringify")},function(t,e,n){"use strict";n.r(e);var o=n(2),i=n.n(o),r=n(0),a=n.n(r);var s=function(t,e=!1){document.onkeypress=n=>{if(!e){const e=n.key;let o;if(localStorage.getItem("hash")){o=JSON.parse(localStorage.getItem("hash"))[e]}else o=t[e];if(void 0===o)alert("此按键的网址还未设定");else{const t=/^(http:\/\/|https:\/\/)?([\w.\/]+)/,e=o.match(t);window.open("https://"+e[2],"_blank")}}}};var c=function(t=[],e){console.log("handleFocus inputElem",t),t.forEach(t=>{t&&t.addEventListener("focus",t=>{s(e,!0)})}),t.forEach(t=>{t&&t.addEventListener("blur",t=>{s(e,!1)})})},l=n(1),p=n.n(l);const h=p.a.div`
  position: relative;
  margin: 0;
  text-align: center;
  min-width: 630px;
  box-shadow: 0 0 4px 0 #ccc;
  background: linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%);
  display: inline-block;
  padding: 0 10px;
`,d=p.a.div`
  font-size: 14px;
  line-height: 21px;
  h1 {
    margin: 5px 0;
    font-size: 18px;
  }
  p {
    color: #555;
  }
`,f=p.a.div`
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
`;class u extends r.Component{constructor(t){super(t),this.genKeyboard=this.genKeyboard.bind(this),this.favChange=this.favChange.bind(this),this.state={favChange:!1}}render(){return a.a.createElement(r.Fragment,null,a.a.createElement(h,{ref:t=>{this.KbdNavWrapperElem=t}},a.a.createElement(d,{className:"KdbNavDesc"},a.a.createElement("h1",null,this.props.title||"键盘导航"),a.a.createElement("p",null,this.props.subTitle||"键盘导航默认处于关闭状态，Alt+R开启键盘导航，Alt + Q 关闭键盘导航，可自定义设置键盘导航页面...")),a.a.createElement(f,{className:"kbdNav",ref:t=>{this.KbdNavElem=t}})))}componentDidMount(){this.props.navWidth&&(this.KbdNavWrapperElem.style.width=""+this.props.navWidth),this.props.navheight&&(this.KbdNavWrapperElem.style.height=""+this.props.navheight),this.KbdNavWrapperElem.style.background=""+(this.props.navBgc||"linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%)"),this.hash=this.genKeyboard(this.KbdNavElem,this.props.hash);let t=!this.props.open;s(this.hash,t),document.addEventListener("keydown",t=>{const e=t.keyCode||t.which||t.charCode,n=t.altKey||t.metaKey,{inputElemArr:o}=this.props;n&&81===e?n&&82===e||(alert("您已停用键盘导航，按alt+r可重新开启键盘导航"),s(this.hash,!0)):n&&82===e&&(alert("您已开启键盘导航，按alt+p可关闭键盘导航"),s(this.hash,!1),c(o,this.hash))})}genKeyboard(t,e){let n=function(){let t={q:"cnblogs.com/zhangguicheng/",w:"https://space.bilibili.com/421338049",e:"github.com/happyCoding1024",r:"www.nowcoder.com",t:"leetcode-cn.com",y:"developer.mozilla.org/zh-CN",u:"www.imooc.com/",i:"www.jianshu.com/",o:"www.w3school.com.cn",p:"www.zhihu.com",a:"segmentfault.com",s:"juejin.im",d:"www.csdn.net/",f:"www.qq.com",g:"www.ruanyifeng.com/",h:"www.baidu.com",j:"jianshu.com",k:"dev.mysql.com/",l:"www.cnki.net/",z:"cn.vuejs.org/",x:"reactjs.org/",c:"www.babeljs.cn/",v:"www.iconfont.cn/",b:"webpack.js.org/",n:"jquery.com/",m:"regexper.com/"};return t=e||t,localStorage.setItem("hash",i()(t)),t=JSON.parse(localStorage.getItem("hash")),{keys:{0:{0:"q",1:"w",2:"e",3:"r",4:"t",5:"y",6:"u",7:"i",8:"o",9:"p",length:10},1:["a","s","d","f","g","h","j","k","l"],2:["z","x","c","v","b","n","m"],length:3},hash:t}}(),o=n.keys,r=n.hash;for(let e=0;e<o.length;e++){const n=a("div");t.appendChild(n);let i=o[e];for(let t=0;t<i.length;t++){let e=s(i[t]),o=l(i[t],this.favChange),p=c(r[i[t]]),h=a("kbd");h.className="kbd",void 0===r[i[t]]?h.setAttribute("title","未设置网站导航"):h.setAttribute("title",r[i[t]]),h.appendChild(e),h.appendChild(p),h.appendChild(o),h.style.width=""+(this.props.kbdWidth||"51px"),h.style.height=""+(this.props.kbdHeight||"39px"),h.style.margin=""+(this.props.kbdMargin||"4px"),h.style.background=""+(this.props.kbdBgc||"linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%);"),n.appendChild(h)}}function a(t){return document.createElement(t)}function s(t){let e=a("span");return e.textContent=t,e.className="text",e}function c(t){var e=a("img");const n=t.match(/^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/);return e.src=n?"http://"+n[2]+"/favicon.ico":"https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png",e.onerror=function(t){t.target.src="https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png"},e}function l(t,e){let n=a("button");return n.textContent="edit",n.id=t,n.addEventListener("click",t=>{let n=t.target.id,o=prompt("请输入一个网址，例如 baidu.com");r[n]=o,localStorage.setItem("hash",i()(r));let a=t.target.previousSibling;const s=o.match(/^(http:\/\/|https:\/\/)?([\w.-]+)(?=\/|$)/);a.src="https://"+s[2]+"/favicon.ico",a.onerror=t=>{t.target.src="https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png"},e()}),n}return r}favChange(){this.setState({favChange:!this.state.favChange})}}e.default=u}])}));
//# sourceMappingURL=bundle.js.map