import * as React from 'react';
import { link, LinkTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<LinkTheme>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ className, color, isExternal, ...props }, ref) => (
		<a
			className={cl(link({ color, isExternal, ...{ className: className as string } }))}
			ref={ref}
			data-external={!!isExternal}
			{...props}
		/>
	),
);

Link.displayName = 'Link';
