import React, {
	useState,
	createContext,
	useEffect,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';
import { cl } from '../utils';

export type TabsContextType = {
	activeIndex: number;
	orientation?: 'vertical' | 'horizontal';
	variant?: 'underline' | 'outline' | 'pills';
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	setActiveIndex: Dispatch<SetStateAction<number>>;
};

export type TabsProps = {
	children: ReactNode;
	defaultIndex?: number;
	orientation?: 'vertical' | 'horizontal';
	variant?: 'underline' | 'outline' | 'pills';
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	onTabChange?: (index: number) => void;
};

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs: React.FC<TabsProps> = ({
	children,
	orientation = 'horizontal',
	variant = 'underline',
	rounded = 'none',
	defaultIndex = 0,
	onTabChange,
}) => {
	const [activeIndex, setActiveIndex] = useState(defaultIndex);

	useEffect(() => {
		if (onTabChange) {
			onTabChange(activeIndex);
		}
	}, [activeIndex, onTabChange]);

	return (
		<TabsContext.Provider value={{ activeIndex, setActiveIndex, orientation, variant, rounded }}>
			<div className={cl({ 'flex flex-row': orientation === 'vertical' })}>{children}</div>
		</TabsContext.Provider>
	);
};

Tabs.displayName = 'Tabs';
