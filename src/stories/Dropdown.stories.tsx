import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader, UserIcon, SettingsIcon, ZapIcon, HomeIcon, LogOutIcon } from './Dropdown';

/**
 * The Dropdown component provides a comprehensive menu system for displaying lists of actions,
 * navigation items, and other interactive content. It supports icons, keyboard shortcuts,
 * dividers, and various states.
 * 
 * ## Features
 * - **Icon support**: Display icons alongside menu items
 * - **Keyboard shortcuts**: Show keyboard shortcuts for quick access
 * - **Dividers**: Organize content with visual separators
 * - **States**: Default, hover, focus, and disabled states
 * - **Accessibility**: Full keyboard navigation support
 * 
 * ## Usage Guidelines
 * - Use **DropdownItem** for individual menu actions
 * - Use **DropdownDivider** to group related items
 * - Provide **keyboard shortcuts** for frequently used actions
 * - Use **icons** to provide visual context for actions
 * - Keep menu items **concise** and **action-oriented**
 */
const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile dropdown menu component for displaying lists of actions and navigation items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the dropdown is visible',
    },
    width: {
      control: 'number',
      description: 'Custom width for the dropdown',
    },
    onClose: {
      action: 'onClose',
      description: 'Function called when dropdown should close',
    },
  },
  args: {
    isOpen: true,
    width: 240,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic dropdown with simple text items
 */
export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem>View profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Company profile</DropdownItem>
      <DropdownItem>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Dropdown with icons for better visual context
 */
export const WithIcons: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />}>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />}>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />}>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Dropdown with keyboard shortcuts for power users
 */
export const WithShortcuts: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />} shortcut="?">Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C">Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→T">Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Dropdown with disabled items
 */
export const WithDisabledItems: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />} shortcut="?" disabled>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C" disabled>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→T">Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Interactive dropdown demonstrating real functionality
 */
export const Interactive: Story = {
  render: () => {
    const [selectedAction, setSelectedAction] = React.useState<string>('');
    
    const handleAction = (action: string) => {
      setSelectedAction(action);
      // In a real app, you would perform the actual action here
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Dropdown isOpen={true}>
          <DropdownItem 
            icon={<UserIcon />} 
            shortcut="⌘K→P"
            onClick={() => handleAction('View profile')}
          >
            View profile
          </DropdownItem>
          <DropdownItem 
            icon={<SettingsIcon />} 
            shortcut="⌘S"
            onClick={() => handleAction('Settings')}
          >
            Settings
          </DropdownItem>
          <DropdownItem 
            icon={<ZapIcon />} 
            shortcut="?"
            onClick={() => handleAction('Keyboard shortcuts')}
          >
            Keyboard shortcuts
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem 
            icon={<HomeIcon />} 
            shortcut="⌘K→C"
            onClick={() => handleAction('Company profile')}
          >
            Company profile
          </DropdownItem>
          <DropdownItem 
            icon={<UserIcon />} 
            shortcut="⌘K→T"
            onClick={() => handleAction('Team')}
          >
            Team
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem 
            icon={<LogOutIcon />} 
            shortcut="⌥⇧Q"
            onClick={() => handleAction('Log out')}
          >
            Log out
          </DropdownItem>
        </Dropdown>
        
        {selectedAction && (
          <p style={{ 
            marginTop: '16px', 
            fontSize: '14px', 
            color: '#64748B',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Selected: {selectedAction}
          </p>
        )}
      </div>
    );
  },
};

/**
 * Dropdown with mixed content and complex organization
 */
export const ComplexMenu: Story = {
  render: (args) => (
    <Dropdown {...args} width={280}>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />} shortcut="?">Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C">Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→T">Team</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘I">Invite colleagues</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<ZapIcon />} shortcut="⌘K→C">Changelog</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘K→S">Slack Community</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘/">Support</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘A">API</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Compact dropdown with smaller width
 */
export const Compact: Story = {
  render: (args) => (
    <Dropdown {...args} width={180}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Help</DropdownItem>
      <DropdownItem>Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * All dropdown variations in comparison
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '24px', 
      padding: '20px',
      maxWidth: '1200px'
    }}>
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Basic Dropdown
        </h3>
        <Dropdown isOpen={true}>
          <DropdownItem>View profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Log out</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          With Icons
        </h3>
        <Dropdown isOpen={true}>
          <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          With Shortcuts
        </h3>
        <Dropdown isOpen={true}>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
        </Dropdown>
      </div>
    </div>
  ),
};

/**
 * Usage examples showing different contexts
 */
export const UsageExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      maxWidth: '800px',
      padding: '20px'
    }}>
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          User Account Menu
        </h3>
        <Dropdown isOpen={true} width={220}>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Account settings</DropdownItem>
          <DropdownItem icon={<ZapIcon />} shortcut="?">Keyboard shortcuts</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Sign out</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Navigation Menu
        </h3>
        <Dropdown isOpen={true} width={200}>
          <DropdownItem icon={<HomeIcon />}>Dashboard</DropdownItem>
          <DropdownItem icon={<UserIcon />}>Projects</DropdownItem>
          <DropdownItem icon={<SettingsIcon />}>Analytics</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<ZapIcon />}>Settings</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Context Menu
        </h3>
        <Dropdown isOpen={true} width={160}>
          <DropdownItem shortcut="⌘C">Copy</DropdownItem>
          <DropdownItem shortcut="⌘X">Cut</DropdownItem>
          <DropdownItem shortcut="⌘V">Paste</DropdownItem>
          <DropdownDivider />
          <DropdownItem shortcut="⌘Z">Undo</DropdownItem>
          <DropdownItem shortcut="⌘⇧Z">Redo</DropdownItem>
        </Dropdown>
      </div>
    </div>
  ),
};

/**
 * Dropdown with avatar header showing user profile
 */
export const WithAvatarHeader: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownHeader
        type="avatar"
        title="Olivia Rhye"
        subtitle="olivia@untitledui.com"
        avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
        avatarAlt="Olivia Rhye profile picture"
      />
      <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />}>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />}>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />}>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Dropdown with text header for menu categories
 */
export const WithTextHeader: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownHeader
        type="text"
        title="Account menu"
      />
      <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />}>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />}>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />}>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
    </Dropdown>
  ),
};

/**
 * Complete user menu with avatar header and all features
 */
export const CompleteUserMenu: Story = {
  render: () => {
    const [selectedAction, setSelectedAction] = React.useState<string>('');

    const handleAction = (action: string) => {
      setSelectedAction(action);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Dropdown isOpen={true} width={280}>
          <DropdownHeader
            type="avatar"
            title="Olivia Rhye"
            subtitle="olivia@untitledui.com"
            avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80"
            avatarAlt="Olivia Rhye profile picture"
          />
          <DropdownItem
            icon={<UserIcon />}
            shortcut="⌘K→P"
            onClick={() => handleAction('View profile')}
          >
            View profile
          </DropdownItem>
          <DropdownItem
            icon={<SettingsIcon />}
            shortcut="⌘S"
            onClick={() => handleAction('Settings')}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            icon={<ZapIcon />}
            shortcut="?"
            onClick={() => handleAction('Keyboard shortcuts')}
          >
            Keyboard shortcuts
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem
            icon={<HomeIcon />}
            shortcut="⌘K→C"
            onClick={() => handleAction('Company profile')}
          >
            Company profile
          </DropdownItem>
          <DropdownItem
            icon={<UserIcon />}
            shortcut="⌘K→T"
            onClick={() => handleAction('Team')}
          >
            Team
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem
            icon={<LogOutIcon />}
            shortcut="⌥⇧Q"
            onClick={() => handleAction('Log out')}
          >
            Log out
          </DropdownItem>
        </Dropdown>

        {selectedAction && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            color: '#495057',
            fontSize: '14px',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Selected action: <strong>{selectedAction}</strong>
          </div>
        )}
      </div>
    );
  },
};
