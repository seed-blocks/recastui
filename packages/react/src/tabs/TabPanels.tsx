import React, { ReactNode, ReactElement } from 'react';
import { TabPanelProps } from './TabPanel';
import { cl } from '../utils';

export type TabPanelsProps = {
	className?: string;
	children: ReactNode;
};

export const TabPanels: React.FC<TabPanelsProps> = ({ className, children }) => {
	const childrenWithIndex = React.Children.map(children, (child, index) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child as ReactElement<TabPanelProps>, { _index: index });
		}
		return child;
	});

	return <div className={cl('relative', className)}>{childrenWithIndex}</div>;
};

TabPanels.displayName = 'TabPanels';
