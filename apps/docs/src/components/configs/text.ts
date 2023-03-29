export const textSnippets = {
	import: `import { Text } from "@recastui/react";`,
	usage: `
<>
	<Text size="xs">Extra small text</Text>
	<Text size="sm">Small text</Text>
	<Text size="md">Default text</Text>
	<Text size="lg">Large text</Text>
	<Text size="xl">Extra large text</Text>
	<Text weight={500}>Semibold</Text>
	<Text weight={700}>Bold</Text>
	<Text italic>Italic</Text>
	<Text decoration="underline">Underlined</Text>
	<Text decoration="line-through">Strikethrough</Text>
	<Text color="tomato">Tomato text</Text>
	<Text color="violet">Violet text</Text>
	<Text color="teal">Teal text</Text>
	<Text transform="uppercase">Uppercase</Text>
	<Text transform="capitalize">capitalized text</Text>
	<Text align="center">Aligned to center</Text>
	<Text align="right">Aligned to right</Text>
</>
`,
	sizes: `
<div className='space-y-3'>
  <Text size='9xl'>(9xl) In love with React & Recastui</Text>
  <Text size='8xl'>(8xl) In love with React & Recastui</Text>
  <Text size='7xl'>(7xl) In love with React & Recastui</Text>
  <Text size='6xl'>(6xl) In love with React & Recastui</Text>
  <Text size='5xl'>(5xl) In love with React & Recastui</Text>
  <Text size='4xl'>(4xl) In love with React & Recastui</Text>
  <Text size='3xl'>(3xl) In love with React & Recastui</Text>
  <Text size='2xl'>(2xl) In love with React & Recastui</Text>
  <Text size='xl'>(xl) In love with React & Recastui</Text>
  <Text size='lg'>(lg) In love with React & Recastui</Text>
  <Text size='md'>(md) In love with React & Recastui</Text>
  <Text size='sm'>(sm) In love with React & Recastui</Text>
  <Text size='xs'>(xs) In love with React & Recastui</Text>
</d>
`,
	truncate: `
<div className='max-w-[450px] p-10 bg-main-3'>
	<Text truncate>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
	</Text>
</div>
`,
	lineCLamp: `
<Text lineClamp='3'>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
</Text>
`,
};
