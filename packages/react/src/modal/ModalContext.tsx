import { RefObject, createContext, useContext } from 'react';
import { UseFloatingReturn } from '@floating-ui/react';
import { ModalTheme } from '@recastui/themes';

export type ModalContextType = UseFloatingReturn &
	ModalTheme & {
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

const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = (): ModalContextType => {
	const context = useContext(ModalContext);

	if (context === null) {
		throw new Error('Modal components must be wrapped in <Modal />');
	}

	return context;
};

export default ModalContext;
