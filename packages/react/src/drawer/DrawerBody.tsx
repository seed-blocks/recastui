import React, { forwardRef, useLayoutEffect, Ref, ReactNode } from 'react';
import { useDrawerContext } from './DrawerContext';
import { useId } from '@floating-ui/react';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';

export type DrawerBodyProps = {
	children: ReactNode;
	className?: string;
};

export const DrawerBody = forwardRef(
	({ className, children, ...props }: DrawerBodyProps, ref: Ref<HTMLDivElement>) => {
		const { setDescriptionId } = useDrawerContext();
		const id = useId();

		useLayoutEffect(() => {
			setDescriptionId(id);
			return () => setDescriptionId(undefined);
		}, [id, setDescriptionId]);

		return (
			<div {...props} ref={ref} id={id} className={cl(drawer.body({ className }))}>
				{children}
			</div>
		);
	},
);

DrawerBody.displayName = 'DrawerBody';
