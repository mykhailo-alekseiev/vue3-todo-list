import { MOCK_TASKS } from './config';
import type { Task } from './index';

export const fetchTasks = async (): Promise<{
	tasks: Array<Task>;
}> => {
	return await new Promise((resolve) => {
		const tasks = Object.values(
			// @ts-ignore
			JSON.parse(localStorage.getItem('task'))?.queryTasks,
		);
		setTimeout(() => {
			resolve({
				// @ts-ignore
				tasks: tasks ?? MOCK_TASKS,
			});
		}, 1000);
	});
};

export const createTask = async ({
	title,
}: Pick<Task, 'title'>): Promise<Task> => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: Date.now().toString(),
				title,
				isDone: false,
			});
		}, 1000);
	});
};

export type UpdateTaskDto = {
	id: Task['id'];
	title?: Task['title'];
	isDone?: Task['isDone'];
};

export const updateTask = async (
	task: UpdateTaskDto,
): Promise<{ task: UpdateTaskDto }> => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve({ task });
		}, 1000);
	});
};

export const deleteTask = async (id: string): Promise<{ id: string }> => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve({ id });
		}, 1000);
	});
};
