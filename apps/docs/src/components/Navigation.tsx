import clsx from 'clsx';
import type { SidebarNavigationType } from '../constants';

export type NavigationProps = {
	navigation: SidebarNavigationType;
	className?: string;
	currentPath?: string;
};

export function Navigation({ navigation, className, currentPath }: NavigationProps) {
	return (
		<nav className={clsx('text-base', className)}>
			<ul role='list' className='space-y-4'>
				{navigation.map(section => (
					<li key={section.title}>
						<h2 className='font-display text-gray-12 font-medium'>{section.title}</h2>
						<ul role='list'>
							{section.links.map(link => (
								<li key={link.href} className='relative'>
									<a
										rel='prefetch'
										href={link.href}
										className={clsx(
											'block w-full py-1',
											link.href === currentPath
												? 'text-gray-12 bg-gray-3'
												: 'text-gray-11 hover:text-gray-12',
										)}>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	);
}
