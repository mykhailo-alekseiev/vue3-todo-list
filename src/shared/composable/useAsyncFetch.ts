type Options = {
	lazy: boolean;
};

export const useAsyncFetch = <T = any>(
	func: () => Promise<T>,
	options?: Options,
) => {
	const data = ref<T | null>(null);
	const error = ref<string | null>(null);
	const loading = ref(false);

	const execute = async () => {
		// reset state before fetching..
		data.value = null;
		error.value = null;

		try {
			loading.value = true;
			const result = await func();
			// @ts-ignore
			data.value = result;

			return { data: result, error: null };
		} catch (err) {
			const message = err instanceof Error ? err.message : 'Unknown error';
			error.value = message;
			return { data: null, error: message };
		} finally {
			loading.value = false;
		}
	};

	watchEffect(() => {
		if (!options?.lazy) {
			execute();
		}
	});

	return { data, loading, error, execute, refetch: execute };
};
