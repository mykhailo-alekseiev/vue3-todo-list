import * as z from 'zod';

export const emailLogInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters long',
	}),
});

export type EmailLogInFormType = z.infer<typeof emailLogInFormSchema>;
