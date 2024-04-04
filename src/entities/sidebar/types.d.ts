import type { Component } from "vue";

export type SidebarNavItem = {
	label: string;
	icon: Component;
	to: string;
};
