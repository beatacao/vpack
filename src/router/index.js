import Vue from 'vue'
import Router from 'vue-router'
import moment from 'moment'

Vue.use(Router)

import IndexView from '../views/IndexView.vue'
import DemoView from '../views/DemoView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView},
    { path: '/demos', component: DemoView}
  ]
})
