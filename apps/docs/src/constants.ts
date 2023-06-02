export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/seed-blocks/recastui/tree/main/apps/docs/src/content`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;

export const SidebarNavigation = [
	{
		title: 'Overview',
		links: [
			{ title: 'Introduction', href: '/docs/overview/introduction', status: '' },
			{ title: 'Getting started', href: '/docs/overview/get-started', status: '' },
			{ title: 'Theming', href: '/docs/overview/theming', status: '' },
		],
	},
	{
		title: 'Components',
		links: [
			{ title: 'Accordion', href: '/docs/components/accordion', status: '' },
			{ title: 'Button', href: '/docs/components/button', status: '' },
			{ title: 'Input', href: '/docs/components/input', status: '' },
			{ title: 'Checkbox', href: '/docs/components/checkbox', status: '' },
			{ title: 'Label', href: '/docs/components/label', status: '' },
			{ title: 'Radio', href: '/docs/components/radio', status: '' },
			{ title: 'Switch', href: '/docs/components/switch', status: '' },
			{ title: 'Select', href: '/docs/components/select', status: '' },
			{ title: 'Textarea', href: '/docs/components/textarea', status: '' },
			{ title: 'Link', href: '/docs/components/link', status: '' },
			{ title: 'Badge', href: '/docs/components/badge', status: '' },
			{ title: 'Avatar', href: '/docs/components/avatar', status: '' },
			{ title: 'Tabs', href: '/docs/components/tabs', status: '' },
			{ title: 'Card', href: '/docs/components/card', status: '' },
			{ title: 'Kbd', href: '/docs/components/kbd', status: '' },
			{ title: 'Skeleton', href: '/docs/components/skeleton', status: '' },
			{ title: 'Modal', href: '/docs/components/modal', status: 'Updated' },
			{ title: 'Alert', href: '/docs/components/alert', status: '' },
			{ title: 'Drawer', href: '/docs/components/drawer', status: 'Updated' },
			{ title: 'Breadcrumb', href: '/docs/components/breadcrumb', status: '' },
			{ title: 'Text', href: '/docs/components/text', status: '' },
			{ title: 'Heading', href: '/docs/components/heading', status: '' },
			{ title: 'Dropdown Menu', href: '/docs/components/menu', status: 'Updated' },
			{ title: 'Popup', href: '/docs/components/popup', status: 'New' },
			// INJECT NEW COMPONENTS HERE
		].sort((a: { title: string; href: string }, b: { title: string; href: string }) =>
			a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
		),
	},
];

export type SidebarNavigationType = typeof SidebarNavigation;
