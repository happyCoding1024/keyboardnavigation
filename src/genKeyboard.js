function genKeyboard(keyboardNavElem) {
   
  let startHash = init();
  let keys = startHash.keys;
  let hash = startHash.hash;

  //遍历keys,生成kbd标签
  for (let index = 0; index < keys['length']; index++) {

    const div = tag('div');
    // keyboardNavElem是通过ref获得的DOM元素，都挂载到这个元素上
    let main = keyboardNavElem;
    main.appendChild(div);

    let row = keys[index];
    for (let index2 = 0; index2 < row.length; index2++) {
      // span中的内容是字母
      let span = createSpan(row[index2]);
      // button的内容也是字母
      let button = createButton(row[index2]);
      // hash[row[index2]] 是网址，不加http，在 createImg 中进行拼接
      let img = createImg(hash[row[index2]]);
      // 创建自定义标签 kbd
      let kbd = tag("kbd");
      kbd.className = 'kbd';

      if (hash[row[index2]] === undefined) {
          kbd.setAttribute('title', '未设置网站导航')
      } else {
          kbd.setAttribute('title', hash[row[index2]])
      }

      kbd.onclick = function (e) {
        // currentTarget指的是当前执行事件处理程序的元素，target指的是触发事件的元素
        // 获取网址
          let website = e.currentTarget.getAttribute('title');
          if (website === '未设置网站导航') {
              alert('此按键的网址还未设定')
          } else {
              window.open('http://' + website, "_blank");
          }
      }

      let kbd_wrapper = tag("div");
      kbd_wrapper.className = 'kbd_wrapper';

      kbd.appendChild(span);
      kbd.appendChild(img);
      kbd.appendChild(button);

      kbd_wrapper.appendChild(kbd);

      div.appendChild(kbd_wrapper);
  }
  }

  function init() {
    let keys = {
      '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
      '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],

      'length': 3
    };
    let hash = {
      'q': 'localhost:8080',
      'w': 'localhost:8080/admin',
      'e': 'localhost:8080/login',
      'r': 'localhost:8080/register',
      't': 'taobao.com',
      'y': 'juejin.im',
      'u': 'blog.csdn.net',
      'i': 'iciba.com',
      'o': 'bing.com',
      'p': 'bilibili.com',
      'a': 'aliyun.com',
      's': 'segmentfault.com',
      'd': 'www.sohu.com',
      'f': 'www.qq.com',
      'g': 'google.com',
      'h': 'developer.mozilla.org/zh-CN/',
      'j': 'jianshu.com',
      'k': undefined,
      'l': 'baidu.com',
      'z': 'zhihu.com',
      'x': 'xiedaimala.com',
      'c': undefined,
      'v': undefined,
      'b': 'bilibili.com',
      'n': 'iqiyi.com',
      'm': 'meituan.com'
    };
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
  function createImg(domain) {
    var img = tag("img");
    if (domain) {//判断这个是否存在
        img.src = 'http://' + domain + '/favicon.ico';
        //加http协议,不然会认为是路径
    } else {//undefined
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
  function createButton(id) {
    let button = tag("button");
    button.textContent = "edit";
    // 每一个button的id都是row[index2],即kbd里面的内容,以便区分
    button.id = id;
    //添加button点击事件
    button.addEventListener('click', (e) => {

        let key = e.target.id;
        // 提示用户输入
        let url = prompt(`请输入一个网址，例如 baidu.com`);
        // 将新输入的网址替换原来的网址
        // TODO: 由于现在是存在变量中，当刷新页面后就会变成之前设置的
        hash[key] = url;

        let button2 = e.target;
        // previousSibling:前一个兄弟节点
        let img2 = button2.previousSibling;

        img2.src = 'http://' + url + '/favicon.ico';
        img2.onerror = (err) => {
          err.target.src = 'https://images.cnblogs.com/cnblogs_com/zhangguicheng/1682690/o_200412140537point.png';
        };

        // localStorage.setItem("hash", JSON.stringify(hash));//JSON.stringify(hash)把hash变成字符串,存到zzz变量里备份
        // 防止用户输入网址时，跳转到其它页面
        // window.event.stopPropagation();
    })
    return button;
  }

  return hash;

}

export default genKeyboard;
