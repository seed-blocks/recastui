export const alertSnippets = {
	import: `import { Alert } from '@recastui/react';`,
	usage: `
<Alert
	icon={IconAlertCircle}
	title='Something went wrong!'
	color='error'
	description='Please check your input and try again.'
/>
`,
	variants: `
<>
	<Alert
		icon={IconAlertCircle}
		title='Something went wrong!'
		color='error'
		description='Please check your input data and try again.'
	/>
	<div className='my-4' />
	<Alert
		variant='solid'
		icon={IconAlertCircle}
		title='Something went wrong!'
		color='error'
		description='Please check your input data and try again.'
	/>
	<div className='my-4' />
	<Alert
		variant='outline'
		icon={IconAlertCircle}
		title='Something went wrong!'
		color='error'
		description='Please check your input data and try again.'
	/>
</>
`,
	colors: `
<>
	<Alert
		icon={IconAlertCircle}
		title='Purple color'
		color='purple'
		description='Please check your input data and try again.'
	/>
	<div className='my-4' />
	<Alert
		variant='solid'
		icon={IconAlertCircle}
		title='Pink solid color'
		color='pink'
		description='Please check your input data and try again.'
	/>
	<div className='my-4' />
	<Alert
		variant='outline'
		icon={IconAlertCircle}
		title='Just a mono color'
		color='main'
		description='Please check your input data and try again.'
	/>
</>
`,
	stateColors: `
<>
	<Alert
		icon={IconAlertCircle}
		title='Something went wrong!'
		color='error'
		description='Please check your input data and try again.'
	/>
	<div className='my-4' />
	<Alert
		icon={IconCircleCheck}
		title='Great success!'
		color='success'
		description='Your application has been successfully submitted. High five!'
	/>
	<div className='my-4' />
	<Alert
		icon={IconInfoCircle}
		title='Its time to get ready!'
		color='info'
		description='Recastui is going live on April 1st. Get ready!'
	/>
	<div className='my-4' />
	<Alert
		icon={IconAlertTriangle}
		title='Your battery is low'
		color='warning'
		description='Seems like your battery is about die, recharge now.'
	/>
</>
`,
};
