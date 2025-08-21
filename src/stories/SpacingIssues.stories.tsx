import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid } from './SimpleGrid';
import { Card } from './Card';
import { Text } from './Text';
import { Heading } from './Heading';
import { Button } from './Button';
import { Badge } from './Badge';
import { tokens } from '../tokens/design-tokens';

const meta: Meta = {
  title: 'Design System/Spacing Issues & Fixes',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `# Common Spacing Issues and How to Fix Them

This guide demonstrates common spacing mistakes and their corrections to maintain professional, readable layouts in the Nexus Design System.

## Key Problems to Avoid

1. **Insufficient card padding** - Creates cramped, hard-to-read content
2. **Too-tight element spacing** - Reduces visual hierarchy and readability  
3. **Inconsistent grid gaps** - Makes layouts feel unpolished
4. **Hardcoded spacing values** - Breaks design system consistency
5. **Relying on component margins** - Less predictable than explicit wrappers

## Design System Standards

Always follow these principles:
- Use \`tokens.spacing\` values exclusively
- Minimum card padding: 24px, recommended: 32px
- Clear visual hierarchy with consistent spacing ratios
- Explicit div wrappers for complex layouts
- Design tokens for all spacing decisions`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const CrowdedLayoutProblem: Story = {
  render: () => (
    <div style={{ padding: tokens.spacing[8] }}>
      <div style={{ marginBottom: tokens.spacing[8] }}>
        <Heading level={1}>❌ Crowded Layout - Common Problems</Heading>
        <div style={{ marginTop: tokens.spacing[4] }}>
          <Text c="dimmed">This example shows what NOT to do - cramped spacing that hurts readability</Text>
        </div>
      </div>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="12px">
        {[
          { title: 'Product 1', description: 'Amazing product description', color: tokens.color.warning[100] },
          { title: 'Product 2', description: 'Another great product', color: tokens.color.success[100] },
          { title: 'Product 3', description: 'The best product ever', color: tokens.color.error[100] },
          { title: 'Product 4', description: 'You will love this one', color: tokens.color.primary[100] },
          { title: 'Product 5', description: 'Perfect for your needs', color: tokens.color.accent[100] },
        ].map((product, i) => (
          <div
            key={i}
            style={{
              backgroundColor: product.color,
              padding: '12px', // TOO SMALL!
              borderRadius: tokens.borderRadius.md,
              border: `1px solid ${tokens.semantic.border.secondary}`,
            }}
          >
            {/* No spacing wrappers - everything crammed together */}
            <Heading level={3} style={{ margin: 0 }}>
              {product.title}
            </Heading>
            <Badge color="primary" variant="filled">New</Badge>
            <Text size="sm" c="dimmed" style={{ margin: 0 }}>
              {product.description}
            </Text>
            <Button size="sm">
              Learn More
            </Button>
          </div>
        ))}
      </SimpleGrid>
      
      <div style={{ marginTop: tokens.spacing[8], padding: tokens.spacing[6], backgroundColor: tokens.color.error[50], borderRadius: tokens.borderRadius.md }}>
        <Heading level={3}>Problems with this layout:</Heading>
        <ul style={{ marginTop: tokens.spacing[4] }}>
          <li><Text size="sm">Card padding too small (12px) - content feels cramped</Text></li>
          <li><Text size="sm">Grid gap too tight (12px) - cards feel connected</Text></li>
          <li><Text size="sm">No spacing between title, badge, description, and button</Text></li>
          <li><Text size="sm">Elements touching edges create visual tension</Text></li>
          <li><Text size="sm">Hardcoded pixel values instead of design tokens</Text></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `This example demonstrates common spacing mistakes that make layouts feel cramped and unprofessional:

**Key Problems:**
- Card padding: Only 12px creates cramped feeling
- Grid spacing: 12px gaps make cards feel connected  
- Element spacing: No gaps between title, badge, description, button
- Hardcoded values: Using pixel values instead of design tokens
- Missing hierarchy: All elements run together visually

This is exactly the type of crowded layout that needs to be avoided in our design system.`,
      },
    },
  },
};

export const ProperLayoutSolution: Story = {
  render: () => (
    <div style={{ padding: tokens.spacing[8] }}>
      <div style={{ marginBottom: tokens.spacing[8] }}>
        <Heading level={1}>✅ Proper Layout - Design System Standards</Heading>
        <div style={{ marginTop: tokens.spacing[4] }}>
          <Text c="dimmed">This example shows the correct way to implement spacing for professional layouts</Text>
        </div>
      </div>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={tokens.spacing[8]}>
        {[
          { title: 'Product 1', description: 'Amazing product description', color: tokens.color.warning[100] },
          { title: 'Product 2', description: 'Another great product', color: tokens.color.success[100] },
          { title: 'Product 3', description: 'The best product ever', color: tokens.color.error[100] },
          { title: 'Product 4', description: 'You will love this one', color: tokens.color.primary[100] },
          { title: 'Product 5', description: 'Perfect for your needs', color: tokens.color.accent[100] },
        ].map((product, i) => (
          <div
            key={i}
            style={{
              backgroundColor: product.color,
              padding: tokens.spacing[8], // Proper generous padding
              borderRadius: tokens.borderRadius.lg,
              border: `1px solid ${tokens.semantic.border.secondary}`,
            }}
          >
            {/* Explicit spacing wrappers for control */}
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={3}>
                {product.title}
              </Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[5] }}>
              <Badge color="primary" variant="filled">New</Badge>
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
      </SimpleGrid>
      
      <div style={{ marginTop: tokens.spacing[10], padding: tokens.spacing[8], backgroundColor: tokens.color.success[50], borderRadius: tokens.borderRadius.md }}>
        <Heading level={3}>Improvements in this layout:</Heading>
        <ul style={{ marginTop: tokens.spacing[4] }}>
          <li><Text size="sm">Generous card padding (32px) - content has breathing room</Text></li>
          <li><Text size="sm">Proper grid gaps (32px) - clear separation between cards</Text></li>
          <li><Text size="sm">Explicit spacing wrappers with design tokens</Text></li>
          <li><Text size="sm">Clear visual hierarchy: 16px → 20px → 24px spacing</Text></li>
          <li><Text size="sm">Consistent use of tokens.spacing values</Text></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `This example shows the proper implementation of spacing following our design system standards:

**Key Improvements:**
- Card padding: \`tokens.spacing[8]\` (32px) provides comfortable breathing room
- Grid spacing: \`tokens.spacing[8]\` (32px) creates clear card separation
- Element hierarchy: 16px → 20px → 24px progression for clear visual flow  
- Design tokens: All spacing uses \`tokens.spacing\` values consistently
- Explicit wrappers: Div containers provide precise spacing control

**Spacing Pattern:**
- Title: \`tokens.spacing[4]\` (16px) bottom margin
- Badge: \`tokens.spacing[5]\` (20px) bottom margin  
- Description: \`tokens.spacing[6]\` (24px) bottom margin
- This creates clear visual hierarchy and improved readability`,
      },
    },
  },
};

export const BeforeAndAfterComparison: Story = {
  render: () => (
    <div style={{ padding: tokens.spacing[8] }}>
      <div style={{ marginBottom: tokens.spacing[10] }}>
        <Heading level={1}>Before vs After: Spacing Transformation</Heading>
        <div style={{ marginTop: tokens.spacing[4] }}>
          <Text c="dimmed">Side-by-side comparison showing the dramatic improvement proper spacing makes</Text>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing[10] }}>
        {/* BEFORE - Bad spacing */}
        <div>
          <div style={{ marginBottom: tokens.spacing[6] }}>
            <Heading level={2}>❌ Before: Crowded</Heading>
            <Text size="sm" c="dimmed">Tight spacing hurts readability</Text>
          </div>
          
          <CustomCard shadow="sm" padding="16px" radius={tokens.borderRadius.md} withBorder>
            <Heading level={3} style={{ marginBottom: '8px' }}>Quick Actions</Heading>
            <Badge color="primary">Important</Badge>
            <Text size="sm" c="dimmed" style={{ margin: '4px 0 8px 0' }}>
              Common tasks you can perform
            </Text>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <Button size="sm">Create</Button>
              <Button variant="outline" size="sm">Cancel</Button>
            </div>
          </CustomCard>
        </div>

        {/* AFTER - Good spacing */}
        <div>
          <div style={{ marginBottom: tokens.spacing[6] }}>
            <Heading level={2}>✅ After: Spacious</Heading>
            <Text size="sm" c="dimmed">Proper spacing improves clarity</Text>
          </div>
          
          <CustomCard shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={3}>Quick Actions</Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[5] }}>
              <Badge color="primary">Important</Badge>
            </div>
            <div style={{ marginBottom: tokens.spacing[6] }}>
              <Text size="sm" c="dimmed">
                Common tasks you can perform
              </Text>
            </div>
            <div style={{ display: 'flex', gap: tokens.spacing[4] }}>
              <Button size="sm">Create</Button>
              <Button variant="outline" size="sm">Cancel</Button>
            </div>
          </CustomCard>
        </div>
      </div>
      
      <div style={{ marginTop: tokens.spacing[10], padding: tokens.spacing[8], backgroundColor: tokens.semantic.background.secondary, borderRadius: tokens.borderRadius.md }}>
        <Heading level={3}>Key Differences:</Heading>
        <div style={{ marginTop: tokens.spacing[4], display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing[6] }}>
          <div>
            <Text fw="semibold" size="sm" style={{ marginBottom: tokens.spacing[3] }}>Before (Problems):</Text>
            <ul style={{ margin: 0, paddingLeft: tokens.spacing[5] }}>
              <li><Text size="sm">16px card padding - too tight</Text></li>
              <li><Text size="sm">4-8px element spacing - cramped</Text></li>
              <li><Text size="sm">Inconsistent margin values</Text></li>
              <li><Text size="sm">Elements run together visually</Text></li>
            </ul>
          </div>
          <div>
            <Text fw="semibold" size="sm" style={{ marginBottom: tokens.spacing[3] }}>After (Solutions):</Text>
            <ul style={{ margin: 0, paddingLeft: tokens.spacing[5] }}>
              <li><Text size="sm">32px card padding - breathing room</Text></li>
              <li><Text size="sm">16-24px element spacing - clear hierarchy</Text></li>
              <li><Text size="sm">Design token consistency</Text></li>
              <li><Text size="sm">Elements have visual separation</Text></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `This side-by-side comparison clearly shows the impact of proper spacing on layout quality:

**Before Issues:**
- Card padding: 16px creates cramped feeling
- Element spacing: 4-8px margins insufficient for hierarchy
- Inconsistent values: Mix of hardcoded pixels
- Poor readability: Elements visually connected

**After Improvements:**  
- Card padding: \`tokens.spacing[8]\` (32px) provides breathing room
- Element spacing: 16px → 20px → 24px clear progression
- Design tokens: All values from spacing scale
- Better hierarchy: Clear visual separation between elements

The difference in professional appearance is dramatic with proper spacing implementation.`,
      },
    },
  },
};
