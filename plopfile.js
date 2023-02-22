const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = str => {
	return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

module.exports = plop => {
	plop.setHelper('capitalize', text => {
		return capitalize(camelCase(text));
	});

	plop.setGenerator('component', {
		description: 'Add a new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter component name:',
			},
			{
				type: 'input',
				name: 'description',
				message: 'The description of this component:',
			},
		],
		actions: [
			{
				type: 'add',
				templateFiles: 'plop/component/component.hbs',
				path: `packages/react/src/{{dashCase name}}/{{dashCase name}}.tsx`,
				abortOnFail: true,
			},
			{
				type: 'add',
				templateFiles: 'plop/component/index.hbs',
				path: `packages/react/src/{{dashCase name}}/index.ts`,
				abortOnFail: true,
			},
			{
				type: 'add',
				templateFiles: 'plop/component/doc.hbs',
				path: `apps/docs/src/content/docs/{{dashCase name}}.mdx`,
				abortOnFail: true,
			},
			{
				type: 'add',
				templateFiles: 'plop/component/snippets.hbs',
				path: `apps/docs/src/components/configs/{{dashCase name}}.ts`,
				abortOnFail: true,
			},
			{
				type: 'modify',
				path: 'packages/react/src/index.ts',
				pattern: /(\/\/ ADD NEW COMPONENTS EXPORTS HERE)/g,
				template: "@export * from './{{dashCase name}}';\n// ADD NEW COMPONENTS EXPORTS HERE",
			},
			{
				type: 'modify',
				path: 'apps/docs/src/constants.ts',
				pattern: /(\/\/ INJECT NEW COMPONENTS HERE)/g,
				template:
					"links: [{ title: '{{capitalize name}}', href: '/docs/{{dashCase name}}' }],\n\t\t// INJECT NEW COMPONENTS HERE",
			},
		],
	});
};
