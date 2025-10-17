import type { Meta, StoryObj } from '@storybook/react'
import { Block } from 'baseui/block'
import { HeadingMedium, ParagraphMedium } from 'baseui/typography'
import { Button } from 'baseui/button'

// Create a Card component using BaseUI Block
const Card = ({ title, description, actionText, onClick }: {
  title: string
  description: string
  actionText?: string
  onClick?: () => void
}) => (
  <Block
    padding="scale800"
    backgroundColor="backgroundPrimary"
    $style={{
      border: '1px solid #E0E0E0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    }}
  >
    <HeadingMedium 
      marginBottom="scale300"
      color="contentPrimary"
    >
      {title}
    </HeadingMedium>
    <ParagraphMedium
      marginBottom="scale600"
      color="contentSecondary"
    >
      {description}
    </ParagraphMedium>
    {actionText && (
      <Button
        kind="primary"
        onClick={onClick}
      >
        {actionText}
      </Button>
    )}
  </Block>
)

const meta = {
  title: 'BaseUI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    actionText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Example Card',
    description: 'This is an example card component built with BaseUI Block and design tokens. It demonstrates consistent spacing, colors, and typography.',
    actionText: 'Learn More',
    onClick: () => console.log('Card action clicked!'),
  },
}

export const WithoutAction: Story = {
  args: {
    title: 'Information Card',
    description: 'This card displays information without any action button. Perfect for showcasing content or features.',
  },
}

export const LongContent: Story = {
  args: {
    title: 'Card with Longer Content',
    description: 'This is an example of a card with much longer content to demonstrate how the component handles text wrapping and maintains proper spacing. The card automatically adjusts its height based on the content while maintaining consistent padding and visual hierarchy.',
    actionText: 'Read More',
    onClick: () => console.log('Read more clicked!'),
  },
}

// Export order for Storybook
export const __namedExportsOrder = ['Default', 'WithoutAction', 'LongContent']