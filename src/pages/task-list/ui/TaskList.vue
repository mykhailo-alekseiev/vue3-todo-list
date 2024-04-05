<template>
	<ul v-auto-animate class="grid gap-2">
		<template v-if="filteredTasks.length">
			<li v-for="{ title, id, isDone } in filteredTasks" :key="id">
				<TaskRow :title="title" :is-done="isDone">
					<template #before>
						<IsDoneTaskCheckbox :id="id" />
					</template>
					<template #after>
						<DeleteTaskButton :id="id" />
					</template>
				</TaskRow>
			</li>
		</template>
		<li v-else>No tasks.</li>
	</ul>
</template>

<script setup lang="ts">
import { TaskRow, useTaskModel } from '@/entities/task';
import { DeleteTaskButton } from '@/features/task/delete-button';
import { IsDoneTaskCheckbox } from '@/features/task/is-done-checkbox';
import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { storeToRefs } from 'pinia';

const taskModel = useTaskModel();

const { filteredTasks } = storeToRefs(taskModel);

await taskModel.fetchTasks();
</script>
