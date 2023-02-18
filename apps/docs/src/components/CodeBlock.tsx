import { Fragment, useEffect, useState } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';
import { Button } from '@recastui/react';

export type CodeBlockProps = {
	code: string;
	lang?: Language;
};

export function CodeBlock({ code, lang = 'tsx' }: CodeBlockProps) {
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
		<Highlight {...defaultProps} code={code.trimEnd()} language={lang} theme={undefined}>
			{({ className, style, tokens, getTokenProps }) => (
				<div className='prose prose-gray relative'>
					<Button
						size='xs'
						onClick={() => setCopied(true)}
						className='absolute top-2 right-3 uppercase'>
						{copied ? 'Copied' : 'Copy'}
					</Button>
					<pre className={className} style={style}>
						<code>
							{tokens.map((line, lineIndex) => (
								<Fragment key={lineIndex}>
									{line
										.filter(token => !token.empty)
										.map((token, tokenIndex) => (
											<span key={tokenIndex} {...getTokenProps({ token })} />
										))}
									{'\n'}
								</Fragment>
							))}
						</code>
					</pre>
				</div>
			)}
		</Highlight>
	);
}

export default CodeBlock;
