import React, { ReactNode, useContext } from 'react';
import { TabsContext } from './Tabs';
import { cl } from '../utils';

export type TabPanelProps = {
	children: ReactNode;
	_index?: number;
	className?: string;
};

export const TabPanel: React.FC<TabPanelProps> = ({
	children,
	_index = 0,
	className = '',
	...props
}) => {
	const context = useContext(TabsContext);
	const isActive = context?.activeIndex === _index;

	return (
		<div
			className={cl('hidden', { block: isActive })}
			role='tabpanel'
			aria-hidden={!isActive}
			{...props}>
			{children}
		</div>
	);
};

TabPanel.displayName = 'TabPanel';
