//封装操作localStorage本地存储的方法   模块化的文件

//nodeJs  基础

var storage = {

  set(key, value) {

    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {

    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {

    localStorage.removeItem(key)
  }
}

//将storage方法暴露出去
export default storage;
