import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {
    headers: ['Student ID', 'Name'],
    data: [['0414999', ' idk '], ['0414988', 'maybe john']],
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true
  }
};
