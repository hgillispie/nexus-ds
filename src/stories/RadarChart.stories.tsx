import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from './RadarChart';
import type { RadarChartProps, RadarSeries, RadarDataPoint } from './RadarChart';

// Sample data generators for radar charts
const generateWeeklyData = (baseValues: number[]): RadarDataPoint[] => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map((day, index) => ({
    axis: day,
    value: baseValues[index] || 0,
    label: `${day}: ${baseValues[index] || 0}`
  }));
};

const generateSkillsData = (skills: string[], values: number[]): RadarDataPoint[] => {
  return skills.map((skill, index) => ({
    axis: skill,
    value: values[index] || 0,
    label: `${skill}: ${values[index] || 0}`
  }));
};

// Sample data series matching Figma design
const series1Data: RadarSeries = {
  id: 'series-1',
  title: 'Series 1',
  data: generateWeeklyData([850, 200, 400, 920, 650, 200, 300]),
  color: '#0F172A'
};

const series2Data: RadarSeries = {
  id: 'series-2', 
  title: 'Series 2',
  data: generateWeeklyData([950, 800, 1000, 400, 700, 1000, 850]),
  color: '#EE46BC'
};

const series3Data: RadarSeries = {
  id: 'series-3',
  title: 'Series 3', 
  data: generateWeeklyData([750, 400, 200, 600, 850, 200, 950]),
  color: '#0BA5EC'
};

const skillsSeries1: RadarSeries = {
  id: 'frontend-skills',
  title: 'Frontend Skills',
  data: generateSkillsData(['JavaScript', 'React', 'CSS', 'TypeScript', 'Testing'], [85, 90, 75, 80, 70]),
  color: '#0F172A'
};

const skillsSeries2: RadarSeries = {
  id: 'backend-skills',
  title: 'Backend Skills',
  data: generateSkillsData(['JavaScript', 'React', 'CSS', 'TypeScript', 'Testing'], [70, 60, 85, 90, 80]),
  color: '#EE46BC'
};

const performanceSeries: RadarSeries = {
  id: 'performance',
  title: 'Performance Metrics',
  data: generateWeeklyData([780, 650, 850, 720, 900, 600, 750]),
  color: '#52c41a'
};

const meta: Meta<typeof RadarChart> = {
  title: 'Charts/RadarChart',
  component: RadarChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A radar chart component for displaying multi-dimensional data in a circular layout, perfect for comparing multiple metrics or performance indicators.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Chart size preset'
    },
    showLegend: {
      control: 'boolean',
      description: 'Toggle legend visibility'
    },
    legendPosition: {
      control: { type: 'select' },
      options: ['right', 'bottom'],
      description: 'Legend position'
    },
    maxValue: {
      control: { type: 'number', min: 100, max: 2000, step: 100 },
      description: 'Maximum value for the radar scale'
    },
    levels: {
      control: { type: 'number', min: 3, max: 10, step: 1 },
      description: 'Number of concentric scale levels'
    },
    showScaleLabels: {
      control: 'boolean',
      description: 'Show scale value labels'
    },
    showAxisLabels: {
      control: 'boolean',
      description: 'Show axis labels'
    },
    animate: {
      control: 'boolean',
      description: 'Enable animations'
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

// Basic radar chart examples
export const Default: Story = {
  args: {
    series: [series1Data],
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000
  }
};

export const SingleSeries: Story = {
  args: {
    series: [series1Data],
    title: 'Weekly Performance',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

export const TwoSeries: Story = {
  args: {
    series: [series1Data, series2Data],
    title: 'Performance Comparison',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

export const ThreeSeries: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Multi-Series Analysis',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

// Figma design variants - matching the exact layout from the design
export const FigmaVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: '32px', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      {/* Row 1: 3 series, 2 series, 1 series - No Legend */}
      <RadarChart
        series={[series1Data, series2Data, series3Data]}
        showLegend={false}
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      <RadarChart
        series={[series1Data, series2Data]}
        showLegend={false}
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      <RadarChart
        series={[series1Data]}
        showLegend={false}
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      {/* Row 2: 3 series, 2 series, 1 series - Right Legend */}
      <RadarChart
        series={[series1Data, series2Data, series3Data]}
        showLegend={true}
        legendPosition="right"
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      <RadarChart
        series={[series1Data, series2Data]}
        showLegend={true}
        legendPosition="right"
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      <RadarChart
        series={[series1Data]}
        showLegend={true}
        legendPosition="right"
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      {/* Row 3: 3 series, 2 series, 1 series - Bottom Legend */}
      <RadarChart
        series={[series1Data, series2Data, series3Data]}
        showLegend={true}
        legendPosition="bottom"
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      <RadarChart
        series={[series1Data, series2Data]}
        showLegend={true}
        legendPosition="bottom"
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
      
      <RadarChart
        series={[series1Data]}
        showLegend={true}
        legendPosition="bottom"
        showScaleLabels={true}
        showAxisLabels={true}
        maxValue={1000}
        size="md"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete grid layout matching the Figma design with all combinations of series counts and legend positions'
      }
    }
  }
};

// Legend position examples
export const LegendRight: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Radar Chart with Right Legend',
    showLegend: true,
    legendPosition: 'right',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

export const LegendBottom: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Radar Chart with Bottom Legend',
    showLegend: true,
    legendPosition: 'bottom',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

export const NoLegend: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Radar Chart without Legend',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

// Size variants
export const SmallChart: Story = {
  args: {
    series: [series1Data, series2Data],
    title: 'Small Radar Chart',
    size: 'sm',
    showLegend: true,
    legendPosition: 'bottom',
    maxValue: 1000
  }
};

export const MediumChart: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Medium Radar Chart',
    size: 'md',
    showLegend: true,
    legendPosition: 'right',
    maxValue: 1000
  }
};

export const LargeChart: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Large Radar Chart',
    size: 'lg',
    showLegend: true,
    legendPosition: 'bottom',
    maxValue: 1000
  }
};

// Different data types
export const SkillsAssessment: Story = {
  args: {
    series: [skillsSeries1, skillsSeries2],
    title: 'Skills Assessment',
    showLegend: true,
    legendPosition: 'bottom',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 100,
    size: 'md'
  }
};

export const PerformanceMetrics: Story = {
  args: {
    series: [performanceSeries],
    title: 'Weekly Performance Metrics',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
};

// Customization examples
export const CustomScales: Story = {
  args: {
    series: [series1Data, series2Data],
    title: 'Custom Scale Configuration',
    showLegend: true,
    legendPosition: 'right',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1200,
    levels: 6,
    size: 'md'
  }
};

export const MinimalDesign: Story = {
  args: {
    series: [series1Data],
    showLegend: false,
    showScaleLabels: false,
    showAxisLabels: true,
    maxValue: 1000,
    levels: 3,
    size: 'md'
  }
};

export const NoLabels: Story = {
  args: {
    series: [series1Data, series2Data],
    title: 'Clean Design (No Labels)',
    showLegend: false,
    showScaleLabels: false,
    showAxisLabels: false,
    maxValue: 1000,
    size: 'md'
  }
};

// State examples
export const LoadingChart: Story = {
  args: {
    series: [],
    loading: true,
    height: 400,
    size: 'md'
  }
};

export const ErrorChart: Story = {
  args: {
    series: [],
    error: 'Failed to load radar chart data',
    height: 400,
    size: 'md'
  }
};

export const EmptyChart: Story = {
  args: {
    series: [],
    title: 'No Data Available',
    height: 400,
    size: 'md'
  }
};

// Interactive examples
export const InteractiveChart: Story = {
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Interactive Radar Chart',
    showLegend: true,
    legendPosition: 'bottom',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    onDataPointClick: (point, seriesId) => {
      alert(`Clicked: ${point.axis} = ${point.value} (Series: ${seriesId})`);
    },
    onDataPointHover: (point, seriesId) => {
      if (point) {
        console.log(`Hovered: ${point.axis} = ${point.value} (Series: ${seriesId})`);
      }
    }
  }
};

// Responsive layouts
export const ResponsiveGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: '16px', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <RadarChart
        series={[series1Data]}
        title="Performance"
        size="sm"
        showLegend={false}
      />
      <RadarChart
        series={[series2Data]}
        title="Efficiency"
        size="sm" 
        showLegend={false}
      />
      <RadarChart
        series={[series3Data]}
        title="Quality"
        size="sm"
        showLegend={false}
      />
      <RadarChart
        series={[performanceSeries]}
        title="Metrics"
        size="sm"
        showLegend={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout with multiple small radar charts'
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
        <RadarChart
          series={[series1Data, series2Data, series3Data]}
          title="Comprehensive Performance Dashboard"
          showLegend={true}
          legendPosition="bottom"
          showScaleLabels={true}
          showAxisLabels={true}
          maxValue={1000}
          size="lg"
        />
      </div>
      <RadarChart
        series={[skillsSeries1]}
        title="Skills Overview"
        showLegend={false}
        maxValue={100}
        size="md"
      />
      <RadarChart
        series={[performanceSeries]}
        title="Weekly Trends"
        showLegend={false}
        maxValue={1000}
        size="md"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard-style layout with a main radar chart and supporting smaller charts'
      }
    }
  }
};

// Animation examples
export const AnimatedChart: Story = {
  args: {
    series: [series1Data, series2Data],
    title: 'Animated Radar Chart',
    showLegend: true,
    legendPosition: 'bottom',
    animate: true,
    animationDuration: 1000,
    maxValue: 1000,
    size: 'md'
  }
};

export const StaticChart: Story = {
  args: {
    series: [series1Data, series2Data],
    title: 'Static Radar Chart (No Animation)',
    showLegend: true,
    legendPosition: 'bottom',
    animate: false,
    maxValue: 1000,
    size: 'md'
  }
};

// Custom colors
export const CustomColors: Story = {
  args: {
    series: [
      { ...series1Data, color: '#8E44AD' },
      { ...series2Data, color: '#E67E22' },
      { ...series3Data, color: '#2ECC71' }
    ],
    title: 'Custom Color Palette',
    showLegend: true,
    legendPosition: 'bottom',
    maxValue: 1000,
    colors: ['#8E44AD', '#E67E22', '#2ECC71', '#E74C3C', '#3498DB'],
    size: 'md'
  }
};
