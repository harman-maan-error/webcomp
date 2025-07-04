import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
  },
  args: {
    content: 'Harman Maan',
    disabled: false,
    fontSize: '30px',
    color: 'black',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
