<template>
	<button
		class="flex w-full items-center gap-2 rounded-sm p-2 text-2xl font-medium transition-colors hover:bg-neutral-100"
		@click="handleButtonClick"
	>
		<LogOutIcon />
		<span>Logout</span>
	</button>
</template>

<script lang="ts" setup>
import { useAuthModel } from '@/entities/auth';
import { RouteName } from '@/shared/config/routes';
import { LogOutIcon } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const authModel = useAuthModel();
const router = useRouter();

const handleButtonClick = () => {
	authModel.logout();
	router.push({ name: RouteName.LOGIN, replace: true });
};
</script>
