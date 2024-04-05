import { TEST_ACCESS_TOKEN, TEST_USER_DATA } from "@/shared/config/test";
import { useAuthModel } from "../auth";
import type { User } from "./types";

export const fetchUser = async (): Promise<{
	data: User;
}> => {
	const { accessToken } = useAuthModel();

	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			if (accessToken === TEST_ACCESS_TOKEN) {
				resolve({
					data: {
						email: TEST_USER_DATA.email,
						id: TEST_USER_DATA.id,
						username: TEST_USER_DATA.username,
					},
				});
			}
			reject(new Error("Invalid access token"));
		}, 1000);
	});
};
