import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import {
	IconSunFilled,
	IconMoonStars,
	IconDeviceLaptop,
	TablerIconsProps,
} from '@tabler/icons-react';
import clsx from 'clsx';

type ThemeType = {
	name: string;
	value: string;
	icon: (props: TablerIconsProps) => JSX.Element;
};

const themes: ThemeType[] = [
	{ name: 'Light', value: 'light', icon: IconSunFilled },
	{ name: 'Dark', value: 'dark', icon: IconMoonStars },
	{ name: 'System', value: 'system', icon: IconDeviceLaptop },
];

type ThemeSelectorProps = {
	className?: string;
};

export function ThemeSelector({ className }: ThemeSelectorProps) {
	let [selectedTheme, setSelectedTheme] = useState<ThemeType | undefined>(undefined);

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
		<Listbox
			as='div'
			value={selectedTheme ?? themes[0]}
			onChange={setSelectedTheme}
			className={className}>
			<Listbox.Label className='sr-only'>Theme</Listbox.Label>
			<Listbox.Button className='flex items-center justify-center' aria-label={selectedTheme?.name}>
				<IconSunFilled
					stroke={1}
					className='hover:text-gray-10 hidden h-6 w-6 [[data-theme=light]_&]:block'
				/>
				<IconMoonStars
					stroke={1}
					className='hover:fill-gray-12 hidden h-6 w-6 [[data-theme=dark]_&]:block'
				/>
				<IconMoonStars
					stroke={1}
					className='hover:fill-gray-12 hidden h-6 w-6 [[data-theme=system]_&]:block'
				/>
			</Listbox.Button>
			<Listbox.Options className='bg-gray-3 ring-gray-4 absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 p-2 text-sm font-medium '>
				{themes.map(theme => (
					<Listbox.Option
						key={theme.value}
						value={theme}
						className={({ active, selected }) =>
							clsx('flex cursor-pointer select-none items-center p-1', {
								'text-gray-12': active && !selected,
								'bg-gray-3': active,
								'text-orange-12': selected,
							})
						}>
						{({ selected }) => (
							<>
								<div className='bg-main-2'>
									<theme.icon stroke={1} className={clsx('bg-main-2 h-6 w-6')} />
								</div>
								<div className={clsx('text-main-11 ml-3', { 'text-main-12': selected })}>
									{theme.name}
								</div>
							</>
						)}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
}
