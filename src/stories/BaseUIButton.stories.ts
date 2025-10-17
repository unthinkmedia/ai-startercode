import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'baseui/button'

const meta = {
  title: 'BaseUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['mini', 'compact', 'default', 'large'],
    },
    shape: {
      control: 'select',
      options: ['default', 'pill', 'round', 'square'],
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
  args: { onClick: () => console.log('Button clicked!') },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    children: 'Secondary Button',
  },
}

export const Tertiary: Story = {
  args: {
    kind: 'tertiary',
    children: 'Tertiary Button',
  },
}

export const Large: Story = {
  args: {
    kind: 'primary',
    size: 'large',
    children: 'Large Button',
  },
}

export const Compact: Story = {
  args: {
    kind: 'primary',
    size: 'compact',
    children: 'Compact Button',
  },
}

export const Pill: Story = {
  args: {
    kind: 'primary',
    shape: 'pill',
    children: 'Pill Button',
  },
}

export const Loading: Story = {
  args: {
    kind: 'primary',
    isLoading: true,
    children: 'Loading Button',
  },
}

export const Disabled: Story = {
  args: {
    kind: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
}

// Export order for Storybook
export const __namedExportsOrder = ['Primary', 'Secondary', 'Tertiary', 'Large', 'Compact', 'Pill', 'Loading', 'Disabled']