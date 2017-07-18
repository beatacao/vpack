import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexView from '../views/price/IndexView.vue'
// 动态路由
const ClothView = resolve => require(['../views/price/ClothView.vue'], resolve)
const CartView = resolve => require(['../views/price/CartView.vue'], resolve)
const MyCartView = resolve => require(['../views/price/MyCartView.vue'], resolve)

export default new Router({
	mode: 'history',
	base: '/views',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{ name: 'index', path: '/', component: IndexView},
		{ name: 'cloth', path: '/cloth', component: ClothView},
		{ name: 'cart', path: '/cart', component: CartView},
		{ name: 'cart', path: '/mycart', component: MyCartView}
	]
})

