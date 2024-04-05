import Checkbox from '@/shared/components/ui/checkbox/Checkbox.vue';
<template>
	<Checkbox
		:checked="isDone"
		:disabled="isLoading"
		class="size-6"
		@update:checked="handleCheckboxChange"
	/>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { ref, toRefs } from 'vue';

const { id } = defineProps<{ id: string }>();

const taskModel = useTaskModel();
const { isDone } = toRefs(taskModel.getTaskById(id));

const isLoading = ref(false);

const handleCheckboxChange = async () => {
	isLoading.value = true;

	await taskModel.updateTask({ id, isDone: !isDone.value });

	isLoading.value = false;
};
</script>
