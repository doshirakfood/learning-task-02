import {
	createMemoryHistory,
	createRouter as _createRouter,
	createWebHistory,
} from 'vue-router'

export function createRouter() {
	return _createRouter({
		history: import.meta.env.SSR
			? createMemoryHistory()
			: createWebHistory(),
		routes: [
			{
				path: '/',
				name: 'Main',
				component: () => import('../pages/main.vue'),
			},

			{
				path: '/develop',
				name: 'Develop',
				component: () => import('../pages/develop.vue'),
			},

			// Redirect to 404
			// {
			// 	path: '/:pathMatch(.*)*',
			// 	component: () => import('../pages/Error/404.vue'),
			// },
		],
	})
}
