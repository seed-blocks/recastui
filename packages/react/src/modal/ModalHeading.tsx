import React, { useLayoutEffect, forwardRef, Ref, ReactNode } from 'react';
import { useModalContext } from './ModalContext';
import { useId } from '@floating-ui/react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';

export type ModalHeadingProps = {
	className?: string;
	children: ReactNode;
};

export const ModalHeading = forwardRef(
	({ className, children, ...rest }: ModalHeadingProps, ref: Ref<HTMLHeadingElement>) => {
		const { setLabelId } = useModalContext();
		const id = useId();

		useLayoutEffect(() => {
			setLabelId(id);
			return () => setLabelId(undefined);
		}, [id, setLabelId]);

		return (
			<h2 {...rest} ref={ref} id={id} className={cl(modal.heading({ className }))}>
				{children}
			</h2>
		);
	},
);

ModalHeading.displayName = 'ModalHeading';
