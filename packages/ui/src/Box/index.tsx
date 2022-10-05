import { css } from 'goober';
import { BoxSystemStyleProps } from './style-props';
import { mergeProps, splitProps } from 'solid-js';
import { Dynamic, isServer } from 'solid-js/web';
import { get, RecastUIStyleObject, RecastUIStyleValue, systemCss } from '../system';
import { getAllUsedStyleProps, isEmptyObject } from '../utils';
import { useTheme } from '../theme';
import { BoxProps } from '@recastui/ui/Box/types';
import { __RecastUIComponentsInternalProps } from '@recastui/ui/types';

/**
 * Use the Box component as a layout primitive to add margin, padding, and colors to content.
 * @see https://recastui.com/components/box
 */
export function Box(props: BoxProps) {
	const theme = useTheme();
	const withTheme = mergeProps({ as: 'div', __themeKey: 'variants', theme }, props);

	// Get all used system style props
	const usedSystemStylePropNames = getAllUsedStyleProps(props);

	const baseStyles: RecastUIStyleObject = {
		boxSizing: 'border-box',
		margin: 0,
		minWidth: 0
	};

	const [__themeKey, __css, variant, sxProp, systemStyleProps, otherProps] = splitProps(
		withTheme,
		['__themeKey'],
		['__css'],
		['variant'],
		['sx'],
		usedSystemStylePropNames
	);
	const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant as string);
	/*
	 * Style injection order (first to last)
	 * - class prop
	 * - baseStyle (least specific)
	 * - variants
	 * - __css
	 * - styled system props
	 * - sx (override all)
	 */
	const baseStylesClass = css(systemCss(baseStyles)(theme));
	const variantStyles = variantInTheme && systemCss(variantInTheme)(theme);
	const __cssStylesStyles = systemCss(__css)(theme);
	const systemPropsStyles = systemCss(systemStyleProps as RecastUIStyleObject)(theme);
	const sxPropStyles = systemCss(sxProp)(theme);

	const clone = mergeProps(otherProps, {
		get class() {
			return [
				otherProps.class,
				baseStylesClass,
				...[variantStyles, __cssStylesStyles, systemPropsStyles, sxPropStyles].map(styles =>
					styles && !isEmptyObject(styles) ? css(styles) : ''
				)
			]
				.filter(Boolean)
				.join(' ');
		}
	});
	const [local, newProps] = splitProps(clone, ['as', 'theme']);
	let component;
	if (typeof local.as === 'function') {
		component = local.as(newProps);
	} else if (isServer) {
		const [children, others] = splitProps(newProps, ['children']);
		component = Dynamic({
			component: local.as,
			get children() {
				return children;
			},
			...others
		});
	} else {
		component = Dynamic(mergeProps({ component: local.as }, newProps));
	}
	return component;
}
