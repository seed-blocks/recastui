import { Fragment, useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import { Button } from '@recastui/react';

export type CodeBlockProps = {
	code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		if (copied && code) copy(code);

		const timeoutId = setTimeout(() => {
			setCopied(false);
		}, 2000);

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [copied]);
	return (
		<div className='prose prose-gray relative'>
			<Button
				size='xs'
				onClick={() => setCopied(true)}
				className='absolute top-2 right-3 uppercase'>
				{copied ? 'Copied' : 'Copy'}
			</Button>
			<pre>
				<code>{code.trimEnd()}</code>
			</pre>
		</div>
	);
}
