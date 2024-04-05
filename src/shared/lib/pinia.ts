import { type Pinia, type Store, getActivePinia } from 'pinia';

interface ExtendedPinia extends Pinia {
	_s: Map<string, Store>;
}
export const resetAppStore = () => {
	const pinia = getActivePinia() as ExtendedPinia;

	if (!pinia) {
		throw new Error('Pinia is not initialized.');
	}

	for (const store of pinia._s.values()) {
		store.$reset();
	}
};
