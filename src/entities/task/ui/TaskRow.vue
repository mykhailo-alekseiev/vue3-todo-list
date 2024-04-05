<script setup lang="ts">
import { cn } from "@/shared/lib/utils";
import type { Task } from "src/entities/task/types";
import { toRefs } from "vue";

type TaskRowProps = Pick<Task, "title" | "isDone">;
type TaskRowEmits = {
  toggle: [];
};

const props = defineProps<TaskRowProps>();
defineEmits<TaskRowEmits>();

const { title, } = toRefs(props);
</script>

<template>
  <div
    :class="cn('rounded-sm border border-gray-600 px-4 py-2 flex items-center gap-3', isDone && 'bg-blue-200')">
    <slot name="before" />
    <h2 :class="cn('flex-1 text-2xl text-ellipsis overflow-hidden',)">
      {{ title }}
    </h2>
    <div>
      <slot name="after" />
    </div>
  </div>
</template>