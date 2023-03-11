import type { MarkdownHeading } from 'astro';
import clsx from 'clsx';
import { unescape } from 'html-escaper';
import { useState, useEffect, useRef } from 'react';

type ItemOffsets = {
	id: string;
	topOffset: number;
};

export interface TOCProps {
	headings: MarkdownHeading[];
}

const TableOfContents = ({ headings = [] }: TOCProps) => {
	const toc = useRef<HTMLOListElement>(null);
	const onThisPageID = 'on-this-page-heading';
	const itemOffsets = useRef<ItemOffsets[]>([]);
	const [currentID, setCurrentID] = useState('overview');
	useEffect(() => {
		const getItemOffsets = () => {
			const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)');
			itemOffsets.current = Array.from(titles).map(title => ({
				id: title.id,
				topOffset: title.getBoundingClientRect().top + window.scrollY,
			}));
		};

		getItemOffsets();
		window.addEventListener('resize', getItemOffsets);

		return () => {
			window.removeEventListener('resize', getItemOffsets);
		};
	}, []);

	useEffect(() => {
		if (!toc.current) return;

		const setCurrent: IntersectionObserverCallback = entries => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target;
					if (id === onThisPageID) continue;
					setCurrentID(entry.target.id);
					break;
				}
			}
		};

		const observerOptions: IntersectionObserverInit = {
			// Negative top margin accounts for `scroll-margin`.
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: '-100px 0% -66%',
			threshold: 1,
		};

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

		// Observe all the headings in the main page content.
		document.querySelectorAll('article :is(h1,h2,h3)').forEach(h => headingsObserver.observe(h));

		// Stop observing when the component is unmounted.
		return () => headingsObserver.disconnect();
	}, [toc.current]);

	const onLinkClick = e => {
		setCurrentID(e.target.getAttribute('href').replace('#', ''));
	};

	return (
		<>
			<h2 id='on-this-page-heading' className='font-display text-gray-12 text-sm font-medium'>
				On this page
			</h2>
			<ol ref={toc} role='list' className='mt-3 text-sm'>
				{headings
					.filter(({ depth }) => depth > 1 && depth < 4)
					.map(heading => (
						<li
							key={heading.slug}
							className={`ml-${heading.depth} ${
								currentID === heading.slug
									? 'current-header-link bg-main-4 border-main-9 border-r-2'
									: 'border-main-5 border-r-2'
							}`.trim()}>
							<a
								href={`#${heading.slug}`}
								onClick={onLinkClick}
								className={clsx(
									'hover:bg-gray-6 block w-full px-3 py-2 transition',
									currentID === heading.slug ? 'text-main-9' : 'text-main-11 hover:text-main-9',
								)}>
								{unescape(heading.text)}
							</a>
						</li>
					))}
			</ol>
		</>
	);
};

export default TableOfContents;
