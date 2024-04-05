<script setup lang="ts">
import { cn } from '@/shared/lib/utils';
import { Loader2 } from 'lucide-vue-next';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { Component, HTMLAttributes } from 'vue';
import { type ButtonVariants, buttonVariants } from '.';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  icon?: Component;
  isLoading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :disabled="isLoading || disabled">
    <Loader2 v-if="isLoading" :class="cn('size-4 animate-spin',)" />
    <template v-else>
      <component :is="icon" class="size-4" />
      <slot />
    </template>
  </Primitive>
</template>