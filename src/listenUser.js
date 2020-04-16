function listenUser (hash, focus=false) {
  document.onkeypress = (event) => {
    if (!focus) {
      const key = event['key'];
      let website;
      if (localStorage.getItem('hash')) {
        // 注意需要将得到的JSON字符串转换为对象
        const hash = JSON.parse(localStorage.getItem('hash'));
        website = hash[key]
      } else {
        website = hash[key]
      }

      if (website === undefined) {
          alert('此按键的网址还未设定')
      } else {
          window.open('http://' + website, "_blank");
      }
    };
  }
}

export default listenUser;