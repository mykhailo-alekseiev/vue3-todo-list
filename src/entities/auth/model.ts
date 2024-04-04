import { defineStore } from "pinia";
import { AuthApi, type User } from "./index";

type UserState = User;

export const useAuthModel = defineStore("auth", {
	state: (): UserState => ({
		id: "",
		username: "",
		email: "",
	}),
	getters: {
		isAuthorized(state) {
			return !!state.id;
		},
	},
	actions: {
		async loginByEmail(payload: Parameters<typeof AuthApi.loginByEmail>[0]) {
			const { data } = await AuthApi.loginByEmail(payload);

			const { id, email, username } = data;

			this.id = id;
			this.email = email;
			this.username = username;
		},
	},
	persist: true,
});
