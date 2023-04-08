import { useMemo, useState, RefObject } from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { DrawerContextType } from './DrawerContext';
import { DrawerTheme } from '@recastui/themes';

export type UseDrawerOptions = DrawerTheme & {
	initialOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	initialFocus?: RefObject<HTMLElement>;
	returnFocus?: boolean;
};

export function useDrawer({
	initialOpen = false,
	open: controlledOpen,
	onOpenChange: setControlledOpen,
	returnFocus = true,
	initialFocus,
	size,
	position,
}: UseDrawerOptions): DrawerContextType {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
	const [labelId, setLabelId] = useState<string>();
	const [descriptionId, setDescriptionId] = useState<string>();

	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const data = useFloating({
		open,
		onOpenChange: setOpen,
	});

	const context = data.context;

	const click = useClick(context, {
		enabled: controlledOpen == null,
	});
	const dismiss = useDismiss(context, {
		outsidePressEvent: 'mousedown',
	});
	const role = useRole(context);

	const interactions = useInteractions([click, dismiss, role]);

	return useMemo(
		() => ({
			size,
			position,
			open,
			setOpen,
			...interactions,
			...data,
			initialFocus,
			returnFocus,
			labelId,
			descriptionId,
			setLabelId,
			setDescriptionId,
		}),
		[open, setOpen, interactions, data, labelId, descriptionId, size, position],
	);
}
