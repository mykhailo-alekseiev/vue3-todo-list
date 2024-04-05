<script lang="ts" setup>
import { useAuthModel } from '@/entities/auth';
import { RouteName } from '@/shared/config/routes';
import { LogOutIcon } from "lucide-vue-next";
import { useRouter } from 'vue-router';

const authModel = useAuthModel();
const router = useRouter();

const handleButtonClick = () => {
  authModel.logout();
  router.push({ name: RouteName.LOGIN, replace: true });
};
</script>

<template>
  <button @click="handleButtonClick"
    class="w-full text-2xl font-medium flex items-center gap-2 hover:bg-neutral-100 rounded-sm p-2 transition-colors">
    <LogOutIcon />
    <span>Logout</span>
  </button>
</template>