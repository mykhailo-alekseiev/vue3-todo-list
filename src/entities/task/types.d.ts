export type Task = {
	id: string;
	title: string;
	isDone: boolean;
};

export type TaskListFilters = {
	isDone: boolean;
	search: string;
};
