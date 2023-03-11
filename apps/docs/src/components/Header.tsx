import { useEffect, useState } from 'react';
import { MobileNavigation } from './MobileNavigation';
import { ThemeSelector } from './ThemeSelector';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';
import type { SidebarNavigationType } from '../constants';

export type DocsHeaderProps = {
	navigation: SidebarNavigationType;
};

export function Header({ navigation }: DocsHeaderProps) {
	let [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		function onScroll() {
			setIsScrolled(window.scrollY > 0);
		}
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<header
			className={clsx(
				'sticky top-0 z-50 flex flex-wrap items-center justify-between border-b p-4 transition duration-500 lg:px-6',
				isScrolled ? 'bg-gray-2 border-gray-5' : 'border-transparent bg-transparent',
			)}>
			<div className='mr-6 flex lg:hidden'>
				<MobileNavigation navigation={navigation} />
			</div>
			<div className='relative flex flex-grow basis-0 items-center space-x-2'>
				<a className='flex w-fit' href='/' aria-label='Home page'>
					<div className='h-6 w-[108px] bg-[url("/Recastui_logo_light.svg")] bg-no-repeat dark:bg-[url("/Recastui_logo_dark.svg")]' />
				</a>
			</div>
			<div className='relative flex basis-0 justify-end gap-6 md:flex-grow'>
				<ThemeSelector className='z-100 relative' />
				<a
					rel='noopener'
					href='https://twitter.com/recastui'
					className='group'
					aria-label='Recastui twitter'
					target='_blank'>
					<IconBrandTwitter stroke={1} className='group-hover:fill-blue-9 h-6 w-6' />
				</a>
				<a
					rel='noopener'
					href='https://github.com/seed-blocks/recastui'
					className='group'
					aria-label='Recastui GitHub repo'
					target='_blank'>
					<IconBrandGithub stroke={1} className='group-hover:fill-gray-12 h-6 w-6' />
				</a>
			</div>
		</header>
	);
}
