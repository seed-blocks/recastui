const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = str => {
	return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
	plop.setHelper('capitalize', text => {
		return capitalize(camelCase(text));
	});

	plop.setGenerator('component', {
		description: 'Add a new component',
		prompts: [
			{
				type: 'input',
				name: 'componentName',
				message: 'Enter component name:',
			},
			{
				type: 'input',
				name: 'description',
				message: 'The description of this component:',
			},
		],
		actions(answers) {
			const actions = [];

			if (!answers) return actions;

			const { componentName, description } = answers;

			actions.push({
				type: 'addMany',
				templateFiles: './plop/component/**',
				destination: `./packages/react/src/{{dashCase componentName}}`,
				base: 'plop/component',
				data: { description, componentName },
				abortOnFail: true,
			});

			actions.push({
				type: 'modify',
				path: './packages/react/src/index.ts',
				pattern: /(\/\/ ADD NEW COMPONENTS EXPORTS HERE)/g,
				template:
					"@export * from './{{dashCase componentName}}';\n// ADD NEW COMPONENTS EXPORTS HERE",
			});

			return actions;
		},
	});
};
