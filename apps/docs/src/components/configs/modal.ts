export const modalSnippets = {
	import: `import {
		Modal,
		ModalTrigger,
		ModalContent,
		ModalHeading,
		ModalFooter,
		ModalBody,
		ModalCloseButton
	} from "@recastui/react";
`,
	usage: `
	<Modal>
		<ModalTrigger asChild>
			<Button>Open Modal</Button>
		</ModalTrigger>
		<ModalContent>
			<ModalHeading>Modal Title</ModalHeading>
			<ModalCloseButton />
			<ModalBody>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</ModalBody>
			<ModalFooter>
				<div className='space-x-3'>
					<Button>
						Main Action
					</Button>
					<Button variant='ghost'>Secondary Action</Button>
				</div>
			</ModalFooter>
		</ModalContent>
	</Modal>
`,
	returnFocus: `
<Modal returnFocus={false}>
	<ModalTrigger asChild>
		<Button>Open Modal</Button>
	</ModalTrigger>
	<ModalContent>
		<ModalHeading>Modal Title</ModalHeading>
		<ModalCloseButton />
		<ModalBody>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</ModalBody>
		<ModalFooter>
			<div className='space-x-3'>
				<Button>
					Main Action
				</Button>
				<Button variant='ghost'>Secondary Action</Button>
			</div>
		</ModalFooter>
	</ModalContent>
</Modal>
`,
	centered: `
<Modal isCentered>
	<ModalTrigger asChild>
		<Button>Open Modal</Button>
	</ModalTrigger>
	<ModalContent>
		<ModalHeading>Modal Title</ModalHeading>
		<ModalCloseButton />
		<ModalBody>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</ModalBody>
		<ModalFooter>
			<div className='space-x-3'>
				<Button>
					Main Action
				</Button>
				<Button variant='ghost'>Secondary Action</Button>
			</div>
		</ModalFooter>
	</ModalContent>
</Modal>
`,
	controlled: `
() => {
	const [isOpen, setIsOpen] = useState(false);
	return (
	<>
		<Button onClick={() => setIsOpen(true))>Open Modal</Button>
		<Modal open={isOpen} onOpenChange={setIsOpen}>
			<ModalContent>
				<ModalHeading>Modal Title</ModalHeading>
				<ModalCloseButton />
				<ModalBody>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</ModalBody>
				<ModalFooter>
					<div className='space-x-3'>
						<Button onClick={() => setIsOpen(false))>
							Close
						</Button>
						<Button variant='ghost'>Secondary Action</Button>
					</div>
				</ModalFooter>
			</ModalContent>
		</Modal>
	</>
	)
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
					<Modal key={s} size={s}>
						<ModalTrigger asChild>
							<Button>Show {s} Modal</Button>
						</ModalTrigger>
						<ModalContent>
							<ModalHeading>Modal Title</ModalHeading>
							<ModalCloseButton />
							<ModalBody>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</ModalBody>
							<ModalFooter>
								<div className='space-x-3'>
									<Button>
										Main Action
									</Button>
									<Button variant='ghost'>Secondary Action</Button>
								</div>
							</ModalFooter>
						</ModalContent>
					</Modal>
				))}
			</div>
		</>);
	}
`,
};
