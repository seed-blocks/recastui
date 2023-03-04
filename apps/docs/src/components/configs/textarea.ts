export const textareaSnippets = {
	import: `import { Textarea } from "@recastui/react";`,
	usage: `<Textarea placeholder='Here is a sample placeholder' />`,
	fullWidth: `<div className='space-y-4'>
	<Textarea placeholder='Full width' fullWidth />
	<Textarea placeholder='Width auto' fullWidth={false} />
	</div>`,
	resize: `<div className='space-y-4'>
		<Textarea placeholder='resize both' resize='both' />
		<Textarea placeholder='resize horizontal' resize='horizontal' />
		<Textarea placeholder='resize vertical' resize='vertical' />
		<Textarea placeholder='resize none' resize='none' />
	</div>`,
	variant: `<div className='space-y-4'>
		<Textarea variant='outline' placeholder='Outline' />
		<Textarea variant='solid' placeholder='Solid' />
		<Textarea variant='underline' placeholder='Underline' />
		<Textarea variant='rounded' placeholder='Rounded' />
	</div>`,
	error: `<Textarea placeholder='Textarea error' error />`,
	disabled: `<Textarea placeholder='Textarea disabled' disabled />`,
};
