import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { LabelMedium } from 'baseui/typography'

interface NavItem {
  label: string
  href?: string
  active?: boolean
  onClick?: () => void
}

// Navigation organism combining multiple molecules and atoms
const Navigation = ({ 
  items = [],
  logo,
  variant = 'horizontal',
  actions
}: {
  items?: NavItem[]
  logo?: React.ReactNode
  variant?: 'horizontal' | 'vertical'
  actions?: React.ReactNode
}) => {
  const isHorizontal = variant === 'horizontal'

  return (
    <Block
      display="flex"
      flexDirection={isHorizontal ? 'row' : 'column'}
      alignItems={isHorizontal ? 'center' : 'flex-start'}
      justifyContent={isHorizontal ? 'space-between' : 'flex-start'}
      padding="scale600"
      backgroundColor="backgroundPrimary"
      $style={{
        borderBottom: isHorizontal ? '1px solid var(--color-neutral-200)' : 'none',
        borderRight: !isHorizontal ? '1px solid var(--color-neutral-200)' : 'none',
        minHeight: isHorizontal ? 'auto' : '100vh',
        width: isHorizontal ? '100%' : '240px',
      }}
    >
      {/* Logo Section */}
      {logo && (
        <Block marginBottom={isHorizontal ? 'scale0' : 'scale800'}>
          {logo}
        </Block>
      )}

      {/* Navigation Items */}
      <Block
        display="flex"
        flexDirection={isHorizontal ? 'row' : 'column'}
        alignItems={isHorizontal ? 'center' : 'stretch'}
        flex={isHorizontal ? '1' : 'none'}
        marginLeft={isHorizontal ? 'scale600' : 'scale0'}
        marginRight={isHorizontal ? 'scale600' : 'scale0'}
      >
        {items.map((item, index) => (
          <Block
            key={index}
            marginRight={isHorizontal ? 'scale400' : 'scale0'}
            marginBottom={isHorizontal ? 'scale0' : 'scale200'}
          >
            <Button
              kind={item.active ? 'primary' : 'tertiary'}
              size="compact"
              onClick={item.onClick}
              overrides={{
                BaseButton: {
                  style: {
                    width: isHorizontal ? 'auto' : '100%',
                    justifyContent: isHorizontal ? 'center' : 'flex-start',
                  }
                }
              }}
            >
              <LabelMedium>{item.label}</LabelMedium>
            </Button>
          </Block>
        ))}
      </Block>

      {/* Actions Section */}
      {actions && (
        <Block marginTop={isHorizontal ? 'scale0' : 'auto'}>
          {actions}
        </Block>
      )}
    </Block>
  )
}

const meta = {
  title: '03-Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Navigation layout orientation',
    },
    items: {
      control: 'object',
      description: 'Array of navigation items',
    },
  },
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: NavItem[] = [
  { label: 'Home', active: true, onClick: () => console.log('Home clicked') },
  { label: 'Products', onClick: () => console.log('Products clicked') },
  { label: 'About', onClick: () => console.log('About clicked') },
  { label: 'Contact', onClick: () => console.log('Contact clicked') },
]

const defaultLogo = (
  <Block display="flex" alignItems="center">
    {React.createElement('vibe-icon', { name: 'cube', size: '24' })}
    <LabelMedium marginLeft="scale300" color="contentPrimary">
      Company
    </LabelMedium>
  </Block>
)

const defaultActions = (
  <Block display="flex" alignItems="center">
    <Block marginRight="scale200">
      <Button kind="tertiary" size="compact">
        Sign In
      </Button>
    </Block>
    <Button kind="primary" size="compact">
      Sign Up
    </Button>
  </Block>
)

export const HorizontalNavigation: Story = {
  args: {
    variant: 'horizontal',
    items: defaultItems,
    logo: defaultLogo,
    actions: defaultActions,
  },
}

export const VerticalNavigation: Story = {
  args: {
    variant: 'vertical',
    items: defaultItems,
    logo: defaultLogo,
    actions: defaultActions,
  },
}

export const SimpleHorizontal: Story = {
  args: {
    variant: 'horizontal',
    items: defaultItems,
  },
}

export const SimpleVertical: Story = {
  args: {
    variant: 'vertical',
    items: defaultItems,
  },
}

export const WithLogo: Story = {
  args: {
    variant: 'horizontal',
    items: defaultItems,
    logo: defaultLogo,
  },
}

export const WithActions: Story = {
  args: {
    variant: 'horizontal',
    items: defaultItems,
    actions: defaultActions,
  },
}

// Export order for Storybook
export const __namedExportsOrder = [
  'HorizontalNavigation', 
  'VerticalNavigation', 
  'SimpleHorizontal', 
  'SimpleVertical', 
  'WithLogo', 
  'WithActions'
]