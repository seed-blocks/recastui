export const switchSnippets = {
	import: `import { Switch } from "@recastui/react";`,
	usage: `<Switch label='Switch' />`,
	disabled: `
<div className='flex space-x-5 direction-row'>
	<Switch disabled label='Switch'/>
	<Switch disabled defaultChecked label='Switch'/>
</div>
`,
	color: `
	<div>
	<div className="space-y-2">Stateful colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<Switch color='error' defaultChecked label='error'/>
		<Switch color='info' defaultChecked label='info'/>
		<Switch color='success' defaultChecked label='success'/>
		<Switch color='warning' defaultChecked label='warning'/>
	</div>
	<div className="space-y-2">All other colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5">
		<Switch color='tomato' defaultChecked label='tomato'/>
		<Switch color='red' defaultChecked label='red'/>
		<Switch color='crimson' defaultChecked label='crimson'/>
		<Switch color='pink' defaultChecked label='pink'/>
		<Switch color='plum' defaultChecked label='plum'/>
		<Switch color='purple' defaultChecked label='purple'/>
		<Switch color='violet' defaultChecked label='violet'/>
		<Switch color='indigo' defaultChecked label='indigo'/>
		<Switch color='blue' defaultChecked label='blue'/>
		<Switch color='cyan' defaultChecked label='cyan'/>
		<Switch color='teal' defaultChecked label='teal'/>
		<Switch color='green' defaultChecked label='green'/>
		<Switch color='grass' defaultChecked label='grass'/>
		<Switch color='orange' defaultChecked label='orange'/>
		<Switch color='brown' defaultChecked label='brown'/>
		<Switch color='sky' defaultChecked label='sky'/>
		<Switch color='mint' defaultChecked label='mint'/>
		<Switch color='yellow' defaultChecked label='yellow'/>
		<Switch color='amber' defaultChecked label='amber'/>
		<Switch color='gold' defaultChecked label='gold'/>
		<Switch color='bronze' defaultChecked label='bronze'/>
	</div>
</div>
	`,
	error: `<Switch error label='error' />`,
	rounded: `<div className='space-y-2'>
	<Switch labelProps={{fullWidth: true}} rounded='xs' label='Rounded xs'/>
	<Switch labelProps={{fullWidth: true}} rounded='sm' label='Rounded sm'/>
	<Switch labelProps={{fullWidth: true}} rounded='md' label='Rounded md'/>
	<Switch labelProps={{fullWidth: true}} rounded='lg' label='Rounded lg'/>
	<Switch labelProps={{fullWidth: true}} rounded='full' label='Rounded full'/>
</div>`,
	size: `<div className='space-y-2'>
	<Switch labelProps={{fullWidth: true}} name='size' size='sm' label='Tea'/>
	<Switch labelProps={{fullWidth: true}} name='size' size='base' label='Tea'/>
	<Switch labelProps={{fullWidth: true}} name='size' size='lg' label='Tea'/>
</div>`,
};
