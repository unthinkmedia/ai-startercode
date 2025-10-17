import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Block } from 'baseui/block'
import { HeadingLarge, ParagraphMedium } from 'baseui/typography'

// Import our organisms (we'll simulate them for this example)
interface HeaderProps {
  user?: { name: string }
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
}

interface NavigationProps {
  items: Array<{ label: string; active?: boolean; onClick?: () => void }>
  variant: 'horizontal' | 'vertical'
}

interface FooterProps {
  links: Array<{ label: string; onClick?: () => void }>
  copyright: string
}

// Simple mock components for the template
const MockHeader = ({ user, onLogin, onLogout }: HeaderProps) => (
  <Block
    padding="scale600"
    backgroundColor="backgroundSecondary"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    $style={{ borderBottom: '1px solid var(--color-neutral-200)' }}
  >
    <HeadingLarge margin="scale0">App Header</HeadingLarge>
    <Block>
      {user ? (
        <span>Welcome, {user.name}! <button onClick={onLogout}>Logout</button></span>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </Block>
  </Block>
)

const MockNavigation = ({ items, variant }: NavigationProps) => (
  <Block
    padding="scale400"
    backgroundColor="backgroundTertiary"
    display="flex"
    flexDirection={variant === 'horizontal' ? 'row' : 'column'}
    $style={{ borderBottom: '1px solid var(--color-neutral-200)' }}
  >
    {items.map((item, index) => (
      <Block key={index} marginRight="scale400" marginBottom="scale200">
        <button 
          onClick={item.onClick}
          style={{ 
            fontWeight: item.active ? 'bold' : 'normal',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {item.label}
        </button>
      </Block>
    ))}
  </Block>
)

const MockFooter = ({ links, copyright }: FooterProps) => (
  <Block
    padding="scale600"
    backgroundColor="backgroundSecondary"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    $style={{ borderTop: '1px solid var(--color-neutral-200)' }}
  >
    <Block display="flex">
      {links.map((link, index) => (
        <Block key={index} marginRight="scale400">
          <button 
            onClick={link.onClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {link.label}
          </button>
        </Block>
      ))}
    </Block>
    <ParagraphMedium margin="scale0">{copyright}</ParagraphMedium>
  </Block>
)

// Main application template
const AppTemplate = ({
  header,
  navigation,
  footer,
  children
}: {
  header?: React.ReactNode
  navigation?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <Block
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      backgroundColor="backgroundPrimary"
    >
      {/* Header */}
      {header}
      
      {/* Navigation */}
      {navigation}
      
      {/* Main Content Area */}
      <Block flex="1" padding="scale800">
        {children || (
          <Block>
            <HeadingLarge marginBottom="scale600">
              Main Content Area
            </HeadingLarge>
            <ParagraphMedium>
              This is the main content area where page content would be rendered. 
              In a real application, this would be replaced with actual page components 
              and content.
            </ParagraphMedium>
          </Block>
        )}
      </Block>
      
      {/* Footer */}
      {footer}
    </Block>
  )
}

const meta = {
  title: '04-Templates/App Template',
  component: AppTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Main content area content',
    },
  },
} satisfies Meta<typeof AppTemplate>

export default meta
type Story = StoryObj<typeof meta>

const defaultHeader = (
  <MockHeader 
    onLogin={() => console.log('Login clicked')}
    onLogout={() => console.log('Logout clicked')}
  />
)

const defaultNavigation = (
  <MockNavigation 
    variant="horizontal"
    items={[
      { label: 'Home', active: true, onClick: () => console.log('Home') },
      { label: 'Products', onClick: () => console.log('Products') },
      { label: 'About', onClick: () => console.log('About') },
      { label: 'Contact', onClick: () => console.log('Contact') },
    ]}
  />
)

const defaultFooter = (
  <MockFooter 
    links={[
      { label: 'Privacy', onClick: () => console.log('Privacy') },
      { label: 'Terms', onClick: () => console.log('Terms') },
      { label: 'Support', onClick: () => console.log('Support') },
    ]}
    copyright="© 2024 Company Name. All rights reserved."
  />
)

export const CompleteTemplate: Story = {
  args: {
    header: defaultHeader,
    navigation: defaultNavigation,
    footer: defaultFooter,
  },
}

export const HeaderOnly: Story = {
  args: {
    header: defaultHeader,
  },
}

export const WithNavigation: Story = {
  args: {
    header: defaultHeader,
    navigation: defaultNavigation,
  },
}

export const MinimalTemplate: Story = {
  args: {
    children: (
      <Block 
        padding="scale1600"
        $style={{ textAlign: 'center' }}
      >
        <HeadingLarge marginBottom="scale600">
          Minimal Layout
        </HeadingLarge>
        <ParagraphMedium>
          This template shows just the content area without header, navigation, or footer.
        </ParagraphMedium>
      </Block>
    ),
  },
}

export const LoggedInUser: Story = {
  args: {
    header: (
      <MockHeader 
        user={{ name: 'John Doe' }}
        onLogout={() => console.log('Logout clicked')}
      />
    ),
    navigation: defaultNavigation,
    footer: defaultFooter,
  },
}

// Export order for Storybook
export const __namedExportsOrder = [
  'CompleteTemplate',
  'HeaderOnly', 
  'WithNavigation',
  'MinimalTemplate',
  'LoggedInUser'
]