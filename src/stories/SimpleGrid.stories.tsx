import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid } from './SimpleGrid';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'SimpleGrid creates an auto-fitting grid with equal-width columns. Perfect for card layouts, galleries, and repeating content.',
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

const SampleCard = ({ children, color = '#dbeafe' }: { children: React.ReactNode; color?: string }) => (
  <div 
    style={{ 
      backgroundColor: color, 
      padding: '24px', 
      borderRadius: '8px',
      border: `1px solid ${color === '#dbeafe' ? '#93c5fd' : '#d1d5db'}`,
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      color: '#374151',
      fontWeight: '500',
      minHeight: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {children}
  </div>
);

export const TwoColumns: Story = {
  args: {
    cols: 2,
    spacing: '16px',
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
    spacing: '16px',
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
    spacing: '20px',
    children: (
      <>
        <SampleCard color="#fef3c7">Responsive 1</SampleCard>
        <SampleCard color="#fef3c7">Responsive 2</SampleCard>
        <SampleCard color="#fef3c7">Responsive 3</SampleCard>
        <SampleCard color="#fef3c7">Responsive 4</SampleCard>
        <SampleCard color="#fef3c7">Responsive 5</SampleCard>
        <SampleCard color="#fef3c7">Responsive 6</SampleCard>
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
    spacing: '32px',
    children: (
      <>
        <SampleCard color="#dcfce7">Large spacing 1</SampleCard>
        <SampleCard color="#dcfce7">Large spacing 2</SampleCard>
        <SampleCard color="#dcfce7">Large spacing 3</SampleCard>
        <SampleCard color="#dcfce7">Large spacing 4</SampleCard>
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
    spacing: '16px',
    verticalSpacing: '32px',
    children: (
      <>
        <SampleCard color="#fce7f3">Different spacing 1</SampleCard>
        <SampleCard color="#fce7f3">Different spacing 2</SampleCard>
        <SampleCard color="#fce7f3">Different spacing 3</SampleCard>
        <SampleCard color="#fce7f3">Different spacing 4</SampleCard>
        <SampleCard color="#fce7f3">Different spacing 5</SampleCard>
        <SampleCard color="#fce7f3">Different spacing 6</SampleCard>
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
        <SampleCard color="#e0e7ff">No spacing 1</SampleCard>
        <SampleCard color="#e0e7ff">No spacing 2</SampleCard>
        <SampleCard color="#e0e7ff">No spacing 3</SampleCard>
        <SampleCard color="#e0e7ff">No spacing 4</SampleCard>
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
    spacing: '16px',
    children: (
      <>
        <SampleCard>Short</SampleCard>
        <div style={{ 
          backgroundColor: '#dbeafe', 
          padding: '24px', 
          borderRadius: '8px',
          border: '1px solid #93c5fd',
          fontFamily: 'Inter, sans-serif',
          color: '#374151'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Longer Content</h3>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
            This card has more content than the others, showing how SimpleGrid 
            handles items of different heights.
          </p>
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
    spacing: '16px',
    children: (
      <>
        {Array.from({ length: 10 }, (_, i) => (
          <SampleCard key={i} color="#f3e8ff">
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
          { title: 'Product 1', description: 'Amazing product description', color: '#fef3c7' },
          { title: 'Product 2', description: 'Another great product', color: '#dcfce7' },
          { title: 'Product 3', description: 'The best product ever', color: '#fce7f3' },
          { title: 'Product 4', description: 'You will love this one', color: '#e0e7ff' },
          { title: 'Product 5', description: 'Perfect for your needs', color: '#f0f9ff' },
          { title: 'Product 6', description: 'High quality and affordable', color: '#ecfdf5' },
        ].map((product, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: product.color, 
              padding: '24px', 
              borderRadius: '12px',
              border: '1px solid #d1d5db',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'left'
            }}
          >
            <h3 style={{ margin: '0 0 8px 0', color: '#374151', fontSize: '18px' }}>
              {product.title}
            </h3>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280', fontSize: '14px' }}>
              {product.description}
            </p>
            <button 
              style={{ 
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a product card gallery using SimpleGrid.',
      },
    },
  },
};