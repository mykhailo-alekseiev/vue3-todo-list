import type { SidebarNavItem } from '@/entities/sidebar';
import { RouteName } from '@/shared/config/routes';
import { ListTodoIcon, UserIcon } from 'lucide-vue-next';

export const SIDEBAR_NAV_ITEMS = [
	{
		icon: ListTodoIcon,
		label: 'Task list',
		routeName: RouteName.TASK_LIST,
	},
	{
		icon: UserIcon,
		label: 'User profile',
		routeName: RouteName.USER_PROFILE,
	},
] satisfies Array<SidebarNavItem>;
