import { cva, VariantProps } from 'class-variance-authority';

export const breadcrumb = {
	list: cva(['flex list-none p-0 m-0']),
	item: cva(['inline-flex items-center text-main-12']),
	link: cva(['no-underline text-main-12 focus:outline-none focus-visible:ring-2 ring-gray-10']),
	separator: cva(['mx-2']),
};

export type BreadcrumbTheme = VariantProps<typeof breadcrumb.list>;
