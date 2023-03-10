import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
	treeshake: true,
	splitting: false,
	entry: ['src/**/*.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	minify: true,
	clean: true,
	...options,
}));
