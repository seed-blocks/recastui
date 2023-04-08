import React, { forwardRef, useLayoutEffect, Ref, ReactNode } from 'react';
import { useModalContext } from './ModalContext';
import { useId } from '@floating-ui/react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';

export type ModalBodyProps = {
	children: ReactNode;
	className?: string;
};

export const ModalBody = forwardRef(
	({ className, children, ...props }: ModalBodyProps, ref: Ref<HTMLDivElement>) => {
		const { setDescriptionId } = useModalContext();
		const id = useId();

		useLayoutEffect(() => {
			setDescriptionId(id);
			return () => setDescriptionId(undefined);
		}, [id, setDescriptionId]);

		return (
			<div {...props} ref={ref} id={id} className={cl(modal.body({ className }))}>
				{children}
			</div>
		);
	},
);

ModalBody.displayName = 'ModalBody';
