import { TEST_ACCESS_TOKEN, TEST_USER_DATA } from "@/shared/config/test";

type LoginByEmailParams = {
	email: string;
	password: string;
};

export const loginByEmail = async ({ email, password }: LoginByEmailParams) => {
	return await new Promise<{
		data: {
			access_token: string;
		};
	}>((resolve, reject) => {
		setTimeout(() => {
			if (
				email === TEST_USER_DATA.email &&
				password === TEST_USER_DATA.password
			) {
				resolve({
					data: {
						access_token: TEST_ACCESS_TOKEN,
					},
				});
			}

			reject(new Error("Invalid email or password"));
		}, 3000);
	});
};
