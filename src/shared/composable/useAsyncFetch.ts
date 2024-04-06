import { ref, watchEffect } from 'vue';
import { Ref } from 'vue';

type Options = {
	lazy: boolean;
};

type AsyncFunction<T = any> = (...args: any[]) => Promise<T>;

interface UseAsyncFetchReturn<T = any> {
	data: Ref<T | null>;
	error: Ref<string | undefined>;
	loading: Ref<boolean>;
	execute: () => Promise<T>;
	refetch: () => Promise<T>;
}

export const useAsyncFetch = (
	func: AsyncFunction,
	options: Options,
): UseAsyncFetchReturn => {
	const data: UseAsyncFetchReturn['data'] = ref();
	const error: UseAsyncFetchReturn['error'] = ref();
	const loading: UseAsyncFetchReturn['loading'] = ref(false);

	const execute = async () => {
		// reset state before fetching..
		data.value = undefined;
		error.value = undefined;

		try {
			loading.value = true;
			const result = await func();

			data.value = result;

			return result;
		} catch (err) {
			error.value = err instanceof Error ? err.message : 'Unknown error';
		} finally {
			loading.value = false;
		}
	};

	watchEffect(() => {
		if (!options.lazy) {
			execute();
		}
	});

	return { data, loading, error, execute, refetch: execute };
};
