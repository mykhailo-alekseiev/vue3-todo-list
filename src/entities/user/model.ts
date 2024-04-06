import { type User, UserApi } from './index';

type UserModel = User;

export const useUserModel = defineStore('user', {
	state: (): UserModel => ({
		id: '',
		username: '',
		email: '',
	}),
	actions: {
		async fetchUser() {
			try {
				const { data } = await UserApi.fetchUser();
				this.id = data.id;
				this.username = data.username;
				this.email = data.email;

				return { result: data, error: null };
			} catch (error) {
				return { result: null, error };
			}
		},
	},
	persist: true,
});
