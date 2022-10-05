import { createComponent, createContext, useContext } from 'solid-js';
import { Theme, ThemeContextProps } from './types';

const ThemeContext = createContext();

export function ThemeProvider({ theme, children }: ThemeContextProps) {
	return createComponent(ThemeContext.Provider, {
		value: theme,
		get children() {
			return children;
		}
	});
}

export function useTheme() {
	return useContext(ThemeContext) as Theme;
}

export * from './types';
