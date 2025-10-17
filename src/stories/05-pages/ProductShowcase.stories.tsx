import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { 
  HeadingXXLarge, 
  HeadingLarge, 
  HeadingMedium,
  ParagraphLarge, 
  ParagraphMedium 
} from 'baseui/typography'
import { Card } from 'baseui/card'

// Product showcase page combining all atomic design levels
const ProductShowcasePage = ({
  featured = true,
  userLoggedIn = false,
}: {
  featured?: boolean
  userLoggedIn?: boolean
}) => {
  const [cartItems, setCartItems] = React.useState(0)

  const addToCart = (productName: string) => {
    setCartItems(prev => prev + 1)
    console.log(`Added ${productName} to cart`)
  }

  const mockProducts = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: '$299',
      image: 'https://source.unsplash.com/300x200/?headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199',
      image: 'https://source.unsplash.com/300x200/?smartwatch',
      description: 'Feature-rich smartwatch with health monitoring.',
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      price: '$149',
      image: 'https://source.unsplash.com/300x200/?speaker',
      description: 'Portable speaker with premium sound quality.',
    },
  ]

  return (
    <Block
      backgroundColor="backgroundPrimary"
      minHeight="100vh"
    >
      {/* Header */}
      <Block
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="scale600"
        backgroundColor="backgroundSecondary"
        $style={{ borderBottom: '1px solid var(--color-neutral-200)' }}
      >
        <Block display="flex" alignItems="center">
          {React.createElement('vibe-icon', { name: 'cart', size: '24' })}
          <HeadingMedium marginLeft="scale300" margin="scale0">
            TechStore
          </HeadingMedium>
        </Block>
        
        <Block display="flex" alignItems="center">
          <Block marginRight="scale400">
            Cart ({cartItems})
          </Block>
          {userLoggedIn ? (
            <Button kind="tertiary" size="compact">
              Profile
            </Button>
          ) : (
            <Button kind="primary" size="compact">
              Sign In
            </Button>
          )}
        </Block>
      </Block>

      {/* Navigation */}
      <Block
        display="flex"
        justifyContent="center"
        padding="scale400"
        backgroundColor="backgroundTertiary"
        $style={{ borderBottom: '1px solid var(--color-neutral-200)' }}
      >
        {['Home', 'Products', 'Categories', 'Deals', 'Support'].map((item, index) => (
          <Block key={index} marginRight="scale600">
            <Button
              kind={index === 1 ? 'primary' : 'tertiary'}
              size="compact"
              onClick={() => console.log(`Navigate to ${item}`)}
            >
              {item}
            </Button>
          </Block>
        ))}
      </Block>

      {/* Hero Section */}
      <Block
        padding="scale1200"
        backgroundColor="backgroundSecondary"
        $style={{ textAlign: 'center' }}
      >
        <HeadingXXLarge marginBottom="scale600">
          {featured ? 'Featured Products' : 'Our Products'}
        </HeadingXXLarge>
        <ParagraphLarge marginBottom="scale800" color="contentSecondary">
          Discover our carefully curated selection of premium tech products
        </ParagraphLarge>
        <Button kind="primary" size="large">
          Shop Now
        </Button>
      </Block>

      {/* Products Grid */}
      <Block padding="scale800">
        <HeadingLarge marginBottom="scale800" $style={{ textAlign: 'center' }}>
          Popular Products
        </HeadingLarge>
        
        <Block
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gridGap="scale600"
          maxWidth="1200px"
          margin="0 auto"
        >
          {mockProducts.map((product) => (
            <Card
              key={product.id}
              overrides={{
                Root: {
                  style: {
                    padding: 'var(--space-lg)',
                    border: '1px solid var(--color-neutral-200)',
                    borderRadius: '8px',
                  }
                }
              }}
            >
              <Block marginBottom="scale400">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
              </Block>
              
              <HeadingMedium marginBottom="scale300">
                {product.name}
              </HeadingMedium>
              
              <ParagraphMedium marginBottom="scale400" color="contentSecondary">
                {product.description}
              </ParagraphMedium>
              
              <Block
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <HeadingMedium color="contentPrimary">
                  {product.price}
                </HeadingMedium>
                <Button
                  kind="primary"
                  size="compact"
                  onClick={() => addToCart(product.name)}
                >
                  Add to Cart
                </Button>
              </Block>
            </Card>
          ))}
        </Block>
      </Block>

      {/* Newsletter Section */}
      <Block
        padding="scale1200"
        backgroundColor="backgroundSecondary"
        $style={{ textAlign: 'center' }}
      >
        <HeadingLarge marginBottom="scale400">
          Stay Updated
        </HeadingLarge>
        <ParagraphMedium marginBottom="scale600" color="contentSecondary">
          Subscribe to our newsletter for the latest products and deals
        </ParagraphMedium>
        <Block
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxWidth="400px"
          margin="0 auto"
        >
          <Button kind="primary">
            Subscribe
          </Button>
        </Block>
      </Block>

      {/* Footer */}
      <Block
        padding="scale800"
        backgroundColor="backgroundTertiary"
        $style={{ 
          borderTop: '1px solid var(--color-neutral-200)',
          textAlign: 'center'
        }}
      >
        <ParagraphMedium color="contentSecondary">
          © 2024 TechStore. All rights reserved. | Privacy Policy | Terms of Service
        </ParagraphMedium>
      </Block>
    </Block>
  )
}

const meta = {
  title: '05-Pages/Product Showcase',
  component: ProductShowcasePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    featured: {
      control: 'boolean',
      description: 'Show as featured products page',
    },
    userLoggedIn: {
      control: 'boolean',
      description: 'Show logged in user state',
    },
  },
} satisfies Meta<typeof ProductShowcasePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    featured: true,
    userLoggedIn: false,
  },
}

export const UserLoggedIn: Story = {
  args: {
    featured: true,
    userLoggedIn: true,
  },
}

export const RegularProducts: Story = {
  args: {
    featured: false,
    userLoggedIn: false,
  },
}

export const MobileView: Story = {
  args: {
    featured: true,
    userLoggedIn: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const TabletView: Story = {
  args: {
    featured: true,
    userLoggedIn: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

// Export order for Storybook
export const __namedExportsOrder = [
  'Default',
  'UserLoggedIn',
  'RegularProducts', 
  'MobileView',
  'TabletView'
]