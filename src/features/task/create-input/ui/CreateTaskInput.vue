<template>
  <div class="flex items-center gap-3">
    <Input class="flex-1" v-model.trim="newTask" @keyup.enter="addTask"
      :disabled="isLoading" placeholder="Add a new task" />
    <Button class="rounded-full" @click="addTask" :disabled="!newTask"
      :is-loading="isLoading" :icon="PlusIcon" />
  </div>
</template>

<script setup lang="ts">
import { useTaskModel } from '@/entities/task';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { PlusIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const taskModel = useTaskModel();

const newTask = ref('');
const isLoading = ref(false);

const addTask = async () => {
  isLoading.value = true;

  await taskModel.createTask({ title: newTask.value });

  isLoading.value = false;

  newTask.value = "";
};

</script>
