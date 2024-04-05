<script setup lang="ts">
import LoadingScreen from '@/shared/components/LoadingScreen.vue';
import { Toaster } from '@components/ui/sonner';
import { DefaultLayout } from '@layouts/default-layout';
import { computed, } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => route.meta.layout || DefaultLayout);
const fallback = computed(() => route.meta.fallback || LoadingScreen);
</script>

<template>
  <component :is="layout">
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <component :is="fallback" />
      </template>
    </Suspense>
  </component>
  <Toaster />
</template>

<style>
@import './styles/index.css';
</style>