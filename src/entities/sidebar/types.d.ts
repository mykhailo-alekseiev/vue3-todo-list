import type { RouteName } from '@/shared/config/routes';

export type SidebarNavItem = {
	label: string;
	icon: Component;
	routeName: RouteName;
};
