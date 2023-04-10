import React, { forwardRef, HTMLProps } from 'react';

import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import { MenuList, MenuListProps } from './MenuList';

export const Menu = forwardRef<HTMLButtonElement, MenuListProps & HTMLProps<HTMLButtonElement>>(
	(props, ref) => {
		const parentId = useFloatingParentNodeId();

		if (parentId === null) {
			return (
				<FloatingTree>
					<MenuList {...props} ref={ref} />
				</FloatingTree>
			);
		}

		return <MenuList {...props} ref={ref} />;
	},
);

Menu.displayName = 'Menu';
