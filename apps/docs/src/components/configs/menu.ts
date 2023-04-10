import { label } from './../../../../../packages/themes/src/label';
export const menuSnippets = {
	import: `import {
		Menu,
		MenuItem
	} from "@recastui/react";`,
	usage: `
<div>
	<Menu label='Open Menu'>
			<MenuItem>Item 1</MenuItem>
			<MenuItem>Item 2</MenuItem>
			<MenuItem>Item 3</MenuItem>
	</Menu>
</div>
	`,
	nested: `
	<Menu label="Edit menu">
		<MenuItem>Inflate</MenuItem>
		<MenuItem>Deflate</MenuItem>
		<MenuItem disabled>Tie</MenuItem>
		<Menu label="Change color to">
		<MenuItem>Blue</MenuItem>
		<MenuItem>Red</MenuItem>
		<MenuItem>Green</MenuItem>
		</Menu>
		<Menu label="Pop with">
			<MenuItem>Knife</MenuItem>
			<MenuItem>Pin</MenuItem>
			<MenuItem>Fork</MenuItem>
		</Menu>
		<Menu label="Transform">
			<MenuItem>Move</MenuItem>
			<MenuItem>Rotate</MenuItem>
			<MenuItem>Resize</MenuItem>
		</Menu>
	</Menu>
	`,
};
