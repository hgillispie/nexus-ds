import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider, AppShell, Text, Button, Group } from '@mantine/core';
import { useState } from 'react';
import { Sidebar, DrawerSidebar } from './Sidebar';
import { designSystemTheme } from './theme';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sidebar navigation component with support for sections, nested items, user profiles, and collapsible states.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider theme={designSystemTheme}>
        <div style={{ height: '100vh', display: 'flex' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Icons
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 6L8 1L14 6V13C14 13.55 13.55 14 13 14H3C2.45 14 2 13.55 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14V10H10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 3H6C7.1 3 8 3.9 8 5V13C8 12.45 7.55 12 7 12H2V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 3H10C8.9 3 8 3.9 8 5V13C8 12.45 8.45 12 9 12H14V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TasksIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M14 2H2C1.45 2 1 2.45 1 3V13C1 13.55 1.45 14 2 14H14C14.55 14 15 13.55 15 13V3C15 2.45 14.55 2 14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 8.5C12.2 8.5 14 9.24 14 10V12H9V10C9 9.24 10.8 8.5 11 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 8.5C7.2 8.5 9 9.24 9 10V12H2V10C2 9.24 3.8 8.5 6 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9 9.6C12.8 9.8 12.8 10.1 12.9 10.4L13.9 11.8C14 11.9 14 12.1 13.9 12.2L12.9 13.8C12.8 13.9 12.6 14 12.5 13.9L11.1 13.4C10.9 13.5 10.6 13.7 10.4 13.8L10.2 15.3C10.2 15.4 10.1 15.5 9.9 15.5H8.1C7.9 15.5 7.8 15.4 7.8 15.3L7.6 13.8C7.4 13.7 7.1 13.5 6.9 13.4L5.5 13.9C5.4 14 5.2 13.9 5.1 13.8L4.1 12.2C4 12.1 4 11.9 4.1 11.8L5.1 10.4C5 10.1 5 9.8 5.1 9.6L4.1 8.2C4 8.1 4 7.9 4.1 7.8L5.1 6.2C5.2 6.1 5.4 6 5.5 6.1L6.9 6.6C7.1 6.5 7.4 6.3 7.6 6.2L7.8 4.7C7.8 4.6 7.9 4.5 8.1 4.5H9.9C10.1 4.5 10.2 4.6 10.2 4.7L10.4 6.2C10.6 6.3 10.9 6.5 11.1 6.6L12.5 6.1C12.6 6 12.8 6.1 12.9 6.2L13.9 7.8C14 7.9 14 8.1 13.9 8.2L12.9 9.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 12L7.5 7.5L10.5 10.5L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 7H14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const sampleSections = [
  {
    label: 'Main',
    items: [
      {
        label: 'Dashboard',
        icon: <HomeIcon />,
        active: true,
        onClick: () => console.log('Dashboard clicked'),
      },
      {
        label: 'Analytics',
        icon: <AnalyticsIcon />,
        onClick: () => console.log('Analytics clicked'),
      },
    ],
  },
  {
    label: 'Management',
    items: [
      {
        label: 'Projects',
        icon: <ProjectsIcon />,
        badge: '12',
        onClick: () => console.log('Projects clicked'),
        children: [
          {
            label: 'Active Projects',
            badge: '8',
            onClick: () => console.log('Active Projects clicked'),
          },
          {
            label: 'Completed',
            onClick: () => console.log('Completed clicked'),
          },
          {
            label: 'Archived',
            onClick: () => console.log('Archived clicked'),
          },
        ],
      },
      {
        label: 'Tasks',
        icon: <TasksIcon />,
        badge: '3',
        onClick: () => console.log('Tasks clicked'),
      },
      {
        label: 'Team',
        icon: <UsersIcon />,
        onClick: () => console.log('Team clicked'),
      },
    ],
  },
  {
    label: 'Configuration',
    items: [
      {
        label: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => console.log('Settings clicked'),
        children: [
          {
            label: 'General',
            onClick: () => console.log('General clicked'),
          },
          {
            label: 'Security',
            onClick: () => console.log('Security clicked'),
          },
          {
            label: 'Notifications',
            badge: 'New',
            onClick: () => console.log('Notifications clicked'),
          },
        ],
      },
    ],
  },
];

const sampleUser = {
  name: 'Olivia Rhye',
  email: 'olivia@untitledui.com',
  role: 'Product Designer',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  onClick: () => console.log('User profile clicked'),
};

export const Default: Story = {
  args: {
    sections: sampleSections,
    user: sampleUser,
    width: 280,
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args} />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Main Content Area</Text>
        <Text>This is the main content area next to the sidebar.</Text>
      </div>
    </div>
  ),
};

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          sections={sampleSections}
          user={sampleUser}
          collapsible
          collapsed={collapsed}
          onCollapseChange={setCollapsed}
          width={280}
        />
        <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
          <Text size="xl" fw={600} mb="md">
            Collapsible Sidebar Demo
          </Text>
          <Text mb="md">
            Click the collapse button on the sidebar to see it shrink to an icon-only view.
          </Text>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? 'Expand' : 'Collapse'} Sidebar
          </Button>
        </div>
      </div>
    );
  },
};

export const SimpleItems: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
        icon: <HomeIcon />,
        active: true,
      },
      {
        label: 'Projects',
        icon: <ProjectsIcon />,
        badge: '12',
      },
      {
        label: 'Tasks',
        icon: <TasksIcon />,
        badge: '3',
      },
      {
        label: 'Team',
        icon: <UsersIcon />,
      },
      {
        label: 'Settings',
        icon: <SettingsIcon />,
      },
    ],
    user: sampleUser,
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args} />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Simple Sidebar</Text>
        <Text>This sidebar uses a simple flat list of items instead of sections.</Text>
      </div>
    </div>
  ),
};

export const WithHeader: Story = {
  args: {
    header: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: '#0a0e1b', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: 600,
          margin: '0 auto 0.5rem'
        }}>
          U
        </div>
        <Text fw={600} size="sm">Untitled UI</Text>
        <Text size="xs" c="dimmed">Design System</Text>
      </div>
    ),
    sections: sampleSections.slice(0, 2), // Fewer sections to make room for header
    user: sampleUser,
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args} />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Sidebar with Header</Text>
        <Text>This sidebar includes a custom header section with branding.</Text>
      </div>
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    sections: sampleSections.slice(0, 2),
    user: sampleUser,
    footer: (
      <div style={{ padding: '0.5rem' }}>
        <Text size="xs" c="dimmed" ta="center" mb="xs">
          Version 2.1.0
        </Text>
        <Group justify="center" gap="xs">
          <Button size="xs" variant="subtle">Help</Button>
          <Button size="xs" variant="subtle">Feedback</Button>
        </Group>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args} />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Sidebar with Footer</Text>
        <Text>This sidebar includes a custom footer section with version info and links.</Text>
      </div>
    </div>
  ),
};

export const WithoutUser: Story = {
  args: {
    sections: sampleSections,
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args} />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Sidebar without User</Text>
        <Text>This sidebar doesn't include a user profile section.</Text>
      </div>
    </div>
  ),
};

export const InAppShell: Story = {
  render: () => (
    <MantineProvider theme={designSystemTheme}>
      <AppShell
        navbar={{ width: 280, breakpoint: 'sm' }}
        padding="md"
      >
      <AppShell.Navbar>
        <Sidebar
          sections={sampleSections}
          user={sampleUser}
        />
      </AppShell.Navbar>
      
      <AppShell.Main>
        <div style={{ padding: '2rem' }}>
          <Text size="xl" fw={600} mb="md">
            Sidebar in AppShell
          </Text>
          <Text mb="md">
            This example shows how to use the Sidebar component within Mantine's AppShell for a complete layout.
          </Text>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} style={{ 
                padding: '1.5rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '8px',
                border: '1px solid #e5e5e5'
              }}>
                <Text fw={600} mb="sm">Card {i + 1}</Text>
                <Text size="sm" c="dimmed">
                  This is a sample card in the main content area.
                </Text>
              </div>
            ))}
          </div>
        </div>
      </AppShell.Main>
      </AppShell>
    </MantineProvider>
  ),
};

export const DrawerExample: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    return (
      <MantineProvider theme={designSystemTheme}>
        <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Drawer Sidebar Demo</Text>
        <Text mb="md">
          The DrawerSidebar component is perfect for mobile interfaces or when you need a temporary sidebar.
        </Text>
        <Button onClick={() => setOpened(true)}>
          Open Sidebar Drawer
        </Button>
        
        <DrawerSidebar
          opened={opened}
          onClose={() => setOpened(false)}
          title="Navigation"
          sections={sampleSections}
          user={sampleUser}
        />
        </div>
      </MantineProvider>
    );
  },
};

export const DisabledItems: Story = {
  args: {
    sections: [
      {
        label: 'Navigation',
        items: [
          {
            label: 'Dashboard',
            icon: <HomeIcon />,
            active: true,
          },
          {
            label: 'Analytics',
            icon: <AnalyticsIcon />,
          },
          {
            label: 'Reports',
            icon: <ProjectsIcon />,
            disabled: true,
          },
          {
            label: 'Settings',
            icon: <SettingsIcon />,
            disabled: true,
          },
        ],
      },
    ],
    user: sampleUser,
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args} />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text size="xl" fw={600} mb="md">Disabled Items</Text>
        <Text>Some sidebar items can be disabled to show unavailable features.</Text>
      </div>
    </div>
  ),
};
