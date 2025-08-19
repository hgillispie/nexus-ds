import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider, Group, Text, Button, ActionIcon, Avatar } from '@mantine/core';
import { Card } from './Card';
import { designSystemTheme } from './theme';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Flexible card component with header, content, footer, and various styling options using design system tokens.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider theme={designSystemTheme}>
        <div style={{ backgroundColor: '#ffffff', padding: '2rem', minHeight: '400px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 1C13.2652 0.734784 13.6174 0.585786 13.985 0.585786C14.3526 0.585786 14.7348 0.734784 15 1C15.2652 1.26522 15.4142 1.61739 15.4142 1.985C15.4142 2.35261 15.2652 2.70478 15 2.97L8.5 9.5L6 10L6.5 7.5L13 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33333 4V2.66667C5.33333 2 6 1.33333 6.66667 1.33333H9.33333C10 1.33333 10.6667 2 10.6667 2.66667V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle that provides more context about the card content.',
    children: (
      <Text>
        This is the main content area of the card. You can put any content here including text, images, forms, or other components.
      </Text>
    ),
    variant: 'default',
    size: 'md',
    padding: 'md',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Project Card',
    subtitle: 'Active project with recent updates',
    badge: {
      label: 'Active',
      color: 'green',
      variant: 'light',
    },
    actions: [
      {
        label: 'Edit',
        icon: <EditIcon />,
        onClick: () => console.log('Edit clicked'),
      },
      {
        label: 'Delete',
        icon: <DeleteIcon />,
        variant: 'subtle',
        color: 'red',
        onClick: () => console.log('Delete clicked'),
      },
      {
        label: 'More',
        icon: <MoreIcon />,
        onClick: () => console.log('More clicked'),
      },
    ],
    children: (
      <div>
        <Text mb="sm">
          This project is currently active and has received recent updates from the team.
        </Text>
        <Group gap="xs">
          <Avatar size="xs" radius="xl">JD</Avatar>
          <Avatar size="xs" radius="xl">MS</Avatar>
          <Avatar size="xs" radius="xl">+3</Avatar>
        </Group>
      </div>
    ),
  },
};

export const WithImage: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=400&fit=crop&crop=top',
    title: 'Office Space',
    subtitle: 'Modern workspace design',
    children: (
      <Text>
        A beautiful modern office space designed for productivity and collaboration. Features include open floor plans, natural lighting, and ergonomic furniture.
      </Text>
    ),
    footer: (
      <Group justify="space-between">
        <Text size="sm" c="dimmed">Published 2 days ago</Text>
        <Button size="sm">View Details</Button>
      </Group>
    ),
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Card',
    subtitle: 'Click me to see the hover effect',
    interactive: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <Text>
        This card is interactive and will respond to clicks and hover states. 
        It's perfect for navigation cards or action cards.
      </Text>
    ),
    badge: {
      label: 'Clickable',
      color: 'blue',
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
      <Card variant="default" title="Default Card" padding="md">
        <Text>Default card with subtle shadow and border.</Text>
      </Card>
      
      <Card variant="elevated" title="Elevated Card" padding="md">
        <Text>Elevated card with enhanced shadow and no border.</Text>
      </Card>
      
      <Card variant="outline" title="Outline Card" padding="md">
        <Text>Outlined card with border and no shadow.</Text>
      </Card>
      
      <Card variant="subtle" title="Subtle Card" padding="md">
        <Text>Subtle card with light background and minimal styling.</Text>
      </Card>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <Card size="sm" title="Small Card" padding="sm">
        <Text size="sm">This is a small card with compact styling.</Text>
      </Card>
      
      <Card size="md" title="Medium Card" padding="md">
        <Text>This is a medium card with standard styling.</Text>
      </Card>
      
      <Card size="lg" title="Large Card" padding="lg">
        <Text size="lg">This is a large card with spacious styling.</Text>
      </Card>
    </div>
  ),
};

export const WithDividers: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Manage your account preferences',
    withDividers: true,
    children: (
      <div>
        <Text fw={500} mb="xs">Notifications</Text>
        <Text size="sm" c="dimmed" mb="md">Choose what notifications you want to receive.</Text>
        
        <Text fw={500} mb="xs">Privacy</Text>
        <Text size="sm" c="dimmed" mb="md">Control who can see your information.</Text>
        
        <Text fw={500} mb="xs">Security</Text>
        <Text size="sm" c="dimmed">Manage your security settings.</Text>
      </div>
    ),
    footer: (
      <Group justify="flex-end">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Save Changes</Button>
      </Group>
    ),
  },
};

export const StatusCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      <Card 
        title="Success" 
        className="nexus-card--success"
        badge={{ label: 'Completed', color: 'green', variant: 'filled' }}
        padding="md"
      >
        <Text size="sm">Operation completed successfully.</Text>
      </Card>
      
      <Card 
        title="Warning" 
        className="nexus-card--warning"
        badge={{ label: 'Attention', color: 'orange', variant: 'filled' }}
        padding="md"
      >
        <Text size="sm">Please review the following items.</Text>
      </Card>
      
      <Card 
        title="Error" 
        className="nexus-card--error"
        badge={{ label: 'Failed', color: 'red', variant: 'filled' }}
        padding="md"
      >
        <Text size="sm">An error occurred during processing.</Text>
      </Card>
      
      <Card 
        title="Info" 
        className="nexus-card--info"
        badge={{ label: 'Info', color: 'cyan', variant: 'filled' }}
        padding="md"
      >
        <Text size="sm">Here's some helpful information.</Text>
      </Card>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    header: (
      <Group justify="space-between">
        <Group gap="sm">
          <Avatar radius="xl" size="md">UI</Avatar>
          <div>
            <Text fw={600}>Untitled UI</Text>
            <Text size="sm" c="dimmed">Design System</Text>
          </div>
        </Group>
        <Button size="sm">Follow</Button>
      </Group>
    ),
    children: (
      <div>
        <Text mb="md">
          A comprehensive design system built with React and TypeScript. 
          Includes components, tokens, and patterns for building modern applications.
        </Text>
        <Group gap="xs">
          <Text size="sm" c="dimmed">TypeScript</Text>
          <Text size="sm" c="dimmed">•</Text>
          <Text size="sm" c="dimmed">React</Text>
          <Text size="sm" c="dimmed">•</Text>
          <Text size="sm" c="dimmed">Storybook</Text>
        </Group>
      </div>
    ),
    footer: (
      <Group justify="space-between">
        <Text size="sm" c="dimmed">Updated 2 hours ago</Text>
        <Group gap="sm">
          <Text size="sm" c="dimmed">⭐ 1.2k</Text>
          <Text size="sm" c="dimmed">🍴 234</Text>
        </Group>
      </Group>
    ),
    withDividers: true,
  },
};
