import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

//框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//轮播图 swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入axios
import { apiGet, apiPost } from "./api/api";
Vue.prototype.$apiGet = apiGet;
Vue.prototype.$apiPost = apiPost;

import axios from "axios";
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
