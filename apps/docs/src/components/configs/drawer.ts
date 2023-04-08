export const drawerSnippets = {
	import: `import {
		Drawer,
		DrawerTrigger,
		DrawerContent,
		DrawerHeading,
		DrawerFooter,
		DrawerBody,
		DrawerCloseButton
} from "@recastui/react";
`,
	usage: `
<Drawer>
	<DrawerTrigger asChild>
		<Button>Open Drawer</Button>
	</DrawerTrigger>
	<DrawerContent>
		<DrawerHeading>Drawer Title</DrawerHeading>
		<DrawerCloseButton />
		<DrawerBody>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</DrawerBody>
		<DrawerFooter>
			<div className='space-x-3'>
				<Button size='sm'>
					Main Action
				</Button>
				<Button size='sm' variant='ghost'>Secondary Action</Button>
			</div>
		</DrawerFooter>
	</DrawerContent>
</Drawer>
`,
	position: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState('left');
	const handlePositionClick = (newPosition) => {
    setPosition(newPosition);
    setIsOpen(true);
  };
	const positions = ['left', 'right', 'top', 'bottom'];
	return (
		<>
			<div className='grid gap-2 grid-cols-2'>
				{positions.map((p) => (
					<Button
						onClick={() => handlePositionClick(p)}
						key={p}
					>{\`Open \${p} Drawer\`}</Button>
				))}
			</div>
			<Drawer open={isOpen} onOpenChange={setIsOpen} position={position}>
				<DrawerContent>
					<DrawerHeading>Drawer Title</DrawerHeading>
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
			<Drawer open={isOpen} onOpenChange={setIsOpen} size={size}>
				<DrawerContent>
					<DrawerHeading>Drawer Title</DrawerHeading>
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
			<Drawer initialFocus={initialRef} open={isOpen} onOpenChange={setIsOpen}>
				<DrawerContent>
					<DrawerHeading>Drawer Title</DrawerHeading>
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
