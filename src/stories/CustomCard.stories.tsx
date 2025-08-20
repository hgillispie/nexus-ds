import type { Meta, StoryObj } from '@storybook/react';
import { CustomCard, CardSection } from './CustomCard';
import { Group, Stack } from './Flex';

const meta: Meta<typeof CustomCard> = {
  title: 'Layout/Card',
  component: CustomCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Card component provides a container with border, shadow, and sections for displaying grouped content.',
      },
    },
  },
  argTypes: {
    padding: {
      control: { type: 'text' },
      description: 'Card padding (CSS value)',
    },
    radius: {
      control: { type: 'text' },
      description: 'Border radius (CSS value)',
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Shadow intensity',
    },
    withBorder: {
      control: { type: 'boolean' },
      description: 'Show border around card',
    },
    children: {
      control: false,
      description: 'Card content',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomCard>;

const SampleContent = () => (
  <div style={{ fontFamily: 'Inter, sans-serif' }}>
    <h3 style={{ margin: '0 0 8px 0', color: '#374151', fontSize: '18px' }}>
      Card Title
    </h3>
    <p style={{ margin: '0 0 16px 0', color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
      This is some sample content inside a card. Cards are perfect for displaying 
      grouped information with consistent styling.
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
);

export const Basic: Story = {
  args: {
    shadow: 'sm',
    padding: '24px',
    radius: '8px',
    withBorder: false,
    children: <SampleContent />,
  },
};

export const WithBorder: Story = {
  args: {
    shadow: 'none',
    padding: '24px',
    radius: '8px',
    withBorder: true,
    children: <SampleContent />,
  },
};

export const LargeShadow: Story = {
  args: {
    shadow: 'lg',
    padding: '24px',
    radius: '12px',
    withBorder: false,
    children: <SampleContent />,
  },
};

export const NoShadow: Story = {
  args: {
    shadow: 'none',
    padding: '24px',
    radius: '8px',
    withBorder: true,
    children: <SampleContent />,
  },
};

export const SmallPadding: Story = {
  args: {
    shadow: 'sm',
    padding: '12px',
    radius: '6px',
    withBorder: false,
    children: (
      <div style={{ fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
        <div style={{ fontSize: '14px', color: '#374151' }}>Compact Card</div>
        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Less padding</div>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    shadow: 'md',
    padding: '40px',
    radius: '16px',
    withBorder: false,
    children: (
      <div style={{ fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px 0', color: '#374151' }}>Spacious Card</h2>
        <p style={{ margin: 0, color: '#6b7280' }}>This card has generous padding for emphasis</p>
      </div>
    ),
  },
};

export const WithSection: Story = {
  args: {
    shadow: 'sm',
    padding: '0',
    radius: '8px',
    withBorder: true,
    children: (
      <>
        <CardSection withBorder>
          <div 
            style={{ 
              height: '200px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: '600'
            }}
          >
            Header Section
          </div>
        </CardSection>
        <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif' }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#374151' }}>
            Card with Section
          </h3>
          <p style={{ margin: '0 0 16px 0', color: '#6b7280', fontSize: '14px' }}>
            This card uses CardSection for the header area, which extends to the card edges.
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
            Action
          </button>
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Cards can include sections that extend to the card edges, perfect for images or headers.',
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    shadow: 'sm',
    padding: '24px',
    radius: '8px',
    withBorder: false,
    onClick: () => alert('Card clicked!'),
    children: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#374151' }}>
          Clickable Card
        </h3>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
          This card is clickable and has hover effects. Try hovering over it!
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Cards can be made clickable with hover effects by providing an onClick handler.',
      },
    },
  },
};

export const CardGrid: Story = {
  args: {
    children: (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {[
          { title: 'Analytics', desc: 'Track your performance metrics', color: '#dbeafe' },
          { title: 'Reports', desc: 'Generate detailed reports', color: '#dcfce7' },
          { title: 'Settings', desc: 'Configure your account', color: '#fef3c7' },
          { title: 'Users', desc: 'Manage team members', color: '#fce7f3' },
        ].map((item, i) => (
          <CustomCard 
            key={i}
            shadow="sm" 
            padding="24px" 
            radius="8px" 
            withBorder={false}
            onClick={() => alert(`${item.title} clicked!`)}
          >
            <div style={{ fontFamily: 'Inter, sans-serif' }}>
              <div 
                style={{ 
                  width: '48px',
                  height: '48px',
                  backgroundColor: item.color,
                  borderRadius: '8px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}
              >
                📊
              </div>
              <h3 style={{ margin: '0 0 8px 0', color: '#374151' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
                {item.desc}
              </p>
            </div>
          </CustomCard>
        ))}
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of cards used in a grid layout for dashboard-style interfaces.',
      },
    },
  },
};

export const ProductCard: Story = {
  args: {
    shadow: 'sm',
    padding: '0',
    radius: '12px',
    withBorder: false,
    children: (
      <>
        <CardSection>
          <div 
            style={{ 
              height: '240px',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: '12px 12px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '48px'
            }}
          >
            📱
          </div>
        </CardSection>
        <Stack gap="16px" style={{ padding: '24px', fontFamily: 'Inter, sans-serif' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', color: '#374151', fontSize: '20px' }}>
              iPhone 15 Pro
            </h3>
            <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>
              Latest flagship smartphone with advanced camera system
            </p>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>
              $999
            </div>
          </div>
          
          <Group justify="space-between" align="center">
            <Group gap="8px">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{ color: '#fbbf24', fontSize: '16px' }}>★</span>
              ))}
              <span style={{ fontSize: '14px', color: '#6b7280', marginLeft: '8px' }}>
                (128 reviews)
              </span>
            </Group>
          </Group>
          
          <Group gap="12px">
            <button 
              style={{ 
                flex: 1,
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
            <button 
              style={{ 
                padding: '12px',
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              ♡
            </button>
          </Group>
        </Stack>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a product card with image section, details, and actions.',
      },
    },
  },
};