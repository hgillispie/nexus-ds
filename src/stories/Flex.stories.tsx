import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Group, Stack } from './Flex';

// Flex Stories
const flexMeta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Flex component provides flexbox layout utilities with precise control over direction, alignment, and spacing.',
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justify: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    align: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

export default flexMeta;
type FlexStory = StoryObj<typeof Flex>;

const FlexItem = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <div 
    style={{ 
      backgroundColor: '#dbeafe', 
      padding: '16px 24px', 
      borderRadius: '8px',
      border: '1px solid #93c5fd',
      fontFamily: 'Inter, sans-serif',
      color: '#1e40af',
      fontWeight: '500'
    }}
    {...props}
  >
    {children}
  </div>
);

export const FlexBasic: FlexStory = {
  name: 'Basic Flex',
  args: {
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    gap: '16px',
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
  },
};

export const FlexColumn: FlexStory = {
  name: 'Flex Column',
  args: {
    direction: 'column',
    gap: '12px',
    children: (
      <>
        <FlexItem>First</FlexItem>
        <FlexItem>Second</FlexItem>
        <FlexItem>Third</FlexItem>
      </>
    ),
  },
};

export const FlexSpaceBetween: FlexStory = {
  name: 'Space Between',
  args: {
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    children: (
      <>
        <FlexItem>Left</FlexItem>
        <FlexItem>Center</FlexItem>
        <FlexItem>Right</FlexItem>
      </>
    ),
  },
};

export const FlexCenter: FlexStory = {
  name: 'Centered',
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: '20px',
    style: { minHeight: '200px', backgroundColor: '#f9fafb', borderRadius: '8px' },
    children: (
      <>
        <FlexItem>Centered</FlexItem>
        <FlexItem>Content</FlexItem>
      </>
    ),
  },
};

export const FlexWrap: FlexStory = {
  name: 'Wrap Items',
  args: {
    direction: 'row',
    wrap: 'wrap',
    gap: '16px',
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <FlexItem key={i} style={{ minWidth: '120px' }}>
            Item {i + 1}
          </FlexItem>
        ))}
      </>
    ),
  },
};

// Group Stories
export const GroupBasic: StoryObj<typeof Group> = {
  name: 'Group - Basic',
  render: (args) => <Group {...args} />,
  args: {
    children: (
      <>
        <FlexItem>Logo</FlexItem>
        <FlexItem>Navigation</FlexItem>
        <FlexItem>Actions</FlexItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Group is perfect for horizontal layouts like headers and toolbars.',
      },
    },
  },
};

export const GroupSpaceBetween: StoryObj<typeof Group> = {
  name: 'Group - Space Between',
  render: (args) => <Group {...args} />,
  args: {
    justify: 'space-between',
    children: (
      <>
        <FlexItem>Brand</FlexItem>
        <div style={{ display: 'flex', gap: '12px' }}>
          <FlexItem>Login</FlexItem>
          <FlexItem>Sign Up</FlexItem>
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Common header pattern with brand on left and actions on right.',
      },
    },
  },
};

export const GroupWithWrap: StoryObj<typeof Group> = {
  name: 'Group - With Wrap',
  render: (args) => <Group {...args} />,
  args: {
    wrap: true,
    gap: '12px',
    children: (
      <>
        {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
          <FlexItem key={item}>{item}</FlexItem>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Group with wrap allows items to flow to next line on smaller screens.',
      },
    },
  },
};

// Stack Stories
export const StackBasic: StoryObj<typeof Stack> = {
  name: 'Stack - Basic',
  render: (args) => <Stack {...args} />,
  args: {
    children: (
      <>
        <FlexItem>Header</FlexItem>
        <FlexItem>Content</FlexItem>
        <FlexItem>Footer</FlexItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Stack is perfect for vertical layouts like forms and content sections.',
      },
    },
  },
};

export const StackCentered: StoryObj<typeof Stack> = {
  name: 'Stack - Centered',
  render: (args) => <Stack {...args} />,
  args: {
    align: 'center',
    gap: '24px',
    style: { minHeight: '300px', backgroundColor: '#f9fafb', borderRadius: '8px', padding: '40px' },
    children: (
      <>
        <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>
          Welcome
        </div>
        <FlexItem>Get started with our platform</FlexItem>
        <FlexItem style={{ backgroundColor: '#3b82f6', color: 'white' }}>
          Sign Up Now
        </FlexItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Centered stack perfect for landing page heroes and call-to-action sections.',
      },
    },
  },
};

export const StackJustified: StoryObj<typeof Stack> = {
  name: 'Stack - Space Between',
  render: (args) => <Stack {...args} />,
  args: {
    justify: 'space-between',
    style: { minHeight: '400px', backgroundColor: '#f9fafb', borderRadius: '8px', padding: '24px' },
    children: (
      <>
        <FlexItem>Header Content</FlexItem>
        <FlexItem>Main Content</FlexItem>
        <FlexItem>Footer Content</FlexItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Stack with space-between creates equal spacing, perfect for full-height layouts.',
      },
    },
  },
};

export const CombinedLayouts: StoryObj<typeof Stack> = {
  name: 'Combined Layout Example',
  render: () => (
    <Stack gap="24px">
      {/* Header */}
      <Group 
        justify="space-between" 
        style={{ 
          padding: '16px 24px', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '8px',
          border: '1px solid #d1d5db'
        }}
      >
        <div style={{ fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>
          My App
        </div>
        <Group gap="12px">
          <FlexItem style={{ fontSize: '14px', padding: '8px 16px' }}>Login</FlexItem>
          <FlexItem style={{ fontSize: '14px', padding: '8px 16px' }}>Sign Up</FlexItem>
        </Group>
      </Group>

      {/* Main Content */}
      <Flex gap="24px">
        {/* Sidebar */}
        <Stack 
          gap="12px" 
          style={{ 
            minWidth: '200px',
            padding: '16px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}
        >
          <div style={{ fontWeight: '600', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
            Navigation
          </div>
          {['Dashboard', 'Projects', 'Settings'].map((item) => (
            <div 
              key={item}
              style={{ 
                padding: '8px 12px', 
                borderRadius: '4px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {item}
            </div>
          ))}
        </Stack>

        {/* Content Area */}
        <Stack 
          gap="16px" 
          style={{ 
            flex: 1,
            padding: '24px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}
        >
          <h1 style={{ margin: 0, fontFamily: 'Inter, sans-serif' }}>Dashboard</h1>
          <p style={{ margin: 0, color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
            Welcome to your dashboard. Here's an overview of your account.
          </p>
          
          <Group gap="16px" wrap={true}>
            {['Revenue', 'Users', 'Orders'].map((metric) => (
              <div 
                key={metric}
                style={{ 
                  padding: '20px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  minWidth: '120px',
                  textAlign: 'center',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>
                  {metric === 'Revenue' ? '$12,345' : metric === 'Users' ? '1,234' : '567'}
                </div>
                <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                  {metric}
                </div>
              </div>
            ))}
          </Group>
        </Stack>
      </Flex>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example combining Stack, Group, and Flex for a complete dashboard layout.',
      },
    },
  },
};