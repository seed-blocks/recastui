export const skeletonSnippets = {
	import: `import { Skeleton } from "@recastui/react";`,
	usage: `
<div className='space-y-3'>
	<Skeleton />
	<Skeleton />
	<Skeleton />
</div>
`,
	wrap: `
<Skeleton>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>
`,
	size: `
<div className='space-y-3'>
	<Skeleton h='32' w='32' />
	<Skeleton />
	<Skeleton />
	<Skeleton w='3/4'/>
</div>
`,
	circle: `
<div className='space-y-3'>
	<Skeleton h='32' w='32' circle />
	<Skeleton />
	<Skeleton />
</div>
`,
	loaded: `
<Skeleton isLoaded>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>
`,
};
