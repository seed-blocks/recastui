export const avatarSnippets = {
	import: `import { Avatar } from "@recastui/react";`,
	usage: `
	<div className="flex space-x-5 direction-row">
		{/* Default placeholder */}
		<Avatar />
		{/* With Image */}
		<Avatar src='/images/nicolas-horn.jpg' name='Nicolas Horn'/>
		{/* With name initials */}
		<Avatar name='Nicolas Horn'/>
	</div>
	`,
	variants: `
	<div className="flex space-x-5 direction-row">
		{/* Default */}
		<Avatar variant='filled' name='John Doe' />
		<Avatar variant='outline' name='John Doe' />
		<Avatar variant='subtle' />
	</div>
	`,
	rounded: `
	<div className="flex space-x-5 direction-row">
		<Avatar src='/images/aiony-haust.jpeg' name='Avatar' rounded='none' />
		<Avatar src='/images/nicolas-horn.jpg' name='Avatar' rounded='sm' />
		<Avatar src='/images/luis-villasmil.jpeg' name='Avatar' rounded='md' />
		<Avatar src='/images/minh-pham.jpeg' name='Avatar' rounded='lg' />
		<Avatar src='/images/peyman-farmani.jpeg' name='Avatar' rounded='full' />
	</div>
	`,
	size: `
	<div className="flex space-x-5 direction-row">
		<Avatar size='xxs' src='/images/aiony-haust.jpeg' name='Avatar' rounded='full' />
		<Avatar size='xs' src='/images/nicolas-horn.jpg' name='Avatar' rounded='full' />
		<Avatar size='sm' src='/images/luis-villasmil.jpeg' name='Avatar' rounded='full' />
		<Avatar size='md' src='/images/minh-pham.jpeg' name='Avatar' rounded='full' />
		<Avatar size='lg' src='/images/peyman-farmani.jpeg' name='Avatar' rounded='full' />
		<Avatar size='xl' src='/images/aiony-haust.jpeg' name='Avatar' rounded='full' />
		<Avatar size='xxl' src='/images/leio-mclaren.jpeg' name='Avatar' rounded='full' />
	</div>
	`,
	color: `
<div>
	<div className="space-y-2">Stateful colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<Avatar color='error' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='info' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='success' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='warning' variant='subtle' name='John Doe' rounded='full' />
	</div>
	<div className="space-y-2">All other colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5">
		<Avatar color='tomato' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='red' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='crimson' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='pink' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='plum' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='purple' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='violet' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='indigo' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='blue' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='cyan' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='teal' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='green' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='grass' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='orange' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='brown' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='sky' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='mint' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='yellow' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='amber' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='gold' variant='subtle' name='John Doe' rounded='full' />
		<Avatar color='bronze' variant='subtle' name='John Doe' rounded='full' />
	</div>
</div>
	`,
};
