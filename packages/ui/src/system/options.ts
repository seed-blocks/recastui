/*!
 * Original code by Theme-ui
 * MIT Licensed, Copyright (c) Brent Jackson.
 *
 * Credits to the Theme-ui team:
 * https://github.com/system-ui/theme-ui/blob/develop/packages/css/src/options.ts
 */

export interface RecastUIConfig {
	/**
	 * Provide a value here to enable color modes
	 */
	initialColorModeName?: string;

	/**
	 * Provide a value here to set a color mode for printing
	 */
	printColorModeName?: string;

	/**
	 * Adds styles defined in theme.styles.root to the <html> element along with color and background-color
	 */
	useRootStyles?: boolean;

	/**
	 * Initializes the color mode based on the prefers-color-scheme media query
	 */
	useColorSchemeMediaQuery?: 'system' | 'initial' | true /* same as 'initial' for compat */ | false;

	/**
	 * Adds a global box-sizing: border-box style
	 */
	useBorderBox?: boolean;

	/**
	 * If false, does not save color mode as a localStorage value.
	 */
	useLocalStorage?: boolean;
}
