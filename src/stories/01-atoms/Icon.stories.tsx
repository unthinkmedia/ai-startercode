import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

interface VibeIconProps {
  name: string
  size?: string
  filled?: boolean
}

// Simple Icon atom using vibe-icon web component
const Icon = ({ name, size = '24', filled = false }: {
  name: string
  size?: string
  filled?: boolean
}) => {
  const iconProps: VibeIconProps = {
    name,
    size,
  }
  
  if (filled) {
    iconProps.filled = true
  }

  return React.createElement('vibe-icon', iconProps)
}

const meta = {
  title: '01-Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name from vibe-icon library',
    },
    size: {
      control: 'select',
      options: ['16', '20', '24', '32', '48'],
      description: 'Icon size in pixels',
    },
    filled: {
      control: 'boolean',
      description: 'Show filled variant of the icon',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'home',
    size: '24',
  },
}

export const Small: Story = {
  args: {
    name: 'settings',
    size: '16',
  },
}

export const Large: Story = {
  args: {
    name: 'heart',
    size: '48',
  },
}

export const Filled: Story = {
  args: {
    name: 'star',
    size: '32',
    filled: true,
  },
}

export const Navigation: Story = {
  args: {
    name: 'arrow-right',
    size: '24',
  },
}

export const Actions: Story = {
  args: {
    name: 'edit',
    size: '20',
  },
}

// Export order for Storybook
export const __namedExportsOrder = ['Default', 'Small', 'Large', 'Filled', 'Navigation', 'Actions']