import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import AnimateHeight from 'react-animate-height';
import { accordion, accordionButton, accordionPanel, AccordionTheme } from '@recastui/themes';
import { ChevronDown, Icon } from 'tabler-icons-react';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';
import clsx from 'clsx';

export type AccordionItemProps = {
	isOpen?: boolean;
	disabled?: boolean;
	title: string | React.ReactNode;
	content: string | React.ReactNode;
};
export type AccordionProps = {
	className?: string;
	items: AccordionItemProps[];
	icon?: Icon;
	iconPosition?: 'left' | 'right';
	transitionDuration: number;
	disableIconRotation: boolean;
} & VariantProps<AccordionTheme>;

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
	(
		{
			className,
			items,
			variant,
			iconPosition = 'right',
			icon,
			disableIconRotation,
			transitionDuration = 300,
		},
		ref,
	) => {
		const TriggerIcon = icon ?? ChevronDown;
		const uuid = React.useId();
		return (
			<div className={cl(accordion({ variant, className }))}>
				{items.map((item: AccordionItemProps, idx: number) => {
					return (
						<Disclosure as='div' ref={ref} key={`${uuid}-${idx}`} defaultOpen={!!item.isOpen}>
							{({ open }) => (
								<>
									<Disclosure.Button className='ring-gray-10 w-full outline-0 focus:z-10 focus:ring-2 focus:ring-offset-0'>
										<div
											className={cl(accordionButton({ variant, open }), 'gap-2', {
												'flex-row-reverse': iconPosition === 'left',
											})}>
											<div className='grow text-left'>{item.title}</div>
											<TriggerIcon
												aria-hidden='true'
												role='img'
												color='currentColor'
												className={clsx(
													`transform transition-transform duration-300`,
													{ 'rotate-180': open && !disableIconRotation },
													{ 'rotate-0': !open && !disableIconRotation },
												)}
											/>
										</div>
									</Disclosure.Button>
									<AnimateHeight duration={transitionDuration} height={open ? 'auto' : 0}>
										<Disclosure.Panel static className={cl(accordionPanel({ variant, open }))}>
											{item.content}
										</Disclosure.Panel>
									</AnimateHeight>
								</>
							)}
						</Disclosure>
					);
				})}
			</div>
		);
	},
);

Accordion.displayName = 'Accordion';
