<template>
	<div
		:class="
			cn(
				'h-full max-w-sm flex-col gap-14 border-neutral-200 px-8 py-12 md:flex',
				border == 'left' ? 'md:border-l' : 'md:border-r',
				sidebarModel.isOpen ? 'flex' : 'hidden',
				$props.class,
			)
		"
	>
		<RouterLink to="/" class="flex items-center gap-2 text-4xl font-bold">
			<img src="/vue.svg" alt="logo" class="size-9" />
			<span>Vue app</span>
		</RouterLink>
		<nav class="flex flex-1 flex-col gap-4">
			<RouterLink
				v-for="link in navLinks"
				:key="link.routeName"
				:to="{ name: link.routeName }"
				exact-active-class="bg-neutral-100 pointer-events-none"
				class="flex items-center gap-2 rounded-sm p-2 text-2xl font-medium transition-colors hover:bg-neutral-100"
			>
				<component :is="link.icon" />
				<span>{{ link.label }}</span>
			</RouterLink>
		</nav>
		<div v-if="$slots.after">
			<slot name="after" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { cn } from '@/shared/lib/utils';
import type { SidebarNavItem } from 'src/entities/sidebar/types';
import { useSidebarModel } from '../model';

type SidebarProps = {
	class?: string;
	navLinks: Array<SidebarNavItem>;
	border?: 'left' | 'right';
};

withDefaults(defineProps<SidebarProps>(), {
	border: 'right',
	class: undefined,
});

const sidebarModel = useSidebarModel();
</script>
