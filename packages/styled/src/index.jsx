import { css, setup as gooberSetup } from "goober";
import {
	mergeProps,
	splitProps,
	createContext,
	useContext,
	createComponent,
	untrack,
} from "solid-js";
import { Dynamic, isServer, spread } from "solid-js/web";
import { allProps, css as systemCss} from "@reptil/system";


let getForwardProps = null;

export function shouldForwardProp(predicate) {
	return props => props.filter(predicate);
}

export function setup(prefixer, shouldForwardProp = null) {
	gooberSetup(null, prefixer);
	getForwardProps = shouldForwardProp;
}
const ThemeContext = createContext();
export function ThemeProvider(props) {
	return createComponent(ThemeContext.Provider, {
		value: props.theme,
		get children() {
			return props.children;
		}
	});
}
export function useTheme() {
	return useContext(ThemeContext);
}

function makeStyled(tag) {
	let _ctx = this || {};
	return (...args) => {
		const Styled = props => {
			const theme = useContext(ThemeContext);
			const withTheme = mergeProps(props, { theme });
			const [styledProps, otherProps] = splitProps(withTheme, allProps);
			const clone = mergeProps(otherProps, {
				get class() {
					const pClass = otherProps.class,
						append = "class" in otherProps && /^go[0-9]+/.test(pClass);
					// Call `css` with the append flag and pass the props
					const className = css.apply(
						{ target: _ctx.target, o: append, p: otherProps, g: _ctx.g },
						args
					);
					const systemClass = css(systemCss(styledProps));
					return [pClass, className, systemClass].filter(Boolean).join(" ");
				}
			});
			const [local, newProps] = splitProps(clone, ["as", "theme"]);
			const htmlProps = getForwardProps
				? splitProps(newProps, getForwardProps(Object.keys(newProps)))[0]
				: newProps;
			const createTag = local.as || tag;
			let el;

			if (typeof createTag === "function") {
				el = createTag(htmlProps);
			} else {
				if (isServer) {
					const [local, others] = splitProps(htmlProps, ["children", "theme"]);
					el = Dynamic({
						component: createTag,
						get children() {
							return local.children;
						},
						...others
					});
				} else {
					if (_ctx.g == 1) {
						// When using Global Styles we don't want to hydrate the unused nodes
						el = document.createElement(createTag);
						spread(el, htmlProps);
					} else {
						el = Dynamic(mergeProps({ component: createTag }, htmlProps));
					}
				}
			}
			return el;
		};
		Styled.class = props => {
			return untrack(() => {
				return css.apply({ target: _ctx.target, p: props, g: _ctx.g }, args);
			});
		};

		return Styled;
	};
}

export const styled = new Proxy(makeStyled, {
	get(target, tag) {
		return target(tag);
	}
});

export function createGlobalStyles() {
	const fn = makeStyled.call({ g: 1 }, "div").apply(null, arguments);

	return function GlobalStyles(props) {
		fn(props);
		return null;
	};
}

export { css, glob, extractCss, keyframes } from "goober";
