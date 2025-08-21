import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from './Text';
import { Button } from './Button';
import { Badge } from './Badge';
import { Avatar } from './Avatar';
import { Group, Stack } from './Flex';
import Icons from './Icons';
import './card.css';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Card component provides a flexible container for displaying content with optional header, footer, actions, and various styling options.

## Features
- **Flexible Layout**: Header, content, and footer sections
- **Interactive States**: Hover and click interactions
- **Action Buttons**: Support for action buttons in header
- **Badge Support**: Display status badges
- **Multiple Variants**: Default, elevated, outline, and subtle styles
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Proper ARIA labels and keyboard navigation

## Usage

\`\`\`jsx
import { Card } from '@nexus/design-system';

// Basic card
<Card title="Card Title" subtitle="Optional subtitle">
  Card content goes here
</Card>

// Interactive card with actions
<Card 
  title="Project Name"
  badge={{ label: "Active", variant: "success" }}
  actions={[
    { label: "Edit", icon: <EditIcon />, onClick: handleEdit },
    { label: "Delete", icon: <DeleteIcon />, onClick: handleDelete }
  ]}
>
  Project description and details
</Card>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outline', 'subtle'],
      description: 'Visual variant of the card',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card',
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Internal padding of the card',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius of the card',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the card responds to hover/click',
    },
    withBorder: {
      control: 'boolean',
      description: 'Whether to show border',
    },
    withDividers: {
      control: 'boolean',
      description: 'Whether to show dividers between sections',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle that provides more context about the card content.',
    children: (
      <Text>
        This is the main content area of the card. You can put any content here including text, images, forms, or other components.
      </Text>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Project Card',
    subtitle: 'Active project with recent updates',
    badge: { label: 'Active', variant: 'success' },
    actions: [
      { 
        label: 'Edit', 
        icon: <Icons name="edit" size="small" />, 
        onClick: () => console.log('Edit clicked') 
      },
      { 
        label: 'Delete', 
        icon: <Icons name="trash-2" size="small" />, 
        onClick: () => console.log('Delete clicked'),
        variant: 'ghost' as const
      },
      { 
        label: 'More', 
        icon: <Icons name="more-horizontal" size="small" />, 
        onClick: () => console.log('More clicked') 
      }
    ],
    children: (
      <Stack gap="md">
        <Text>
          This project is currently active and has received recent updates from the team.
        </Text>
        <Group gap="xs">
          <Avatar size="sm" initials="JD" />
          <Avatar size="sm" initials="MS" />
          <Avatar size="sm" initials="+3" />
        </Group>
      </Stack>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Manage your account preferences',
    withDividers: true,
    children: (
      <Stack gap="md">
        <div>
          <Text weight="medium" size="sm">Notifications</Text>
          <Text size="sm" color="secondary">Choose what notifications you want to receive.</Text>
        </div>
        <div>
          <Text weight="medium" size="sm">Privacy</Text>
          <Text size="sm" color="secondary">Control who can see your information.</Text>
        </div>
        <div>
          <Text weight="medium" size="sm">Security</Text>
          <Text size="sm" color="secondary">Manage your security settings.</Text>
        </div>
      </Stack>
    ),
    footer: (
      <Group justify="flex-end" gap="md">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save Changes</Button>
      </Group>
    ),
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Card',
    subtitle: 'Click me to see the interaction',
    badge: { label: 'Clickable', variant: 'primary' },
    interactive: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <Text>
        This card is interactive and will respond to clicks and hover states. 
        It's perfect for navigation cards or action cards.
      </Text>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
      <Card title="Default Card" variant="default">
        <Text>Default card with subtle shadow and border.</Text>
      </Card>
      
      <Card title="Elevated Card" variant="elevated">
        <Text>Elevated card with enhanced shadow and no border.</Text>
      </Card>
      
      <Card title="Outline Card" variant="outline">
        <Text>Outlined card with border and no shadow.</Text>
      </Card>
      
      <Card title="Subtle Card" variant="subtle">
        <Text>Subtle card with light background and minimal styling.</Text>
      </Card>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <Card title="Small Card" size="sm" padding="sm">
        <Text size="sm">This is a small card with compact styling.</Text>
      </Card>
      
      <Card title="Medium Card" size="md" padding="md">
        <Text>This is a medium card with standard styling.</Text>
      </Card>
      
      <Card title="Large Card" size="lg" padding="lg">
        <Text size="lg">This is a large card with spacious styling.</Text>
      </Card>
    </div>
  ),
};

export const StatusCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <Card 
        title="Success" 
        badge={{ label: 'Completed', variant: 'success' }}
        style={{ borderLeftColor: '#22C55E', borderLeftWidth: '4px' }}
      >
        <Text size="sm">Operation completed successfully.</Text>
      </Card>
      
      <Card 
        title="Warning" 
        badge={{ label: 'Attention', variant: 'warning' }}
        style={{ borderLeftColor: '#F59E0B', borderLeftWidth: '4px' }}
      >
        <Text size="sm">Please review the following items.</Text>
      </Card>
      
      <Card 
        title="Error" 
        badge={{ label: 'Failed', variant: 'error' }}
        style={{ borderLeftColor: '#EF4444', borderLeftWidth: '4px' }}
      >
        <Text size="sm">An error occurred during processing.</Text>
      </Card>
      
      <Card 
        title="Info" 
        badge={{ label: 'Info', variant: 'primary' }}
        style={{ borderLeftColor: '#3B82F6', borderLeftWidth: '4px' }}
      >
        <Text size="sm">Here's some helpful information.</Text>
      </Card>
    </div>
  ),
};

export const WithProfile: Story = {
  args: {
    withDividers: true,
    padding: 'lg',
    children: (
      <Stack gap="lg">
        <Group gap="md">
          <Avatar size="lg" initials="JD" />
          <div>
            <Text weight="semibold">John Doe</Text>
            <Text size="sm" color="secondary">Software Engineer</Text>
            <Text size="sm" color="secondary">Joined 2 years ago</Text>
          </div>
        </Group>
        <Text>
          Passionate developer with expertise in React, TypeScript, and modern web technologies. 
          Currently working on the Nexus Design System and contributing to open source projects.
        </Text>
      </Stack>
    ),
    footer: (
      <Group justify="space-between">
        <Group gap="md">
          <Group gap="xs" align="center">
            <Icons name="map-pin" size="small" color="#6B7280" />
            <Text size="sm" color="secondary">San Francisco, CA</Text>
          </Group>
          <Group gap="xs" align="center">
            <Icons name="mail" size="small" color="#6B7280" />
            <Text size="sm" color="secondary">john@example.com</Text>
          </Group>
        </Group>
        <Button size="sm">Contact</Button>
      </Group>
    ),
  },
};

export const ProductCard: Story = {
  render: () => (
    <Card
      variant="outline"
      padding="lg"
      style={{ maxWidth: '400px' }}
    >
      <Stack gap="lg">
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#F3F4F6',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icons name="smartphone" size={48} color="#6B7280" />
        </div>

        <Stack gap="md">
          <div>
            <Text weight="semibold" size="lg">iPhone 15 Pro</Text>
            <Text size="sm" color="secondary">Latest flagship smartphone with advanced camera system</Text>
          </div>

          <Text weight="bold" size="xl" color="#059669">$999</Text>

          <Group gap="xs" align="center">
            <div style={{ display: 'flex', gap: '2px' }}>
              <Icons name="star" size="small" color="#FCD34D" />
              <Icons name="star" size="small" color="#FCD34D" />
              <Icons name="star" size="small" color="#FCD34D" />
              <Icons name="star" size="small" color="#FCD34D" />
              <Icons name="star" size="small" color="#FCD34D" />
            </div>
            <Text size="sm" color="secondary">(128 reviews)</Text>
          </Group>

          <Group gap="md">
            <Button variant="primary" style={{ flex: 1 }}>
              Add to Cart
            </Button>
            <Button variant="outline" size="sm">
              <Icons name="heart" size="small" />
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <Card
        title="Analytics"
        subtitle="Track your performance metrics"
        padding="lg"
        variant="outline"
      >
        <Stack gap="md">
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#E0F2FE',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icons name="bar-chart-3" size="medium" color="#0EA5E9" />
          </div>
          <Group justify="space-between">
            <Text size="sm" color="secondary">Total Views</Text>
            <Text weight="semibold">12,543</Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" color="secondary">Conversion Rate</Text>
            <Text weight="semibold">3.24%</Text>
          </Group>
        </Stack>
      </Card>

      <Card
        title="Reports"
        subtitle="Generate detailed reports"
        padding="lg"
        variant="outline"
      >
        <Stack gap="md">
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#F0FDF4',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icons name="file-text" size="medium" color="#22C55E" />
          </div>
          <Text size="sm">Generate detailed reports</Text>
          <Group gap="xs">
            <Badge variant="secondary" size="sm">PDF</Badge>
            <Badge variant="secondary" size="sm">CSV</Badge>
          </Group>
        </Stack>
      </Card>

      <Card
        title="Settings"
        subtitle="Configure your account"
        padding="lg"
        variant="outline"
      >
        <Stack gap="md">
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#FEF3C7',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icons name="settings" size="medium" color="#F59E0B" />
          </div>
          <Text size="sm">Configure your account</Text>
        </Stack>
      </Card>

      <Card
        title="Users"
        subtitle="Manage team members"
        padding="lg"
        variant="outline"
      >
        <Stack gap="md">
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#F3E8FF',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icons name="users" size="medium" color="#8B5CF6" />
          </div>
          <Text size="sm">Manage team members</Text>
        </Stack>
      </Card>
    </div>
  ),
};

export const WithSection: Story = {
  render: () => (
    <Card variant="outline" padding="none" style={{ maxWidth: '500px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <Text weight="semibold" size="xl" style={{ color: 'white' }}>
          Header Section
        </Text>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <Stack gap="md">
          <Text weight="semibold" size="lg">Card with Section</Text>
          <Text size="sm" color="secondary">
            This card uses CardSection for the header area, which extends to the card edges.
          </Text>
          <Button variant="primary" size="sm" style={{ alignSelf: 'flex-start' }}>
            Action
          </Button>
        </Stack>
      </div>
    </Card>
  ),
};

export const LoadingState: Story = {
  args: {
    title: 'Loading Card',
    subtitle: 'Please wait while we load the content',
    loading: true,
    children: (
      <Text>
        This content is currently being loaded. The card shows a loading state with a spinner overlay.
      </Text>
    ),
  },
};

export const CustomHeader: Story = {
  args: {
    header: (
      <Group justify="space-between" align="center">
        <Group gap="md">
          <Icons name="folder" size="medium" color="#3B82F6" />
          <div>
            <Text weight="semibold">Project Files</Text>
            <Text size="sm" color="secondary">Updated 2 hours ago</Text>
          </div>
        </Group>
        <Group gap="xs">
          <Button size="sm" variant="outline">
            <Icons name="upload" size="small" />
          </Button>
          <Button size="sm" variant="outline">
            <Icons name="more-horizontal" size="small" />
          </Button>
        </Group>
      </Group>
    ),
    children: (
      <Stack gap="sm">
        <Group justify="space-between">
          <Text size="sm">design-system.zip</Text>
          <Text size="sm" color="secondary">2.4 MB</Text>
        </Group>
        <Group justify="space-between">
          <Text size="sm">components.tsx</Text>
          <Text size="sm" color="secondary">156 KB</Text>
        </Group>
        <Group justify="space-between">
          <Text size="sm">styles.css</Text>
          <Text size="sm" color="secondary">89 KB</Text>
        </Group>
      </Stack>
    ),
  },
};
