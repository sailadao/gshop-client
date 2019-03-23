import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
import Header from './components/Header/Header'
import Star from './components/Star/Star'

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,
  store,

})
