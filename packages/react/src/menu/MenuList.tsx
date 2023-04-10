import React, {
	Children,
	cloneElement,
	ElementType,
	forwardRef,
	HTMLProps,
	isValidElement,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

import {
	autoUpdate,
	flip,
	FloatingFocusManager,
	FloatingNode,
	FloatingPortal,
	offset,
	safePolygon,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useFloatingNodeId,
	useFloatingParentNodeId,
	useFloatingTree,
	useHover,
	useInteractions,
	useListNavigation,
	useMergeRefs,
	useRole,
	useTypeahead,
} from '@floating-ui/react';
import { Button, ButtonProps } from '../button';
import { menu } from '@recastui/themes';
import { cl } from '../utils';

const CaretRight = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke='currentColor'
		fill='none'
		stroke-linecap='round'
		stroke-linejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 6l6 6-6 6'></path>
	</svg>
);

export function extractTextFromChildren(children: ReactNode): string[] {
	let strings: string[] = [];

	React.Children.map(children, (child: ReactNode) => {
		if (typeof child === 'string') {
			strings.push(child);
		} else if (React.isValidElement(child)) {
			if (child.props.label) {
				strings.push(extractTextFromChildren(child.props.label).join(''));
			} else {
				strings.push(extractTextFromChildren(child.props.children).join(''));
			}
		}
	});

	return strings;
}

export type MenuListProps = {
	initialOpen?: boolean;
	label: ReactNode;
	nested?: boolean;
	children?: ReactNode;
	rootMenuIcon?: ElementType;
	nestedMenuIcon?: ElementType;
	menuButtonProps?: ButtonProps;
	className?: string;
};

export const MenuList = forwardRef<HTMLButtonElement, MenuListProps & HTMLProps<HTMLButtonElement>>(
	(
		{
			children,
			label,
			initialOpen = false,
			nested = false,
			rootMenuIcon: RootIcon,
			nestedMenuIcon: NestedIcon = CaretRight,
			menuButtonProps: { className: rootButtonClassName, ...props } = {},
			className,
		},
		forwardedRef,
	) => {
		const [isOpen, setIsOpen] = useState(initialOpen);
		const [activeIndex, setActiveIndex] = useState<number | null>(null);
		const [allowHover, setAllowHover] = useState(false);

		const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
		const listContentRef = useRef(extractTextFromChildren(children));

		const tree = useFloatingTree();
		const nodeId = useFloatingNodeId();
		const parentId = useFloatingParentNodeId();
		const isNested = parentId != null;

		const { x, y, strategy, refs, context } = useFloating<HTMLButtonElement>({
			nodeId,
			open: isOpen,
			onOpenChange: setIsOpen,
			placement: isNested ? 'right-start' : 'bottom-start',
			middleware: [
				offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
				flip(),
				shift(),
			],
			whileElementsMounted: autoUpdate,
		});

		const hover = useHover(context, {
			enabled: isNested && allowHover,
			delay: { open: 75 },
			handleClose: safePolygon({
				restMs: 25,
				blockPointerEvents: true,
			}),
		});
		const click = useClick(context, {
			event: 'mousedown',
			toggle: !isNested || !allowHover,
			ignoreMouse: isNested,
		});
		const role = useRole(context, { role: 'menu' });
		const dismiss = useDismiss(context);
		const listNavigation = useListNavigation(context, {
			listRef: listItemsRef,
			activeIndex,
			nested: isNested,
			onNavigate: setActiveIndex,
		});
		const typeahead = useTypeahead(context, {
			enabled: isOpen,
			listRef: listContentRef,
			onMatch: isOpen ? setActiveIndex : undefined,
			activeIndex,
		});

		const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
			hover,
			click,
			role,
			dismiss,
			listNavigation,
			typeahead,
		]);

		// Event emitter allows you to communicate across tree components.
		// This effect closes all menus when an item gets clicked anywhere
		// in the tree.
		useEffect(() => {
			if (!tree) return;

			function handleTreeClick() {
				setIsOpen(false);
			}

			function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
				if (event.nodeId !== nodeId && event.parentId === parentId) {
					setIsOpen(false);
				}
			}

			tree.events.on('click', handleTreeClick);
			tree.events.on('menuopen', onSubMenuOpen);

			return () => {
				tree.events.off('click', handleTreeClick);
				tree.events.off('menuopen', onSubMenuOpen);
			};
		}, [tree, nodeId, parentId]);

		useEffect(() => {
			if (isOpen && tree) {
				tree.events.emit('menuopen', { parentId, nodeId });
			}
		}, [tree, isOpen, nodeId, parentId]);

		// Determine if "hover" logic can run based on the modality of input. This
		// prevents unwanted focus synchronization as menus open and close with
		// keyboard navigation and the cursor is resting on the menu.
		useEffect(() => {
			function onPointerMove({ pointerType }: PointerEvent) {
				if (pointerType !== 'touch') {
					setAllowHover(true);
				}
			}

			function onKeyDown() {
				setAllowHover(false);
			}

			window.addEventListener('pointermove', onPointerMove, {
				once: true,
				capture: true,
			});
			window.addEventListener('keydown', onKeyDown, true);
			return () => {
				window.removeEventListener('pointermove', onPointerMove, {
					capture: true,
				});
				window.removeEventListener('keydown', onKeyDown, true);
			};
		}, [allowHover]);

		const referenceRef = useMergeRefs([refs.setReference, forwardedRef]);

		return (
			<FloatingNode id={nodeId}>
				<Button
					ref={referenceRef}
					data-open={isOpen ? '' : undefined}
					data-nested={isNested ? '' : undefined}
					{...(isNested && { variant: 'unstyled' })}
					{...getReferenceProps({
						className: cl(menu.button({ isNested, rootButtonClassName })),
						...props,
						onClick(event) {
							event.stopPropagation();
						},
						...(isNested && {
							role: 'menuitem',
						}),
					})}>
					{label}
					{isNested
						? NestedIcon && (
								<span role='presentation' aria-hidden className='ml-2.5'>
									<NestedIcon />
								</span>
						  )
						: RootIcon && (
								<span role='presentation' aria-hidden className='ml-2.5'>
									<RootIcon />
								</span>
						  )}
				</Button>
				<FloatingPortal>
					{isOpen && (
						<FloatingFocusManager
							context={context}
							modal={false}
							initialFocus={isNested ? -1 : 0}
							returnFocus={!isNested}>
							<div
								ref={refs.setFloating}
								className={cl(menu.list({ className }))}
								style={{
									position: strategy,
									top: y ?? 0,
									left: x ?? 0,
									width: 'max-content',
								}}
								{...getFloatingProps()}>
								{Children.map(
									children,
									(child, index) =>
										isValidElement(child) &&
										cloneElement(child, {
											...getItemProps({
												tabIndex: activeIndex === index ? 0 : -1,
												ref(node: HTMLButtonElement) {
													listItemsRef.current[index] = node;
												},
												onClick(event) {
													child.props.onClick?.(event);
													tree?.events.emit('click');
												},
												onMouseEnter() {
													if (allowHover && isOpen) {
														setActiveIndex(index);
													}
												},
											}),
										}),
								)}
							</div>
						</FloatingFocusManager>
					)}
				</FloatingPortal>
			</FloatingNode>
		);
	},
);

MenuList.displayName = 'MenuList';
