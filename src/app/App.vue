<template>
	<component :is="layout">
		<RouterView v-slot="{ Component }">
			<template v-if="Component">
				<Suspense :timeout="0">
					<component :is="Component" />

					<template #fallback>
						<component :is="fallback" />
					</template>
				</Suspense>
			</template>
		</RouterView>
	</component>
	<Toaster />
</template>

<script setup lang="ts">
import LoadingScreen from '@/shared/components/LoadingScreen.vue';
import { Toaster } from '@components/ui/sonner';
import { DefaultLayout } from '@layouts/default-layout';
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => route.meta.layout || DefaultLayout);
const fallback = computed(() => route.meta.fallback || LoadingScreen);
</script>

<style>
@import './styles/index.css';
</style>
