import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

/**
 * The Checkbox component provides a binary selection control for forms and user interfaces.
 * It supports both checkbox and radio button modes with comprehensive accessibility features.
 * 
 * ## Features
 * - **Two types**: Checkbox and Radio button modes
 * - **Two sizes**: Small (16px) and Medium (20px)
 * - **Multiple states**: Default, hover, focus, and disabled
 * - **Indeterminate state**: For checkboxes with partial selection
 * - **Text support**: Optional labels and supporting text
 * - **Accessibility**: Full keyboard navigation and ARIA support
 * - **Controlled/Uncontrolled**: Works both ways
 * 
 * ## Usage Guidelines
 * - Use **checkbox** for multiple selections, **radio** for single selection
 * - Use **medium size** for most cases, **small** for compact layouts
 * - Include **text labels** for clarity about what the checkbox controls
 * - Use **supporting text** to provide additional context
 * - Use **indeterminate state** for partial selections in tree structures
 * - Ensure **proper ARIA labels** for screen readers
 * - Test with **keyboard navigation** (Space to toggle, Tab to navigate)
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A checkbox and radio button component for binary and single selection with comprehensive accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['checkbox', 'radio'],
      description: 'Type of input - checkbox or radio',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox/radio is checked (controlled mode)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled mode)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state (checkbox only)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size variant of the checkbox/radio',
    },
    showText: {
      control: 'boolean',
      description: 'Whether to show the text label',
    },
    label: {
      control: 'text',
      description: 'Text label for the checkbox/radio',
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
      description: 'Whether the checkbox/radio is disabled',
    },
    name: {
      control: 'text',
      description: 'Name attribute for radio button groups',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when checkbox/radio state changes',
    },
  },
  args: {
    type: 'checkbox',
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
 * Basic checkbox and radio controls without text labels
 */
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Checkbox {...args} type="checkbox" defaultChecked={false} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Checkbox {...args} type="radio" name="radio-demo" defaultChecked={false} />
        <Checkbox {...args} type="radio" name="radio-demo" defaultChecked={true} />
      </div>
    </div>
  ),
};

/**
 * Small size checkboxes and radio buttons
 */
export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Checkbox {...args} type="checkbox" defaultChecked={false} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Checkbox {...args} type="radio" name="radio-small-demo" defaultChecked={false} />
        <Checkbox {...args} type="radio" name="radio-small-demo" defaultChecked={true} />
      </div>
    </div>
  ),
};

/**
 * Checkboxes and radios with text labels
 */
export const WithText: Story = {
  args: {
    showText: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Checkbox {...args} type="checkbox" defaultChecked={false} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} label="Select all items" />
      <Checkbox {...args} type="radio" name="radio-text-demo" defaultChecked={false} label="Option A" />
      <Checkbox {...args} type="radio" name="radio-text-demo" defaultChecked={true} label="Option B" />
    </div>
  ),
};

/**
 * Checkboxes and radios with text and supporting text
 */
export const WithSupportingText: Story = {
  args: {
    showText: true,
    showSupportingText: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Checkbox {...args} type="checkbox" defaultChecked={false} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} />
      <Checkbox 
        {...args} 
        type="checkbox" 
        defaultChecked={true} 
        indeterminate={true}
        label="Select all notifications"
        supportingText="This will enable all notification types for your account."
      />
      <Checkbox 
        {...args} 
        type="radio" 
        name="radio-supporting-demo" 
        defaultChecked={false}
        label="Email notifications"
        supportingText="Receive updates via email when important events occur."
      />
      <Checkbox 
        {...args} 
        type="radio" 
        name="radio-supporting-demo" 
        defaultChecked={true}
        label="Push notifications"
        supportingText="Get instant alerts on your mobile device."
      />
    </div>
  ),
};

/**
 * Small checkboxes and radios with text and supporting text
 */
export const SmallWithSupportingText: Story = {
  args: {
    size: 'sm',
    showText: true,
    showSupportingText: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <Checkbox {...args} type="checkbox" defaultChecked={false} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} />
      <Checkbox 
        {...args} 
        type="checkbox" 
        defaultChecked={true} 
        indeterminate={true}
        label="Marketing preferences"
        supportingText="Control how we communicate with you about our products."
      />
    </div>
  ),
};

/**
 * Disabled checkbox and radio states
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
          Checkbox Only - Disabled
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Checkbox disabled type="checkbox" defaultChecked={false} />
          <Checkbox disabled type="checkbox" defaultChecked={true} />
          <Checkbox disabled type="checkbox" defaultChecked={true} indeterminate={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Radio Only - Disabled
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Checkbox disabled type="radio" defaultChecked={false} />
          <Checkbox disabled type="radio" defaultChecked={true} />
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
          <Checkbox disabled showText type="checkbox" defaultChecked={false} />
          <Checkbox disabled showText type="checkbox" defaultChecked={true} />
          <Checkbox disabled showText type="radio" defaultChecked={true} label="Disabled option" />
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
          <Checkbox disabled showText showSupportingText type="checkbox" defaultChecked={false} />
          <Checkbox disabled showText showSupportingText type="checkbox" defaultChecked={true} />
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive checkbox demonstrating controlled state
 */
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [checkedWithText, setCheckedWithText] = React.useState(true);
    const [checkedIndeterminate, setCheckedIndeterminate] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState('option2');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <Checkbox 
            type="checkbox"
            checked={checked}
            onChange={(newChecked) => setChecked(newChecked)}
          />
          <p style={{ 
            marginTop: '8px', 
            fontSize: '14px', 
            color: '#6B7280',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Checkbox is: <strong>{checked ? 'CHECKED' : 'UNCHECKED'}</strong>
          </p>
        </div>
        
        <div>
          <Checkbox 
            type="checkbox"
            checked={checkedWithText}
            onChange={(newChecked) => setCheckedWithText(newChecked)}
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
          <Checkbox 
            type="checkbox"
            checked={checkedIndeterminate}
            indeterminate={true}
            onChange={(newChecked) => setCheckedIndeterminate(newChecked)}
            showText
            showSupportingText
            label="Select all items"
            supportingText="Currently showing partial selection."
          />
          <p style={{ 
            marginTop: '8px', 
            fontSize: '14px', 
            color: '#6B7280',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Selection state: <strong>INDETERMINATE</strong>
          </p>
        </div>
        
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox 
              type="radio"
              name="interactive-radio"
              value="option1"
              checked={radioValue === 'option1'}
              onChange={() => setRadioValue('option1')}
              showText
              label="Option 1"
            />
            <Checkbox 
              type="radio"
              name="interactive-radio"
              value="option2"
              checked={radioValue === 'option2'}
              onChange={() => setRadioValue('option2')}
              showText
              label="Option 2"
            />
            <Checkbox 
              type="radio"
              name="interactive-radio"
              value="option3"
              checked={radioValue === 'option3'}
              onChange={() => setRadioValue('option3')}
              showText
              label="Option 3"
            />
          </div>
          <p style={{ 
            marginTop: '8px', 
            fontSize: '14px', 
            color: '#6B7280',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Selected option: <strong>{radioValue}</strong>
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
          Small Size (16px)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox size="sm" type="checkbox" defaultChecked={false} />
          <Checkbox size="sm" type="checkbox" showText defaultChecked={false} />
          <Checkbox size="sm" type="checkbox" showText showSupportingText defaultChecked={false} />
          <Checkbox size="sm" type="radio" showText defaultChecked={false} label="Small radio option" />
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: '600',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Medium Size (20px)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox size="md" type="checkbox" defaultChecked={false} />
          <Checkbox size="md" type="checkbox" showText defaultChecked={false} />
          <Checkbox size="md" type="checkbox" showText showSupportingText defaultChecked={false} />
          <Checkbox size="md" type="radio" showText defaultChecked={false} label="Medium radio option" />
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
          Use Tab key to navigate between checkboxes. Press Space to toggle.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox type="checkbox" defaultChecked={false} aria-label="First checkbox" />
          <Checkbox type="checkbox" showText label="Second checkbox" defaultChecked={true} />
          <Checkbox 
            type="checkbox"
            showText 
            showSupportingText 
            label="Third checkbox" 
            supportingText="This checkbox has supporting text."
            defaultChecked={false} 
          />
          <Checkbox type="radio" name="focus-radio" showText label="Radio option A" defaultChecked={false} />
          <Checkbox type="radio" name="focus-radio" showText label="Radio option B" defaultChecked={true} />
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
            <Checkbox 
              type="checkbox"
              showText 
              showSupportingText
              label="Email notifications"
              supportingText="Receive notifications about important updates."
              defaultChecked={true}
            />
            <Checkbox 
              type="checkbox"
              showText 
              showSupportingText
              label="Push notifications"
              supportingText="Get instant alerts on your mobile device."
              defaultChecked={false}
            />
            <Checkbox 
              type="checkbox"
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
          Radio Button Group
        </h3>
        <div style={{
          padding: '24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E9ECEF',
          minWidth: '320px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Checkbox 
              type="radio"
              name="plan-selection"
              value="basic"
              showText 
              showSupportingText
              label="Basic Plan"
              supportingText="Perfect for individuals and small teams."
              defaultChecked={false}
            />
            <Checkbox 
              type="radio"
              name="plan-selection"
              value="pro"
              showText 
              showSupportingText
              label="Pro Plan"
              supportingText="Advanced features for growing businesses."
              defaultChecked={true}
            />
            <Checkbox 
              type="radio"
              name="plan-selection"
              value="enterprise"
              showText 
              showSupportingText
              label="Enterprise Plan"
              supportingText="Full-featured solution for large organizations."
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox size="sm" type="checkbox" showText label="Dark mode" defaultChecked={false} />
            <Checkbox size="sm" type="checkbox" showText label="Auto-save" defaultChecked={true} />
            <Checkbox size="sm" type="checkbox" showText label="Sync preferences" defaultChecked={false} />
          </div>
        </div>
      </div>
    </div>
  ),
};
