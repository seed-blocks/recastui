const pkgRootPath = `<rootDir>`;

module.exports = {
	preset: 'ts-jest',
	transform: {
		'<regex_match_files>': [
			'ts-jest',
			{
				tsconfig: `${pkgRootPath}/tsconfig.json`,
				babelConfig: {
					presets: ['@babel/preset-env', 'babel-preset-solid']
				}
			}
		]
	},

	testEnvironment: 'jsdom',

	setupFilesAfterEnv: [`<rootDir>../../jest.setup.js`, 'regenerator-runtime'],

	verbose: true,
	testTimeout: 30000
};
