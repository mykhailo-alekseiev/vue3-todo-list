<template>
	<div
		:class="
			cn(
				'flex items-center gap-3 rounded-sm border border-gray-600 px-4 py-2',
				isDone && 'bg-blue-200',
			)
		"
	>
		<slot name="before" />
		<h2 :class="cn('flex-1 overflow-hidden text-ellipsis text-2xl')">
			{{ title }}
		</h2>
		<div>
			<slot name="after" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { cn } from '@/shared/lib/utils';
import type { Task } from 'src/entities/task/types';

type TaskRowProps = Pick<Task, 'title' | 'isDone'>;
type TaskRowEmits = {
	toggle: [];
};

const props = defineProps<TaskRowProps>();
defineEmits<TaskRowEmits>();

const { title } = toRefs(props);
</script>
