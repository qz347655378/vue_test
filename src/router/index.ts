import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import("../views/home.vue")
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import("../views/login.vue")
	},
	{
		path: '/:catchAll(.*)',
		name: '404',
		component: () => import("../views/404.vue")
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
