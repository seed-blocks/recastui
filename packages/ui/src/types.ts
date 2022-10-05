import { JSX } from 'solid-js';
import { Properties as CSSProperties } from 'csstype';
import { RecastUICSSObject } from './system';

export type Assign<T, U> = {
	[P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never;
};

export type DOMElements = keyof JSX.IntrinsicElements;

export interface CSSAttribute extends CSSProperties {
	[key: string]: CSSAttribute | string | number | undefined;
}

/**
 * @internal Props used by RecastUI Components not intended for user code.
 */
export interface __RecastUIComponentsInternalProps {
	__css?: RecastUICSSObject;
	__themeKey?: string;
}
