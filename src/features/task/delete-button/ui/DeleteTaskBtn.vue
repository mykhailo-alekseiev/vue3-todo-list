<template>
	<Button
		class="rounded-full"
		variant="ghost"
		:is-loading="isLoading"
		:icon="Trash2Icon"
		@click="deleteTask"
	/>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Button } from '@/shared/components/ui/button';
import { Trash2Icon } from 'lucide-vue-next';
import { ref } from 'vue';

const { id } = defineProps<{ id: string }>();

const taskModel = useTaskModel();
const isLoading = ref(false);

const deleteTask = async () => {
	isLoading.value = true;
	await taskModel.deleteTask(id);
	isLoading.value = false;
};
</script>
