import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { IconMenu, IconX } from '@tabler/icons-react';
import { Navigation } from './Navigation';

import type { SidebarNavigationType } from '../constants';

export type MobileNavigationProps = {
	navigation: SidebarNavigationType;
};

export function MobileNavigation({ navigation }: MobileNavigationProps) {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				type='button'
				onClick={() => setIsOpen(true)}
				className='relative'
				aria-label='Open navigation'>
				<IconMenu className='stroke-gray-11 h-6 w-6' />
			</button>
			<Dialog
				open={isOpen}
				onClose={setIsOpen}
				className='bg-gray-9 fixed inset-0 z-50 flex items-start overflow-y-auto pr-10 backdrop-blur lg:hidden'
				aria-label='Navigation'>
				<Dialog.Panel className='bg-gray-2 min-h-full w-full max-w-xs px-3 pt-5 pb-12'>
					<div className='flex items-center'>
						<button type='button' onClick={() => setIsOpen(false)} aria-label='Close navigation'>
							<IconX className='stroke-gray-12 h-6 w-6' />
						</button>
						<a href='/' className='ml-6' aria-label='Home page'>
							<div className='h-9 w-9 bg-[url("/Recastui_Icon_light.svg")] dark:bg-[url("/Recastui_Icon_dark.svg")] lg:hidden' />
						</a>
					</div>
					<Navigation navigation={navigation} className='mt-5 px-1' />
				</Dialog.Panel>
			</Dialog>
		</>
	);
}
