import * as React from 'react';
import { avatar, AvatarTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<AvatarTheme> & {
		name?: string;
		src?: string;
	};

const getNameInitials = (name: string) =>
	name
		.split(' ')
		.map(i => i.charAt(0).toUpperCase())
		.join('')
		.substring(0, 2);

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	({ className, variant, size, color, rounded, name, src, ...props }, ref) => {
		if (!src && !name) {
			return (
				<div
					className={cl(avatar({ variant, size, color, rounded, className }))}
					ref={ref}
					{...props}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						role='presentation'
						aria-hidden='true'
						className='h-full w-full'
						viewBox='0 0 24 24'
						stroke-width='1'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
						<path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
						<path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855'></path>
					</svg>
				</div>
			);
		}
		if (!src && !!name) {
			const initials = getNameInitials(name);
			return (
				<div
					className={cl(avatar({ variant, size, color, rounded, className }))}
					ref={ref}
					{...props}>
					{initials}
				</div>
			);
		}
		return (
			<div
				className={cl(avatar({ variant, size, color, rounded, className }))}
				ref={ref}
				{...props}>
				<img
					src={src}
					alt={name}
					className={cl(avatar({ rounded }), 'h-full max-h-full w-full max-w-full object-cover')}
				/>
			</div>
		);
	},
);

Avatar.displayName = 'Avatar';
