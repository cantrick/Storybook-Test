import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
 
const meta = {
  component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Another Button'
  },
};

export const Thirdly: Story = {
  args: {
    label: 'Is this even a button?'
  },
};

export const Fourthest: Story = {
  args: {
    label: 'Button 4'
  },
};