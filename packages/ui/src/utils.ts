import { RecastUICSSProperties } from './system';
import { boxSystemStyleProps, BoxSystemStyleProps } from './Box/style-props';
import { __RecastUIComponentsInternalProps } from '@recastui/ui/types';

export function getAllUsedStyleProps(props: Record<string | number, any>) {
	return Object.keys(props).filter(key =>
		__isBoxStyledSystemProp(key)
	) as Array<BoxSystemStyleProps>;
}

export function isEmptyObject(obj: any) {
	console.log('isEmptyObject', obj);
	return typeof obj === 'object' && Object.keys(obj).length === 0;
}

export const __isBoxStyledSystemProp = (prop: any) => boxSystemStyleProps.includes(prop);

export const getProps =
	(test: (k: string) => boolean) =>
	<T extends object>(props: T): T => {
		const next: Partial<T> = {};
		for (const key in props) {
			if (test(key || '')) next[key] = props[key];
		}
		return next as T;
	};

const MRE = /^m[terblxy]?$/;

export interface MarginProps
	extends Pick<RecastUICSSProperties, 'm' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my'> {}

export const getMargin: (props: MarginProps) => MarginProps = getProps(k => MRE.test(k));
export const omitMargin = getProps(k => !MRE.test(k));

/** @internal */
export function __internalProps(props: __RecastUIComponentsInternalProps) {
	return props as {};
}
