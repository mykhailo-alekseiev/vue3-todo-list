<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from "@/components/ui/input";
import Label from '@/components/ui/label/Label.vue';
import { type Task, TaskRow } from "@/entities/task";
import { PlusIcon, Trash2Icon } from "lucide-vue-next";
import { computed, ref } from "vue";

const newTask = ref('');
const filters = ref({
  search: '',
  isDone: false,
});

const tasks = ref<Task[]>([
  {
    id: "0",
    title: "Task 1",
    isDone: true,
  },
  {
    id: "1",
    title: "Task 2",
    isDone: false,
  },
]);

const deleteTask = (id: string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};


const addTask = () => {
  if (!newTask.value) {
    throw new Error("Title is required");
  }

  tasks.value.push({
    id: String(tasks.value.length),
    title: newTask.value,
    isDone: false,
  });

  newTask.value = "";
};

const toggleTask = (id: string) => {
  tasks.value = tasks.value.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isDone: !task.isDone,
      };
    }

    return task;
  });
};

const filteredTasks = computed<Task[]>(() => {
  if (!filters.value.isDone && !filters.value.search) {
    return tasks.value;
  }

  return tasks.value.filter((task) => {
    if (filters.value.isDone && !task.isDone) {
      return false;
    }

    if (filters.value.search && !task.title.includes(filters.value.search)) {
      return false;
    }

    return true;
  });
});
</script>

<template>
  <div class="max-w-md mx-auto space-y-4">
    <h1 class="text-7xl text-center">Tasks</h1>
    <div class="grid grid-cols-[auto_1fr] items-center gap-3">
      <div class="flex items-center gap-2">
        <Checkbox class="size-4" id="isDone" v-model:checked="filters.isDone" />
        <Label for="isDone" class="text-lg"> Is done </Label>
      </div>
      <Input v-model.trim="filters.search" placeholder="Search tasks" />
    </div>
    <ul class="grid gap-2">
      <li v-for="{ title, id, isDone } in filteredTasks" :key="title">
        <TaskRow :title="title" :is-done="isDone" @toggle="toggleTask(id)">
          <template #after>
            <Button class="rounded-full" variant="ghost" @click="deleteTask(id)">
              <Trash2Icon />
            </Button>
          </template>
        </TaskRow>
      </li>
    </ul>
    <div class="flex items-center gap-3">
      <Input clas="flex-1" v-model.trim="newTask" placeholder="Add a new task" />
      <Button class="rounded-full" @click="addTask">
        <PlusIcon />
      </Button>
    </div>
  </div>

</template>