import { __RecastUIComponentsInternalProps, DOMElements } from '../types';
import { Component, JSX } from 'solid-js';
import { RecastUIStyleObject, RecastUIStyleValue } from '../system';
import { BoxSystemStyleProps } from './style-props';

export type BoxComponentProps = {
	as?: DOMElements | Component<any>;
	class?: any;
	children?: JSX.Element;
	variant?: string;
	sx?: RecastUIStyleObject;
};

export type SystemStyledProps = {
	[key in BoxSystemStyleProps]?: RecastUIStyleValue<string | number>;
};

export type BoxProps = BoxComponentProps & SystemStyledProps & __RecastUIComponentsInternalProps;
