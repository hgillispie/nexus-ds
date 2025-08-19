import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';

const meta = {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible pie chart component with donut-style visualization, supporting multiple sizes, data series, and legend configurations. Perfect for displaying proportional data with elegant visual design.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of data points to display in the pie chart',
      control: 'object',
    },
    size: {
      description: 'Size of the pie chart',
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
    showLegend: {
      description: 'Whether to display the legend',
      control: 'boolean',
    },
    legendPosition: {
      description: 'Position of the legend relative to the chart',
      control: 'select',
      options: ['right', 'bottom'],
    },
    innerRadius: {
      description: 'Inner radius of the donut chart (overrides default)',
      control: 'number',
    },
    outerRadius: {
      description: 'Outer radius of the donut chart (overrides default)',
      control: 'number',
    },
    animationDuration: {
      description: 'Duration of animations in milliseconds',
      control: 'number',
    },
    strokeWidth: {
      description: 'Width of the stroke around pie slices',
      control: 'number',
    },
    strokeColor: {
      description: 'Color of the stroke around pie slices',
      control: 'color',
    },
  },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data sets
const sixSeriesData = [
  { label: 'Series 1', value: 30 },
  { label: 'Series 2', value: 25 },
  { label: 'Series 3', value: 20 },
  { label: 'Series 4', value: 15 },
  { label: 'Series 5', value: 7 },
  { label: 'Series 6', value: 3 },
];

const fiveSeriesData = [
  { label: 'Series 1', value: 35 },
  { label: 'Series 2', value: 28 },
  { label: 'Series 3', value: 22 },
  { label: 'Series 4', value: 10 },
  { label: 'Series 5', value: 5 },
];

const fourSeriesData = [
  { label: 'Series 1', value: 40 },
  { label: 'Series 2', value: 30 },
  { label: 'Series 3', value: 20 },
  { label: 'Series 4', value: 10 },
];

const threeSeriesData = [
  { label: 'Series 1', value: 50 },
  { label: 'Series 2', value: 30 },
  { label: 'Series 3', value: 20 },
];

const twoSeriesData = [
  { label: 'Series 1', value: 60 },
  { label: 'Series 2', value: 40 },
];

// Primary Stories - 6 Series with Legend
export const Default: Story = {
  args: {
    data: sixSeriesData,
    size: 'md',
    showLegend: true,
  },
};

export const Large6SeriesWithLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'lg',
    showLegend: true,
  },
};

export const Medium6SeriesWithLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'md',
    showLegend: true,
  },
};

export const Small6SeriesWithLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'sm',
    showLegend: true,
  },
};

export const ExtraSmall6SeriesWithLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'xs',
    showLegend: true,
  },
};

export const ExtraExtraSmall6SeriesWithLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'xxs',
    showLegend: true,
  },
};

// 6 Series without Legend
export const Large6SeriesNoLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'lg',
    showLegend: false,
  },
};

export const Medium6SeriesNoLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'md',
    showLegend: false,
  },
};

export const Small6SeriesNoLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'sm',
    showLegend: false,
  },
};

export const ExtraSmall6SeriesNoLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'xs',
    showLegend: false,
  },
};

export const ExtraExtraSmall6SeriesNoLegend: Story = {
  args: {
    data: sixSeriesData,
    size: 'xxs',
    showLegend: false,
  },
};

// 5 Series with Legend
export const Large5SeriesWithLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'lg',
    showLegend: true,
  },
};

export const Medium5SeriesWithLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'md',
    showLegend: true,
  },
};

export const Small5SeriesWithLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'sm',
    showLegend: true,
  },
};

export const ExtraSmall5SeriesWithLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'xs',
    showLegend: true,
  },
};

export const ExtraExtraSmall5SeriesWithLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'xxs',
    showLegend: true,
  },
};

// 5 Series without Legend
export const Large5SeriesNoLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'lg',
    showLegend: false,
  },
};

export const Medium5SeriesNoLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'md',
    showLegend: false,
  },
};

export const Small5SeriesNoLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'sm',
    showLegend: false,
  },
};

export const ExtraSmall5SeriesNoLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'xs',
    showLegend: false,
  },
};

export const ExtraExtraSmall5SeriesNoLegend: Story = {
  args: {
    data: fiveSeriesData,
    size: 'xxs',
    showLegend: false,
  },
};

// 4 Series with Legend
export const Large4SeriesWithLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'lg',
    showLegend: true,
  },
};

export const Medium4SeriesWithLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'md',
    showLegend: true,
  },
};

export const Small4SeriesWithLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'sm',
    showLegend: true,
  },
};

export const ExtraSmall4SeriesWithLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'xs',
    showLegend: true,
  },
};

export const ExtraExtraSmall4SeriesWithLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'xxs',
    showLegend: true,
  },
};

// 4 Series without Legend
export const Large4SeriesNoLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'lg',
    showLegend: false,
  },
};

export const Medium4SeriesNoLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'md',
    showLegend: false,
  },
};

export const Small4SeriesNoLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'sm',
    showLegend: false,
  },
};

export const ExtraSmall4SeriesNoLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'xs',
    showLegend: false,
  },
};

export const ExtraExtraSmall4SeriesNoLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'xxs',
    showLegend: false,
  },
};

// 3 Series with Legend
export const Large3SeriesWithLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'lg',
    showLegend: true,
  },
};

export const Medium3SeriesWithLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'md',
    showLegend: true,
  },
};

export const Small3SeriesWithLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'sm',
    showLegend: true,
  },
};

export const ExtraSmall3SeriesWithLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'xs',
    showLegend: true,
  },
};

export const ExtraExtraSmall3SeriesWithLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'xxs',
    showLegend: true,
  },
};

// 3 Series without Legend
export const Large3SeriesNoLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'lg',
    showLegend: false,
  },
};

export const Medium3SeriesNoLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'md',
    showLegend: false,
  },
};

export const Small3SeriesNoLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'sm',
    showLegend: false,
  },
};

export const ExtraSmall3SeriesNoLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'xs',
    showLegend: false,
  },
};

export const ExtraExtraSmall3SeriesNoLegend: Story = {
  args: {
    data: threeSeriesData,
    size: 'xxs',
    showLegend: false,
  },
};

// 2 Series with Legend
export const Large2SeriesWithLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'lg',
    showLegend: true,
  },
};

export const Medium2SeriesWithLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'md',
    showLegend: true,
  },
};

export const Small2SeriesWithLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'sm',
    showLegend: true,
  },
};

export const ExtraSmall2SeriesWithLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'xs',
    showLegend: true,
  },
};

export const ExtraExtraSmall2SeriesWithLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'xxs',
    showLegend: true,
  },
};

// 2 Series without Legend
export const Large2SeriesNoLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'lg',
    showLegend: false,
  },
};

export const Medium2SeriesNoLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'md',
    showLegend: false,
  },
};

export const Small2SeriesNoLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'sm',
    showLegend: false,
  },
};

export const ExtraSmall2SeriesNoLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'xs',
    showLegend: false,
  },
};

export const ExtraExtraSmall2SeriesNoLegend: Story = {
  args: {
    data: twoSeriesData,
    size: 'xxs',
    showLegend: false,
  },
};

// Special Layout Stories
export const BottomLegend: Story = {
  args: {
    data: fourSeriesData,
    size: 'md',
    showLegend: true,
    legendPosition: 'bottom',
  },
};

export const WithCenterContent: Story = {
  args: {
    data: threeSeriesData,
    size: 'lg',
    showLegend: true,
    centerContent: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>100</div>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>Total</div>
      </div>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    data: [
      { label: 'Primary', value: 40, color: '#3B82F6' },
      { label: 'Success', value: 30, color: '#10B981' },
      { label: 'Warning', value: 20, color: '#F59E0B' },
      { label: 'Danger', value: 10, color: '#EF4444' },
    ],
    size: 'md',
    showLegend: true,
  },
};

export const CustomStyling: Story = {
  args: {
    data: fourSeriesData,
    size: 'md',
    showLegend: true,
    strokeWidth: 2,
    strokeColor: '#ffffff',
    animationDuration: 600,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    size: 'md',
    showLegend: true,
  },
};

// Figma Variants - Organized Grid Layout
export const FigmaVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(10, 1fr)', 
      gap: '32px', 
      padding: '20px',
      alignItems: 'start',
      justifyItems: 'start'
    }}>
      {/* Row 1: 6 Series with Legend */}
      <PieChart data={sixSeriesData} size="md" showLegend={true} />
      <PieChart data={sixSeriesData} size="lg" showLegend={true} />
      <PieChart data={sixSeriesData} size="xs" showLegend={true} />
      <PieChart data={sixSeriesData} size="xxs" showLegend={true} />
      <PieChart data={sixSeriesData} size="sm" showLegend={true} />
      
      {/* Row 2: 6 Series without Legend */}
      <PieChart data={sixSeriesData} size="md" showLegend={false} />
      <PieChart data={sixSeriesData} size="lg" showLegend={false} />
      <PieChart data={sixSeriesData} size="xs" showLegend={false} />
      <PieChart data={sixSeriesData} size="xxs" showLegend={false} />
      <PieChart data={sixSeriesData} size="sm" showLegend={false} />
      
      {/* Row 3: 5 Series with Legend */}
      <PieChart data={fiveSeriesData} size="md" showLegend={true} />
      <PieChart data={fiveSeriesData} size="lg" showLegend={true} />
      <PieChart data={fiveSeriesData} size="xs" showLegend={true} />
      <PieChart data={fiveSeriesData} size="xxs" showLegend={true} />
      <PieChart data={fiveSeriesData} size="sm" showLegend={true} />
      
      {/* Row 4: 5 Series without Legend */}
      <PieChart data={fiveSeriesData} size="md" showLegend={false} />
      <PieChart data={fiveSeriesData} size="lg" showLegend={false} />
      <PieChart data={fiveSeriesData} size="xs" showLegend={false} />
      <PieChart data={fiveSeriesData} size="xxs" showLegend={false} />
      <PieChart data={fiveSeriesData} size="sm" showLegend={false} />
      
      {/* Row 5: 4 Series with Legend */}
      <PieChart data={fourSeriesData} size="md" showLegend={true} />
      <PieChart data={fourSeriesData} size="lg" showLegend={true} />
      <PieChart data={fourSeriesData} size="xs" showLegend={true} />
      <PieChart data={fourSeriesData} size="xxs" showLegend={true} />
      <PieChart data={fourSeriesData} size="sm" showLegend={true} />
      
      {/* Row 6: 4 Series without Legend */}
      <PieChart data={fourSeriesData} size="md" showLegend={false} />
      <PieChart data={fourSeriesData} size="lg" showLegend={false} />
      <PieChart data={fourSeriesData} size="xs" showLegend={false} />
      <PieChart data={fourSeriesData} size="xxs" showLegend={false} />
      <PieChart data={fourSeriesData} size="sm" showLegend={false} />
      
      {/* Row 7: 3 Series with Legend */}
      <PieChart data={threeSeriesData} size="md" showLegend={true} />
      <PieChart data={threeSeriesData} size="lg" showLegend={true} />
      <PieChart data={threeSeriesData} size="xs" showLegend={true} />
      <PieChart data={threeSeriesData} size="xxs" showLegend={true} />
      <PieChart data={threeSeriesData} size="sm" showLegend={true} />
      
      {/* Row 8: 3 Series without Legend */}
      <PieChart data={threeSeriesData} size="md" showLegend={false} />
      <PieChart data={threeSeriesData} size="lg" showLegend={false} />
      <PieChart data={threeSeriesData} size="xs" showLegend={false} />
      <PieChart data={threeSeriesData} size="xxs" showLegend={false} />
      <PieChart data={threeSeriesData} size="sm" showLegend={false} />
      
      {/* Row 9: 2 Series with Legend */}
      <PieChart data={twoSeriesData} size="md" showLegend={true} />
      <PieChart data={twoSeriesData} size="lg" showLegend={true} />
      <PieChart data={twoSeriesData} size="xs" showLegend={true} />
      <PieChart data={twoSeriesData} size="xxs" showLegend={true} />
      <PieChart data={twoSeriesData} size="sm" showLegend={true} />
      
      {/* Row 10: 2 Series without Legend */}
      <PieChart data={twoSeriesData} size="md" showLegend={false} />
      <PieChart data={twoSeriesData} size="lg" showLegend={false} />
      <PieChart data={twoSeriesData} size="xs" showLegend={false} />
      <PieChart data={twoSeriesData} size="xxs" showLegend={false} />
      <PieChart data={twoSeriesData} size="sm" showLegend={false} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Interactive Examples
export const Interactive: Story = {
  args: {
    data: sixSeriesData,
    size: 'lg',
    showLegend: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive pie chart that responds to user interactions and provides visual feedback.',
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <h3>Responsive Pie Chart</h3>
      <PieChart 
        data={fourSeriesData} 
        size="md" 
        showLegend={true} 
        legendPosition="bottom"
      />
    </div>
  ),
  parameters: {
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '320px', height: '568px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      },
    },
  },
};
