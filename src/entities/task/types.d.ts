export type Task = {
	id: string;
	title: string;
	isDone: boolean;
};

type TaskListFilters = {
	isDone: boolean;
	search: string;
};
