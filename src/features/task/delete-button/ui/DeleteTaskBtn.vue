<template>
	<Button
		class="rounded-full"
		variant="ghost"
		:is-loading="loading"
		:icon="Trash2Icon"
		@click="execute"
	/>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Button } from '@/shared/components/ui/button';
import { useAsyncFetch } from '@/shared/composable/useAsyncFetch';
import { Trash2Icon } from 'lucide-vue-next';

const { id } = defineProps<{ id: string }>();

const taskModel = useTaskModel();

const { execute, loading } = useAsyncFetch(() => taskModel.deleteTask(id), {
	lazy: true,
});
</script>
