export const drawerSnippets = {
	import: `import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerBody,
	DrawerCloseButton
} from "@recastui/react";
`,
	usage: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={()=>setIsOpen(true)}>Show Drawer</Button>
			<Drawer isOpen={isOpen} onClose={()=>setIsOpen(false)}>
				<DrawerContent>
					<DrawerHeader>Drawer Title</DrawerHeader>
					<DrawerCloseButton />
					<DrawerBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</DrawerBody>
					<DrawerFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>);
	}
`,
	placement: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	const [placement, setPlacement] = useState('left');
	const handlePlacementClick = (newPlacement) => {
    setPlacement(newPlacement);
    setIsOpen(true);
  };
	const placements = ['left', 'right', 'top', 'bottom'];
	return (
		<>
			<div className='grid gap-2 grid-cols-2'>
				{placements.map((p) => (
					<Button
						onClick={() => handlePlacementClick(p)}
						key={p}
					>{\`Open \${p} Drawer\`}</Button>
				))}
			</div>
			<Drawer isOpen={isOpen} onClose={()=>setIsOpen(false)} placement={placement}>
				<DrawerContent>
					<DrawerHeader>Drawer Title</DrawerHeader>
					<DrawerCloseButton />
					<DrawerBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</DrawerBody>
					<DrawerFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>);
	}
`,
	sizes: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	const [size, setSize] = useState('xs');
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    setIsOpen(true);
  };
	const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
	return (
		<>
			<div className='grid gap-2 grid-cols-3'>
				{sizes.map((s) => (
					<Button
						onClick={() => handleSizeClick(s)}
						key={s}
					>{\`Open \${s} Drawer\`}</Button>
				))}
			</div>
			<Drawer isOpen={isOpen} onClose={()=>setIsOpen(false)} size={size}>
				<DrawerContent>
					<DrawerHeader>Drawer Title</DrawerHeader>
					<DrawerCloseButton />
					<DrawerBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</DrawerBody>
					<DrawerFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>);
	}
`,
	initialFocus: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	const initialRef = React.useRef(null);
	return (
    <>
			<Button onClick={()=>setIsOpen(true)}>Show Drawer</Button>
			<Drawer initialFocusRef={initialRef} isOpen={isOpen} onClose={()=>setIsOpen(false)}>
				<DrawerContent>
					<DrawerHeader>Drawer Title</DrawerHeader>
					<DrawerCloseButton />
					<DrawerBody>
						<Button ref={initialRef}>This button has initial Focus</Button>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</DrawerBody>
					<DrawerFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
`,
};
