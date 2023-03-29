import React, { forwardRef } from 'react';
import { breadcrumb } from '@recastui/themes';
import { cl } from '../utils';

export type BreadcrumbProps = {
	className?: string;
	children: React.ReactNode;
	separator?: React.ReactNode;
};

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
	({ separator = '/', children, className }, ref) => {
		const count = React.Children.count(children);
		const childrenWithSeparator = React.Children.map(children, (child, index) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child as React.ReactElement<BreadcrumbItemProps>, {
					separator,
					isLastChild: count === index + 1,
				});
			}
			return child;
		});
		return (
			<nav aria-label='breadcrumb' ref={ref}>
				<ol className={cl(breadcrumb.list({ className }))}>{childrenWithSeparator}</ol>
			</nav>
		);
	},
);

export type BreadcrumbItemProps = {
	isCurrentPage?: boolean;
	className?: string;
	children: React.ReactNode;
	separator?: React.ReactNode;
	isLastChild?: boolean;
};

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
	({ children, isCurrentPage, separator, isLastChild, className, ...rest }, ref) => {
		const childrenWithCurrentPage = React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child as React.ReactElement<BreadcrumbLinkProps>, {
					isCurrentPage,
				});
			}
			return child;
		});
		return (
			<li
				ref={ref}
				className={cl(breadcrumb.item({ className }))}
				{...(isCurrentPage && { 'aria-current': 'page' })}
				{...rest}>
				{childrenWithCurrentPage}
				{!isLastChild && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
			</li>
		);
	},
);

export type BreadcrumbLinkProps = {
	as?: React.ElementType;
	className?: string;
	isCurrentPage?: boolean;
	children: React.ReactNode;
};

const BreadcrumbLink = forwardRef<any, BreadcrumbLinkProps>(
	({ as: Component = 'a', children, isCurrentPage, className, ...rest }, ref) => {
		if (isCurrentPage) Component = 'span';
		return (
			<Component ref={ref} className={cl(breadcrumb.link({ className }))} {...rest}>
				{children}
			</Component>
		);
	},
);

export type BreadcrumbSeparatorProps = {
	className?: string;
	children: React.ReactNode;
};

const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
	({ children, className, ...rest }, ref) => {
		return (
			<span
				ref={ref}
				role='presentation'
				className={cl(breadcrumb.separator({ className }))}
				{...rest}>
				{children}
			</span>
		);
	},
);

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbLink.displayName = 'BreadcrumbLink';
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
