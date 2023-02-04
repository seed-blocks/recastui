import { createComponent, createContext, createSignal } from 'solid-js';
import { get } from '../system';

import { ThemeContextProps } from './types';

export const ThemeContext = createContext();



export function ThemeProvider({ theme: baseTheme, children }: ThemeContextProps) {

	const theme = {
		...baseTheme,
		colors: get(baseTheme.colors.modes, undefined, baseTheme.colors)
	}
	return createComponent(ThemeContext.Provider, {
		value: theme,
		get children() {
			return children;
		}
	});
}
