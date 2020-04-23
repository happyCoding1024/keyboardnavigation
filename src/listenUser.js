function listenUser (hash, focus=false) {
  document.onkeypress = (event) => {
    if (!focus) {
      const key = event['key'];
      let website;
      if (localStorage.getItem('hash')) {
        // 注意从 localStorage 中提取出来的值是一个 JSON 字符串的形式，需要将其转换为对象
        let hash = JSON.parse(localStorage.getItem('hash'));
        website = hash[key]
      } else {
        website = hash[key]
      }
      if (website === undefined) {
          alert('此按键的网址还未设定')
      } else {
          // 当用户输入带 https 时也可以正常显示
          // 例如 https://www.cnblogs.com/zhangguicheng/ 匹配后result[2]为 www.cnblogs.com/zhangguicheng/
          // 例如 cnblogs.com/zhangguicheng/ 匹配后result[2]为 cnblogs.com/zhangguicheng/
          const reg = /^(http:\/\/|https:\/\/)?([\w.\/]+)/
          const result = website.match(reg)
          window.open('https://' + result[2], "_blank");
      }
    };
  }
}

export default listenUser;