export const modalSnippets = {
	import: `import {
		Modal,
		ModalOverlay,
		ModalContent,
		ModalHeader,
		ModalFooter,
		ModalBody,
		ModalCloseButton
	} from "@recastui/react";
`,
	usage: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={()=>setIsOpen(true)}>Show Modal</Button>
			<Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</ModalBody>
					<ModalFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>);
	}
`,
	finalFocus: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	const finalRef = React.useRef(null);
	return (
    <>
		<div className='mb-6' ref={finalRef} tabIndex={-1} aria-label='Focus moved to this content'>
			The content that will obtain focus when the modal closes.
		</div>

		<Button onClick={()=>setIsOpen(true)}>Show Modal</Button>
			<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={()=>setIsOpen(false)}>
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</ModalBody>
					<ModalFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
`,
	closeOnOverlayClick: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={()=>setIsOpen(true)}>Show Modal</Button>
			<Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</ModalBody>
					<ModalFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>);
	}
`,
	centered: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={()=>setIsOpen(true)}>Show Modal</Button>
			<Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} isCentered>
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</ModalBody>
					<ModalFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>);
	}
`,
	size: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	const [size, setSize] = useState('md');
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
					>{\`Show \${s} Modal\`}</Button>
				))}
			</div>
			<Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} size={size}>
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</ModalBody>
					<ModalFooter>
						<div className='space-x-3'>
							<Button onClick={()=>setIsOpen(false)}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</div>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>);
	}
`,
};
