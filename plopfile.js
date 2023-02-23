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
				templateFile: 'plop-templates/component/component.tsx.hbs',
				path: `packages/react/src/{{dashCase name}}/{{capitalize name}}.tsx`,
			},
			{
				type: 'add',
				templateFile: 'plop-templates/component/index.ts.hbs',
				path: `packages/react/src/{{dashCase name}}/index.ts`,
			},
			{
				type: 'add',
				templateFile: 'plop-templates/component/doc.mdx.hbs',
				path: `apps/docs/src/content/docs/{{dashCase name}}.mdx`,
			},
			{
				type: 'add',
				templateFile: 'plop-templates/component/snippets.ts.hbs',
				path: `apps/docs/src/components/configs/{{dashCase name}}.ts`,
			},
			{
				type: 'modify',
				path: './packages/react/src/index.ts',
				pattern: /(\/\/ ADD NEW COMPONENTS EXPORTS HERE)/g,
				template: "export * from './{{dashCase name}}';\n// ADD NEW COMPONENTS EXPORTS HERE",
			},
			{
				type: 'modify',
				path: './apps/docs/src/constants.ts',
				pattern: /(\/\/ INJECT NEW COMPONENTS HERE)/g,
				template:
					"{ title: '{{capitalize name}}', href: '/docs/{{dashCase name}}' },\n\t\t\t// INJECT NEW COMPONENTS HERE",
			},
		],
	});
};
