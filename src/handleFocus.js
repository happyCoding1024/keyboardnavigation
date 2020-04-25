import listenUser from './listenUser';

function handleFocus (inputElemArr=[], hash) {
  // 在input框中时一直是聚焦的状态，所以focus一直是true。
  // 外面的 listenUser(this.hash, false)根本不被执行。
  console.log('handleFocus inputElem', inputElemArr)
  inputElemArr.forEach(item => {
    if (item) {
      item.addEventListener('focus', (e) => {
        listenUser(hash, true)
      })
    }
  })

  inputElemArr.forEach(item => {
    if (item) {
      item.addEventListener('blur', (e) => {
        listenUser(hash, false)
      })
    }
  })
}

export default handleFocus;

