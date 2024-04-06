<template>
	<div class="flex size-full items-center justify-center">
		<div
			class="w-full max-w-md space-y-4 rounded-3xl border border-neutral-300 px-6 py-8"
		>
			<h1 class="text-5xl font-bold">Login</h1>
			<EmailLoginForm :on-submit="handleFormSubmit" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAuthModel } from '@/entities/auth';
import {
	type EmailLogInFormType,
	EmailLoginForm,
} from '@/features/auth/email-login';
import { RouteName } from '@/shared/config/routes';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

useHead({
	title: 'Login',
});
const router = useRouter();

const { loginByEmail } = useAuthModel();

const handleFormSubmit = async (values: EmailLogInFormType) => {
	try {
		await loginByEmail(values);
		toast.success('Success!');
		await router.push({ name: RouteName.TASK_LIST, replace: true });
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'Please try again later.';
		toast.error('An error occurred!', {
			description: message,
		});
	}
};
</script>
