import { Ref } from 'vue';

type Options = {
	lazy: boolean;
};

interface UseAsyncFetchReturn<T = any> {
	data: Ref<T | null>;
	error: Ref<string | null>;
	loading: Ref<boolean>;
	execute: () => Promise<
		{ data: Awaited<T>; error: null } | { data: null; error: string }
	>;
	refetch: () => Promise<
		{ data: Awaited<T>; error: null } | { data: null; error: string }
	>;
}

export const useAsyncFetch = <T = any>(
	func: () => Promise<T>,
	options?: Options,
): UseAsyncFetchReturn<T> => {
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

	// @ts-ignore
	return { data, loading, error, execute, refetch: execute };
};
