import type { UpdateTaskDto } from './api';
import { type Task, TaskApi } from './index';
import type { TaskListFilters } from './types';

type TaskModel = {
	queryTasks: Record<string, Task>;
	filters: TaskListFilters;
};

export const useTaskModel = defineStore('task', {
	state: (): TaskModel => ({
		queryTasks: {},
		filters: {
			isDone: false,
			search: '',
		},
	}),
	getters: {
		getTaskById: (state) => (id: string) => {
			return state.queryTasks[id];
		},
		tasks(state) {
			return Object.values(state.queryTasks);
		},
		filteredTasks(): Array<Task> {
			if (!this.filters.search && !this.filters.isDone) {
				return this.tasks;
			}

			return this.tasks.filter((task) => {
				if (this.filters.search && !task.title.includes(this.filters.search)) {
					return false;
				}

				if (this.filters.isDone && !task.isDone) {
					return false;
				}

				return true;
			});
		},
	},
	actions: {
		async fetchTasks() {
			try {
				const { tasks } = await TaskApi.fetchTasks();
				this.queryTasks = tasks.reduce<TaskModel['queryTasks']>((acc, task) => {
					acc[task.id] = task;
					return acc;
				}, {});

				return tasks;
			} catch (error) {
				throw error;
			}
		},
		async createTask({ title }: Pick<Task, 'title'>) {
			try {
				const newTask = await TaskApi.createTask({ title });
				this.queryTasks[newTask.id] = newTask;

				return { result: newTask, error: null };
			} catch (error) {
				return { result: null, error };
			}
		},
		async updateTask(task: UpdateTaskDto) {
			try {
				const { task: updatedTask } = await TaskApi.updateTask(task);
				this.queryTasks[updatedTask.id] = Object.assign(
					this.queryTasks[updatedTask.id],
					updatedTask,
				);

				return { result: updatedTask, error: null };
			} catch (error) {
				return { result: null, error };
			}
		},
		async deleteTask(id: string) {
			try {
				await TaskApi.deleteTask(id);
				delete this.queryTasks[id];

				return { result: id, error: null };
			} catch (error) {
				return { result: null, error };
			}
		},
		setFilters(filters: TaskListFilters) {
			this.filters = filters;
		},
	},
	persist: true,
});
