<script setup lang="ts">
import { Checkbox } from "@/shared/components/ui/checkbox";
import { cn } from "@/shared/lib/utils";
import { toRefs } from "vue";
import type { Task } from "../types";

type TaskRowProps = Pick<Task, "title" | "isDone">;
type TaskRowEmits = {
  toggle: [];
};

const props = defineProps<TaskRowProps>();
defineEmits<TaskRowEmits>();

const { title, isDone } = toRefs(props);
</script>

<template>
  <div class="rounded-sm border border-gray-600 px-4 py-2 flex items-center gap-3">
    <Checkbox type="checkbox" :checked="isDone" @update:checked="$emit('toggle')"
      class="size-6" />
    <h2
      :class="cn('flex-1 text-2xl text-ellipsis overflow-hidden', isDone && 'line-through')">
      {{ title }}
    </h2>
    <div>
      <slot name="after" />
    </div>
  </div>
</template>@/shared/components/ui/checkbox@/shared/lib/utils