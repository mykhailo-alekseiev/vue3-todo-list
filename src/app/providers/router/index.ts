import { useAuthModel } from "@/entities/auth";
import { RouteName } from "@/shared/config/routes";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

router.beforeEach((to) => {
	console.log(to.path);
	const { isAuthorized } = useAuthModel();
	if (to.meta.requiresAuth && !isAuthorized)
		return {
			name: RouteName.LOGIN,
			replace: true,
		};

	if (!to.meta.requiresAuth && isAuthorized)
		return {
			name: RouteName.TASK_LIST,
			replace: true,
		};
});
