const HomeView = () => import("@/views/home/HomeView.vue");
const MainLayout = () =>
	import("@/widgets/main-layout/ui").then((m) => m.MainLayout);

import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: MainLayout,
		children: [
			{
				path: "",
				component: HomeView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;
