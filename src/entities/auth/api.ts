import { TEST_USER_DATA } from "@/entities/auth/config";
import type { User } from "./index";

type LoginByEmailParams = {
	email: string;
	password: string;
};

export const loginByEmail = async ({ email, password }: LoginByEmailParams) => {
	return await new Promise<{ data: User }>((resolve, reject) => {
		setTimeout(() => {
			if (
				email === TEST_USER_DATA.email &&
				password === TEST_USER_DATA.password
			) {
				resolve({
					data: {
						id: TEST_USER_DATA.id,
						email: TEST_USER_DATA.email,
						username: TEST_USER_DATA.username,
					},
				});
			}

			reject(new Error("Invalid email or password"));
		}, 3000);
	});
};
