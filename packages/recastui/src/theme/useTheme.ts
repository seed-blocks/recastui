import { useContext } from 'solid-js';
import { ThemeContext } from './ThemeProvider';
import { Theme } from './types';

export function useTheme() {
	return useContext(ThemeContext) as Theme;
}
