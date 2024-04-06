type SidebarModel = {
	isOpen: boolean;
};

export const useSidebarModel = defineStore('sidebar', {
	state: (): SidebarModel => ({
		isOpen: false,
	}),
	actions: {
		toggle() {
			this.isOpen = !this.isOpen;
		},
	},
});
