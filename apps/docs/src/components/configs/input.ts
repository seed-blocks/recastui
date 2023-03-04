export const inputSnippets = {
	import: `import { Input } from "@recastui/react";`,
	usage: `<Input placeholder='Basic usage' />`,
	fullWidth: `<div className='space-y-2'>
	<Input placeholder='Full width' fullWidth />
	<Input placeholder='Width auto' fullWidth={false} />
	</div>`,
	size: `<div className='space-y-2'>
		<Input placeholder='extra small size' size='xs' />
		<Input placeholder='small size' size='sm' />
		<Input placeholder='medium size' size='base' />
		<Input placeholder='large size' size='lg' />
	</div>`,
	variant: `<div className='space-y-2'>
		<Input variant='outline' placeholder='Outline' />
		<Input variant='solid' placeholder='Solid' />
		<Input variant='underline' placeholder='Underline' />
		<Input variant='rounded' placeholder='Rounded' />
	</div>`,
	error: `<Input placeholder='Input error' error />`,
	addons: `<div className='space-y-4'>
		<div className='flex'>
		<div className='flex items-center px-3 bg-gray-3 border border-gray-7 border-r-0'>+234</div>
			<Input type='tel' placeholder='phone number' />
		</div>
		<div className='flex'>
			<div className='flex items-center px-3 bg-gray-3 border border-gray-7 border-r-0'>https://</div>
			<Input placeholder='example' />
			<div className='flex items-center px-3 bg-gray-3 border border-gray-7 border-l-0'>.com</div>
		</div>
	</div>`,
	password: `function PasswordInput() {
		const [show, setShow] = React.useState(false);
		const handleClick = () => setShow(!show);

		return (
			<div className='flex relative'>
				<Input
					type={show ? 'text' : 'password'}
					placeholder='Enter password'
				/>
				<Button square='xs' size='xs' variant='ghost' onClick={handleClick} className='absolute right-1 z-20 top-1/2 -translate-y-1/2'>
						{show ? <IconEye width={16} height={16} /> : <IconEyeOff width={16} height={16} />}
					</Button>
			</div>
		);
	}`,
	date: `<Input type='date' placeholder='Date input' />`,
	dateTime: `<Input type='datetime-local' placeholder='Datetime input' />`,
};
