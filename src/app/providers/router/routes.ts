import { useAuthModel } from "@/entities/auth";
import { RouteName } from "@/shared/config/routes";
import { MainLayout } from "@/widgets/main-layout";
import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: () => {
			const { isAuthorized } = useAuthModel();

			if (isAuthorized) {
				return {
					name: RouteName.TASK_LIST,
					replace: true,
				};
			}

			return {
				name: RouteName.LOGIN,
				replace: true,
			};
		},
	},
	{
		path: "/log-in",
		name: RouteName.LOGIN,
		component: () => import("@/pages/log-in"),
		meta: { requiresAuth: false },
	},
	{
		path: "/",
		meta: { requiresAuth: true, layout: MainLayout },
		children: [
			{
				path: "todo-list",
				name: RouteName.TASK_LIST,
				component: () => import("@/pages/task-list"),
			},
			{
				path: "user-profile",
				name: RouteName.USER_PROFILE,
				component: () => import("@/pages/user-profile"),
			},
		],
	},
];
