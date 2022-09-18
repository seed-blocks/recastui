import { styled } from '@recastui/styled';
import {
	compose,
	space,
	layout,
	background,
	border,
	color,
	pseudoMixin,
	position,
	flexbox,
	grid,
	SpaceProps,
	LayoutProps,
	BackgroundProps,
	BorderProps,
	ColorProps,
	PseudoProps,
	PositionProps,
	FlexboxProps,
	GridProps,
	css
} from '@recastui/system';
import { SxProp } from '../types';

export type BaseBoxProps = SpaceProps &
	LayoutProps &
	BackgroundProps &
	BorderProps &
	ColorProps &
	PositionProps &
	FlexboxProps &
	GridProps;
export type BoxProps = BaseBoxProps & PseudoProps & SxProp;

export const Box = styled('div')<BoxProps>`
	${compose(space, layout, background, border, color, position, flexbox, grid)};
`;
