import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Container component provides a responsive wrapper with predefined max-widths for consistent layout across different screen sizes.',
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
    backgroundColor: '#f3f4f6', 
    padding: '24px', 
    borderRadius: '8px',
    border: '2px dashed #d1d5db',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif'
  }}>
    <h2 style={{ margin: 0, marginBottom: '8px', color: '#374151' }}>Container Content</h2>
    <p style={{ margin: 0, color: '#6b7280' }}>This content is centered and constrained by the container's max-width</p>
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
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px', fontFamily: 'Inter, sans-serif' }}>Outer Container (lg)</h1>
        <Container size="md">
          <div style={{ 
            backgroundColor: '#dbeafe', 
            padding: '20px', 
            borderRadius: '8px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
          }}>
            <h2 style={{ margin: 0, color: '#1e40af' }}>Inner Container (md)</h2>
            <p style={{ margin: '8px 0 0 0', color: '#3730a3' }}>Containers can be nested for complex layouts</p>
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
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <div key={size} style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '8px', color: '#374151' }}>Size: {size} ({sizeMap[size]})</h3>
            <Container size={size}>
              <div style={{ 
                backgroundColor: `hsl(${['xs', 'sm', 'md', 'lg', 'xl'].indexOf(size) * 60 + 200}, 60%, 90%)`,
                padding: '16px', 
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                textAlign: 'center'
              }}>
                Container content for {size} size
              </div>
            </Container>
          </div>
        ))}
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

const sizeMap = {
  xs: '576px',
  sm: '768px', 
  md: '992px',
  lg: '1200px',
  xl: '1400px',
};