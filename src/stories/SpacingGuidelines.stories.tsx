import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { CustomCard } from './CustomCard';
import { Text } from './Text';

import { Button } from './Button';
import { Badge } from './Badge';
import { Group, Stack } from './Flex';
import { tokens } from '../tokens/design-tokens';

const meta: Meta = {
  title: 'Design System/Spacing Guidelines',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `# Spacing Guidelines for Nexus Design System

This guide establishes consistent spacing patterns throughout the design system to ensure professional, readable layouts and maintain visual hierarchy.

## Core Spacing Principles

### 1. Use Design Tokens Always
Never use hardcoded pixel values. Always use \`tokens.spacing\` values:

\`\`\`typescript
import { tokens } from '../tokens/design-tokens';

// Good ✅
marginBottom: tokens.spacing[6] // 24px

// Bad ❌  
marginBottom: '24px'
\`\`\`

### 2. Spacing Scale
Our spacing scale follows a consistent progression:
- \`tokens.spacing[1]\` = 4px  - Micro spacing
- \`tokens.spacing[2]\` = 8px  - Tight spacing
- \`tokens.spacing[3]\` = 12px - Small spacing
- \`tokens.spacing[4]\` = 16px - Base spacing
- \`tokens.spacing[5]\` = 20px - Medium spacing
- \`tokens.spacing[6]\` = 24px - Large spacing
- \`tokens.spacing[8]\` = 32px - XL spacing
- \`tokens.spacing[10]\` = 40px - XXL spacing
- \`tokens.spacing[12]\` = 48px - XXXL spacing
- \`tokens.spacing[16]\` = 64px - Maximum spacing

### 3. Explicit Wrapper Patterns
For precise control, use explicit div wrappers instead of component margin props:

\`\`\`jsx
// Preferred approach for complex layouts
<div style={{ marginBottom: tokens.spacing[6] }}>
  <Heading level={2}>Section Title</Heading>
</div>
<div style={{ marginBottom: tokens.spacing[8] }}>
  <Text>Section content with proper spacing</Text>
</div>
\`\`\`

### 4. Component-Specific Guidelines

#### Cards
- **Padding**: \`tokens.spacing[6]\` (24px) minimum, \`tokens.spacing[8]\` (32px) recommended
- **Between cards**: \`tokens.spacing[6]\` to \`tokens.spacing[8]\`
- **Internal spacing**: \`tokens.spacing[4]\` between title and content, \`tokens.spacing[6]\` before actions

#### Buttons
- **Group spacing**: \`gap="md"\` (16px) for related actions, \`gap="lg"\` (24px) for separated groups
- **Above buttons**: \`tokens.spacing[6]\` (24px) from content
- **Button sizes**: Use \`sm\` in cards, \`md\` for standard UI, \`lg\` for prominence

#### Typography
- **Heading to content**: \`tokens.spacing[4]\` (16px)
- **Paragraph spacing**: \`tokens.spacing[5]\` (20px) between paragraphs
- **Section breaks**: \`tokens.spacing[8]\` (32px) between major sections

#### Layout Components
- **Grid gaps**: \`tokens.spacing[6]\` (24px) minimum, \`tokens.spacing[8]\` (32px) for spacious layouts
- **Container padding**: \`tokens.spacing[6]\` to \`tokens.spacing[10]\` depending on context
- **Page sections**: \`tokens.spacing[10]\` to \`tokens.spacing[12]\` between major page sections

## Common Anti-Patterns to Avoid

1. **Hardcoded pixel values** - Always use design tokens
2. **Inconsistent spacing** - Stick to the spacing scale
3. **Overly tight layouts** - Err on the side of more space rather than less
4. **Relying solely on component props** - Use explicit wrappers for complex layouts
5. **Ignoring responsive behavior** - Consider how spacing works on mobile devices

## Implementation Examples

See the stories below for practical examples of these spacing guidelines in action.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const CardSpacingExample: Story = {
  render: () => (
    <Container size="lg">
      <div style={{ padding: tokens.spacing[8] }}>
        <div style={{ marginBottom: tokens.spacing[8] }}>
          <Heading level={1}>Card Spacing Examples</Heading>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: tokens.spacing[8] }}>
          <CustomCard shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={3}>Proper Card Spacing</Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[5] }}>
              <Text size="sm" c="dimmed">This card demonstrates proper internal spacing</Text>
            </div>
            <div style={{ marginBottom: tokens.spacing[6] }}>
              <Text>
                Notice the generous padding (32px) and consistent spacing between elements.
                The title has 16px below it, description has 20px, and content has 24px before the button.
              </Text>
            </div>
            <Button size="sm">Learn More</Button>
          </CustomCard>

          <CustomCard shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={3}>With Badge and Actions</Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[5] }}>
              <Badge color="primary" variant="filled">Featured</Badge>
            </div>
            <div style={{ marginBottom: tokens.spacing[6] }}>
              <Text>
                Multiple elements need proper spacing. The badge has 20px below it,
                and button groups have appropriate gaps between individual buttons.
              </Text>
            </div>
            <Group gap="md">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Continue</Button>
            </Group>
          </CustomCard>
        </div>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: `This example demonstrates proper card spacing patterns:
        
**Key Spacing Values:**
- Card padding: \`tokens.spacing[8]\` (32px) for comfortable breathing room
- Title spacing: \`tokens.spacing[4]\` (16px) below headings  
- Badge spacing: \`tokens.spacing[5]\` (20px) below badges
- Content spacing: \`tokens.spacing[6]\` (24px) before actions
- Button gaps: \`gap="md"\` (16px) between related buttons
- Grid gaps: \`tokens.spacing[8]\` (32px) between cards`,
      },
    },
  },
};

export const TypographySpacingExample: Story = {
  render: () => (
    <Container size="md">
      <div style={{ padding: tokens.spacing[8] }}>
        <div style={{ marginBottom: tokens.spacing[10] }}>
          <Heading level={1}>Typography Spacing Guidelines</Heading>
        </div>
        
        <Stack gap={tokens.spacing[8]}>
          <div>
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={2}>Section Heading</Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[5] }}>
              <Text>
                This is the first paragraph after a heading. Notice the 16px gap from the heading,
                which creates clear hierarchy without being too tight or too loose.
              </Text>
            </div>
            <div style={{ marginBottom: tokens.spacing[5] }}>
              <Text>
                Subsequent paragraphs have 20px spacing between them. This provides comfortable
                reading flow while maintaining content cohesion.
              </Text>
            </div>
            <Text>
              The last paragraph in a section doesn't need bottom margin, as the section itself
              will have spacing to the next major content block.
            </Text>
          </div>

          <div>
            <div style={{ marginBottom: tokens.spacing[4] }}>
              <Heading level={2}>Another Section</Heading>
            </div>
            <div style={{ marginBottom: tokens.spacing[6] }}>
              <Text size="lg">
                This section demonstrates larger text and how spacing adapts. The 32px gap between
                sections (provided by the Stack component) creates clear content separation.
              </Text>
            </div>
            <Group gap="lg">
              <Button variant="outline">Secondary Action</Button>
              <Button>Primary Action</Button>
            </Group>
          </div>
        </Stack>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: `Typography spacing demonstration:
        
**Spacing Hierarchy:**
- Section separation: \`tokens.spacing[8]\` (32px) between major sections
- Heading to content: \`tokens.spacing[4]\` (16px) for clear hierarchy  
- Paragraph spacing: \`tokens.spacing[5]\` (20px) between paragraphs
- Content to actions: \`tokens.spacing[6]\` (24px) before button groups
- Button spacing: \`gap="lg"\` (24px) for action separation`,
      },
    },
  },
};

export const LayoutSpacingExample: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', backgroundColor: tokens.semantic.background.secondary }}>
      <Container size="xl">
        <div style={{ padding: `${tokens.spacing[12]} 0` }}>
          <div style={{ marginBottom: tokens.spacing[12] }}>
            <Heading level={1}>Layout Spacing Standards</Heading>
            <div style={{ marginTop: tokens.spacing[4] }}>
              <Text size="lg" c="dimmed">
                Demonstrating page-level spacing and layout patterns
              </Text>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing[10] }}>
            <CustomCard shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
              <div style={{ marginBottom: tokens.spacing[6] }}>
                <Heading level={3}>Page Structure</Heading>
                <div style={{ marginTop: tokens.spacing[3] }}>
                  <Text size="sm" c="dimmed">Vertical spacing guidelines</Text>
                </div>
              </div>
              <Stack gap={tokens.spacing[4]}>
                <Text size="sm">• Page top/bottom: 48px+ padding</Text>
                <Text size="sm">• Major sections: 32-48px separation</Text>
                <Text size="sm">• Content blocks: 24-32px spacing</Text>
                <Text size="sm">• Related elements: 16-20px gaps</Text>
              </Stack>
            </CustomCard>

            <CustomCard shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
              <div style={{ marginBottom: tokens.spacing[6] }}>
                <Heading level={3}>Grid Guidelines</Heading>
                <div style={{ marginTop: tokens.spacing[3] }}>
                  <Text size="sm" c="dimmed">Horizontal spacing patterns</Text>
                </div>
              </div>
              <Stack gap={tokens.spacing[4]}>
                <Text size="sm">• Card grids: 24-32px gaps minimum</Text>
                <Text size="sm">• Form layouts: 16-24px between fields</Text>
                <Text size="sm">• Button groups: 16px related, 24px separated</Text>
                <Text size="sm">• Minimum card width: 300px for readability</Text>
              </Stack>
            </CustomCard>
          </div>
        </div>
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Page-level spacing demonstration:
        
**Key Layout Patterns:**
- Page padding: \`tokens.spacing[12]\` (48px) top/bottom for breathing room
- Section breaks: \`tokens.spacing[10-12]\` (40-48px) between major content areas  
- Grid systems: \`tokens.spacing[10]\` (40px) for spacious two-column layouts
- Container usage: \`xl\` size for wide content, proper responsive behavior
- Background contrast: Secondary background for visual hierarchy`,
      },
    },
  },
};
