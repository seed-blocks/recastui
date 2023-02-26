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
				'sticky top-0 z-50 flex flex-wrap items-center justify-center border-b-2 py-5 transition duration-500',
				isScrolled ? 'bg-gray-2 border-gray-5' : 'border-transparent bg-transparent',
			)}>
			<div className='max-w-8xl relative mx-auto flex w-full justify-center px-3 lg:px-8 xl:px-12'>
				<div className='mr-6 flex lg:hidden'>
					<MobileNavigation navigation={navigation} />
				</div>
				<div className='relative flex flex-grow basis-0 items-center'>
					<a className='flex w-fit' href='/' aria-label='Home page'>
						<div className='h-9 w-9 bg-[url("/Recastui_Icon_light.svg")] dark:bg-[url("/Recastui_Icon_dark.svg")] lg:hidden' />
						<div className='hidden h-9 w-[162px] bg-[url("/Recastui_logo_light.svg")] bg-no-repeat dark:bg-[url("/Recastui_logo_dark.svg")] lg:block' />
					</a>
				</div>
				<div className='relative flex basis-0 justify-end gap-6 md:flex-grow'>
					<ThemeSelector className='z-100 relative' />
					<a href='https://twitter.com/recastui' className='group' aria-label='Recastui twitter'>
						<IconBrandTwitter stroke={1} className='fill-gray-11 group-hover:fill-blue-9 h-6 w-6' />
					</a>
					<a
						href='https://github.com/seed-blocks/recastui'
						className='group'
						aria-label='Recastui GitHub repo'>
						<IconBrandGithub stroke={1} className='fill-gray-11 group-hover:fill-gray-12 h-6 w-6' />
					</a>
				</div>
			</div>
		</header>
	);
}
