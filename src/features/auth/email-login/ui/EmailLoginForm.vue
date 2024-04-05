<template>
	<form class="space-y-6" @submit="handleFormSubmit">
		<FormField v-slot="{ componentField }" name="email">
			<FormItem v-auto-animate>
				<FormLabel>Email</FormLabel>
				<FormControl>
					<Input
						:disabled="isSubmitting"
						type="email"
						placeholder="example@gmail.com"
						v-bind="componentField"
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>
		<FormField v-slot="{ componentField }" name="password">
			<FormItem v-auto-animate>
				<FormLabel>Password</FormLabel>
				<FormControl>
					<Input
						:disabled="isSubmitting"
						type="password"
						placeholder="******"
						v-bind="componentField"
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		</FormField>
		<Button :is-loading="isSubmitting" type="submit"> Submit </Button>
	</form>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { type EmailLogInFormType, emailLogInFormSchema } from '../schemas';

import { Button } from '@components/ui/button';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';

const { onSubmit } = defineProps<{
	onSubmit: (values: EmailLogInFormType) => Promise<void>;
}>();

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: toTypedSchema(emailLogInFormSchema),
});

const handleFormSubmit = handleSubmit(async (values) => {
	await onSubmit(values);
});
</script>
