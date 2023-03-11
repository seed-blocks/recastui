export const badgeSnippets = {
	import: `import { Badge } from "@recastui/react";`,
	usage: `<Badge>Default</Badge>`,
	variants: `
	<div className="space-x-2">
		<Badge variant='solid'>Solid</Badge>
		<Badge variant='outline'>Outline</Badge>
		<Badge variant='subtle'>Subtle</Badge>
	</div>
	`,
	colors: `
<div>
	<div className="space-y-2">Default color:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<div><Badge>main</Badge></div>
	</div>
	<div className="space-y-2">Stateful colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5 mb-2">
		<div><Badge color='success'>success</Badge></div>
		<div><Badge color='info'>info</Badge></div>
		<div><Badge color='warning'>warning</Badge></div>
		<div><Badge color='error'>error</Badge></div>
	</div>
	<div className="space-y-2">All other colors:</div>
	<div className="grid gap-2 grid-cols-3 lg:grid-cols-5">
		<div><Badge color='tomato'>tomato</Badge></div>
		<div><Badge color='red'>red</Badge></div>
		<div><Badge color='crimson'>crimson</Badge></div>
		<div><Badge color='pink'>pink</Badge></div>
		<div><Badge color='plum'>plum</Badge></div>
		<div><Badge color='purple'>purple</Badge></div>
		<div><Badge color='violet'>violet</Badge></div>
		<div><Badge color='indigo'>indigo</Badge></div>
		<div><Badge color='blue'>blue</Badge></div>
		<div><Badge color='cyan'>cyan</Badge></div>
		<div><Badge color='teal'>teal</Badge></div>
		<div><Badge color='green'>green</Badge></div>
		<div><Badge color='grass'>grass</Badge></div>
		<div><Badge color='orange'>orange</Badge></div>
		<div><Badge color='brown'>brown</Badge></div>
		<div><Badge color='sky'>sky</Badge></div>
		<div><Badge color='mint'>mint</Badge></div>
		<div><Badge color='lime'>lime</Badge></div>
		<div><Badge color='yellow'>yellow</Badge></div>
		<div><Badge color='amber'>amber</Badge></div>
		<div><Badge color='gold'>gold</Badge></div>
		<div><Badge color='bronze'>bronze</Badge></div>
	</div>
</div>
	`,
	pill: `<Badge pill>pill</Badge>`,
	uppercase: `
	<div className="space-x-2">
		<Badge uppercase>Uppercase</Badge>
		<Badge uppercase={false}>Uppercase False</Badge>
	</div>
	`,
};
