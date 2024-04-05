module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'vue/no-v-html': 'off',
		'vue/multi-word-component-names': 'off',
		'prettier/prettier': ['error'],
		'no-unused-vars': 'off',
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
	},
};
