export const buttonSnippets = {
	import: `import { Button } from "@recastui/react";`,
	usage: `<Button>Button</Button>`,
	sizes: `
	<div className="space-x-2">
		<Button size='xs'>Button</Button>
		<Button size='sm'>Button</Button>
		<Button size='base'>Button</Button>
		<Button size='lg'>Button</Button>
		<Button size='xl'>Button</Button>
	</div>
	`,
	variants: `
	<div className="space-x-2">
		<Button variant='solid'>Button</Button>
		<Button variant='outline'>Button</Button>
		<Button variant='ghost'>Button</Button>
		<Button variant='link'>Button</Button>
	</div>
	`,
	colors: `
<div>
	<div className="space-y-2">Default color:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<Button>main</Button>
	</div>
	<div className="space-y-2">Stateful colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<Button color='success'>success</Button>
		<Button color='info'>info</Button>
		<Button color='warning'>warning</Button>
		<Button color='error'>error</Button>
	</div>
	<div className="space-y-2">All other colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5">
		<Button color='tomato'>tomato</Button>
		<Button color='red'>red</Button>
		<Button color='crimson'>crimson</Button>
		<Button color='pink'>pink</Button>
		<Button color='plum'>plum</Button>
		<Button color='purple'>purple</Button>
		<Button color='violet'>violet</Button>
		<Button color='indigo'>indigo</Button>
		<Button color='blue'>blue</Button>
		<Button color='cyan'>cyan</Button>
		<Button color='teal'>teal</Button>
		<Button color='green'>green</Button>
		<Button color='grass'>grass</Button>
		<Button color='orange'>orange</Button>
		<Button color='brown'>brown</Button>
		<Button color='sky'>sky</Button>
		<Button color='mint'>mint</Button>
		<Button color='lime'>lime</Button>
		<Button color='yellow'>yellow</Button>
		<Button color='amber'>amber</Button>
		<Button color='gold'>gold</Button>
		<Button color='bronze'>bronze</Button>
	</div>
</div>
	`,
	fullWidth: `
	<div className="space-x-2">
		<Button fullWidth>Full width</Button>
	</div>
	`,
	disabled: `
	<div className="space-x-2">
		<Button disabled>Disabled</Button>
	</div>
	`,
	rounded: `
	<div className="space-x-2">
		<Button rounded>Rounded</Button>
	</div>
	`,
	pill: `
	<div className="space-x-2">
		<Button pill>Pill</Button>
	</div>
	`,
	square: `
	<div className="space-x-2">
		<Button square='xs'>xs</Button>
		<Button square='sm'>sm</Button>
		<Button square='base'>base</Button>
		<Button square='lg'>lg</Button>
		<Button square='xl'>xl</Button>
	</div>
	`,
	circle: `
	<div className="space-x-2">
	<Button pill square='xs' className='border-0'>xs</Button>
	<Button variant='outline' pill square='sm'>sm</Button>
	<Button pill square='base' className='border-0'>base</Button>
	<Button pill square='lg' className='border-0'>lg</Button>
	<Button pill square='xl' className='border-0'>xl</Button>
	</div>
	`,
	iconButton: `
	<div className="space-x-2">
	<Button square='base' color='violet' variant='ghost' className='border-0'><IconPlus className='w-6 h-6' aria-hidden="true" focusable="false"/></Button>
	<Button variant='outline' color='indigo' square='base'><IconThumbUp className='w-6 h-6' aria-hidden="true" focusable="false"/></Button>
	<Button square='base' pill color='blue' className='border-0'><IconBrandTwitter className='w-6 h-6' aria-hidden="true" focusable="false"/></Button>
	<Button square='xl' pill color='orange' variant='outline'><IconLoader className='w-8 h-8' aria-hidden="true" focusable="false"/></Button>
	<Button><IconMenu className='w-6 h-6 mr-2' aria-hidden="true" focusable="false"/> Menu</Button>
	</div>
	`,
};
