import type { SidebarNavItem } from "@/entities/sidebar";
import { ListTodoIcon } from "lucide-vue-next";

export const SIDEBAR_NAV_ITEMS = [
	{
		icon: ListTodoIcon,
		label: "Todos",
		to: "/",
	},
] satisfies Array<SidebarNavItem>;
