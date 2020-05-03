function compareObject (obj1, obj2) {
  // 递归终止条件，当 obj1 或 obj2 不是对象时，此时就可以进行判断了
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      if (obj1 === obj2) {
        return true;
      } else if (obj1 !== obj2) {
        return false;
      }
  }
  // 获取对象的自由属性组成的数组
  const obj1PropsArr = Object.getOwnPropertyNames(obj1)
  const obj2PropsArr = Object.getOwnPropertyNames(obj2) 
  // 如果数组的长度不相等，那么说明对象属性的个数都不同，返回 false
  if (obj1PropsArr.length !== obj2PropsArr.length) {
    return false;
  }
  // 记录当前 compareObject 的返回值，默认是 true
  let status = true;
  for (let i = 0, len = obj1PropsArr.length; i < len; i++) {
    let key = obj1PropsArr[i];
    status = compareObject(obj1[key], obj2[key]);
    // 关键代码，当 status 为 false 时下面就不用再进行判断了，说明两个对象的内容并不相同
    // 如果没有下面这条语句，那么只要对象底层的内容是相同的那么就返回 true
    if (!status) {
      break;
    }
  }
  // for (key of obj1PropsArr) {
  //   status = compareObject(obj1[key], obj2[key]);
  //   // 关键代码，当 status 为 false 时下面就不用再进行判断了，说明两个对象的内容并不相同
  //   // 如果没有下面这条语句，那么只要对象底层的内容是相同的那么就返回 true
  //   if (!status) {
  //     break;
  //   }
  // }
  // 每次 compareObject 执行的返回结果
  return status;
}

export default compareObject;