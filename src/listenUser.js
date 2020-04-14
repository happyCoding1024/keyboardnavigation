function listenUser (hash, focus=false) {
  document.onkeypress = (event) => {
    if (!focus) {
      const key = event['key'];
      const website = hash[key];

      if (website === undefined) {
          alert('此按键的网址还未设定')
      } else {
          window.open('http://' + website, "_blank");
      }
    };
  }
}

export default listenUser;