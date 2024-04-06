<template>
	<div class="flex items-center gap-3">
		<Input
			v-model.trim="newTask"
			class="flex-1"
			:disabled="isLoading"
			placeholder="Add a new task"
			@keyup.enter="addTask"
		/>
		<Button
			class="rounded-full"
			:disabled="!newTask"
			:is-loading="isLoading"
			:icon="PlusIcon"
			@click="addTask"
		/>
	</div>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { PlusIcon } from 'lucide-vue-next';

const taskModel = useTaskModel();

const newTask = ref('');
const isLoading = ref(false);

const addTask = async () => {
	isLoading.value = true;

	await taskModel.createTask({ title: newTask.value });

	isLoading.value = false;

	newTask.value = '';
};
</script>
