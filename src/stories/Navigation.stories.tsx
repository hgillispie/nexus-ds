import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import { Navigation } from './Navigation';
import { designSystemTheme } from './theme';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation header component with user menu, notifications, and responsive design using Mantine and design system tokens.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider theme={designSystemTheme}>
        <div style={{ minHeight: '200px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

const SearchInput = () => (
  <div style={{ 
    position: 'relative', 
    width: '100%', 
    maxWidth: '400px',
    backgroundColor: '#f5f5f5',
    borderRadius: '6px',
    border: '1px solid #e5e5e5'
  }}>
    <input
      type="text"
      placeholder="Search..."
      style={{
        width: '100%',
        padding: '0.5rem 0.75rem 0.5rem 2.5rem',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: 'transparent',
        fontSize: '0.875rem',
        fontFamily: 'Inter, sans-serif',
        outline: 'none'
      }}
    />
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none"
      style={{
        position: 'absolute',
        left: '0.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#737373'
      }}
    >
      <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const Default: Story = {
  args: {
    brand: 'Untitled UI',
    items: [
      {
        label: 'Home',
        icon: <HomeIcon />,
        active: true,
        onClick: () => console.log('Home clicked'),
      },
      {
        label: 'Projects',
        icon: <ProjectsIcon />,
        onClick: () => console.log('Projects clicked'),
      },
      {
        label: 'Tasks',
        icon: <TasksIcon />,
        badge: '3',
        onClick: () => console.log('Tasks clicked'),
      },
    ],
    user: {
      name: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      onProfile: () => console.log('Profile clicked'),
      onSettings: () => console.log('Settings clicked'),
      onLogout: () => console.log('Logout clicked'),
    },
    notificationsCount: 3,
    onNotificationsClick: () => console.log('Notifications clicked'),
  },
};

export const WithSearch: Story = {
  args: {
    ...Default.args,
    search: <SearchInput />,
  },
};

export const MinimalBrand: Story = {
  args: {
    ...Default.args,
    brand: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: '#0a0e1b', 
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 600
        }}>
          U
        </div>
        <span style={{ fontSize: '1.125rem', fontWeight: 600, color: '#171717' }}>
          Untitled UI
        </span>
      </div>
    ),
  },
};

export const WithoutUser: Story = {
  args: {
    brand: 'Untitled UI',
    items: [
      {
        label: 'Dashboard',
        icon: <HomeIcon />,
        active: true,
      },
      {
        label: 'Analytics',
        icon: <ProjectsIcon />,
      },
      {
        label: 'Reports',
        icon: <TasksIcon />,
      },
    ],
    search: <SearchInput />,
  },
};

export const WithBadges: Story = {
  args: {
    ...Default.args,
    items: [
      {
        label: 'Dashboard',
        icon: <HomeIcon />,
        active: true,
      },
      {
        label: 'Messages',
        icon: <ProjectsIcon />,
        badge: '12',
      },
      {
        label: 'Tasks',
        icon: <TasksIcon />,
        badge: 'New',
      },
    ],
    notificationsCount: 5,
  },
};

export const MobileView: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const NoNotifications: Story = {
  args: {
    ...Default.args,
    notificationsCount: 0,
  },
};

export const LongBrandName: Story = {
  args: {
    ...Default.args,
    brand: 'Very Long Company Name That Might Wrap',
    items: [
      {
        label: 'Very Long Navigation Item Name',
        icon: <HomeIcon />,
        active: true,
      },
      {
        label: 'Another Long Item',
        icon: <ProjectsIcon />,
        badge: '999+',
      },
    ],
  },
};
