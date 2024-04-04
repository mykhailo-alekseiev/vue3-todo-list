<script lang="ts" setup>
import { useAuthModel } from '@/entities/auth';
import { type EmailLogInFormType, EmailLoginForm } from '@/features/email-login-form';
import { RouteName } from '@/shared/config/routes';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const router = useRouter();

const { loginByEmail } = useAuthModel();

const handleFormSubmit = async (values: EmailLogInFormType) => {
  try {
    await loginByEmail(values);
    toast.success('Success!');
    await router.push({ name: RouteName.TODO_LIST, replace: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Please try again later.';
    toast.error('An error occurred!', {
      description: message,
    });
  }
};
</script>

<template>
  <div class="size-full flex justify-center items-center">
    <div
      class="max-w-md w-full border border-neutral-300 rounded-3xl space-y-4 py-8 px-6">
      <h1 class="text-5xl font-bold">Login</h1>
      <EmailLoginForm :on-submit="handleFormSubmit" />
    </div>
  </div>
</template>