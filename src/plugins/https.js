import axios from 'axios'
const Myhttpserver={};
Myhttpserver.install = function (Vue) {

    // 添加实例方法
    Vue.prototype.$http = axios
  }
  export default Myhttpserver