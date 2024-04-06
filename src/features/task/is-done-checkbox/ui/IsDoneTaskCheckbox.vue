<template>
	<Checkbox
		:checked="isDone"
		:disabled="loading"
		class="size-6"
		@update:checked="execute"
	/>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { useAsyncFetch } from '@/shared/composable/useAsyncFetch';

const { id } = defineProps<{ id: string }>();

const taskModel = useTaskModel();
const { isDone } = toRefs(taskModel.getTaskById(id));

const { execute, loading } = useAsyncFetch(
	() => taskModel.updateTask({ id, isDone: !isDone.value }),
	{
		lazy: true,
	},
);
</script>
