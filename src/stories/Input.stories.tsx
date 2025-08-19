import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

/**
 * The Input component provides a comprehensive set of input field variants for data collection.
 * It supports multiple input types, error states, and various configurations including dropdowns,
 * leading text, payment inputs, and more.
 * 
 * ## Features
 * - **Input types**: Default, Payment, Leading dropdown, Trailing dropdown, Leading text
 * - **Error states**: Visual feedback for validation errors
 * - **Icons**: Built-in icons for different input types
 * - **Help text**: Contextual help and error messages
 * - **Accessibility**: Proper labeling and keyboard navigation
 * 
 * ## Usage Guidelines
 * - Use **Default** inputs for standard text fields like email
 * - Use **Payment** inputs for credit card and payment information
 * - Use **Leading dropdown** for inputs with country codes or categories
 * - Use **Trailing dropdown** for inputs with units or currency
 * - Use **Leading text** for URLs and prefixed inputs
 * - Always provide clear labels and helpful error messages
 */
const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile input component with comprehensive variant support for all form needs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'payment', 'leading-dropdown', 'trailing-dropdown', 'leading-text'],
      description: 'Type of input field',
    },
    error: {
      control: 'boolean',
      description: 'Whether this is an error state',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    helpText: {
      control: 'text',
      description: 'Help/hint text below the input',
    },
    showHelpIcon: {
      control: 'boolean',
      description: 'Whether to show the help icon',
    },
    leadingText: {
      control: 'text',
      description: 'Leading text for leading-text type',
    },
    dropdownValue: {
      control: 'text',
      description: 'Dropdown value for dropdown types',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  args: {
    type: 'default',
    error: false,
    label: 'Email',
    placeholder: 'olivia@nexusui.com',
    helpText: 'This is a hint text to help user.',
    showHelpIcon: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default input configuration with email styling.
 */
export const Default: Story = {};

/**
 * Default input in error state.
 */
export const DefaultError: Story = {
  args: {
    error: true,
    helpText: 'This is an error message.',
  },
};

/**
 * Payment input with card icon for credit card information.
 */
export const Payment: Story = {
  args: {
    type: 'payment',
    label: 'Card number',
    placeholder: 'Card number',
    helpText: 'This is a hint text to help user.',
  },
};

/**
 * Payment input in error state.
 */
export const PaymentError: Story = {
  args: {
    type: 'payment',
    label: 'Card number',
    placeholder: 'Card number',
    error: true,
    helpText: 'This is an error message.',
  },
};

/**
 * Input with leading dropdown for country codes or categories.
 */
export const LeadingDropdown: Story = {
  args: {
    type: 'leading-dropdown',
    label: 'Phone number',
    placeholder: '+1 (555) 000-0000',
    dropdownValue: 'US',
    helpText: 'This is a hint text to help user.',
  },
};

/**
 * Leading dropdown input in error state.
 */
export const LeadingDropdownError: Story = {
  args: {
    type: 'leading-dropdown',
    label: 'Phone number',
    placeholder: '+1 (555) 000-0000',
    dropdownValue: 'US',
    error: true,
    helpText: 'This is an error message.',
  },
};

/**
 * Input with trailing dropdown for currency or units.
 */
export const TrailingDropdown: Story = {
  args: {
    type: 'trailing-dropdown',
    label: 'Sale amount',
    placeholder: '1,000.00',
    dropdownValue: 'USD',
    helpText: 'This is a hint text to help user.',
  },
};

/**
 * Trailing dropdown input in error state.
 */
export const TrailingDropdownError: Story = {
  args: {
    type: 'trailing-dropdown',
    label: 'Sale amount',
    placeholder: '1,000.00',
    dropdownValue: 'USD',
    error: true,
    helpText: 'This is an error message.',
  },
};

/**
 * Input with leading text for URLs and prefixed inputs.
 */
export const LeadingText: Story = {
  args: {
    type: 'leading-text',
    label: 'Website',
    placeholder: 'Nexus Design',
    leadingText: 'http://',
    helpText: 'This is a hint text to help user.',
  },
};

/**
 * Leading text input in error state.
 */
export const LeadingTextError: Story = {
  args: {
    type: 'leading-text',
    label: 'Website',
    placeholder: 'Nexus Design',
    leadingText: 'http://',
    error: true,
    helpText: 'This is an error message.',
  },
};

/**
 * Disabled input states across different types.
 */
export const DisabledStates: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
      maxWidth: '1200px',
    };

    return (
      <div style={containerStyle}>
        <Input
          label="Email (Disabled)"
          placeholder="olivia@nexusui.com"
          disabled
          helpText="This input is disabled"
        />
        <Input
          type="payment"
          label="Card number (Disabled)"
          placeholder="Card number"
          disabled
          helpText="This input is disabled"
        />
        <Input
          type="leading-dropdown"
          label="Phone number (Disabled)"
          placeholder="+1 (555) 000-0000"
          dropdownValue="US"
          disabled
          helpText="This input is disabled"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows disabled states across different input types.',
      },
    },
  },
};

/**
 * All input variants in a comprehensive grid layout.
 */
export const AllVariants: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1400px',
    };

    return (
      <div style={containerStyle}>
        <Input
          label="Email"
          placeholder="olivia@nexusui.com"
          helpText="This is a hint text to help user."
        />
        <Input
          label="Email (Error)"
          placeholder="olivia@nexusui.com"
          error
          helpText="This is an error message."
        />
        <Input
          type="payment"
          label="Card number"
          placeholder="Card number"
          helpText="This is a hint text to help user."
        />
        <Input
          type="payment"
          label="Card number (Error)"
          placeholder="Card number"
          error
          helpText="This is an error message."
        />
        <Input
          type="leading-dropdown"
          label="Phone number"
          placeholder="+1 (555) 000-0000"
          dropdownValue="US"
          helpText="This is a hint text to help user."
        />
        <Input
          type="leading-dropdown"
          label="Phone number (Error)"
          placeholder="+1 (555) 000-0000"
          dropdownValue="US"
          error
          helpText="This is an error message."
        />
        <Input
          type="trailing-dropdown"
          label="Sale amount"
          placeholder="1,000.00"
          dropdownValue="USD"
          helpText="This is a hint text to help user."
        />
        <Input
          type="trailing-dropdown"
          label="Sale amount (Error)"
          placeholder="1,000.00"
          dropdownValue="USD"
          error
          helpText="This is an error message."
        />
        <Input
          type="leading-text"
          label="Website"
          placeholder="Nexus Design"
          leadingText="http://"
          helpText="This is a hint text to help user."
        />
        <Input
          type="leading-text"
          label="Website (Error)"
          placeholder="Nexus Design"
          leadingText="http://"
          error
          helpText="This is an error message."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive display of all input variants including normal and error states.',
      },
    },
  },
};

/**
 * Interactive example showing form behavior.
 */
export const InteractiveForm: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      email: '',
      phone: '',
      website: '',
      amount: '',
      card: '',
    });

    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      padding: '20px',
      maxWidth: '400px',
    };

    return (
      <div style={containerStyle}>
        <Input
          label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
          helpText="We'll never share your email with anyone else."
        />
        <Input
          type="leading-dropdown"
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          dropdownValue="US"
          value={formData.phone}
          onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
          helpText="Include your country code."
        />
        <Input
          type="leading-text"
          label="Website"
          placeholder="yoursite.com"
          leadingText="https://"
          value={formData.website}
          onChange={(value) => setFormData(prev => ({ ...prev, website: value }))}
          helpText="Your personal or business website."
        />
        <Input
          type="trailing-dropdown"
          label="Budget"
          placeholder="5,000.00"
          dropdownValue="USD"
          value={formData.amount}
          onChange={(value) => setFormData(prev => ({ ...prev, amount: value }))}
          helpText="Your monthly budget for this project."
        />
        <Input
          type="payment"
          label="Credit Card"
          placeholder="1234 5678 9012 3456"
          value={formData.card}
          onChange={(value) => setFormData(prev => ({ ...prev, card: value }))}
          helpText="Your card information is secure."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form showing all input types working together with real state management.',
      },
    },
  },
};
