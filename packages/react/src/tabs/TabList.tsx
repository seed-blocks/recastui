import React, { ReactNode, ReactElement, useContext } from 'react';
import { TabProps } from './Tab';
import { tabList } from '@recastui/themes';
import { cl } from '../utils';
import { TabsContext } from './Tabs';

export type TabListProps = {
	className?: string;
	children: ReactNode;
};

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
	({ className, children }, ref) => {
		const context = useContext(TabsContext);
		const orientation = context?.orientation;
		const variant = context?.variant;
		const variantClassNames = cl(tabList({ orientation, variant, className }));
		const childrenWithIndex = React.Children.map(children, (child, index) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child as ReactElement<TabProps>, {
					index,
					totalTabs: React.Children.count(children),
				});
			}
			return child;
		});

		return (
			<div ref={ref} className={variantClassNames}>
				{childrenWithIndex}
			</div>
		);
	},
);

TabList.displayName = 'TabList';
