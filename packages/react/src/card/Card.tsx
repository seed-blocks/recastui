import * as React from 'react';
import { card } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
	className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, bg, hoverState, variant, size, padding, rounded, ...props }, ref) => {
		const cardClassName = cl(card({ bg, hoverState, variant, padding, size, rounded, className }));
		return <div ref={ref} className={cardClassName} {...props} />;
	},
);

export const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, ...props }, ref) => {
		const cardHeaderClassName = cl(className);
		return <div data-card ref={ref} className={cardHeaderClassName} {...props} />;
	},
);

export const CardBody = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, ...props }, ref) => {
		const cardBodyClassName = cl(className);
		return <div data-card ref={ref} className={cardBodyClassName} {...props} />;
	},
);

export const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, ...props }, ref) => {
		const cardFooterClassName = cl(className);
		return <div data-card ref={ref} className={cardFooterClassName} {...props} />;
	},
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';
