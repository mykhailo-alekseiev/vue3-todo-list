<template>
	<div class="space-y-4 px-8 py-12">
		<h1 class="text-7xl font-bold">Task list</h1>
		<div class="grid grid-cols-[auto_1fr] items-center gap-3">
			<div class="flex items-center gap-2">
				<Checkbox id="isDone" v-model:checked="filters.isDone" class="size-4" />
				<Label for="isDone" class="text-lg">Is done </Label>
			</div>
			<Input v-model.trim="filters.search" placeholder="Search tasks" />
		</div>
		<div v-auto-animate>
			<Suspense :timeout="0">
				<template #default>
					<TaskList />
				</template>
				<template #fallback>
					<div>Loading...</div>
				</template>
			</Suspense>
		</div>
		<CreateTaskInput />
	</div>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { CreateTaskInput } from '@/features/task/create-input';
import { Checkbox } from '@components/ui/checkbox';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { useRoute, useRouter } from 'vue-router';
import TaskList from './TaskList.vue';

useHead({
	title: 'Task list',
});

const router = useRouter();
const route = useRoute();

const taskModel = useTaskModel();

const { filters } = storeToRefs(taskModel);
onMounted(() => {
	taskModel.setFilters({
		isDone: route.query.isDone === 'true',
		search: (route.query.search as string) || '',
	});
});

watchEffect(() => {
	router.push({
		query: {
			search: filters.value.search || undefined,
			isDone: filters.value.isDone.toString(),
		},
	});
});
</script>
