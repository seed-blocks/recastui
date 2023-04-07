import { SVGProps, useCallback, useEffect, useState, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import * as docSearchReact from '@docsearch/react';
import '../css/docsearch.css';

const DocSearchModal =
	docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =
	docSearchReact.useDocSearchKeyboardEvents ||
	(docSearchReact as any).default.useDocSearchKeyboardEvents;

const docSearchConfig = {
	appId: import.meta.env.PUBLIC_DOCSEARCH_APP_ID,
	apiKey: import.meta.env.PUBLIC_DOCSEARCH_API_KEY,
	indexName: import.meta.env.PUBLIC_DOCSEARCH_INDEX_NAME,
};

function Hit({ hit, children }: { hit: { url: string }; children: ReactNode }) {
	return <a href={hit.url}>{children}</a>;
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg aria-hidden='true' viewBox='0 0 20 20' {...props}>
			<path d='M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z' />
		</svg>
	);
}

export function Search() {
	let [modifierKey, setModifierKey] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const searchButtonRef = useRef<HTMLButtonElement>(null);
	const [initialQuery, setInitialQuery] = useState('');

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e: KeyboardEvent) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery],
	);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	useEffect(() => {
		setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ');
	}, []);

	return (
		<>
			<button
				type='button'
				className='ring-offset-gray-3 md:ring-gray-3 md:hover:ring-gray-4 group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 lg:w-64'
				onClick={onOpen}>
				<SearchIcon className='fill-gray-12 group-hover:fill-gray-11 h-5 w-5 flex-none' />
				<span className='md:text-gray-11 sr-only md:not-sr-only md:ml-2'>Search Recastui docs</span>
				{modifierKey && (
					<kbd className='text-gray-11 ml-auto hidden font-medium md:block'>
						<kbd className='font-sans'>{modifierKey}</kbd>
						<kbd className='font-sans'>K</kbd>
					</kbd>
				)}
			</button>
			{isOpen &&
				createPortal(
					<DocSearchModal
						{...docSearchConfig}
						initialQuery={initialQuery}
						initialScrollY={window.scrollY}
						onClose={onClose}
						hitComponent={Hit}
						transformItems={items => {
							return items.map(item => {
								// We transform the absolute URL into a relative URL to
								// work better on localhost, preview URLS.
								const a = document.createElement('a');
								a.href = item.url;
								const hash = a.hash === '#overview' ? '' : a.hash;
								return {
									...item,
									url: `${a.pathname}${hash}`,
								};
							});
						}}
					/>,
					document.body,
				)}
		</>
	);
}
