import { Meta } from '@storybook/html';
import { Box } from '.';

export default {
	title: 'Primitives/Box'
} as Meta;

export const Default = (args: any) => <Box {...args}>Box</Box>;
Default.args = {
	p: '2rem',
	color: 'red',
	variant: 'dark'
};
