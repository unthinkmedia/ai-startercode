import type { Meta, StoryObj } from '@storybook/react'
import { Block } from 'baseui/block'
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  LabelXSmall,
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from 'baseui/typography'

// Typography showcase component
const TypographyShowcase = () => (
  <Block padding="scale800" maxWidth="800px">
    <Block marginBottom="scale800">
      <HeadingXXLarge>Heading XXLarge - Main page titles</HeadingXXLarge>
      <HeadingXLarge>Heading XLarge - Section titles</HeadingXLarge>
      <HeadingLarge>Heading Large - Subsection titles</HeadingLarge>
      <HeadingMedium>Heading Medium - Card titles</HeadingMedium>
      <HeadingSmall>Heading Small - Component titles</HeadingSmall>
      <HeadingXSmall>Heading XSmall - Minor headings</HeadingXSmall>
    </Block>
    
    <Block marginBottom="scale800">
      <LabelLarge>Label Large - Important form labels</LabelLarge>
      <LabelMedium>Label Medium - Standard form labels</LabelMedium>
      <LabelSmall>Label Small - Secondary labels</LabelSmall>
      <LabelXSmall>Label XSmall - Tertiary labels</LabelXSmall>
    </Block>
    
    <Block marginBottom="scale800">
      <ParagraphLarge>
        Paragraph Large - This is an example of large paragraph text. It's perfect for important body copy that needs to stand out while maintaining readability.
      </ParagraphLarge>
      <ParagraphMedium>
        Paragraph Medium - This is the most common paragraph size for body text. It provides excellent readability and is suitable for most content types.
      </ParagraphMedium>
      <ParagraphSmall>
        Paragraph Small - This smaller text is great for captions, footnotes, or secondary information that supports the main content.
      </ParagraphSmall>
      <ParagraphXSmall>
        Paragraph XSmall - The smallest paragraph size, typically used for fine print, disclaimers, or metadata.
      </ParagraphXSmall>
    </Block>
  </Block>
)

const meta = {
  title: 'BaseUI/Typography',
  component: TypographyShowcase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {}

// Export order for Storybook
export const __namedExportsOrder = ['AllTypography']