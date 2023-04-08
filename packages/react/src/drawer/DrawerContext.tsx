import { RefObject, createContext, useContext } from 'react';
import { UseFloatingReturn } from '@floating-ui/react';
import { DrawerTheme } from '@recastui/themes';

export type DrawerContextType = UseFloatingReturn &
	DrawerTheme & {
		open: boolean;
		setOpen: (open: boolean) => void;
		refs: {
			setReference: (node: HTMLElement | null) => void;
			setFloating: (node: HTMLElement | null) => void;
		};
		getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
		getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
		getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
		labelId?: string;
		descriptionId?: string;
		setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
		setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
		initialFocus?: RefObject<HTMLElement>;
		returnFocus?: boolean;
	};

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawerContext = (): DrawerContextType => {
	const context = useContext(DrawerContext);

	if (context === null) {
		throw new Error('Drawer components must be wrapped in <Drawer />');
	}

	return context;
};
