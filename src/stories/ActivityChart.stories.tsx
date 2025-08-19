import type { Meta, StoryObj } from '@storybook/react';
import { ActivityChart } from './ActivityChart';

const meta = {
  title: 'Charts/ActivityChart',
  component: ActivityChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-ring activity chart that displays progress data across three concentric circles with optional labels and legends.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of data points for the three activity rings',
      control: 'object',
    },
    size: {
      description: 'Size variant of the activity chart',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    showLabel: {
      description: 'Whether to show the center label text',
      control: 'boolean',
    },
    showLegend: {
      description: 'Whether to show the legend',
      control: 'boolean',
    },
    legendPosition: {
      description: 'Position of the legend',
      control: 'select',
      options: ['bottom', 'right'],
    },
    label: {
      description: 'Center label text',
      control: 'text',
    },
    value: {
      description: 'Center value to display',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class name',
      control: 'text',
    },
  },
} satisfies Meta<typeof ActivityChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default sample data
const defaultData = [
  { label: 'Series 1', value: 0.75, color: '#0F172A' },
  { label: 'Series 2', value: 0.60, color: '#64748B' },
  { label: 'Series 3', value: 0.45, color: '#09101F' },
];

// Basic stories
export const Default: Story = {
  args: {
    data: defaultData,
    size: 'md',
    showLabel: true,
    showLegend: false,
    label: 'Active users',
    value: '1,000',
  },
};

export const WithLegendBottom: Story = {
  args: {
    ...Default.args,
    showLegend: true,
    legendPosition: 'bottom',
  },
};

export const WithLegendRight: Story = {
  args: {
    ...Default.args,
    showLegend: true,
    legendPosition: 'right',
  },
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    showLabel: false,
  },
};

// Size variants
export const SizeXS: Story = {
  args: {
    ...Default.args,
    size: 'xs',
  },
};

export const SizeSM: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const SizeMD: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const SizeLG: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

// Different data scenarios
export const HighActivity: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'Desktop', value: 0.85, color: '#0F172A' },
      { label: 'Mobile', value: 0.92, color: '#64748B' },
      { label: 'Tablet', value: 0.78, color: '#09101F' },
    ],
    label: 'Total Users',
    value: '5,429',
    showLegend: true,
  },
};

export const LowActivity: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'New Users', value: 0.25, color: '#0F172A' },
      { label: 'Returning', value: 0.15, color: '#64748B' },
      { label: 'Premium', value: 0.10, color: '#09101F' },
    ],
    label: 'Engagement',
    value: '234',
    showLegend: true,
    legendPosition: 'right',
  },
};

export const MixedProgress: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'Completed', value: 0.90, color: '#0F172A' },
      { label: 'In Progress', value: 0.40, color: '#64748B' },
      { label: 'Pending', value: 0.65, color: '#09101F' },
    ],
    label: 'Tasks',
    value: '127',
    showLegend: true,
  },
};

// Custom colors
export const CustomColors: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'Primary', value: 0.70, color: '#3B82F6' },
      { label: 'Secondary', value: 0.55, color: '#10B981' },
      { label: 'Tertiary', value: 0.80, color: '#F59E0B' },
    ],
    label: 'Revenue',
    value: '$12.5K',
    showLegend: true,
    legendPosition: 'right',
  },
};

// Edge cases
export const ZeroProgress: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'Series 1', value: 0, color: '#0F172A' },
      { label: 'Series 2', value: 0, color: '#64748B' },
      { label: 'Series 3', value: 0, color: '#09101F' },
    ],
    label: 'No Activity',
    value: '0',
  },
};

export const FullProgress: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'Complete', value: 1.0, color: '#0F172A' },
      { label: 'Done', value: 1.0, color: '#64748B' },
      { label: 'Finished', value: 1.0, color: '#09101F' },
    ],
    label: 'Completed',
    value: '100%',
    showLegend: true,
  },
};

// Long text handling
export const LongText: Story = {
  args: {
    ...Default.args,
    data: [
      { label: 'Very Long Series Name 1', value: 0.65, color: '#0F172A' },
      { label: 'Another Long Series Name', value: 0.45, color: '#64748B' },
      { label: 'Third Long Series Name', value: 0.85, color: '#09101F' },
    ],
    label: 'Very Long Label Text',
    value: '999,999',
    showLegend: true,
    legendPosition: 'right',
  },
};

// Figma Design Variants - recreating all variants from the Figma design
export const FigmaVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '32px',
      padding: '32px',
      maxWidth: '1400px'
    }}>
      {/* Row 1: md size with label=true, legend=false */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>MD, Label=True</h4>
        <ActivityChart
          data={defaultData}
          size="md"
          showLabel={true}
          showLegend={false}
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>LG, Label=True</h4>
        <ActivityChart
          data={defaultData}
          size="lg"
          showLabel={true}
          showLegend={false}
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>SM, Label=True</h4>
        <ActivityChart
          data={defaultData}
          size="sm"
          showLabel={true}
          showLegend={false}
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>XS, Label=True</h4>
        <ActivityChart
          data={defaultData}
          size="xs"
          showLabel={true}
          showLegend={false}
          label="Active users"
          value="1,000"
        />
      </div>

      {/* Row 2: sizes with label=false, legend=false */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>MD, Label=False</h4>
        <ActivityChart
          data={defaultData}
          size="md"
          showLabel={false}
          showLegend={false}
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>LG, Label=False</h4>
        <ActivityChart
          data={defaultData}
          size="lg"
          showLabel={false}
          showLegend={false}
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>SM, Label=False</h4>
        <ActivityChart
          data={defaultData}
          size="sm"
          showLabel={false}
          showLegend={false}
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>XS, Label=False</h4>
        <ActivityChart
          data={defaultData}
          size="xs"
          showLabel={false}
          showLegend={false}
          value="1,000"
        />
      </div>

      {/* Row 3: Bottom legend */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>MD, Legend=Bottom</h4>
        <ActivityChart
          data={defaultData}
          size="md"
          showLabel={true}
          showLegend={true}
          legendPosition="bottom"
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>LG, Legend=Bottom</h4>
        <ActivityChart
          data={defaultData}
          size="lg"
          showLabel={true}
          showLegend={true}
          legendPosition="bottom"
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>SM, Legend=Bottom</h4>
        <ActivityChart
          data={defaultData}
          size="sm"
          showLabel={true}
          showLegend={true}
          legendPosition="bottom"
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>XS, Legend=Bottom</h4>
        <ActivityChart
          data={defaultData}
          size="xs"
          showLabel={true}
          showLegend={true}
          legendPosition="bottom"
          label="Active users"
          value="1,000"
        />
      </div>

      {/* Row 4: Bottom legend, no label */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>MD, Legend=Bottom, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="md"
          showLabel={false}
          showLegend={true}
          legendPosition="bottom"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>LG, Legend=Bottom, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="lg"
          showLabel={false}
          showLegend={true}
          legendPosition="bottom"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>SM, Legend=Bottom, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="sm"
          showLabel={false}
          showLegend={true}
          legendPosition="bottom"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>XS, Legend=Bottom, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="xs"
          showLabel={false}
          showLegend={true}
          legendPosition="bottom"
          value="1,000"
        />
      </div>

      {/* Row 5: Right legend */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>MD, Legend=Right</h4>
        <ActivityChart
          data={defaultData}
          size="md"
          showLabel={true}
          showLegend={true}
          legendPosition="right"
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>LG, Legend=Right</h4>
        <ActivityChart
          data={defaultData}
          size="lg"
          showLabel={true}
          showLegend={true}
          legendPosition="right"
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>SM, Legend=Right</h4>
        <ActivityChart
          data={defaultData}
          size="sm"
          showLabel={true}
          showLegend={true}
          legendPosition="right"
          label="Active users"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>XS, Legend=Right</h4>
        <ActivityChart
          data={defaultData}
          size="xs"
          showLabel={true}
          showLegend={true}
          legendPosition="right"
          label="Active users"
          value="1,000"
        />
      </div>

      {/* Row 6: Right legend, no label */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>MD, Legend=Right, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="md"
          showLabel={false}
          showLegend={true}
          legendPosition="right"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>LG, Legend=Right, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="lg"
          showLabel={false}
          showLegend={true}
          legendPosition="right"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>SM, Legend=Right, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="sm"
          showLabel={false}
          showLegend={true}
          legendPosition="right"
          value="1,000"
        />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>XS, Legend=Right, No Label</h4>
        <ActivityChart
          data={defaultData}
          size="xs"
          showLabel={false}
          showLegend={true}
          legendPosition="right"
          value="1,000"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All variants from the Figma design showing different combinations of size, label, and legend configurations.'
      }
    }
  }
};

// Interactive playground
export const Playground: Story = {
  args: {
    data: defaultData,
    size: 'md',
    showLabel: true,
    showLegend: true,
    legendPosition: 'bottom',
    label: 'Active users',
    value: '1,000',
  },
};
