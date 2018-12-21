// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/common.css'
// eslint-disable-next-line
import Mint from 'mint-ui';
// eslint-disable-next-line
import 'mint-ui/lib/style.css'
// eslint-disable-next-line
Vue.use(Mint);
import  './assets/iconfont/iconfont.css'
import "./assets/css/index.css";
import 'swiper/dist/css/swiper.css'

import {LocalStorage} from "./assets/js/common.js";//自定义封装的localStorage
import axios from "axios"
Vue.prototype.$axios=axios;
Vue.prototype.$localStorage=LocalStorage;

Vue.prototype.$host="http://localhost:3000";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
