export const menuSnippets = {
	import: `import {
		Menu,
		MenuButton,
		MenuList,
		MenuItem
	} from "@recastui/react";`,
	usage: `
<div className='h-48'>
	<Menu>
		<MenuButton>Open Menu</MenuButton>
		<MenuList>
			<MenuItem>Item 1</MenuItem>
			<MenuItem>Item 2</MenuItem>
			<MenuItem>Item 3</MenuItem>
		</MenuList>
	</Menu>
</div>
	`,
	internal: `
<div className='h-32'>
	<Menu>
		{({ isOpen }) => (
			<>
				<MenuButton>
					{isOpen ? 'Close' : 'Open'}
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem onClick={() => alert('Hello World')}>Invoice</MenuItem>
				</MenuList>
			</>
		)}
	</Menu>
</div>
`,
};
