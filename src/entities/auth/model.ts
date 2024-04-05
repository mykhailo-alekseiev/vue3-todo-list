import { resetAppStore } from '@/shared/lib/pinia';
import { defineStore } from 'pinia';
import { AuthApi } from './index';

type AuthModel = {
	accessToken: string;
};

export const useAuthModel = defineStore('auth', {
	state: (): AuthModel => ({
		accessToken: '',
	}),
	getters: {
		isAuthorized(state) {
			return !!state.accessToken;
		},
	},
	actions: {
		async loginByEmail(payload: Parameters<typeof AuthApi.loginByEmail>[0]) {
			const { data } = await AuthApi.loginByEmail(payload);

			this.accessToken = data.access_token;
		},
		logout() {
			resetAppStore();
		},
	},
	persist: true,
});
