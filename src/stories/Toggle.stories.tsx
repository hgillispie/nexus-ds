import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

/**
 * The Toggle component provides a binary on/off switch for user settings and preferences.
 * It supports multiple sizes, text labels, supporting text, and comprehensive accessibility features.
 * 
 * ## Features
 * - **Two sizes**: Small (36x20px) and Medium (44x24px)
 * - **Text support**: Optional labels and supporting text
 * - **States**: Default, hover, focus, and disabled
 * - **Accessibility**: Full keyboard navigation and ARIA support
 * - **Controlled/Uncontrolled**: Works both ways
 * 
 * ## Usage Guidelines
 * - Use **medium size** for most cases, **small** for compact layouts
 * - Include **text labels** for clarity about what the toggle controls
 * - Use **supporting text** to provide additional context
 * - Ensure **proper ARIA labels** for screen readers
 * - Test with **keyboard navigation** (Space/Enter to toggle)
 */
const meta: Meta<typeof Toggle> = {
  title: 'Design System/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A toggle switch component for binary on/off states with comprehensive accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is checked (controlled mode)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled mode)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size variant of the toggle',
    },
    showText: {
      control: 'boolean',
      description: 'Whether to show the text label',
    },
    label: {
      control: 'text',
      description: 'Text label for the toggle',
    },
    showSupportingText: {
      control: 'boolean',
      description: 'Whether to show supporting text',
    },
    supportingText: {
      control: 'text',
      description: 'Supporting text description',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when toggle state changes',
    },
  },
  args: {
    size: 'md',
    showText: false,
    label: 'Remember me',
    showSupportingText: false,
    supportingText: 'Save my login details for next time.',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic toggle switches without text labels
 */
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
  ),
};

/**
 * Small size toggle switches
 */
export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
  ),
};

/**
 * Toggles with text labels
 */
export const WithText: Story = {
  args: {
    showText: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
  ),
};

/**
 * Toggles with text and supporting text
 */
export const WithSupportingText: Story = {
  args: {
    showText: true,
    showSupportingText: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
  ),
};

/**
 * Small toggles with text and supporting text
 */
export const SmallWithSupportingText: Story = {
  args: {
    size: 'sm',
    showText: true,
    showSupportingText: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
  ),
};

/**
 * Disabled toggle states
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Switch Only - Disabled
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Toggle disabled defaultChecked={false} />
          <Toggle disabled defaultChecked={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          With Text - Disabled
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle disabled showText defaultChecked={false} />
          <Toggle disabled showText defaultChecked={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          With Supporting Text - Disabled
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Toggle disabled showText showSupportingText defaultChecked={false} />
          <Toggle disabled showText showSupportingText defaultChecked={true} />
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive toggle demonstrating controlled state
 */
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [checkedWithText, setCheckedWithText] = React.useState(true);
    const [checkedWithSupporting, setCheckedWithSupporting] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <Toggle 
            checked={checked}
            onChange={setChecked}
          />
          <p style={{ 
            marginTop: '8px', 
            fontSize: '14px', 
            color: '#6B7280',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Switch is: <strong>{checked ? 'ON' : 'OFF'}</strong>
          </p>
        </div>
        
        <div>
          <Toggle 
            checked={checkedWithText}
            onChange={setCheckedWithText}
            showText
            label="Enable notifications"
          />
          <p style={{ 
            marginTop: '8px', 
            fontSize: '14px', 
            color: '#6B7280',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Notifications are: <strong>{checkedWithText ? 'ENABLED' : 'DISABLED'}</strong>
          </p>
        </div>
        
        <div>
          <Toggle 
            checked={checkedWithSupporting}
            onChange={setCheckedWithSupporting}
            showText
            showSupportingText
            label="Auto-save documents"
            supportingText="Automatically save your work every 30 seconds."
          />
          <p style={{ 
            marginTop: '8px', 
            fontSize: '14px', 
            color: '#6B7280',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Auto-save is: <strong>{checkedWithSupporting ? 'ON' : 'OFF'}</strong>
          </p>
        </div>
      </div>
    );
  },
};

/**
 * All size variants demonstration
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Medium Size (44x24px)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle size="md" defaultChecked={false} />
          <Toggle size="md" showText defaultChecked={false} />
          <Toggle size="md" showText showSupportingText defaultChecked={false} />
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Small Size (36x20px)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle size="sm" defaultChecked={false} />
          <Toggle size="sm" showText defaultChecked={false} />
          <Toggle size="sm" showText showSupportingText defaultChecked={false} />
        </div>
      </div>
    </div>
  ),
};

/**
 * Focus states demonstration (use Tab key to navigate)
 */
export const FocusStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{
        padding: '16px',
        backgroundColor: '#F8F9FA',
        borderRadius: '8px',
        border: '1px solid #E9ECEF'
      }}>
        <p style={{ 
          margin: '0 0 16px 0', 
          fontSize: '14px', 
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Use Tab key to navigate between toggles. Press Space or Enter to toggle.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle defaultChecked={false} aria-label="First toggle" />
          <Toggle showText label="Second toggle" defaultChecked={true} />
          <Toggle 
            showText 
            showSupportingText 
            label="Third toggle" 
            supportingText="This toggle has supporting text."
            defaultChecked={false} 
          />
          <Toggle size="sm" showText label="Small toggle" defaultChecked={true} />
        </div>
      </div>
    </div>
  ),
};

/**
 * Usage examples in different contexts
 */
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Settings Panel
        </h3>
        <div style={{
          padding: '24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E9ECEF',
          minWidth: '320px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Toggle 
              showText 
              showSupportingText
              label="Email notifications"
              supportingText="Receive notifications about important updates."
              defaultChecked={true}
            />
            <Toggle 
              showText 
              showSupportingText
              label="Push notifications"
              supportingText="Get instant alerts on your mobile device."
              defaultChecked={false}
            />
            <Toggle 
              showText 
              showSupportingText
              label="Marketing emails"
              supportingText="Receive newsletters and promotional content."
              defaultChecked={false}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Compact Layout
        </h3>
        <div style={{
          padding: '16px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          border: '1px solid #E9ECEF',
          minWidth: '280px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle size="sm" showText label="Dark mode" defaultChecked={false} />
            <Toggle size="sm" showText label="Sound effects" defaultChecked={true} />
            <Toggle size="sm" showText label="Auto-play videos" defaultChecked={false} />
          </div>
        </div>
      </div>
    </div>
  ),
};
