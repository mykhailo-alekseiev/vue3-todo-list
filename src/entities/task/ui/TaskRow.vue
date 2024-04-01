<script setup lang="ts">
import { toRefs } from "vue";
import type { Task } from "../types";

type TaskRowProps = Task;

const props = defineProps<TaskRowProps>();

const { title } = toRefs(props);
</script>

<template>
  <div class="rounded-sm border border-gray-600 px-4 py-2 flex items-center gap-3">
    <h2 class="flex-1 text-2xl text-ellipsis overflow-hidden">{{ title }}</h2>
    <div>
      <slot name="after" />
    </div>
  </div>
</template>