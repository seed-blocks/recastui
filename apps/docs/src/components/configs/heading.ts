export const headingSnippets = {
	import: `import { Heading } from "@recastui/react";`,
	usage: `
<>
	<Heading order={1}>This is h1 title</Heading>
	<Heading order={2}>This is h2 title</Heading>
	<Heading order={3}>This is h3 title</Heading>
	<Heading order={4}>This is h4 title</Heading>
	<Heading order={5}>This is h5 title</Heading>
	<Heading order={6}>This is h6 title</Heading>
</>
`,
	text: `
<>
	<Heading order={3} weight='light' align="center">
		H3 heading aligned to center with 100 font-weight
	</Heading>
	<Heading order={4} decoration='underline' color="indigo">
		Underlined h4 heading with indigo color
	</Heading>
	<Heading order={5} color="pink" italic>
		Italic pink h5 heading
	</Heading>
</>
`,
};
