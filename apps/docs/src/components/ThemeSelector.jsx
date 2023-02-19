import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';

const themes = [
	{ name: 'Light', value: 'light', icon: LightIcon },
	{ name: 'Dark', value: 'dark', icon: DarkIcon },
	{ name: 'System', value: 'system', icon: SystemIcon },
];

function LightIcon(props) {
	return (
		<svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z' />
		</svg>
	);
}

function DarkIcon(props) {
	return (
		<svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z' />
		</svg>
	);
}

function SystemIcon(props) {
	return (
		<svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z' />
		</svg>
	);
}

export function ThemeSelector(props) {
	let [selectedTheme, setSelectedTheme] = useState();

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
		<Listbox as='div' value={selectedTheme} onChange={setSelectedTheme} {...props}>
			<Listbox.Label className='sr-only'>Theme</Listbox.Label>
			<Listbox.Button
				className='bg-gray-3 ring-gray-4 flex h-7 w-7 items-center justify-center'
				aria-label={selectedTheme?.name}>
				<LightIcon className='fill-orange-10 hidden h-4 w-4 [[data-theme=light]_&]:block' />
				<DarkIcon className='fill-orange-10 hidden h-4 w-4 [[data-theme=dark]_&]:block' />
				<DarkIcon className='fill-orange-10 hidden h-4 w-4 [[data-theme=system]_&]:block' />
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
