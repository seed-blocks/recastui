import React, { forwardRef, HTMLAttributes } from 'react';
import { text, TextTheme } from '@recastui/themes';
import { cl } from '../utils';

export type TextProps = TextTheme &
	HTMLAttributes<HTMLElement> & {
		as?: React.ElementType;
	};

const Text = forwardRef<HTMLElement, TextProps>(
	(
		{
			as: Component = 'div',
			size,
			weight,
			color,
			gradient,
			decoration,
			transform,
			align,
			lineClamp,
			truncate,
			className,
			...rest
		},
		ref,
	) => {
		const classNames = cl(
			text({
				size,
				weight,
				color,
				gradient,
				decoration,
				transform,
				align,
				lineClamp,
				truncate,
				className,
			}),
		);

		return <Component ref={ref} className={classNames} {...rest} />;
	},
);

Text.displayName = 'Text';

export { Text };
