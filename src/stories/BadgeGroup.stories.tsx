import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BadgeGroup } from './BadgeGroup';

const meta: Meta<typeof BadgeGroup> = {
  title: 'Design System/BadgeGroup',
  component: BadgeGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge Group component that combines a badge with message text. Supports leading and trailing badge positions with various configurations.'
      }
    }
  },
  argTypes: {
    badgePosition: {
      control: { type: 'select' },
      options: ['leading', 'trailing'],
      description: 'Position of badge relative to message'
    },
    size: {
      control: { type: 'select' },
      options: ['md', 'lg'],
      description: 'Size variant affecting both badge and message'
    },
    showMessageIcon: {
      control: 'boolean',
      description: 'Whether to show arrow icon after message'
    },
    message: {
      control: 'text',
      description: 'Main message text'
    },
    'badge.children': {
      control: 'text',
      description: 'Badge content'
    },
    'badge.color': {
      control: { type: 'select' },
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      description: 'Badge color theme'
    },
    'badge.hasIcon': {
      control: 'boolean',
      description: 'Whether badge has trailing icon'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Leading badge variants
export const LeadingPrimary: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: false
  }
};

export const LeadingGray: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'gray',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: false
  }
};

export const LeadingWithIcon: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
};

export const LeadingError: Story = {
  args: {
    message: "There was a problem with that action",
    badge: {
      children: 'Error',
      color: 'error',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
};

export const LeadingWarning: Story = {
  args: {
    message: "Just to let you know this might be a problem",
    badge: {
      children: 'Warning',
      color: 'warning',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
};

export const LeadingSuccess: Story = {
  args: {
    message: "You've updated your profile and details",
    badge: {
      children: 'Success',
      color: 'success',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
};

// Trailing badge variants
export const TrailingPrimary: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
};

export const TrailingWithBadgeIcon: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
};

export const TrailingError: Story = {
  args: {
    message: "There was a problem with that action",
    badge: {
      children: 'Fix now',
      color: 'error',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
};

export const TrailingWarning: Story = {
  args: {
    message: "Just to let you know this might be a problem",
    badge: {
      children: 'Warning',
      color: 'warning',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
};

export const TrailingSuccess: Story = {
  args: {
    message: "You've updated your profile and details",
    badge: {
      children: 'Success',
      color: 'success',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
};

// Size variants
export const MediumSize: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: false
  }
};

export const LargeSize: Story = {
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'lg',
    showMessageIcon: false
  }
};

// Interactive examples
export const InteractiveLeading: Story = {
  render: () => {
    const [clicked, setClicked] = useState(false);
    
    return (
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Interactive Leading Badge Group
        </h3>
        <BadgeGroup
          message="Click this badge group to interact"
          badge={{
            children: 'Interactive',
            color: 'primary',
            hasIcon: false
          }}
          badgePosition="leading"
          size="md"
          showMessageIcon={true}
          onClick={() => setClicked(!clicked)}
        />
        {clicked && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#64748B' }}>
            Badge group was clicked!
          </p>
        )}
      </div>
    );
  }
};

export const InteractiveTrailing: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Interactive Trailing Badge Group
        </h3>
        <BadgeGroup
          message={`Clicked ${count} times`}
          badge={{
            children: 'Click me',
            color: 'success',
            hasIcon: true
          }}
          badgePosition="trailing"
          size="md"
          onClick={() => setCount(count + 1)}
        />
      </div>
    );
  }
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Leading Badge Groups (Medium Size)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <BadgeGroup
            message="We've just released a new feature"
            badge={{ children: 'New feature', color: 'primary' }}
            badgePosition="leading"
            size="md"
          />
          <BadgeGroup
            message="We've just released a new feature"
            badge={{ children: 'New feature', color: 'primary' }}
            badgePosition="leading"
            size="md"
            showMessageIcon
          />
          <BadgeGroup
            message="There was a problem with that action"
            badge={{ children: 'Error', color: 'error' }}
            badgePosition="leading"
            size="md"
            showMessageIcon
          />
          <BadgeGroup
            message="Just to let you know this might be a problem"
            badge={{ children: 'Warning', color: 'warning' }}
            badgePosition="leading"
            size="md"
            showMessageIcon
          />
          <BadgeGroup
            message="You've updated your profile and details"
            badge={{ children: 'Success', color: 'success' }}
            badgePosition="leading"
            size="md"
            showMessageIcon
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Trailing Badge Groups (Medium Size)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <BadgeGroup
            message="We've just released a new feature"
            badge={{ children: 'New feature', color: 'primary' }}
            badgePosition="trailing"
            size="md"
          />
          <BadgeGroup
            message="We've just released a new feature"
            badge={{ children: 'New feature', color: 'primary', hasIcon: true }}
            badgePosition="trailing"
            size="md"
          />
          <BadgeGroup
            message="There was a problem with that action"
            badge={{ children: 'Fix now', color: 'error', hasIcon: true }}
            badgePosition="trailing"
            size="md"
          />
          <BadgeGroup
            message="Just to let you know this might be a problem"
            badge={{ children: 'Warning', color: 'warning', hasIcon: true }}
            badgePosition="trailing"
            size="md"
          />
          <BadgeGroup
            message="You've updated your profile and details"
            badge={{ children: 'Success', color: 'success', hasIcon: true }}
            badgePosition="trailing"
            size="md"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Large Size Variants
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <BadgeGroup
            message="We've just released a new feature"
            badge={{ children: 'New feature', color: 'primary' }}
            badgePosition="leading"
            size="lg"
          />
          <BadgeGroup
            message="We've just released a new feature"
            badge={{ children: 'New feature', color: 'primary', hasIcon: true }}
            badgePosition="trailing"
            size="lg"
          />
        </div>
      </div>
    </div>
  )
};

// Usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Feature Announcements
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <BadgeGroup
            message="Check out our latest dashboard improvements"
            badge={{ children: 'New', color: 'primary' }}
            badgePosition="leading"
            showMessageIcon
          />
          <BadgeGroup
            message="Beta features are now available for testing"
            badge={{ children: 'Beta', color: 'warning' }}
            badgePosition="leading"
            showMessageIcon
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Status Updates
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <BadgeGroup
            message="Your account has been successfully verified"
            badge={{ children: 'Verified', color: 'success', hasIcon: true }}
            badgePosition="trailing"
          />
          <BadgeGroup
            message="Please review your profile information"
            badge={{ children: 'Action Required', color: 'warning', hasIcon: true }}
            badgePosition="trailing"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif" }}>
          Error Messages
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <BadgeGroup
            message="Connection failed, please try again"
            badge={{ children: 'Retry', color: 'error', hasIcon: true }}
            badgePosition="trailing"
          />
          <BadgeGroup
            message="Some features may not work properly"
            badge={{ children: 'Warning', color: 'warning' }}
            badgePosition="leading"
            showMessageIcon
          />
        </div>
      </div>
    </div>
  )
};
