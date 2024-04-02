const HomeView = () => import("@/views/home/HomeView.vue");

import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: HomeView }];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;
