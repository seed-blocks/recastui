const borderProps = [
	'border',
	'borderWidth',
	'borderStyle',
	'borderColor',
	'borderTop',
	'borderTopWidth',
	'borderTopStyle',
	'borderTopColor',
	'borderRight',
	'borderRightWidth',
	'borderRightStyle',
	'borderRightColor',
	'borderBottom',
	'borderBottomWidth',
	'borderBottomStyle',
	'borderBottomColor',
	'borderLeft',
	'borderLeftWidth',
	'borderLeftStyle',
	'borderLeftColor',
	'borderX',
	'borderY'
] as const;

const colorProps = ['color', 'background', 'bg', 'backgroundColor', 'bgColor', 'opacity'] as const;

const flexboxProps = [
	'alignItems',
	'alignContent',
	'alignSelf',
	'justifyItems',
	'justifyContent',
	'justifySelf',
	'flexDirection',
	'flexWrap',
	'flex',
	'flexGrow',
	'flexShrink',
	'flexBasis',
	'order'
] as const;

const gridLayoutProps = [
	'gridTemplate',
	'gridTemplateColumns',
	'gridTemplateRows',
	'gridTemplateAreas',
	'gridArea',
	'gridRow',
	'gridRowStart',
	'gridRowEnd',
	'gridColumn',
	'gridColumnStart',
	'gridColumnEnd',
	'gridAutoFlow',
	'gridAutoColumns',
	'gridAutoRows',
	'placeItems',
	'placeContent',
	'placeSelf',
	'gap',
	'rowGap',
	'columnGap'
] as const;

const interactivityProps = [
	'appearance',
	'userSelect',
	'pointerEvents',
	'resize',
	'cursor',
	'outline',
	'outlineOffset',
	'outlineColor'
] as const;

const layoutProps = [
	'display',
	'd',
	'verticalAlign',
	'overflow',
	'overflowX',
	'overflowY'
] as const;

const marginProps = [
	'margin',
	'marginTop',
	'marginRight',
	'marginEnd',
	'marginBottom',
	'marginLeft',
	'marginStart',
	'm',
	'mt',
	'mr',
	'me',
	'mb',
	'ml',
	'ms',
	'mx',
	'my'
] as const;

const paddingProps = [
	'padding',
	'paddingTop',
	'paddingRight',
	'paddingEnd',
	'paddingBottom',
	'paddingLeft',
	'paddingStart',
	'p',
	'pt',
	'pr',
	'pe',
	'pb',
	'pl',
	'ps',
	'px',
	'py'
] as const;

const positionProps = ['position', 'pos', 'zIndex', 'top', 'right', 'bottom', 'left'] as const;

const radiiProps = [
	'borderRadius',
	'borderTopRightRadius',
	'borderTopLeftRadius',
	'borderBottomRightRadius',
	'borderBottomLeftRadius',
	'borderTopRadius',
	'borderRightRadius',
	'borderBottomRadius',
	'borderLeftRadius',
	'rounded',
	'roundedTop',
	'roundedRight',
	'roundedBottom',
	'roundedLeft'
] as const;

const shadowProps = ['textShadow', 'boxShadow', 'shadow'] as const;

const sizeProps = [
	'width',
	'minWidth',
	'maxWidth',
	'height',
	'minHeight',
	'maxHeight',
	'w',
	'minW',
	'maxW',
	'h',
	'minH',
	'maxH',
	'size'
] as const;

const transformProps = ['transform', 'transformOrigin', 'clipPath'] as const;

const transitionProps = [
	'transition',
	'transitionProperty',
	'transitionTimingFunction',
	'transitionDuration',
	'transitionDelay',
	'animation',
	'willChange'
] as const;

const typographyProps = [
	'fontFamily',
	'fontSize',
	'fontWeight',
	'lineHeight',
	'letterSpacing',
	'textAlign',
	'fontStyle',
	'textTransform',
	'textDecoration'
] as const;

const otherStyleProps = ['objectFit', 'objectPosition'] as const;

const pseudoSelectorProps = [
	'_hover',
	'_active',
	'_focus',
	'_highlighted',
	'_focusWithin',
	'_focusVisible',
	'_disabled',
	'_readOnly',
	'_before',
	'_after',
	'_empty',
	'_expanded',
	'_checked',
	'_grabbed',
	'_pressed',
	'_invalid',
	'_valid',
	'_loading',
	'_selected',
	'_hidden',
	'_autofill',
	'_even',
	'_odd',
	'_first',
	'_last',
	'_notFirst',
	'_notLast',
	'_visited',
	'_activeLink',
	'_activeStep',
	'_indeterminate',
	'_groupHover',
	'_peerHover',
	'_groupFocus',
	'_peerFocus',
	'_groupFocusVisible',
	'_peerFocusVisible',
	'_groupActive',
	'_peerActive',
	'_groupDisabled',
	'_peerDisabled',
	'_groupInvalid',
	'_peerInvalid',
	'_groupChecked',
	'_peerChecked',
	'_groupFocusWithin',
	'_peerFocusWithin',
	'_peerPlaceholderShown',
	'_placeholder',
	'_placeholderShown',
	'_fullScreen',
	'_selection',
	'_rtl',
	'_ltr',
	'_mediaDark',
	'_mediaReduceMotion'
] as const;

export const boxSystemStyleProps = [
	...borderProps,
	...colorProps,
	...flexboxProps,
	...gridLayoutProps,
	...interactivityProps,
	...layoutProps,
	...marginProps,
	...paddingProps,
	...positionProps,
	...radiiProps,
	...shadowProps,
	...sizeProps,
	...transformProps,
	...transitionProps,
	...typographyProps,
	...otherStyleProps,
	...pseudoSelectorProps
] as const;

export type BoxSystemStyleProps = typeof boxSystemStyleProps[number];
