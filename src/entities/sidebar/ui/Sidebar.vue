<script lang="ts" setup>
import { cn } from '@/shared/lib/utils';
import { storeToRefs } from 'pinia';
import type { SidebarNavItem } from 'src/entities/sidebar/types';
import { useSidebarModel } from '../model';

type SidebarProps = {
  class?: string;
  navLinks: Array<SidebarNavItem>;
  border?: 'left' | 'right';
};

withDefaults(defineProps<SidebarProps>(), {
  border: 'right',
});

const store = useSidebarModel();
const { isOpen } = storeToRefs(store);
</script>

<template>
  <div :class="cn(
    'h-full max-w-sm px-8 py-12 flex-col md:flex gap-14 border-neutral-200',
    $props.border == 'left' ? 'md:border-l' : 'md:border-r',
    isOpen ? 'flex' : 'hidden',
    $props.class)">
    <RouterLink to="/" class="text-4xl font-bold flex items-center gap-2">
      <img src="/vue.svg" alt="logo" />
      <span>Vue app</span>
    </RouterLink>
    <nav class="flex-1 flex flex-col gap-4">
      <RouterLink v-for="link in $props.navLinks" :key="link.to" :to="link.to"
        class="text-2xl font-medium flex items-center gap-2 hover:bg-neutral-100 rounded-sm p-2 transition-colors">
        <component :is="link.icon" />
        <span>{{ link.label }}</span>
      </RouterLink>
    </nav>
    <div v-if="$slots.after">
      <slot name="after" />
    </div>
  </div>
</template>