/*!
 * Parts of this file are based on code from Theme-ui
 * MIT Licensed, Copyright (c) Brent Jackson.
 *
 * Credits to the Theme-ui team:
 * https://github.com/system-ui/theme-ui/blob/develop/packages/css/src/types.ts
 */

import * as CSS from 'csstype';
import { Theme } from '../theme';

type StandardCSSProperties = CSS.Properties<number | string>;

/**
 * Style properties with value of undefined, null or false are ignored.
 */
export type RecastUIEmpty = undefined | null | false;

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also work.
 *
 * For more information see: https://styled-system.com/responsive-styles
 */
export type ResponsiveStyleValue<T> = T | RecastUIEmpty | Array<T | RecastUIEmpty>;

/**
 * All non-vendor-prefixed CSS properties. (Allow `number` to support CSS-in-JS libs,
 * since they are converted to pixels)
 */
export interface CSSProperties
	extends CSS.StandardProperties<number | string>,
		CSS.SvgProperties<number | string>,
		CSS.VendorProperties<number | string> {}

type CSSPropertiesWithMultiValues = {
	[K in keyof CSSProperties]: CSSProperties[K];
};

type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject };

type CSSInterpolation = undefined | number | string | CSSObject;

interface CSSOthersObjectForCSSObject {
	[propertiesName: string]: CSSInterpolation;
}

/**
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types
 */
export interface CSSObject
	extends CSSPropertiesWithMultiValues,
		CSSPseudosForCSSObject,
		CSSOthersObjectForCSSObject {}

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...)
 */
export type CSSPseudoSelectorProps = { [K in CSS.Pseudos]?: RecastUIStyleObject };

interface AliasesCSSProperties {
	/**
	 * The **`background-color`** CSS property sets the background color of an element.
	 *
	 * **Initial value**: `transparent`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/background-color
	 */
	bg?: StandardCSSProperties['backgroundColor'];
	/**
	 * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin
	 */
	m?: StandardCSSProperties['margin'];
	/**
	 * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
	 */
	mt?: StandardCSSProperties['marginTop'];
	/**
	 * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
	 */
	mr?: StandardCSSProperties['marginRight'];
	/**
	 * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
	 */
	mb?: StandardCSSProperties['marginBottom'];
	/**
	 * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
	 */
	ml?: StandardCSSProperties['marginLeft'];
	/**
	 * The **`mx`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value placesit
	 * farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://styled-system.com/#margin-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
	 */
	mx?: StandardCSSProperties['marginLeft'];
	/**
	 * The **`marginX`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value
	 * places it farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://styled-system.com/#margin-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
	 */
	marginX?: StandardCSSProperties['marginLeft'];
	/**
	 * The **`my`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places it
	 * farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://styled-system.com/#margin-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
	 */
	my?: StandardCSSProperties['marginTop'];
	/**
	 * The **`marginY`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places
	 * it farther from its neighbors, while a negative value places it closer.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://styled-system.com/#margin-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
	 * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
	 */
	marginY?: StandardCSSProperties['marginTop'];
	/**
	 * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding
	 */
	p?: StandardCSSProperties['padding'];
	/**
	 * The **`padding-top`** padding area on the top of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
	 */
	pt?: StandardCSSProperties['paddingTop'];
	/**
	 * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
	 */
	pr?: StandardCSSProperties['paddingRight'];
	/**
	 * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
	 */
	pb?: StandardCSSProperties['paddingBottom'];
	/**
	 * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
	 */
	pl?: StandardCSSProperties['paddingLeft'];
	/**
	 * The **`px`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://styled-system.com/#padding-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
	 */
	px?: StandardCSSProperties['paddingLeft'];
	/**
	 * The **`paddingX`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://styled-system.com/#padding-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
	 */
	paddingX?: StandardCSSProperties['paddingLeft'];
	/**
	 * The **`py`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://styled-system.com/#padding-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
	 */
	py?: StandardCSSProperties['paddingTop'];
	/**
	 * The **`paddingY`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
	 *
	 * **Initial value**: `0`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://styled-system.com/#padding-props
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
	 * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
	 */
	paddingY?: StandardCSSProperties['paddingTop'];
	/**
	 * The **`size`** is a shorthand property for CSS properties **`width`** and **`height`**.
	 *
	 * @see https://theme-ui.com/sx-prop#theme-aware-properties
	 * @see https://developer.mozilla.org/docs/Web/CSS/width
	 * @see https://developer.mozilla.org/docs/Web/CSS/height
	 */

	/**
	 * The **`scrollMarginX`** is shorthand property for CSS properties **`scroll-margin-left`** and **`scroll-margin-right`**. They set the margin of the scroll snap area that is used for snapping the element to the snapport.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right
	 */
	scrollMarginX?: StandardCSSProperties['scrollMarginLeft'];

	/**
	 * The **`scrollMarginY`** is shorthand property for CSS properties **`scroll-margin-top`** and **`scroll-margin-bottom`**. They set the margin of the scroll snap area that is used for snapping the element to the snapport.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom
	 */
	scrollMarginY?: StandardCSSProperties['scrollMarginTop'];

	/**
	 * The **`scrollPaddingX`** is shorthand property for CSS properties **`scroll-padding-left`** and **`scroll-padding-right`**. They set the width of the scroll padding area on the left and right side of an element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right
	 */
	scrollPaddingX?: StandardCSSProperties['scrollPaddingLeft'];

	/**
	 * The **`scrollPaddingY`** is shorthand property for CSS properties **`scroll-padding-top`** and **`scroll-padding-bottom`**. They set the width of the scroll padding area on the top and bottom side of an element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom
	 */
	scrollPaddingY?: StandardCSSProperties['scrollPaddingTop'];
	size?: StandardCSSProperties['width'];

	w?: StandardCSSProperties['width'];
	maxW?: StandardCSSProperties['maxWidth'];
	h?: StandardCSSProperties['height'];
	maxH?: StandardCSSProperties['maxHeight'];
	d?: StandardCSSProperties['display'];
}

interface OverwriteCSSProperties {
	/**
	 * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the
	 * element, blur and spread radii, and color.
	 *
	 * **Initial value**: `none`
	 *
	 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
	 * | :-----: | :-----: | :-----: | :----: | :---: |
	 * | **10**  |  **4**  | **5.1** | **12** | **9** |
	 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
	 */
	boxShadow?: CSS.Property.BoxShadow | number;
	/**
	 * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only
	 * available in `normal` and `bold`.
	 *
	 * **Initial value**: `normal`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **2**  |  **1**  | **1**  | **12** | **3** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
	 */
	fontWeight?: CSS.Property.FontWeight | string;

	/**
	 * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
	 *
	 * **Initial value**: `none`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |   IE    |
	 * | :----: | :-----: | :----: | :----: | :-----: |
	 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
	 */
	borderTopStyle?: CSS.Property.BorderTopStyle | string;
	/**
	 * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
	 *
	 * **Initial value**: `none`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |   IE    |
	 * | :----: | :-----: | :----: | :----: | :-----: |
	 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
	 */
	borderBottomStyle?: CSS.Property.BorderBottomStyle | string;
	/**
	 * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
	 *
	 * **Initial value**: `none`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |   IE    |
	 * | :----: | :-----: | :----: | :----: | :-----: |
	 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
	 */
	borderRightStyle?: CSS.Property.BorderRightStyle | string;
	/**
	 * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
	 *
	 * **Initial value**: `none`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |   IE    |
	 * | :----: | :-----: | :----: | :----: | :-----: |
	 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
	 */
	borderLeftStyle?: CSS.Property.BorderLeftStyle | string;
	/**
	 * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
	 *
	 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
	 * | :-----: | :-----: | :-----: | :----: | :---: |
	 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
	 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
	 */
	borderRadius?: CSS.Property.BorderRadius<string | number>;

	/**
	 * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
	 *
	 * **Initial value**: `auto`
	 *
	 * | Chrome | Firefox | Safari |  Edge  |  IE   |
	 * | :----: | :-----: | :----: | :----: | :---: |
	 * | **1**  |  **1**  | **1**  | **12** | **4** |
	 *
	 * @see https://developer.mozilla.org/docs/Web/CSS/z-index
	 */
	zIndex?: CSS.Property.ZIndex | string;
}

/**
 * Map of all available CSS properties (including aliases and overwrites)
 * and their raw value.
 */
export interface RecastUIExtendedCSSProperties
	extends Omit<CSSProperties, keyof OverwriteCSSProperties>,
		AliasesCSSProperties,
		OverwriteCSSProperties {}

export type RecastUIStyleValue<T> = ResponsiveStyleValue<T | ObjectWithDefault<T> | T[]>;

export type StylePropertyValue<T> =
	| RecastUIStyleValue<Exclude<T, undefined>>
	| ((theme: Theme) => RecastUIStyleValue<Exclude<T, undefined>> | undefined)
	| RecastUIStyleObject
	| RecastUIEmpty;

export type RecastUICSSProperties = {
	[K in keyof RecastUIExtendedCSSProperties]: StylePropertyValue<RecastUIExtendedCSSProperties[K]>;
};

export interface VariantProperty {
	variant?: string;
}

export interface ThemeDerivedStyles {
	(theme: Theme): RecastUICSSObject;
}

export interface Label {
	label?: string;
}

export interface CSSOthersObject {
	[k: string]: StylePropertyValue<string | number>;
}

export interface RecastUICSSObject
	extends RecastUICSSProperties,
		CSSPseudoSelectorProps,
		CSSOthersObject,
		VariantProperty,
		Label {}

/**
 * The `RecastUIStyleObject` extends [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type RecastUIStyleObject = RecastUICSSObject | ThemeDerivedStyles;

export type TLengthStyledSystem = string | 0 | number;

export interface ObjectWithDefault<T> {
	__default?: T;
}

export type PseudoSelectorValue = RecastUIStyleObject;

export type PseudoSelectorPropName = keyof PseudoSelectorProps;

export type PseudoSelectorProps = {
	/** Styles for CSS selector `&:hover`. */
	_hover: PseudoSelectorValue;

	/** Styles for CSS Selector `&:active`. */
	_active: PseudoSelectorValue;

	/** Styles for CSS selector `&:focus. */
	_focus: PseudoSelectorValue;

	/** Styles for the highlighted state. */
	_highlighted: PseudoSelectorValue;

	/**
	 * Styles to apply when a child of this element has received focus
	 * - CSS Selector `&:focus-within`
	 */
	_focusWithin: PseudoSelectorValue;

	/**
	 * Styles to apply when this element has received focus via tabbing
	 * - CSS Selector `&:focus-visible`
	 */
	_focusVisible: PseudoSelectorValue;

	/**
	 * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
	 * - `&[aria-disabled=true]`
	 * - `&:disabled`
	 * - `&[data-disabled]`
	 */
	_disabled: PseudoSelectorValue;

	/** Styles for CSS Selector `&:readonly`. */
	_readOnly: PseudoSelectorValue;

	/**
	 * Styles for CSS selector `&::before`
	 *
	 * NOTE:When using this, ensure the `content` is wrapped in a backtick.
	 * @example
	 * ```jsx
	 * <Box _before={{content:`""` }}/>
	 * ```
	 */
	_before: PseudoSelectorValue;

	/**
	 * Styles for CSS selector `&::after`
	 *
	 * NOTE:When using this, ensure the `content` is wrapped in a backtick.
	 * @example
	 * ```jsx
	 * <Box _after={{content:`""` }}/>
	 * ```
	 */
	_after: PseudoSelectorValue;

	/** Styles for CSS selector `&:empty`. */
	_empty: PseudoSelectorValue;

	/**
	 * Styles to apply when the ARIA attribute `aria-expanded` is `true`
	 * - CSS selector `&[aria-expanded=true]`
	 */
	_expanded: PseudoSelectorValue;

	/**
	 * Styles to apply when the ARIA attribute `aria-checked` is `true`
	 * - CSS selector `&[aria-checked=true]`
	 */
	_checked: PseudoSelectorValue;

	/**
	 * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
	 * - CSS selector `&[aria-grabbed=true]`
	 */
	_grabbed: PseudoSelectorValue;

	/**
	 * Styles for CSS Selector `&[aria-pressed=true]`
	 * Typically used to style the current "pressed" state of toggle buttons
	 */
	_pressed: PseudoSelectorValue;

	/**
	 * Styles to apply when the ARIA attribute `aria-invalid` is `true`
	 * - CSS selector `&[aria-invalid=true]`
	 */
	_invalid: PseudoSelectorValue;

	/**
	 * Styles for the valid state
	 * - CSS selector `&[data-valid], &[data-state=valid]`
	 */
	_valid: PseudoSelectorValue;

	/**
	 * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
	 * Useful for styling loading states
	 */
	_loading: PseudoSelectorValue;

	/**
	 * Styles to apply when the ARIA attribute `aria-selected` is `true`
	 *
	 * - CSS selector `&[aria-selected=true]`
	 */
	_selected: PseudoSelectorValue;

	/** Styles for CSS Selector `[hidden=true]`. */
	_hidden: PseudoSelectorValue;

	/** Styles for CSS Selector `&:-webkit-autofill`. */
	_autofill: PseudoSelectorValue;

	/** Styles for CSS Selector `&:nth-child(even)`. */
	_even: PseudoSelectorValue;

	/** Styles for CSS Selector `&:nth-child(odd)`. */
	_odd: PseudoSelectorValue;

	/** Styles for CSS Selector `&:first-child`. */
	_first: PseudoSelectorValue;

	/** Styles for CSS Selector `&:last-child`. */
	_last: PseudoSelectorValue;

	/** Styles for CSS Selector `&:not(:first-child)`. */
	_notFirst: PseudoSelectorValue;

	/** Styles for CSS Selector `&:not(:last-child)`. */
	_notLast: PseudoSelectorValue;

	/** Styles for CSS Selector `&:visited`. */
	_visited: PseudoSelectorValue;

	/**
	 * Used to style the active link in a navigation
	 * Styles for CSS Selector `&[aria-current=page]`
	 */
	_activeLink: PseudoSelectorValue;

	/**
	 * Used to style the current step within a process
	 * Styles for CSS Selector `&[aria-current=step]`
	 */
	_activeStep: PseudoSelectorValue;

	/**
	 * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
	 * - CSS selector `&[aria-checked=mixed]`
	 */
	_indeterminate: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered. */
	_groupHover: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` is hovered. */
	_peerHover: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused. */
	_groupFocus: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` is focused. */
	_peerFocus: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus. */
	_groupFocusVisible: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus. */
	_peerFocusVisible: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active. */
	_groupActive: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` is active. */
	_peerActive: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled. */
	_groupDisabled: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` is disabled. */
	_peerDisabled: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid. */
	_groupInvalid: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` is invalid. */
	_peerInvalid: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked. */
	_groupChecked: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` is checked. */
	_peerChecked: PseudoSelectorValue;

	/** Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within. */
	_groupFocusWithin: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` has focus within. */
	_peerFocusWithin: PseudoSelectorValue;

	/** Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown. */
	_peerPlaceholderShown: PseudoSelectorValue;

	/** Styles for CSS Selector `&::placeholder`.. */
	_placeholder: PseudoSelectorValue;

	/** Styles for CSS Selector `&:placeholder-shown`.. */
	_placeholderShown: PseudoSelectorValue;

	/** Styles for CSS Selector `&:fullscreen`.. */
	_fullScreen: PseudoSelectorValue;

	/** Styles for CSS Selector `&::selection`. */
	_selection: PseudoSelectorValue;

	/**
	 * Styles for CSS Selector `[dir=rtl] &`
	 * It is applied when a parent element or this element has `dir="rtl"`
	 */
	_rtl: PseudoSelectorValue;

	/**
	 * Styles for CSS Selector `[dir=ltr] &`
	 * It is applied when a parent element or this element has `dir="ltr"`
	 */
	_ltr: PseudoSelectorValue;

	/**
	 * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
	 * It is used when the user has requested the system use a light or dark color theme.
	 */
	_mediaDark: PseudoSelectorValue;

	/**
	 * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
	 * It is used when the user has requested the system to reduce the amount of animations.
	 */
	_mediaReduceMotion: PseudoSelectorValue;
};
