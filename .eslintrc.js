module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint-config-prettier",
		"eslint:recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": ["warn", { endOfLine: "auto" }],
		"no-console": "warn",
		"react/self-closing-comp": ["warn", { component: true, html: true }],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
