import { defineStore } from "pinia";

type SidebarState = {
	isOpen: boolean;
};

export const useSidebarModel = defineStore("sidebar", {
	state: (): SidebarState => ({
		isOpen: false,
	}),
	actions: {
		toggle() {
			this.isOpen = !this.isOpen;
		},
	},
});
