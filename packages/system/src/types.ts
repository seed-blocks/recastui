import { Properties as CSSProperties, Property as CSSProperty} from 'csstype';

import { ObjectOrArray } from './core';

export type TLengthStyledSystem = string | 0 | number;

export interface Theme<TLength = TLengthStyledSystem> {
	breakpoints?: ObjectOrArray<number | string | symbol>;
	mediaQueries?: { [size: string]: string };
	space?: ObjectOrArray<CSSProperty.Margin<number | string>>;
	fontSizes?: ObjectOrArray<CSSProperty.FontSize<number>>;
	colors?: ObjectOrArray<CSSProperty.Color>;
	fonts?: ObjectOrArray<CSSProperty.FontFamily>;
	fontWeights?: ObjectOrArray<CSSProperty.FontWeight>;
	lineHeights?: ObjectOrArray<CSSProperty.LineHeight<TLength>>;
	letterSpacings?: ObjectOrArray<CSSProperty.LetterSpacing<TLength>>;
	sizes?: ObjectOrArray<CSSProperty.Height<{}> | CSSProperty.Width<{}>>;
	borders?: ObjectOrArray<CSSProperty.Border<{}>>;
	borderStyles?: ObjectOrArray<CSSProperty.Border<{}>>;
	borderWidths?: ObjectOrArray<CSSProperty.BorderWidth<TLength>>;
	radii?: ObjectOrArray<CSSProperty.BorderRadius<TLength>>;
	shadows?: ObjectOrArray<CSSProperty.BoxShadow>;
	zIndices?: ObjectOrArray<CSSProperty.ZIndex>;
}

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
	| T
	| null
	| Array<T | null>
	| { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T };

export type ThemeValue<
	K extends keyof ThemeType,
	ThemeType,
	TVal = any
> = ThemeType[K] extends TVal[]
	? number
	: ThemeType[K] extends Record<infer E, TVal>
	? E
	: ThemeType[K] extends ObjectOrArray<infer F>
	? F
	: never;

export interface CSSAttribute extends CSSProperties {
	[key: string]: CSSAttribute | string | number | undefined | null;
}
