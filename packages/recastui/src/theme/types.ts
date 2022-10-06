import * as CSS from 'csstype';
import {
	ObjectWithDefault,
	RecastUICSSProperties,
	RecastUIStyleObject,
	TLengthStyledSystem
} from '../system';

export interface ScaleDict<T> {
	[K: string]: T | T[] | NestedScaleDict<T> | undefined;
	[I: number]: T;
}

export interface NestedScaleDict<T> extends ScaleDict<T>, ObjectWithDefault<T> {}

export type Scale<T> = T[] | ScaleDict<T>;

export type NestedScale<T> = T[] | NestedScaleDict<T>;

export type ColorOrNestedColorScale = CSS.Property.Color | NestedScale<CSS.Property.Color>;

export interface ColorMode extends ScaleDict<CSS.Property.Color> {
	background?: ColorOrNestedColorScale;
	text?: ColorOrNestedColorScale;
	primary?: ColorOrNestedColorScale;
	secondary?: ColorOrNestedColorScale;
	accent?: ColorOrNestedColorScale;
	highlight?: ColorOrNestedColorScale;
	muted?: ColorOrNestedColorScale;
}

export type ColorModesScale = ColorMode & {
	modes?: {
		[k: string]: ColorMode;
	};
};

export interface ThemeStyles {
	tr?: RecastUIStyleObject;
	th?: RecastUIStyleObject;
	td?: RecastUIStyleObject;
	em?: RecastUIStyleObject;
	strong?: RecastUIStyleObject;
	div?: RecastUIStyleObject;
	p?: RecastUIStyleObject;
	b?: RecastUIStyleObject;
	i?: RecastUIStyleObject;
	a?: RecastUIStyleObject;
	h1?: RecastUIStyleObject;
	h2?: RecastUIStyleObject;
	h3?: RecastUIStyleObject;
	h4?: RecastUIStyleObject;
	h5?: RecastUIStyleObject;
	h6?: RecastUIStyleObject;
	img?: RecastUIStyleObject;
	pre?: RecastUIStyleObject;
	code?: RecastUIStyleObject;
	ol?: RecastUIStyleObject;
	ul?: RecastUIStyleObject;
	li?: RecastUIStyleObject;
	blockquote?: RecastUIStyleObject;
	hr?: RecastUIStyleObject;
	table?: RecastUIStyleObject;
	delete?: RecastUIStyleObject;
	inlineCode?: RecastUIStyleObject;
	thematicBreak?: RecastUIStyleObject;
	root?: RecastUIStyleObject;
	[key: string]: RecastUIStyleObject | undefined;
}

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

export interface Theme {
	breakpoints?: Array<string>;
	mediaQueries?: { [size: string]: string };
	space?: Scale<CSS.Property.Margin<number | string>>;
	fontSizes?: Scale<CSS.Property.FontSize<number>>;
	fonts?: Scale<CSS.Property.FontFamily>;
	fontWeights?: Scale<CSS.Property.FontWeight>;
	lineHeights?: Scale<CSS.Property.LineHeight<TLengthStyledSystem>>;
	letterSpacings?: Scale<CSS.Property.LetterSpacing<TLengthStyledSystem>>;
	sizes?: Scale<CSS.Property.Height<{}> | CSS.Property.Width<{}>>;
	borders?: Scale<CSS.Property.Border<{}>>;
	borderStyles?: Scale<CSS.Property.Border<{}>>;
	borderWidths?: Scale<CSS.Property.BorderWidth<TLengthStyledSystem>>;
	radii?: Scale<CSS.Property.BorderRadius<TLengthStyledSystem>>;
	shadows?: Scale<CSS.Property.BoxShadow>;
	zIndices?: Scale<CSS.Property.ZIndex>;
	colorStyles?: Scale<RecastUICSSProperties>;
	textStyles?: Scale<RecastUICSSProperties>;
	opacities?: Scale<CSS.Property.Opacity>;
	transitions?: Scale<CSS.Property.Transition>;
	config?: RecastUIConfig;
	colors?: ColorModesScale;
	rawColors?: ColorModesScale;
	styles?: ThemeStyles;
	grids?: Record<string, RecastUIStyleObject>;
	buttons?: Record<string, RecastUIStyleObject>;
	text?: Record<string, RecastUIStyleObject>;
	links?: Record<string, RecastUIStyleObject>;
	images?: Record<string, RecastUIStyleObject>;
	cards?: Record<string, RecastUIStyleObject>;
	layout?: Record<string, RecastUIStyleObject>;
	forms?: Record<string, RecastUIStyleObject>;
	badges?: Record<string, RecastUIStyleObject>;
	alerts?: Record<string, RecastUIStyleObject>;
	messages?: Record<string, RecastUIStyleObject>;
}

export interface ThemeContextProps {
	theme: Theme;
	children?: any;
}
