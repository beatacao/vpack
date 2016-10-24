import Vue from 'vue'
import Router from 'vue-router'
import moment from 'moment'

Vue.use(Router)

import IndexView from '../views/IndexView.vue'
import DemoView from '../views/DemoView.vue'
import Markdown from '../components/demos/Markdown.vue'
import Gitcommit from '../components/demos/Gitcommit.vue'
// import Firebase from '../components/demos/Firebase.vue'
import Grid from '../components/demos/Grid.vue'
import Tree from '../components/demos/Tree.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView},
    { path: '/demos', component: DemoView},
    { path: '/demos/markdown', component: Markdown},
    { path: '/demos/gitcommit', component: Gitcommit},
    // { path: '/demos/firebase', component: Firebase},
    { path: '/demos/grid', component: Grid},
    { path: '/demos/tree', component: Tree}
  ]
})
