module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: ['error', 4],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		// semi: ['error', 'never'],
	},
};
