import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'i am a radio button',
    name: 'i dont know',
    checked: false,
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'I am disabled now!',
  }
};
