import type { RouteName } from '@/shared/config/routes';
import type { Component } from 'vue';

export type SidebarNavItem = {
	label: string;
	icon: Component;
	routeName: RouteName;
};
