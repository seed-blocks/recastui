import React, { useEffect, useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import copy from 'copy-to-clipboard';
import * as Recastui from '@recastui/react';
import * as Icons from '@tabler/icons-react';

import theme from './theme';

const scope = {
	...React,
	...Recastui,
	...Icons,
};

export type PlaygroundProps = {
	code: string;
	noInline?: boolean;
};

export const Playground = ({ code, noInline }: PlaygroundProps) => {
	const [copied, setCopied] = useState(false);
	const [editorCode, setEditorCode] = useState(code);

	useEffect(() => {
		if (copied && editorCode) copy(editorCode);

		const timeoutId = setTimeout(() => {
			setCopied(false);
		}, 2000);

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [copied]);

	const handleOnChange = (newCode: string) => setEditorCode(newCode);

	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<LiveProvider
				code={editorCode?.trim()}
				theme={theme}
				scope={scope}
				noInline={noInline}
				language='tsx'>
				<LivePreview className='border-gray-7 w-full border p-6' />
				<div className='relative flex w-full flex-col items-center justify-center bg-[#1e1e1e] p-4'>
					<Recastui.Button
						variant='outline'
						size='xs'
						onClick={() => setCopied(true)}
						className='absolute top-3 right-3 z-10 uppercase'>
						{copied ? 'Copied' : 'Copy'}
					</Recastui.Button>
					<div className='text-xs font-bold uppercase text-white'>Editable Example</div>
					<LiveEditor
						onChange={handleOnChange}
						className='rounded-0 max-h-72 w-full overflow-y-auto'
					/>
				</div>
				<LiveError className='bg-error-9 mt-4 w-full p-2 text-white' />
			</LiveProvider>
		</div>
	);
};
