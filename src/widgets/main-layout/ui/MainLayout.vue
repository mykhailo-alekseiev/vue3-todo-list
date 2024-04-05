<script setup lang="ts">
import { Sidebar } from '@/entities/sidebar';
import { LogOutButton } from '@/features/log-out';
import { SIDEBAR_NAV_ITEMS } from '../config';
</script>

<template>
  <div class="max-w-screen-xl mx-auto flex size-full">
    <Sidebar :nav-links="SIDEBAR_NAV_ITEMS">
      <template #after>
        <LogOutButton />
      </template>
    </Sidebar>
    <RouterView />
  </div>
</template>