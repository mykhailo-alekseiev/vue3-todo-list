import { useAuthModel } from "@/entities/auth";
import { RouteName } from "@/shared/config/routes";
import {
	type RouteRecordRaw,
	createRouter,
	createWebHistory,
} from "vue-router";

const TodoListPage = () => import("@/pages/todo-list");
const LogInPage = () => import("@/pages/log-in");
const MainLayout = () =>
	import("@/widgets/main-layout").then((m) => m.MainLayout);

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: () => {
			const { isAuthorized } = useAuthModel();

			if (isAuthorized) {
				return {
					name: RouteName.TODO_LIST,
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
		component: LogInPage,
		meta: { requiresAuth: false },
	},
	{
		path: "/dashboard",
		component: MainLayout,
		meta: { requiresAuth: true },
		children: [
			{
				path: "todo-list",
				name: RouteName.TODO_LIST,
				component: TodoListPage,
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

router.beforeEach((to) => {
	const { isAuthorized } = useAuthModel();
	if (to.meta.requiresAuth && !isAuthorized)
		return {
			name: RouteName.LOGIN,
			replace: true,
		};

	if (!to.meta.requiresAuth && isAuthorized)
		return {
			name: RouteName.TODO_LIST,
			replace: true,
		};
});
export default router;
