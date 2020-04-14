import React, { Component, Fragment } from 'react';
import genKeyboard from './genKeyboard';
import listenUser from './listenUser';
import handleFocus from './handleFocus';
import { KbdNavWrapper, KbdNav, KbdNavdesc } from './style/style';
import { GlobalResetStyle } from './style/reset';

class KeyboardNavigation extends Component {
 
  render() {
    return (
      <Fragment>
        <GlobalResetStyle />
        <KbdNavWrapper>
          <KbdNavdesc className='KdbNavDesc'>
            <h1>键盘导航</h1>
            <p>Q.首页，W.个人主页，E.登录，R.注册，其它按键点击按键上的编辑自定义设置</p>
          </KbdNavdesc>
          <KbdNav className='kbdNav' ref={(KbdNav) => {this.KbdNavElem=KbdNav}}></KbdNav> 
        </KbdNavWrapper>
      </Fragment>
    )
  }

  componentDidMount() {
    this.hash = genKeyboard(this.KbdNavElem);
    // 刚打开页面时，要能监听用户的按键。下面的componentDidUpdate要在更新数据之后才会响应。
    listenUser(this.hash, false)
    const { inputElemArr } = this.props;
    console.log('inputELemArr', inputElemArr);
    // Ctrl + q 停用键盘导航
    document.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode || event.which || event.charCode;
      const altKey = event.altKey || event.metaKey;
      console.log('key = ', keyCode)
      if (altKey && keyCode === 81) {
        if (!(altKey && keyCode === 82)) {
          alert('您已停用键盘导航，按alt+r可重新开启键盘导航');
          listenUser(this.hash, true)
        }
      } else if (altKey && keyCode === 82) {
          alert('您已开启键盘导航，按alt+p可关闭键盘导航');
          listenUser(this.hash, false)          
          handleFocus(inputElemArr, this.hash);
      }
    })
  }

  componentDidUpdate() {
    const { inputElemArr } = this.props;
    console.log('inputELemArr', inputElemArr);
    // Ctrl + q 停用键盘导航
    document.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode || event.which || event.charCode;
      const altKey = event.altKey || event.metaKey;
      console.log('key = ', keyCode)
      if (altKey && keyCode === 81) {
        if (!(altKey && keyCode === 82)) {
          alert('您已停用键盘导航，按alt+r可重新开启键盘导航');
          listenUser(this.hash, true)
        }
      } else if (altKey && keyCode === 82) {
          alert('您已开启键盘导航，按alt+p可关闭键盘导航');
          listenUser(this.hash, false)          
          handleFocus(inputElemArr, this.hash);
      }
    })
  }

}

export default KeyboardNavigation;
