import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { IconBulb, IconMoonStars, IconDeviceDesktop, TablerIconsProps } from '@tabler/icons-react';
import clsx from 'clsx';

type ThemeType = {
	name: string;
	value: string;
	icon: (props: TablerIconsProps) => JSX.Element;
};

const themes: ThemeType[] = [
	{ name: 'Light', value: 'light', icon: IconBulb },
	{ name: 'Dark', value: 'dark', icon: IconMoonStars },
	{ name: 'System', value: 'system', icon: IconDeviceDesktop },
];

type ThemeSelectorProps = {
	className?: string;
};

export function ThemeSelector({ className }: ThemeSelectorProps) {
	let [selectedTheme, setSelectedTheme] = useState<ThemeType>();

	useEffect(() => {
		if (selectedTheme) {
			document.documentElement.setAttribute('data-theme', selectedTheme.value);
		} else {
			setSelectedTheme(
				themes.find(theme => theme.value === document.documentElement.getAttribute('data-theme')),
			);
		}
	}, [selectedTheme]);
	return (
		<Listbox as='div' value={selectedTheme} onChange={setSelectedTheme} className={className}>
			<Listbox.Label className='sr-only'>Theme</Listbox.Label>
			<Listbox.Button
				className='bg-gray-3 ring-gray-4 flex h-7 w-7 items-center justify-center'
				aria-label={selectedTheme?.name}>
				<IconBulb className='fill-orange-10 hidden h-4 w-4 [[data-theme=light]_&]:block' />
				<IconMoonStars className='fill-orange-10 hidden h-4 w-4 [[data-theme=dark]_&]:block' />
				<IconMoonStars className='fill-orange-10 hidden h-4 w-4 [[data-theme=system]_&]:block' />
			</Listbox.Button>
			<Listbox.Options className='bg-gray-3 ring-gray-4 absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 p-3 text-sm font-medium '>
				{themes.map(theme => (
					<Listbox.Option
						key={theme.value}
						value={theme}
						className={({ active, selected }) =>
							clsx('flex cursor-pointer select-none items-center p-1', {
								'text-orange-10': selected,
								'text-gray-12': active && !selected,
								'bg-gray-4': active,
							})
						}>
						{({ selected }) => (
							<>
								<div className='ring-gray-9 bg-gray-2 rounded-md p-1 ring-1'>
									<theme.icon
										className={clsx('h-4 w-4', selected ? 'fill-orange-10' : 'fill-gray-12')}
									/>
								</div>
								<div className='ml-3'>{theme.name}</div>
							</>
						)}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
}
