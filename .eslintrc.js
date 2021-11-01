module.exports = {
	root: true,
	env: {
		browser: true, // Enables browser globals like window and document
		amd: true, // Enables require() and define() as global variables as per the amd spec.
		node: true, // Enables Node.js global variables and Node.js scoping.
		es2021: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier', // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		//project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'prefer-const': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
	},
	settings: {
		// Allow absolute paths in imports, e.g. import Button from 'components/Button'
		// https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
}
