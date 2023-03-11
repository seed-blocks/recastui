import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
	treeshake: true,
	splitting: false,
	entry: ['src/**/*.{ts,tsx}'],
	format: ['esm', 'cjs'],
	dts: true,
	minify: true,
	clean: true,
	external: ['react', 'react-dom'],
	...options,
}));
