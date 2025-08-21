import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid } from './SimpleGrid';
import { Button } from './Button';
import { Text } from './Text';
import { tokens } from '../tokens/design-tokens';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `SimpleGrid creates an auto-fitting grid with equal-width columns. Perfect for card layouts, galleries, and repeating content.

## Spacing Guidelines

When using SimpleGrid, follow these spacing principles for professional layouts:

### Grid Spacing
- **Gap between items**: Use \`tokens.spacing[6]\` (24px) minimum, \`tokens.spacing[8]\` (32px) for more spacious layouts
- **Minimum item width**: 300px for cards, 250px for simple content blocks
- **Responsive behavior**: Items should stack gracefully on mobile

### Content Spacing Within Items
- **Card padding**: \`tokens.spacing[6]\` (24px) minimum, \`tokens.spacing[8]\` (32px) recommended
- **Title spacing**: \`tokens.spacing[4]\` (16px) below headings
- **Content spacing**: \`tokens.spacing[5-6]\` (20-24px) between content blocks
- **Action spacing**: \`tokens.spacing[6]\` (24px) above buttons/actions

### Design Tokens Usage
Always use design tokens from \`../tokens/design-tokens\` for consistent spacing:
- \`tokens.spacing[4]\` = 16px
- \`tokens.spacing[6]\` = 24px
- \`tokens.spacing[8]\` = 32px
- \`tokens.spacing[10]\` = 40px

See individual stories below for implementation examples.`,
      },
    },
  },
  argTypes: {
    cols: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Number of columns or responsive columns object',
    },
    spacing: {
      control: { type: 'text' },
      description: 'Gap between grid items',
    },
    verticalSpacing: {
      control: { type: 'text' },
      description: 'Vertical gap (if different from horizontal)',
    },
    children: {
      control: false,
      description: 'Grid content',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SimpleGrid>;

const SampleCard = ({ children, color = tokens.color.accent[100] }: { children: React.ReactNode; color?: string }) => (
  <div
    style={{
      backgroundColor: color,
      padding: tokens.spacing[6],
      borderRadius: tokens.borderRadius.md,
      border: `1px solid ${color === tokens.color.accent[100] ? tokens.color.accent[300] : tokens.semantic.border.secondary}`,
      textAlign: 'center',
      fontFamily: tokens.typography.fontFamily.body,
      color: tokens.semantic.text.primary,
      fontWeight: tokens.typography.fontWeight.medium,
      minHeight: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>{children}</Text>
  </div>
);

export const TwoColumns: Story = {
  args: {
    cols: 2,
    spacing: tokens.spacing[4],
    children: (
      <>
        <SampleCard>Card 1</SampleCard>
        <SampleCard>Card 2</SampleCard>
        <SampleCard>Card 3</SampleCard>
        <SampleCard>Card 4</SampleCard>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    spacing: tokens.spacing[4],
    children: (
      <>
        <SampleCard>Card 1</SampleCard>
        <SampleCard>Card 2</SampleCard>
        <SampleCard>Card 3</SampleCard>
        <SampleCard>Card 4</SampleCard>
        <SampleCard>Card 5</SampleCard>
        <SampleCard>Card 6</SampleCard>
      </>
    ),
  },
};

export const ResponsiveColumns: Story = {
  args: {
    cols: { base: 1, sm: 2, lg: 3 },
    spacing: tokens.spacing[6],
    children: (
      <>
        <SampleCard color={tokens.color.warning[100]}>Responsive 1</SampleCard>
        <SampleCard color={tokens.color.warning[100]}>Responsive 2</SampleCard>
        <SampleCard color={tokens.color.warning[100]}>Responsive 3</SampleCard>
        <SampleCard color={tokens.color.warning[100]}>Responsive 4</SampleCard>
        <SampleCard color={tokens.color.warning[100]}>Responsive 5</SampleCard>
        <SampleCard color={tokens.color.warning[100]}>Responsive 6</SampleCard>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that shows 1 column on mobile, 2 on tablet, and 3 on desktop. Resize your browser to see the effect.',
      },
    },
  },
};

export const LargeSpacing: Story = {
  args: {
    cols: 2,
    spacing: tokens.spacing[8],
    children: (
      <>
        <SampleCard color={tokens.color.success[100]}>Large spacing 1</SampleCard>
        <SampleCard color={tokens.color.success[100]}>Large spacing 2</SampleCard>
        <SampleCard color={tokens.color.success[100]}>Large spacing 3</SampleCard>
        <SampleCard color={tokens.color.success[100]}>Large spacing 4</SampleCard>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with larger spacing between items.',
      },
    },
  },
};

export const DifferentVerticalSpacing: Story = {
  args: {
    cols: 3,
    spacing: tokens.spacing[4],
    verticalSpacing: tokens.spacing[8],
    children: (
      <>
        <SampleCard color={tokens.color.error[100]}>Different spacing 1</SampleCard>
        <SampleCard color={tokens.color.error[100]}>Different spacing 2</SampleCard>
        <SampleCard color={tokens.color.error[100]}>Different spacing 3</SampleCard>
        <SampleCard color={tokens.color.error[100]}>Different spacing 4</SampleCard>
        <SampleCard color={tokens.color.error[100]}>Different spacing 5</SampleCard>
        <SampleCard color={tokens.color.error[100]}>Different spacing 6</SampleCard>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with different horizontal and vertical spacing.',
      },
    },
  },
};

export const NoSpacing: Story = {
  args: {
    cols: 4,
    spacing: '0',
    children: (
      <>
        <SampleCard color={tokens.color.primary[100]}>No spacing 1</SampleCard>
        <SampleCard color={tokens.color.primary[100]}>No spacing 2</SampleCard>
        <SampleCard color={tokens.color.primary[100]}>No spacing 3</SampleCard>
        <SampleCard color={tokens.color.primary[100]}>No spacing 4</SampleCard>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with no spacing for seamless layouts.',
      },
    },
  },
};

export const UnevenContent: Story = {
  args: {
    cols: 3,
    spacing: tokens.spacing[4],
    children: (
      <>
        <SampleCard>Short</SampleCard>
        <div style={{
          backgroundColor: tokens.color.accent[100],
          padding: tokens.spacing[6],
          borderRadius: tokens.borderRadius.md,
          border: `1px solid ${tokens.color.accent[300]}`,
          fontFamily: tokens.typography.fontFamily.body,
          color: tokens.semantic.text.primary
        }}>
          <Heading level={3} mb="sm">Longer Content</Heading>
          <Text size="sm">
            This card has more content than the others, showing how SimpleGrid
            handles items of different heights.
          </Text>
        </div>
        <SampleCard>Medium length content here</SampleCard>
        <SampleCard>Another card</SampleCard>
        <SampleCard>Simple</SampleCard>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with content of varying heights - each item maintains its natural height.',
      },
    },
  },
};

export const ComplexResponsive: Story = {
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4, xl: 5 },
    spacing: tokens.spacing[4],
    children: (
      <>
        {Array.from({ length: 10 }, (_, i) => (
          <SampleCard key={i} color={tokens.color.primary[50]}>
            Item {i + 1}
          </SampleCard>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex responsive behavior: 1 → 2 → 3 → 4 → 5 columns across all breakpoints.',
      },
    },
  },
};

export const CardGallery: Story = {
  args: {
    cols: { base: 1, sm: 2, lg: 3 },
    spacing: '24px',
    children: (
      <>
        {[
          { title: 'Product 1', description: 'Amazing product description', color: tokens.color.warning[100] },
          { title: 'Product 2', description: 'Another great product', color: tokens.color.success[100] },
          { title: 'Product 3', description: 'The best product ever', color: tokens.color.error[100] },
          { title: 'Product 4', description: 'You will love this one', color: tokens.color.primary[100] },
          { title: 'Product 5', description: 'Perfect for your needs', color: tokens.color.accent[100] },
          { title: 'Product 6', description: 'High quality and affordable', color: tokens.color.success[100] },
        ].map((product, i) => (
          <div
            key={i}
            style={{
              backgroundColor: product.color,
              padding: tokens.spacing[8],
              borderRadius: tokens.borderRadius.lg,
              border: `1px solid ${tokens.semantic.border.secondary}`,
              fontFamily: tokens.typography.fontFamily.body,
              textAlign: 'left'
            }}
          >
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={3}>
                {product.title}
              </Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[6] }}>
              <Text size="sm" c="dimmed">
                {product.description}
              </Text>
            </div>
            <Button size="sm">
              Learn More
            </Button>
          </div>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Real-world example of a product card gallery using SimpleGrid.

**Spacing Guidelines Demonstrated:**
- Card padding: \`tokens.spacing[8]\` (32px) for comfortable content breathing room
- Title to description: \`tokens.spacing[4]\` (16px) for clear hierarchy
- Description to action: \`tokens.spacing[6]\` (24px) for proper visual separation
- Grid gap: \`tokens.spacing[6]\` (24px) between cards
- Minimum card width: 300px for readable content

**Best Practices:**
- Use explicit div wrappers with marginBottom for consistent spacing
- Apply design tokens for all spacing values
- Ensure adequate padding inside cards (minimum 24px, preferably 32px)
- Maintain consistent spacing ratios throughout the design`,
      },
    },
  },
};
