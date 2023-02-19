import clsx from 'clsx';

export function Navigation({ navigation, className, currentPath }) {
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
											'block w-full',
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
