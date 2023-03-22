import React, { useContext, useRef, useEffect, ReactNode, useState } from 'react';
import { TabsContext } from './Tabs';
import { tab } from '@recastui/themes';
import { cl } from '../utils';

export type TabProps = {
	children: ReactNode;
	index?: number;
	totalTabs?: number;
	className?: string;
	disabled?: boolean;
};

let firstRender = false;

export const Tab = ({
	children,
	index = 0,
	totalTabs = 1,
	className = '',
	disabled,
	...props
}: TabProps) => {
	const context = useContext(TabsContext);
	const isActive = context?.activeIndex === index;
	const orientation = context?.orientation;
	const variant = context?.variant;
	const rounded = context?.rounded;
	const variantClassNames = cl(tab({ variant, orientation, isActive, rounded, className }));
	const tabRef = useRef<HTMLButtonElement>(null);

	const selectNext = (event: React.KeyboardEvent) => {
		event.preventDefault();
		context?.setActiveIndex((prevIndex: number) => {
			return (prevIndex + 1) % totalTabs;
		});
	};

	const selectPrev = (event: React.KeyboardEvent) => {
		event.preventDefault();
		context?.setActiveIndex((prevIndex: number) => {
			return (prevIndex - 1 + totalTabs) % totalTabs;
		});
	};

	useEffect(() => {
		// Prevent active tab from focusing on the first render
		if (isActive && tabRef.current && firstRender) {
			tabRef.current.focus();
		} else if (!firstRender && isActive) {
			firstRender = true;
		}
	}, [isActive]);

	const keyDownMap = {
		ArrowRight: selectNext,
		ArrowDown: selectNext,
		ArrowLeft: selectPrev,
		ArrowUp: selectPrev,
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (Object.keys(keyDownMap).includes(event.key)) {
			keyDownMap[event.key as keyof typeof keyDownMap](event);
		}
	};

	return (
		<button
			type='button'
			ref={tabRef}
			onClick={() => context?.setActiveIndex(index)}
			onKeyDown={handleKeyDown}
			role='tab'
			disabled={disabled}
			tabIndex={isActive && !disabled ? 0 : -1}
			aria-selected={isActive}
			className={variantClassNames}
			{...props}>
			{children}
		</button>
	);
};

Tab.displayName = 'Tab';
