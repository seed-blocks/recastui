import { LabelProps } from './../../../../../packages/react/src/label/Label';
export const radioSnippets = {
	import: `import { Radio } from "@recastui/react";`,
	usage: `<Radio label='Radio' />`,
	disabled: `
<div className='flex space-x-5 direction-row'>
	<Radio disabled label='Radio'/>
	<Radio disabled defaultChecked label='Radio'/>
</div>
`,
	color: `
	<div>
	<di className="space-y-2">Stateful colors:</di	v>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<Radio color='error' label='error'/>
		<Radio color='info' label='info'/>
		<Radio color='success' label='success'/>
		<Radio color='warning' label='warning'/>
	</div>
	<div className="space-y-2">All other colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5">
		<Radio color='tomato' label='tomato'/>
		<Radio color='red' label='red'/>
		<Radio color='crimson' label='crimson'/>
		<Radio color='pink' label='pink'/>
		<Radio color='plum' label='plum'/>
		<Radio color='purple' label='purple'/>
		<Radio color='violet' label='violet'/>
		<Radio color='indigo' label='indigo'/>
		<Radio color='blue' label='blue'/>
		<Radio color='cyan' label='cyan'/>
		<Radio color='teal' label='teal'/>
		<Radio color='green' label='green'/>
		<Radio color='grass' label='grass'/>
		<Radio color='orange' label='orange'/>
		<Radio color='brown' label='brown'/>
		<Radio color='sky' label='sky'/>
		<Radio color='mint' label='mint'/>
		<Radio color='yellow' label='yellow'/>
		<Radio color='amber' label='amber'/>
		<Radio color='gold' label='gold'/>
		<Radio color='bronze' label='bronze'/>
	</div>
</div>
	`,
	error: `<Radio error label='error' />`,
	group: `<div role='radiogroup' className='space-y-2'>
	<fieldset>
		<legend className='font-semibold'>What would you link to drink?</legend>
	</fieldset>
	<Radio labelProps={{fullWidth: true}} name='beverage' value='tea' label='Tea'/>
	<Radio labelProps={{fullWidth: true}} name='beverage' value='coffee' label='Coffee'/>
</div>`,
	size: `<div className='space-y-2'>
	<Radio labelProps={{fullWidth: true}} name='size' size='sm' label='Tea'/>
	<Radio labelProps={{fullWidth: true}} name='size' size='base' label='Tea'/>
	<Radio labelProps={{fullWidth: true}} name='size' size='lg' label='Tea'/>
</div>`,
};
