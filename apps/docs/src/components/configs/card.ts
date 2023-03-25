export const cardSnippets = {
	import: `import { Card, CardHeader, CardBody, and CardFooter } from "@recastui/react";`,
	usage: `
<Card>
	<CardBody>
		View a summary of all your customers over the last month.
	</CardBody>
</Card>
`,
	fullUsage: `
<Card>
  <CardHeader><h2 className='text-2xl'>Title</h2></CardHeader>
  <CardBody>
	View a summary of all your customers over the last month.
  </CardBody>
  <CardFooter>Footer text</CardFooter>
</Card>
`,
	variants: `
<div className='space-y-5'>
	<Card variant='outline'>
		<CardBody>
			Outlined Card variant.
		</CardBody>
	</Card>
	<Card variant='elevated'>
		<CardBody>
			Elevated Card variant.
		</CardBody>
	</Card>
</div>
`,
	bg: `
<div className='space-y-5'>
<Card bg='purple'>
	<CardBody>
		Outlined Card variant.
	</CardBody>
</Card>
	<Card bg='green' variant='outline'>
		<CardBody>
			Outlined Card variant.
		</CardBody>
	</Card>
	<Card bg='amber' variant='elevated'>
		<CardBody>
			Elevated Card variant.
		</CardBody>
	</Card>
</div>
`,
	hover: `
<Card bg='pink' hoverState>
	<CardBody>
		Card with a hover state.
	</CardBody>
</Card>
`,
	size: `
<div className='space-y-5'>
	<Card size='xs' hoverState>
		<CardBody>
			Card sized extra small.
		</CardBody>
	</Card>
	<Card size='sm' hoverState>
		<CardBody>
			Card sized small.
		</CardBody>
	</Card>
	<Card size='md' hoverState>
		<CardBody>
			Card sized medium.
		</CardBody>
	</Card>
	<Card size='full' hoverState>
		<CardBody>
			Card sized full width.
		</CardBody>
	</Card>
</div>
`,
	image: `
<Card size='sm' className='divide-y divide-main-7'>
  <CardBody>
    <img
      src='https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='The Recasted Amber double sofa'

    />
    <div className='mt-6 spacing-y-3'>
      <h2 className='text-xl'>Living room Sofa</h2>
      <p>
			Pairing function and form to perfection, the super-cushy Stitch sofa is beautifully designed with a plush stitched backrest and high-density cushioning.
      </p>
      <p className='text-2xl font-semibold mt-2'>
        $1299
      </p>
    </div>
  </CardBody>
  <CardFooter>
		<Button>
			Buy now
		</Button>
		<Button variant='ghost'>
			Add to cart
		</Button>
  </CardFooter>
</Card>
`,
	horizontal: `
<Card className='flex flex-col sm:flex-row overflow-hidden' variant='outline'>
  <img className='object-cover max-w-full sm:max-w-[200px]'
    src='https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte art on a white cup'
  />
	<div>
		<CardBody>
			<h2 className='text-xl'>Perfect latte art</h2>
			<p className='py-2'>
			Ever wondered how to make latte art in your own kitchen? With this easy step by step guide you can start making your very own pieces of latte art today!
			</p>
		</CardBody>
		<CardFooter>
			<Button>
			Buy me Coffee
			</Button>
		</CardFooter>
	</div>
</Card>
`,
};
