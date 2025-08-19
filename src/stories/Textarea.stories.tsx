import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Textarea } from './Input';

/**
 * The Textarea component provides a multi-line text input for longer content like descriptions,
 * comments, and messages. It includes error states and helpful text guidance.
 * 
 * ## Features
 * - **Multi-line input**: Configurable rows for different content lengths
 * - **Error states**: Visual feedback for validation errors
 * - **Help text**: Contextual help and error messages
 * - **Resize**: Users can resize the textarea vertically
 * - **Accessibility**: Proper labeling and keyboard navigation
 * 
 * ## Usage Guidelines
 * - Use for longer text content like descriptions, comments, or messages
 * - Provide clear labels and helpful placeholder text
 * - Set appropriate row count based on expected content length
 * - Always include helpful guidance or error messages
 */
const meta: Meta<typeof Textarea> = {
  title: 'Design System/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line textarea component for longer text input with error state support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether this is an error state',
    },
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Textarea value',
    },
    helpText: {
      control: 'text',
      description: 'Help/hint text below the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
      min: 2,
      max: 10,
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
  },
  args: {
    error: false,
    label: 'Description',
    placeholder: 'Enter a description...',
    helpText: 'This is a hint text to help user.',
    rows: 4,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default textarea configuration.
 */
export const Default: Story = {};

/**
 * Textarea in error state with error message.
 */
export const Error: Story = {
  args: {
    error: true,
    helpText: 'This is an error message.',
  },
};

/**
 * Disabled textarea state.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled and cannot be edited.',
    helpText: 'This textarea is disabled.',
  },
};

/**
 * Small textarea with fewer rows.
 */
export const Small: Story = {
  args: {
    rows: 2,
    label: 'Short Description',
    placeholder: 'Enter a brief description...',
    helpText: 'Keep it short and sweet.',
  },
};

/**
 * Large textarea with more rows.
 */
export const Large: Story = {
  args: {
    rows: 8,
    label: 'Detailed Description',
    placeholder: 'Enter a detailed description...',
    helpText: 'Provide as much detail as necessary.',
  },
};

/**
 * Textarea with pre-filled content.
 */
export const WithContent: Story = {
  args: {
    value: 'This is a sample description that demonstrates how the textarea looks with content. Users can edit this text and the textarea will automatically resize as needed.',
    helpText: 'Edit the content above.',
  },
};

/**
 * All textarea states in comparison.
 */
export const AllStates: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1000px',
    };

    return (
      <div style={containerStyle}>
        <Textarea
          label="Default State"
          placeholder="Enter a description..."
          helpText="This is a hint text to help user."
        />
        <Textarea
          label="Error State"
          placeholder="Enter a description..."
          error
          helpText="This is an error message."
        />
        <Textarea
          label="Disabled State"
          placeholder="Enter a description..."
          disabled
          value="This content cannot be edited."
          helpText="This textarea is disabled."
        />
        <Textarea
          label="With Content"
          value="This textarea has some pre-filled content that demonstrates how it looks with text."
          helpText="You can edit this content."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all textarea states including default, error, disabled, and with content.',
      },
    },
  },
};

/**
 * Different sizes of textareas.
 */
export const Sizes: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1000px',
    };

    return (
      <div style={containerStyle}>
        <Textarea
          label="Small (2 rows)"
          placeholder="Brief description..."
          rows={2}
          helpText="For short content."
        />
        <Textarea
          label="Medium (4 rows)"
          placeholder="Medium description..."
          rows={4}
          helpText="Standard size for most content."
        />
        <Textarea
          label="Large (6 rows)"
          placeholder="Detailed description..."
          rows={6}
          helpText="For longer content."
        />
        <Textarea
          label="Extra Large (8 rows)"
          placeholder="Very detailed description..."
          rows={8}
          helpText="For extensive content."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different textarea sizes to accommodate various content lengths.',
      },
    },
  },
};

/**
 * Interactive textarea with character counting.
 */
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 500;
    const remaining = maxLength - value.length;

    const containerStyle = {
      maxWidth: '400px',
      padding: '20px',
    };

    const counterStyle = {
      textAlign: 'right' as const,
      fontSize: '12px',
      color: remaining < 50 ? '#0EA5E9' : '#717680',
      marginTop: '4px',
    };

    return (
      <div style={containerStyle}>
        <Textarea
          label="Product Description"
          placeholder="Describe your product in detail..."
          value={value}
          onChange={setValue}
          rows={6}
          helpText={remaining < 0 ? 'Description is too long!' : 'Describe the key features and benefits.'}
          error={remaining < 0}
        />
        <div style={counterStyle}>
          {value.length} / {maxLength} characters
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive textarea with character counting and dynamic error states.',
      },
    },
  },
};

/**
 * Form example with multiple textareas.
 */
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      summary: '',
      description: '',
      requirements: '',
      notes: '',
    });

    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      padding: '20px',
      maxWidth: '500px',
    };

    return (
      <div style={containerStyle}>
        <Textarea
          label="Project Summary"
          placeholder="Brief overview of the project..."
          rows={2}
          value={formData.summary}
          onChange={(value) => setFormData(prev => ({ ...prev, summary: value }))}
          helpText="Keep this concise - 1-2 sentences."
        />
        <Textarea
          label="Detailed Description"
          placeholder="Provide a detailed description..."
          rows={4}
          value={formData.description}
          onChange={(value) => setFormData(prev => ({ ...prev, description: value }))}
          helpText="Include all relevant details and context."
        />
        <Textarea
          label="Requirements"
          placeholder="List your specific requirements..."
          rows={3}
          value={formData.requirements}
          onChange={(value) => setFormData(prev => ({ ...prev, requirements: value }))}
          helpText="Be specific about what you need."
        />
        <Textarea
          label="Additional Notes"
          placeholder="Any additional information..."
          rows={2}
          value={formData.notes}
          onChange={(value) => setFormData(prev => ({ ...prev, notes: value }))}
          helpText="Optional: Add any other relevant information."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Form example showing multiple textareas working together with state management.',
      },
    },
  },
};
