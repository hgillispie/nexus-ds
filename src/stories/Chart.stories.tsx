import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';
import type { ChartProps, ChartSeries, DataPoint } from './Chart';

// Sample data generators
const generateLineData = (points: number = 10, min: number = 0, max: number = 100): DataPoint[] => {
  return Array.from({ length: points }, (_, i) => ({
    x: i,
    y: Math.floor(Math.random() * (max - min) + min),
    label: `Point ${i + 1}`
  }));
};

const generateBarData = (categories: string[], min: number = 0, max: number = 100): DataPoint[] => {
  return categories.map(category => ({
    x: category,
    y: Math.floor(Math.random() * (max - min) + min),
    label: category
  }));
};

const generateTimeSeriesData = (days: number = 30): DataPoint[] => {
  const now = new Date();
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(now.getTime() - (days - i - 1) * 24 * 60 * 60 * 1000);
    return {
      x: date.toISOString().split('T')[0],
      y: Math.floor(Math.random() * 100 + 50),
      label: date.toLocaleDateString()
    };
  });
};

// Sample data sets
const sampleLineSeries: ChartSeries[] = [
  {
    id: 'series-1',
    title: 'Revenue',
    data: generateLineData(12, 50, 100),
    color: '#1890ff'
  },
  {
    id: 'series-2',
    title: 'Expenses',
    data: generateLineData(12, 20, 80),
    color: '#f5222d'
  },
  {
    id: 'series-3',
    title: 'Profit',
    data: generateLineData(12, 10, 60),
    color: '#52c41a'
  }
];

const sampleBarSeries: ChartSeries[] = [
  {
    id: 'q1-sales',
    title: 'Q1 Sales',
    data: generateBarData(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 30, 90),
    color: '#1890ff'
  },
  {
    id: 'q2-sales',
    title: 'Q2 Sales',
    data: generateBarData(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 20, 85),
    color: '#52c41a'
  }
];

const sampleAreaSeries: ChartSeries[] = [
  {
    id: 'users',
    title: 'Active Users',
    data: generateTimeSeriesData(20),
    color: '#722ed1'
  }
];

const meta: Meta<typeof Chart> = {
  title: 'Charts/Chart',
  component: Chart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible chart component that supports line, bar, and area charts with comprehensive data visualization features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['line', 'bar', 'area', 'mixed'],
      description: 'Chart visualization type'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'detailed'],
      description: 'Visual style variant'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Chart size preset'
    },
    showGrid: {
      control: 'boolean',
      description: 'Toggle grid lines visibility'
    },
    showLegend: {
      control: 'boolean',
      description: 'Toggle legend visibility'
    },
    showAxes: {
      control: 'boolean',
      description: 'Toggle axes labels visibility'
    },
    animate: {
      control: 'boolean',
      description: 'Enable chart animations'
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    height: {
      control: { type: 'number', min: 200, max: 800, step: 50 },
      description: 'Chart height in pixels'
    },
    width: {
      control: { type: 'number', min: 300, max: 1200, step: 50 },
      description: 'Chart width in pixels'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic chart examples
export const Default: Story = {
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    title: 'Revenue Over Time',
    xAxisLabel: 'Time Period',
    yAxisLabel: 'Revenue ($)',
    showGrid: true,
    showLegend: true,
    showAxes: true
  }
};

export const LineChart: Story = {
  args: {
    series: sampleLineSeries,
    type: 'line',
    title: 'Financial Performance',
    xAxisLabel: 'Months',
    yAxisLabel: 'Amount ($)',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 300
  }
};

export const BarChart: Story = {
  args: {
    series: sampleBarSeries,
    type: 'bar',
    title: 'Sales Comparison',
    xAxisLabel: 'Months',
    yAxisLabel: 'Sales Volume',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 300
  }
};

export const AreaChart: Story = {
  args: {
    series: sampleAreaSeries,
    type: 'area',
    title: 'User Growth',
    xAxisLabel: 'Date',
    yAxisLabel: 'Active Users',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 300
  }
};

// Size variants
export const SmallChart: Story = {
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    size: 'sm',
    title: 'Small Chart',
    showGrid: true,
    showLegend: true
  }
};

export const MediumChart: Story = {
  args: {
    series: sampleLineSeries.slice(0, 2),
    type: 'line',
    size: 'md',
    title: 'Medium Chart',
    showGrid: true,
    showLegend: true
  }
};

export const LargeChart: Story = {
  args: {
    series: sampleLineSeries,
    type: 'line',
    size: 'lg',
    title: 'Large Chart',
    showGrid: true,
    showLegend: true
  }
};

// Style variants
export const MinimalChart: Story = {
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    variant: 'minimal',
    showGrid: false,
    showLegend: false,
    showAxes: false
  }
};

export const DetailedChart: Story = {
  args: {
    series: sampleLineSeries,
    type: 'line',
    variant: 'detailed',
    title: 'Detailed Financial Analysis',
    xAxisLabel: 'Time Period (Months)',
    yAxisLabel: 'Amount (USD)',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 400
  }
};

// State examples
export const LoadingChart: Story = {
  args: {
    series: [],
    loading: true,
    height: 300
  }
};

export const ErrorChart: Story = {
  args: {
    series: [],
    error: 'Failed to load chart data',
    height: 300
  }
};

export const EmptyChart: Story = {
  args: {
    series: [],
    title: 'No Data Available',
    height: 300
  }
};

// Interactive examples
export const InteractiveChart: Story = {
  args: {
    series: sampleLineSeries,
    type: 'line',
    title: 'Interactive Chart',
    showGrid: true,
    showLegend: true,
    onDataPointClick: (point, seriesId) => {
      alert(`Clicked: ${point.label || point.x} = ${point.y} (Series: ${seriesId})`);
    },
    onDataPointHover: (point, seriesId) => {
      if (point) {
        console.log(`Hovered: ${point.label || point.x} = ${point.y} (Series: ${seriesId})`);
      }
    }
  }
};

// Figma design variants
export const FigmaLineCharts: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
      <Chart
        series={[{
          id: 'wavy-1',
          title: 'Performance Metric',
          data: [
            { x: 'Jan', y: 45 },
            { x: 'Feb', y: 52 },
            { x: 'Mar', y: 48 },
            { x: 'Apr', y: 61 },
            { x: 'May', y: 55 },
            { x: 'Jun', y: 67 },
            { x: 'Jul', y: 59 },
            { x: 'Aug', y: 72 },
            { x: 'Sep', y: 65 },
            { x: 'Oct', y: 78 },
            { x: 'Nov', y: 71 },
            { x: 'Dec', y: 84 }
          ],
          color: '#1890ff'
        }]}
        type="line"
        title="Monthly Performance"
        showGrid={true}
        showLegend={false}
        height={200}
      />
      
      <Chart
        series={[{
          id: 'wavy-2',
          title: 'User Engagement',
          data: [
            { x: 'Week 1', y: 32 },
            { x: 'Week 2', y: 28 },
            { x: 'Week 3', y: 35 },
            { x: 'Week 4', y: 42 },
            { x: 'Week 5', y: 38 },
            { x: 'Week 6', y: 46 },
            { x: 'Week 7', y: 41 },
            { x: 'Week 8', y: 49 }
          ],
          color: '#52c41a'
        }]}
        type="line"
        title="Weekly Engagement"
        showGrid={true}
        showLegend={false}
        height={200}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Line charts matching the wavy patterns shown in the Figma design'
      }
    }
  }
};

export const FigmaBarCharts: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
      <Chart
        series={[
          {
            id: 'category-a',
            title: 'Category A',
            data: [
              { x: 'Q1', y: 65 },
              { x: 'Q2', y: 72 },
              { x: 'Q3', y: 58 },
              { x: 'Q4', y: 81 }
            ],
            color: '#1890ff'
          },
          {
            id: 'category-b',
            title: 'Category B',
            data: [
              { x: 'Q1', y: 45 },
              { x: 'Q2', y: 52 },
              { x: 'Q3', y: 48 },
              { x: 'Q4', y: 67 }
            ],
            color: '#52c41a'
          }
        ]}
        type="bar"
        title="Quarterly Performance"
        showGrid={true}
        showLegend={true}
        height={250}
      />
      
      <Chart
        series={[{
          id: 'single-series',
          title: 'Revenue',
          data: [
            { x: 'Jan', y: 42 },
            { x: 'Feb', y: 38 },
            { x: 'Mar', y: 45 },
            { x: 'Apr', y: 51 },
            { x: 'May', y: 47 },
            { x: 'Jun', y: 58 },
            { x: 'Jul', y: 54 },
            { x: 'Aug', y: 62 }
          ],
          color: '#722ed1'
        }]}
        type="bar"
        title="Monthly Revenue"
        showGrid={true}
        showLegend={false}
        height={250}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Bar charts with single and multiple series as shown in the Figma design'
      }
    }
  }
};

export const FigmaAreaCharts: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
      <Chart
        series={[{
          id: 'smooth-area',
          title: 'Growth Trend',
          data: [
            { x: 'Jan', y: 20 },
            { x: 'Feb', y: 25 },
            { x: 'Mar', y: 22 },
            { x: 'Apr', y: 30 },
            { x: 'May', y: 28 },
            { x: 'Jun', y: 35 },
            { x: 'Jul', y: 32 },
            { x: 'Aug', y: 40 },
            { x: 'Sep', y: 38 },
            { x: 'Oct', y: 45 }
          ],
          color: '#13c2c2'
        }]}
        type="area"
        title="Growth Analysis"
        showGrid={true}
        showLegend={false}
        height={200}
      />
      
      <Chart
        series={[{
          id: 'usage-area',
          title: 'System Usage',
          data: [
            { x: '00:00', y: 15 },
            { x: '04:00', y: 8 },
            { x: '08:00', y: 35 },
            { x: '12:00', y: 58 },
            { x: '16:00', y: 72 },
            { x: '20:00', y: 45 },
            { x: '24:00', y: 22 }
          ],
          color: '#fa541c'
        }]}
        type="area"
        title="Daily Usage Pattern"
        showGrid={true}
        showLegend={false}
        height={200}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Area charts with smooth curves as shown in the Figma design'
      }
    }
  }
};

// Responsive and layout examples
export const ResponsiveGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: '16px', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <Chart
        series={sampleLineSeries.slice(0, 1)}
        type="line"
        size="sm"
        title="Revenue Trend"
        responsive={true}
      />
      <Chart
        series={sampleBarSeries.slice(0, 1)}
        type="bar"
        size="sm"
        title="Sales Data"
        responsive={true}
      />
      <Chart
        series={sampleAreaSeries}
        type="area"
        size="sm"
        title="User Growth"
        responsive={true}
      />
      <Chart
        series={sampleLineSeries.slice(1, 2)}
        type="line"
        size="sm"
        title="Expenses"
        responsive={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout showcasing multiple charts that adapt to container size'
      }
    }
  }
};

export const DashboardLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: '24px', 
      gridTemplateColumns: '2fr 1fr',
      gridTemplateRows: 'auto auto',
      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <div style={{ gridColumn: '1 / -1' }}>
        <Chart
          series={sampleLineSeries}
          type="line"
          title="Financial Overview Dashboard"
          xAxisLabel="Time Period"
          yAxisLabel="Amount (USD)"
          height={350}
          showGrid={true}
          showLegend={true}
          responsive={true}
        />
      </div>
      <Chart
        series={sampleBarSeries.slice(0, 1)}
        type="bar"
        title="Monthly Sales"
        height={250}
        responsive={true}
      />
      <Chart
        series={sampleAreaSeries}
        type="area"
        title="Active Users"
        height={250}
        responsive={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard-style layout with a main chart and supporting smaller charts'
      }
    }
  }
};

// Custom styling examples
export const CustomColors: Story = {
  args: {
    series: [
      { ...sampleLineSeries[0], color: '#8E44AD' },
      { ...sampleLineSeries[1], color: '#E67E22' },
      { ...sampleLineSeries[2], color: '#2ECC71' }
    ],
    type: 'line',
    title: 'Custom Color Palette',
    height: 300,
    colors: ['#8E44AD', '#E67E22', '#2ECC71', '#E74C3C', '#3498DB']
  }
};

export const NoGridChart: Story = {
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    title: 'Clean Design (No Grid)',
    showGrid: false,
    showLegend: false,
    height: 300
  }
};

// Animation examples
export const AnimatedChart: Story = {
  args: {
    series: sampleBarSeries.slice(0, 1),
    type: 'bar',
    title: 'Animated Chart',
    animate: true,
    animationDuration: 1000,
    height: 300
  }
};

export const StaticChart: Story = {
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    title: 'Static Chart (No Animation)',
    animate: false,
    height: 300
  }
};
