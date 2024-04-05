<template>
	<div class="mx-auto flex size-full max-w-screen-xl">
		<Sidebar :nav-links="SIDEBAR_NAV_ITEMS">
			<template #after>
				<LogOutButton />
			</template>
		</Sidebar>
		<div class="flex-1">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Sidebar } from '@/entities/sidebar';
import { LogOutButton } from '@/features/auth/log-out';
import { SIDEBAR_NAV_ITEMS } from '../config';
</script>
