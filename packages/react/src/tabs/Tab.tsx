import React, { useContext, useRef, useEffect, ReactNode, useState } from 'react';
import { TabsContext } from './Tabs';
import { tab } from '@recastui/themes';
import { cl } from '../utils';

export type TabProps = {
	children: ReactNode;
	_index?: number;
	_totalTabs?: number;
	className?: string;
	disabled?: boolean;
};

let firstRender = false;

export const Tab = ({
	children,
	_index = 0,
	_totalTabs = 1,
	className = '',
	disabled,
	...props
}: TabProps) => {
	const isFirstRender = useRef(true);
	const context = useContext(TabsContext);
	const isActive = context?.activeIndex === _index;
	const orientation = context?.orientation;
	const variant = context?.variant;
	const rounded = context?.rounded;
	const variantClassNames = cl(tab({ variant, orientation, isActive, rounded, className }));
	const tabRef = useRef<HTMLButtonElement>(null);

	const selectNext = (event: React.KeyboardEvent) => {
		event.preventDefault();
		context?.setActiveIndex((prevIndex: number) => {
			return (prevIndex + 1) % _totalTabs;
		});
	};

	const selectPrev = (event: React.KeyboardEvent) => {
		event.preventDefault();
		context?.setActiveIndex((prevIndex: number) => {
			return (prevIndex - 1 + _totalTabs) % _totalTabs;
		});
	};

	useEffect(() => {
		// Prevent active tab from focusing on the first render
		if (isActive && tabRef.current && !isFirstRender.current) {
			tabRef.current.focus();
		} else if (isFirstRender.current && isActive) {
			isFirstRender.current = false;
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
			onClick={() => context?.setActiveIndex(_index)}
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
