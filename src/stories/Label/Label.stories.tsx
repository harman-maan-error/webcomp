import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    textColor: { control: 'color' }
  },
  args: {
    text: 'Label :)',
    disabled: false,
    textColor: '#000'
  }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Label Disabled'
  }
};
