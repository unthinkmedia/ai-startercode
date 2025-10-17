import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Block } from 'baseui/block'

// Search molecule combining input and button atoms
const Search = ({ 
  placeholder = 'Search...', 
  value = '',
  onSearch,
  onChange,
  disabled = false,
  size = 'default'
}: {
  placeholder?: string
  value?: string
  onSearch?: (query: string) => void
  onChange?: (value: string) => void
  disabled?: boolean
  size?: 'compact' | 'default' | 'large'
}) => {
  const [searchValue, setSearchValue] = React.useState(value)

  const handleChange = (event: { target: { value: string } }) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    onChange?.(newValue)
  }

  const handleSearch = () => {
    onSearch?.(searchValue)
  }

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Block display="flex" alignItems="center" width="100%" maxWidth="400px">
      <Block flex="1" marginRight="scale300">
        <Input
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          clearable
          startEnhancer={() => (
            <Block paddingLeft="scale200">
              {React.createElement('vibe-icon', { name: 'search', size: '16' })}
            </Block>
          )}
        />
      </Block>
      <Button
        onClick={handleSearch}
        disabled={disabled || !searchValue.trim()}
        size={size}
        kind="primary"
      >
        Search
      </Button>
    </Block>
  )
}

const meta = {
  title: '02-Molecules/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    value: {
      control: 'text',
      description: 'Initial value of the search input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the search component',
    },
    size: {
      control: 'select',
      options: ['compact', 'default', 'large'],
      description: 'Size of the search component',
    },
  },
  args: {
    onSearch: (query: string) => console.log('Search:', query),
    onChange: (value: string) => console.log('Change:', value),
  },
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
}

export const WithValue: Story = {
  args: {
    value: 'React components',
    placeholder: 'Search components...',
  },
}

export const Compact: Story = {
  args: {
    size: 'compact',
    placeholder: 'Quick search...',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Search for anything...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Search disabled...',
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Find your perfect component...',
  },
}

// Export order for Storybook
export const __namedExportsOrder = ['Default', 'WithValue', 'Compact', 'Large', 'Disabled', 'CustomPlaceholder']