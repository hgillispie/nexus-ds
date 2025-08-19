import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select, UserIcon } from './Select';

/**
 * The Select component provides a comprehensive dropdown selection interface with support for
 * labels, icons, search functionality, and various states. It's designed to handle both simple
 * selections and complex data with supporting text.
 * 
 * ## Features
 * - **Multiple types**: Default, Icon leading, and Search variants
 * - **Label support**: Optional labels with proper accessibility
 * - **Icon integration**: Leading icons for enhanced visual context
 * - **Search functionality**: Real-time filtering of options
 * - **Supporting text**: Additional context for options
 * - **States**: Default, focused, error, and disabled states
 * - **Accessibility**: Full keyboard navigation and ARIA support
 * 
 * ## Usage Guidelines
 * - Use **Default** type for simple selections
 * - Use **Icon leading** type when visual context helps identify options
 * - Use **Search** type for large option lists or when filtering is needed
 * - Provide **labels** for better accessibility and user experience
 * - Include **supporting text** when options need additional context
 * - Use **error state** with helpful error messages for validation feedback
 */
const meta: Meta<typeof Select> = {
  title: 'Design System/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile select component with comprehensive variant support for all selection needs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'icon-leading', 'search'],
      description: 'Type of select input',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the select has an error state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      control: 'text',
      description: 'Label text for the select',
    },
    helpText: {
      control: 'text',
      description: 'Help text below the select',
    },
  },
  args: {
    type: 'default',
    showLabel: true,
    disabled: false,
    error: false,
    placeholder: 'Select an option',
    label: 'Team member',
    helpText: 'Choose a team member from the list.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const teamMembers = [
  { value: 'olivia', label: 'Olivia Rhye', supportingText: '@olivia' },
  { value: 'phoenix', label: 'Phoenix Baker', supportingText: '@phoenix' },
  { value: 'lana', label: 'Lana Steiner', supportingText: '@lana' },
  { value: 'demi', label: 'Demi Wilkinson', supportingText: '@demi' },
  { value: 'candice', label: 'Candice Wu', supportingText: '@candice' },
  { value: 'natali', label: 'Natali Craig', supportingText: '@natali' },
  { value: 'drew', label: 'Drew Cano', supportingText: '@drew' },
];

const teamMembersWithIcons = teamMembers.map(member => ({
  ...member,
  icon: <UserIcon />
}));

const simpleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

/**
 * Basic select with simple options
 */
export const Default: Story = {
  args: {
    options: simpleOptions,
  },
};

/**
 * Select with icons and supporting text
 */
export const IconLeading: Story = {
  args: {
    type: 'icon-leading',
    options: teamMembersWithIcons,
    placeholder: 'Select team member',
  },
};

/**
 * Search-enabled select for filtering options
 */
export const Search: Story = {
  args: {
    type: 'search',
    options: teamMembers,
    label: 'Search',
    placeholder: 'Search team members',
    helpText: 'Type to filter team members.',
  },
};

/**
 * Select without label
 */
export const WithoutLabel: Story = {
  args: {
    options: teamMembers,
    showLabel: false,
    placeholder: 'Select team member',
  },
};

/**
 * Select in error state
 */
export const ErrorState: Story = {
  args: {
    options: teamMembers,
    error: true,
    helpText: 'Please select a team member.',
    value: '',
  },
};

/**
 * Disabled select
 */
export const Disabled: Story = {
  args: {
    options: teamMembers,
    disabled: true,
    value: 'olivia',
    helpText: 'This selection is currently disabled.',
  },
};

/**
 * Select with pre-selected value
 */
export const WithValue: Story = {
  args: {
    type: 'icon-leading',
    options: teamMembersWithIcons,
    value: 'olivia',
  },
};

/**
 * Interactive select demonstrating real functionality
 */
export const Interactive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
        <Select
          options={teamMembersWithIcons}
          value={selectedValue}
          onChange={setSelectedValue}
          type="icon-leading"
          label="Team member"
          placeholder="Select team member"
          helpText="Choose a team member to assign this task."
        />
        
        {selectedValue && (
          <p style={{ 
            marginTop: '16px', 
            fontSize: '14px', 
            color: '#64748B',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Selected: {teamMembers.find(m => m.value === selectedValue)?.label}
          </p>
        )}
      </div>
    );
  },
};

/**
 * Search select with filtering functionality
 */
export const InteractiveSearch: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const [searchText, setSearchText] = useState('');
    
    const filteredOptions = teamMembers.filter(member => 
      member.label.toLowerCase().includes(searchText.toLowerCase()) ||
      member.supportingText.toLowerCase().includes(searchText.toLowerCase())
    );
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
        <Select
          options={filteredOptions}
          value={selectedValue}
          onChange={setSelectedValue}
          onSearch={setSearchText}
          type="search"
          label="Search team members"
          placeholder="Type to search..."
          helpText="Search by name or username."
        />
        
        {selectedValue && (
          <p style={{ 
            marginTop: '16px', 
            fontSize: '14px', 
            color: '#64748B',
            fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
          }}>
            Selected: {teamMembers.find(m => m.value === selectedValue)?.label}
          </p>
        )}
      </div>
    );
  },
};

/**
 * All select states in comparison
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '24px', 
      padding: '20px',
      maxWidth: '1200px'
    }}>
      <Select
        options={teamMembersWithIcons}
        type="icon-leading"
        label="Default State"
        placeholder="Select team member"
        helpText="This is the default state."
      />
      
      <Select
        options={teamMembersWithIcons}
        type="icon-leading"
        label="With Value"
        value="olivia"
        helpText="This select has a pre-selected value."
      />
      
      <Select
        options={teamMembersWithIcons}
        type="icon-leading"
        label="Error State"
        error={true}
        helpText="This is an error message."
      />
      
      <Select
        options={teamMembersWithIcons}
        type="icon-leading"
        label="Disabled State"
        disabled={true}
        value="olivia"
        helpText="This select is disabled."
      />
    </div>
  ),
};

/**
 * All select types in comparison
 */
export const AllTypes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '24px', 
      padding: '20px',
      maxWidth: '1200px'
    }}>
      <Select
        options={teamMembers}
        type="default"
        label="Default Type"
        placeholder="Select team member"
        helpText="Basic select without icons."
      />
      
      <Select
        options={teamMembersWithIcons}
        type="icon-leading"
        label="Icon Leading Type"
        placeholder="Select team member"
        helpText="Select with leading icons."
      />
      
      <Select
        options={teamMembers}
        type="search"
        label="Search Type"
        placeholder="Search team members"
        helpText="Searchable select with filtering."
      />
    </div>
  ),
};

/**
 * Form examples showing selects in context
 */
export const FormExamples: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      assignee: '',
      priority: '',
      status: '',
      reviewer: '',
    });

    const priorities = [
      { value: 'low', label: 'Low Priority' },
      { value: 'medium', label: 'Medium Priority' },
      { value: 'high', label: 'High Priority' },
      { value: 'urgent', label: 'Urgent' },
    ];

    const statuses = [
      { value: 'todo', label: 'To Do' },
      { value: 'in-progress', label: 'In Progress' },
      { value: 'review', label: 'In Review' },
      { value: 'done', label: 'Done' },
    ];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '20px', 
        maxWidth: '400px',
        padding: '20px'
      }}>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Task Assignment Form
        </h3>
        
        <Select
          options={teamMembersWithIcons}
          value={formData.assignee}
          onChange={(value) => setFormData(prev => ({ ...prev, assignee: value as string }))}
          type="icon-leading"
          label="Assignee"
          placeholder="Select assignee"
          helpText="Choose who will work on this task."
        />
        
        <Select
          options={priorities}
          value={formData.priority}
          onChange={(value) => setFormData(prev => ({ ...prev, priority: value as string }))}
          label="Priority"
          placeholder="Select priority"
          helpText="Set the task priority level."
        />
        
        <Select
          options={statuses}
          value={formData.status}
          onChange={(value) => setFormData(prev => ({ ...prev, status: value as string }))}
          label="Status"
          placeholder="Select status"
          helpText="Current status of the task."
        />
        
        <Select
          options={teamMembers}
          value={formData.reviewer}
          onChange={(value) => setFormData(prev => ({ ...prev, reviewer: value as string }))}
          type="search"
          label="Reviewer"
          placeholder="Search for reviewer"
          helpText="Optional: assign a reviewer."
        />
      </div>
    );
  },
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
          Team Management
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Select
            options={teamMembersWithIcons}
            type="icon-leading"
            label="Project Lead"
            placeholder="Select project lead"
            helpText="Choose the project lead."
            showLabel={true}
          />
          <Select
            options={teamMembers}
            type="search"
            label="Team Members"
            placeholder="Search team members"
            helpText="Add team members to project."
            showLabel={true}
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '800',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
          Settings Configuration
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Select
            options={[
              { value: 'light', label: 'Light Theme' },
              { value: 'dark', label: 'Dark Theme' },
              { value: 'auto', label: 'Auto (System)' },
            ]}
            label="Theme"
            placeholder="Select theme"
            value="light"
            showLabel={true}
          />
          <Select
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
            ]}
            label="Language"
            placeholder="Select language"
            value="en"
            showLabel={true}
          />
        </div>
      </div>
    </div>
  ),
};
