<script lang="ts" setup>
import { useAuthModel } from '@/entities/auth';
import { RouteName } from '@/shared/config/routes';
import { LogOutIcon } from "lucide-vue-next";
import { useRouter } from 'vue-router';

const router = useRouter();
const model = useAuthModel();

const handleFormSubmit = async () => {
  model.$reset();
  await router.push({ name: RouteName.LOGIN, replace: true });
};
</script>

<template>
  <button @click="handleFormSubmit"
    class="w-full text-2xl font-medium flex items-center gap-2 hover:bg-neutral-100 rounded-sm p-2 transition-colors">
    <LogOutIcon />
    <span class="flex-1">Logout</span>
  </button>
</template>