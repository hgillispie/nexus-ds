import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button Group component for organizing related actions. Supports text-only, leading icon, and icon-only variants.'
      }
    }
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['false', 'leading', 'only'],
      description: 'Icon configuration for the button group'
    },
    items: {
      control: false,
      description: 'Array of button items to render'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button group items for text-only variant
const defaultItems = [
  { children: 'Text', id: 'text1' },
  { children: 'Text', id: 'text2' },
  { children: 'Text', id: 'text3' }
];

// Button group items with current state
const itemsWithCurrent = [
  { children: 'Text', id: 'text1' },
  { children: 'Text', id: 'text2', current: true },
  { children: 'Text', id: 'text3' }
];

// Icon-only variant uses children for accessibility but displays icons
const iconOnlyItems = [
  { children: 'Previous', id: 'prev' },
  { children: 'Add', id: 'add' },
  { children: 'Next', id: 'next' }
];

export const TextOnly: Story = {
  args: {
    icon: 'false',
    items: defaultItems
  }
};

export const TextOnlyWithCurrent: Story = {
  args: {
    icon: 'false',
    items: itemsWithCurrent
  }
};

export const LeadingIcon: Story = {
  args: {
    icon: 'leading',
    items: defaultItems
  }
};

export const LeadingIconWithCurrent: Story = {
  args: {
    icon: 'leading',
    items: itemsWithCurrent
  }
};

export const IconOnly: Story = {
  args: {
    icon: 'only',
    items: iconOnlyItems
  }
};

export const IconOnlyWithCurrent: Story = {
  args: {
    icon: 'only',
    items: [
      { children: 'Previous', id: 'prev' },
      { children: 'Add', id: 'add', current: true },
      { children: 'Next', id: 'next' }
    ]
  }
};

// Interactive examples
export const InteractiveTextOnly: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    
    const items = [
      { 
        children: 'Overview', 
        id: 'overview',
        current: currentIndex === 0,
        onClick: () => setCurrentIndex(0)
      },
      { 
        children: 'Details', 
        id: 'details',
        current: currentIndex === 1,
        onClick: () => setCurrentIndex(1)
      },
      { 
        children: 'Settings', 
        id: 'settings',
        current: currentIndex === 2,
        onClick: () => setCurrentIndex(2)
      }
    ];
    
    return (
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Interactive Text-Only Button Group
        </h3>
        <ButtonGroup icon="false" items={items} />
        {currentIndex !== null && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#64748B', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
            Selected: {items[currentIndex].children}
          </p>
        )}
      </div>
    );
  }
};

export const InteractiveLeadingIcon: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    
    const items = [
      { 
        children: 'Profile', 
        id: 'profile',
        current: currentIndex === 0,
        onClick: () => setCurrentIndex(0)
      },
      { 
        children: 'Account', 
        id: 'account',
        current: currentIndex === 1,
        onClick: () => setCurrentIndex(1)
      },
      { 
        children: 'Security', 
        id: 'security',
        current: currentIndex === 2,
        onClick: () => setCurrentIndex(2)
      }
    ];
    
    return (
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Interactive Leading Icon Button Group
        </h3>
        <ButtonGroup icon="leading" items={items} />
        {currentIndex !== null && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#64748B', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
            Selected: {items[currentIndex].children}
          </p>
        )}
      </div>
    );
  }
};

export const InteractiveIconOnly: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    
    const items = [
      { 
        children: 'Previous Page', 
        id: 'prev',
        current: currentIndex === 0,
        onClick: () => setCurrentIndex(0)
      },
      { 
        children: 'Add Item', 
        id: 'add',
        current: currentIndex === 1,
        onClick: () => setCurrentIndex(1)
      },
      { 
        children: 'Next Page', 
        id: 'next',
        current: currentIndex === 2,
        onClick: () => setCurrentIndex(2)
      }
    ];
    
    return (
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Interactive Icon-Only Button Group
        </h3>
        <ButtonGroup icon="only" items={items} />
        {currentIndex !== null && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#64748B', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
            Selected: {items[currentIndex].children}
          </p>
        )}
      </div>
    );
  }
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Text Only
        </h3>
        <ButtonGroup icon="false" items={defaultItems} />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Leading Icon
        </h3>
        <ButtonGroup icon="leading" items={defaultItems} />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Icon Only
        </h3>
        <ButtonGroup icon="only" items={iconOnlyItems} />
      </div>
    </div>
  )
};

// Custom content example
export const CustomContent: Story = {
  render: () => {
    const customItems = [
      { children: 'Dashboard', id: 'dashboard' },
      { children: 'Analytics', id: 'analytics', current: true },
      { children: 'Reports', id: 'reports' },
      { children: 'Settings', id: 'settings' }
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Navigation Tabs
        </h3>
        <ButtonGroup icon="false" items={customItems} />
      </div>
    );
  }
};
