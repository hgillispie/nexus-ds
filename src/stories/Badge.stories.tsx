import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Badge component for status indicators and labels. Supports multiple sizes, colors, and optional trailing icons.

## Spacing Guidelines

### Badge Placement
Badges should have appropriate spacing from surrounding elements:
- **After headings**: Use \`mb="md"\` prop or \`tokens.spacing[5]\` (20px) wrapper
- **Inline with text**: No additional spacing needed
- **Before content**: Use \`mb="lg"\` prop or \`tokens.spacing[6]\` (24px) wrapper
- **In card headers**: Part of the heading group, use \`tokens.spacing[4]\` (16px) spacing

### Margin Props
The Badge component now supports margin bottom props for consistent spacing:
- \`mb="xs"\` = 4px - Tight spacing
- \`mb="sm"\` = 8px - Small spacing
- \`mb="md"\` = 16px - Standard spacing
- \`mb="lg"\` = 24px - Large spacing
- \`mb="xl"\` = 32px - Extra large spacing

### Usage Examples
\`\`\`jsx
// In card headers
<Heading level={3}>Product Title</Heading>
<Badge mb="md" color="primary">Featured</Badge>
<Text>Product description...</Text>

// With explicit wrapper (preferred for complex layouts)
<div style={{ marginBottom: tokens.spacing[5] }}>
  <Badge color="success">In Stock</Badge>
</div>
\`\`\`

### Variant Support
- **filled** (default): Solid background for high emphasis
- **light**: Subtle background for lower emphasis
- **outline**: Border style for minimal visual weight`,
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      description: 'Badge size variant'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      description: 'Badge color theme'
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'light', 'outline'],
      description: 'Badge visual variant - filled for high emphasis, light for subtle, outline for minimal'
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'trailing'],
      description: 'Icon position within badge'
    },
    mb: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Margin bottom for consistent spacing - xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px'
    },
    children: {
      control: 'text',
      description: 'Badge content'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic badge variants
export const Primary: Story = {
  args: {
    children: 'New feature',
    size: 'sm',
    color: 'primary',
    icon: 'none'
  }
};

export const Gray: Story = {
  args: {
    children: 'New feature',
    size: 'sm',
    color: 'gray',
    icon: 'none'
  }
};

export const Error: Story = {
  args: {
    children: 'Error',
    size: 'sm',
    color: 'error',
    icon: 'none'
  }
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    size: 'sm',
    color: 'warning',
    icon: 'none'
  }
};

export const Success: Story = {
  args: {
    children: 'Success',
    size: 'sm',
    color: 'success',
    icon: 'none'
  }
};

// Size variants
export const SmallSize: Story = {
  args: {
    children: 'Small badge',
    size: 'sm',
    color: 'primary',
    icon: 'none'
  }
};

export const MediumSize: Story = {
  args: {
    children: 'Medium badge',
    size: 'md',
    color: 'primary',
    icon: 'none'
  }
};

// Icon variants
export const WithTrailingIcon: Story = {
  args: {
    children: 'New feature',
    size: 'sm',
    color: 'primary',
    icon: 'trailing'
  }
};

export const ErrorWithIcon: Story = {
  args: {
    children: 'Fix now',
    size: 'sm',
    color: 'error',
    icon: 'trailing'
  }
};

export const WarningWithIcon: Story = {
  args: {
    children: 'Warning',
    size: 'sm',
    color: 'warning',
    icon: 'trailing'
  }
};

export const SuccessWithIcon: Story = {
  args: {
    children: 'Success',
    size: 'sm',
    color: 'success',
    icon: 'trailing'
  }
};

// Interactive badge
export const Interactive: Story = {
  args: {
    children: 'Click me',
    size: 'sm',
    color: 'primary',
    icon: 'trailing',
    onClick: () => alert('Badge clicked!')
  }
};

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', width: '80px', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>Primary:</h4>
        <Badge color="primary" size="sm">New feature</Badge>
        <Badge color="primary" size="md">New feature</Badge>
        <Badge color="primary" size="sm" icon="trailing">New feature</Badge>
        <Badge color="primary" size="md" icon="trailing">New feature</Badge>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', width: '80px', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>Gray:</h4>
        <Badge color="gray" size="sm">New feature</Badge>
        <Badge color="gray" size="md">New feature</Badge>
        <Badge color="gray" size="sm" icon="trailing">New feature</Badge>
        <Badge color="gray" size="md" icon="trailing">New feature</Badge>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', width: '80px', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>Error:</h4>
        <Badge color="error" size="sm">Error</Badge>
        <Badge color="error" size="md">Error</Badge>
        <Badge color="error" size="sm" icon="trailing">Fix now</Badge>
        <Badge color="error" size="md" icon="trailing">Fix now</Badge>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', width: '80px', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>Warning:</h4>
        <Badge color="warning" size="sm">Warning</Badge>
        <Badge color="warning" size="md">Warning</Badge>
        <Badge color="warning" size="sm" icon="trailing">Warning</Badge>
        <Badge color="warning" size="md" icon="trailing">Warning</Badge>
      </div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', width: '80px', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>Success:</h4>
        <Badge color="success" size="sm">Success</Badge>
        <Badge color="success" size="md">Success</Badge>
        <Badge color="success" size="sm" icon="trailing">Success</Badge>
        <Badge color="success" size="md" icon="trailing">Success</Badge>
      </div>
    </div>
  )
};

// Usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Status Indicators
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge color="success" size="sm">Online</Badge>
          <Badge color="warning" size="sm">Pending</Badge>
          <Badge color="error" size="sm">Offline</Badge>
          <Badge color="gray" size="sm">Inactive</Badge>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Feature Announcements
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge color="primary" size="md" icon="trailing">New feature</Badge>
          <Badge color="primary" size="md">Beta</Badge>
          <Badge color="success" size="md">Updated</Badge>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Action Items
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge color="error" size="sm" icon="trailing">Fix now</Badge>
          <Badge color="warning" size="sm" icon="trailing">Review</Badge>
          <Badge color="success" size="sm" icon="trailing">Complete</Badge>
        </div>
      </div>
    </div>
  )
};
