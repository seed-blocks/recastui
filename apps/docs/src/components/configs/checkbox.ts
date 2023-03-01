export const checkboxSnippets = {
	import: `import { Checkbox } from "@recastui/react";`,
	usage: `<Checkbox label='Checkbox' />`,
	disabled: `
<div className='flex space-x-5 direction-row'>
	<Checkbox disabled label='Checkbox'/>
	<Checkbox disabled defaultChecked label='Checkbox'/>
</div>
`,
	color: `
	<div>
	<div className="space-y-2">Default color:</div>
	<div className="space-y-2">Stateful colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<Checkbox color='error' label='error'/>
		<Checkbox color='info' label='info'/>
		<Checkbox color='success' label='success'/>
		<Checkbox color='warning' label='warning'/>
	</div>
	<div className="space-y-2">All other colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5">
		<Checkbox color='tomato' label='tomato'/>
		<Checkbox color='red' label='red'/>
		<Checkbox color='crimson' label='crimson'/>
		<Checkbox color='pink' label='pink'/>
		<Checkbox color='plum' label='plum'/>
		<Checkbox color='purple' label='purple'/>
		<Checkbox color='violet' label='violet'/>
		<Checkbox color='indigo' label='indigo'/>
		<Checkbox color='blue' label='blue'/>
		<Checkbox color='cyan' label='cyan'/>
		<Checkbox color='teal' label='teal'/>
		<Checkbox color='green' label='green'/>
		<Checkbox color='grass' label='grass'/>
		<Checkbox color='orange' label='orange'/>
		<Checkbox color='brown' label='brown'/>
		<Checkbox color='sky' label='sky'/>
		<Checkbox color='mint' label='mint'/>
		<Checkbox color='yellow' label='yellow'/>
		<Checkbox color='amber' label='amber'/>
		<Checkbox color='gold' label='gold'/>
		<Checkbox color='bronze' label='bronze'/>
	</div>
</div>
	`,
	error: `<Checkbox error label='error' />`,
};
