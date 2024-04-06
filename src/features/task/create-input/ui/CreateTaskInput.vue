<template>
	<div class="flex items-center gap-3">
		<Input
			v-model.trim="newTask"
			class="flex-1"
			:disabled="loading"
			placeholder="Add a new task"
			@keyup.enter="addTask"
		/>
		<Button
			class="rounded-full"
			:disabled="!newTask"
			:is-loading="loading"
			:icon="PlusIcon"
			@click="addTask"
		/>
	</div>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { useAsyncFetch } from '@/shared/composable/useAsyncFetch';
import { PlusIcon } from 'lucide-vue-next';

const taskModel = useTaskModel();

const newTask = ref('');
const { loading, execute } = useAsyncFetch(
	() => taskModel.createTask({ title: newTask.value }),
	{
		lazy: true,
	},
);

const addTask = async () => {
	const { error } = await execute();
	if (!error) {
		newTask.value = '';
	}
};
</script>
