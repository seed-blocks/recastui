import * as React from 'react';
import { alert, AlertTheme } from '@recastui/themes';
import { cl, uuid } from '../utils';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
	AlertTheme & {
		icon: React.ElementType;
		title?: React.ReactNode;
		description?: React.ReactNode;
		className?: string;
	};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ icon: AlertIcon, title, description, color, variant, className, children, ...props }, ref) => {
		const titleId = `alert-title-${uuid()}`;
		const bodyId = `alert-body-${uuid()}`;
		const alertClasses = cl(alert.base({ color, variant, className }));
		return (
			<div
				className={alertClasses}
				ref={ref}
				role='alert'
				aria-labelledby={titleId}
				aria-describedby={bodyId}
				{...props}>
				<AlertIcon className={cl(alert.icon())} />
				<div className={cl(alert.body())}>
					{title && (
						<div id={titleId} className={cl(alert.title())}>
							{title}
						</div>
					)}
					{description && (
						<div id={bodyId} className={cl(alert.description({ color }))}>
							{description}
						</div>
					)}
				</div>
			</div>
		);
	},
);

Alert.displayName = 'Alert';
