/*!
 * Original code by Theme-ui
 * MIT Licensed, Copyright (c) Brent Jackson.
 *
 * Credits to the Theme-ui team:
 * https://github.com/system-ui/theme-ui/blob/develop/packages/css/src/utils.ts
 */
import type { ColorModesScale, Theme, ThemeStyles } from '../theme';

/**
 * Constrained identity function used to constrain user's theme type to Theme
 * while preserving its exact type.
 */
export const makeTheme = <T extends Theme>(theme: T): T => theme;

/**
 * Constrained identity function used to create a styles dictionary
 * assignable to ThemeStyles while preserving its exact type.
 */
export const makeStyles = <T extends ThemeStyles>(styles: T): T => styles;

export const makeColorsScale = <T extends ColorModesScale>(colors: T) => colors;
