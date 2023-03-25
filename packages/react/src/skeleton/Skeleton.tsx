import * as React from 'react';
import { skeleton, SkeletonTheme } from '@recastui/themes';
import { cl } from '../utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, SkeletonTheme {
	isLoaded?: boolean;
	children?: React.ReactNode;
	className?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
	({ isLoaded = false, children, h, w, circle, className }, ref) => {
		const skeletonClassName = cl(skeleton({ h, w, circle, className }));
		return (
			<div className={isLoaded ? '' : skeletonClassName} ref={ref}>
				{isLoaded && children}
			</div>
		);
	},
);

Skeleton.displayName = 'Skeleton';
