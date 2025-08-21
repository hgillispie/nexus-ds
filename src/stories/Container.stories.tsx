import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { tokens } from '../tokens/design-tokens';

const sizeMap = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
};

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Container component provides a responsive wrapper with predefined max-widths for consistent layout across different screen sizes.

## Spacing and Layout Guidelines

### Container Usage
The Container component automatically centers content and provides horizontal padding:
- **Horizontal padding**: 16px on all sides by default
- **Max-width**: Responsive based on size prop
- **Centering**: Content is automatically centered with margin auto

### Size Guidelines
- **xs (576px)**: Mobile-first layouts, single column content
- **sm (768px)**: Tablet layouts, simple two-column layouts
- **md (992px)**: Desktop layouts, standard content width
- **lg (1200px)**: Wide desktop layouts, complex multi-column content
- **xl (1400px)**: Extra wide layouts, dashboards and data tables

### Content Spacing Within Containers
When placing content inside containers, follow these spacing patterns:
- **Section spacing**: \`tokens.spacing[8-10]\` (32-40px) between major sections
- **Content padding**: \`tokens.spacing[6-8]\` (24-32px) for card content
- **Element spacing**: \`tokens.spacing[4-6]\` (16-24px) between related elements

### Best Practices
- Always use design tokens for spacing values
- Maintain consistent vertical rhythm with standardized spacing
- Consider mobile layouts when choosing container sizes
- Use explicit wrapper divs for complex spacing requirements`,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Container size affects the maximum width',
    },
    children: {
      control: false,
      description: 'Content to be wrapped by the container',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

const SampleContent = () => (
  <div style={{
    backgroundColor: tokens.color.primary[50],
    padding: tokens.spacing[6],
    borderRadius: tokens.borderRadius.md,
    border: `2px dashed ${tokens.color.primary[200]}`,
    textAlign: 'center',
    fontFamily: tokens.typography.fontFamily.body
  }}>
    <h2 style={{ margin: 0, marginBottom: tokens.spacing[2], color: tokens.semantic.text.primary }}>Container Content</h2>
    <p style={{ margin: 0, color: tokens.semantic.text.secondary }}>This content is centered and constrained by the container's max-width</p>
  </div>
);

export const Default: Story = {
  args: {
    size: 'md',
    children: <SampleContent />,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: <SampleContent />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <SampleContent />,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: <SampleContent />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <SampleContent />,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: <SampleContent />,
  },
};

export const CustomSize: Story = {
  args: {
    size: 800,
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can also pass a custom number for exact pixel width control.',
      },
    },
  },
};

export const NestedContainers: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ padding: tokens.spacing[5] }}>
        <h1 style={{ marginBottom: tokens.spacing[5], fontFamily: tokens.typography.fontFamily.body }}>Outer Container (lg)</h1>
        <Container size="md">
          <div style={{
            backgroundColor: tokens.color.accent[100],
            padding: tokens.spacing[5],
            borderRadius: tokens.borderRadius.md,
            textAlign: 'center',
            fontFamily: tokens.typography.fontFamily.body
          }}>
            <h2 style={{ margin: 0, color: tokens.color.accent[800] }}>Inner Container (md)</h2>
            <p style={{ margin: `${tokens.spacing[2]} 0 0 0`, color: tokens.color.accent[700] }}>Containers can be nested for complex layouts</p>
          </div>
        </Container>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Containers can be nested to create complex responsive layouts.',
      },
    },
  },
};

export const AllSizes: Story = {
  args: {
    children: (
      <div style={{ fontFamily: tokens.typography.fontFamily.body }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => {
          // Use design token colors for each size
          const colorMap = {
            xs: tokens.color.accent[100],
            sm: tokens.color.primary[100],
            md: tokens.color.success[100],
            lg: tokens.color.warning[100],
            xl: tokens.color.error[100],
          };

          return (
            <div key={size} style={{ marginBottom: tokens.spacing[6] }}>
              <h3 style={{ marginBottom: tokens.spacing[2], color: tokens.semantic.text.primary }}>Size: {size} ({sizeMap[size]})</h3>
              <Container size={size}>
                <div style={{
                  backgroundColor: colorMap[size],
                  padding: tokens.spacing[4],
                  borderRadius: tokens.borderRadius.md,
                  border: `1px solid ${tokens.semantic.border.secondary}`,
                  textAlign: 'center'
                }}>
                  Container content for {size} size
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'All available container sizes displayed together for comparison.',
      },
    },
  },
};
