import * as React from 'react';
import { heading, HeadingTheme } from '@recastui/themes';
import { Text, TextProps } from '../text';
import { cl } from '../utils';

export type HeadingProps = TextProps &
	HeadingTheme & {
		className?: string;
	};

export const Heading: React.FC<HeadingProps> = ({ className, order, ...rest }) => {
	const Component = `h${order}` as keyof JSX.IntrinsicElements;
	return <Text as={Component} className={cl(heading({ order, className }))} {...rest} />;
};

Heading.displayName = 'Heading';
