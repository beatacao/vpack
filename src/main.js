import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store'
import router from './router'
import {sync} from 'vuex-router-sync'
import moment from 'moment'
import Mint from 'mint-ui'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

Vue.use(VueResource);
Vue.use(Mint);

moment.locale('zh-CN');

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
