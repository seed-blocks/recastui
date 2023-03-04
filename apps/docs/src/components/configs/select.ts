export const selectSnippets = {
	import: `import { Select } from "@recastui/react";`,
	usage: `<Select placeholder='Select an option'>
		<option value='option1'>Option 1</option>
		<option value='option2'>Option 2</option>
		<option value='option3'>Option 3</option>
	</Select>`,
	fullWidth: `<div className='space-y-2'>
	<Select placeholder='Full width' fullWidth />
	<Select placeholder='Width auto' fullWidth={false} />
	</div>`,
	size: `<div className='space-y-2'>
		<Select placeholder='extra small size' size='xs' />
		<Select placeholder='small size' size='sm' />
		<Select placeholder='medium size' size='base' />
		<Select placeholder='large size' size='lg' />
	</div>`,
	variant: `<div className='space-y-2'>
		<Select variant='outline' placeholder='Outline' />
		<Select variant='solid' placeholder='Solid' />
		<Select variant='underline' placeholder='Underline' />
		<Select variant='rounded' placeholder='Rounded' />
	</div>`,
	disabled: `<Select placeholder='Select an option' disabled>
		<option value='option1'>Option 1</option>
		<option value='option2'>Option 2</option>
		<option value='option3'>Option 3</option>
	</Select>`,
	error: `<Select placeholder='Select an option' error>
	<option value='option1'>Option 1</option>
	<option value='option2'>Option 2</option>
	<option value='option3'>Option 3</option>
</Select>`,
};
