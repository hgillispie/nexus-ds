import React, { useRef, useEffect, useMemo } from 'react';
import './chart.css';

export interface DataPoint {
  x: string | number | Date;
  y: number;
  label?: string;
}

export interface ChartSeries {
  id: string;
  title: string;
  data: DataPoint[];
  color?: string;
  type?: 'line' | 'bar' | 'area';
}

export interface ChartProps {
  /**
   * Array of data series to display
   */
  series: ChartSeries[];
  
  /**
   * Chart type - determines the visualization style
   */
  type?: 'line' | 'bar' | 'area' | 'mixed';
  
  /**
   * Chart variant - affects styling and layout
   */
  variant?: 'default' | 'minimal' | 'detailed';
  
  /**
   * Chart size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Chart title
   */
  title?: string;
  
  /**
   * X-axis label
   */
  xAxisLabel?: string;
  
  /**
   * Y-axis label
   */
  yAxisLabel?: string;
  
  /**
   * Whether to show grid lines
   */
  showGrid?: boolean;
  
  /**
   * Whether to show legend
   */
  showLegend?: boolean;
  
  /**
   * Whether to show axes labels
   */
  showAxes?: boolean;
  
  /**
   * Height of the chart container
   */
  height?: number;
  
  /**
   * Width of the chart container
   */
  width?: number;
  
  /**
   * Whether the chart is loading
   */
  loading?: boolean;
  
  /**
   * Error state
   */
  error?: string;
  
  /**
   * Custom color palette
   */
  colors?: string[];
  
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
  
  /**
   * Whether to enable animations
   */
  animate?: boolean;
  
  /**
   * Responsive behavior
   */
  responsive?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Callback for data point interactions
   */
  onDataPointClick?: (point: DataPoint, seriesId: string) => void;
  
  /**
   * Callback for data point hover
   */
  onDataPointHover?: (point: DataPoint | null, seriesId: string | null) => void;
}

// Default color palette based on design tokens
const DEFAULT_COLORS = [
  'var(--chart-color-1, #1890ff)',
  'var(--chart-color-2, #52c41a)',
  'var(--chart-color-3, #faad14)',
  'var(--chart-color-4, #f5222d)',
  'var(--chart-color-5, #fa541c)',
  'var(--chart-color-6, #722ed1)',
  'var(--chart-color-7, #13c2c2)',
  'var(--chart-color-8, #eb2f96)',
];

/**
 * Chart component for displaying various types of data visualizations
 */
export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({
  series = [],
  type = 'line',
  variant = 'default',
  size = 'md',
  title,
  xAxisLabel,
  yAxisLabel,
  showGrid = true,
  showLegend = true,
  showAxes = true,
  height,
  width,
  loading = false,
  error,
  colors = DEFAULT_COLORS,
  animationDuration = 300,
  animate = true,
  responsive = true,
  className,
  onDataPointClick,
  onDataPointHover,
  ...props
}, ref) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [hoveredPoint, setHoveredPoint] = React.useState<{point: DataPoint, seriesId: string} | null>(null);

  // Build CSS classes
  const baseClasses = 'nexus-chart';
  const typeClass = `nexus-chart--${type}`;
  const variantClass = `nexus-chart--${variant}`;
  const sizeClass = `nexus-chart--${size}`;
  const loadingClass = loading ? 'nexus-chart--loading' : '';
  const errorClass = error ? 'nexus-chart--error' : '';
  const responsiveClass = responsive ? 'nexus-chart--responsive' : '';

  const classes = [
    baseClasses,
    typeClass,
    variantClass,
    sizeClass,
    loadingClass,
    errorClass,
    responsiveClass,
    className
  ].filter(Boolean).join(' ');

  // Calculate chart dimensions and data ranges
  const chartData = useMemo(() => {
    if (!series.length) return null;

    const allDataPoints = series.flatMap(s => s.data);
    const yValues = allDataPoints.map(d => d.y);
    const xValues = allDataPoints.map(d => d.x);

    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);
    const yRange = yMax - yMin;

    return {
      yMin: yMin - yRange * 0.1, // Add 10% padding
      yMax: yMax + yRange * 0.1,
      yRange: yRange * 1.2,
      xValues,
      yValues,
      dataPointCount: Math.max(...series.map(s => s.data.length))
    };
  }, [series]);

  // Generate chart elements based on type
  const renderChartElements = () => {
    if (!chartData || !series.length) return null;

    const chartWidth = 300; // Base width for calculations
    const chartHeight = 200; // Base height for calculations

    return series.map((seriesData, seriesIndex) => {
      const seriesColor = seriesData.color || colors[seriesIndex % colors.length];
      
      if (type === 'bar') {
        return renderBarSeries(seriesData, seriesIndex, seriesColor, chartWidth, chartHeight);
      } else if (type === 'line') {
        return renderLineSeries(seriesData, seriesIndex, seriesColor, chartWidth, chartHeight);
      } else if (type === 'area') {
        return renderAreaSeries(seriesData, seriesIndex, seriesColor, chartWidth, chartHeight);
      }
      
      return null;
    });
  };

  const renderBarSeries = (seriesData: ChartSeries, seriesIndex: number, color: string, chartWidth: number, chartHeight: number) => {
    const barWidth = chartWidth / (chartData!.dataPointCount * series.length + (series.length - 1));
    
    return (
      <div key={seriesData.id} className="nexus-chart__series nexus-chart__series--bar">
        {seriesData.data.map((point, pointIndex) => {
          const barHeight = ((point.y - chartData!.yMin) / chartData!.yRange) * chartHeight;
          const xPos = pointIndex * (chartWidth / chartData!.dataPointCount) + seriesIndex * barWidth;
          
          return (
            <div
              key={`${seriesData.id}-${pointIndex}`}
              className="nexus-chart__bar"
              style={{
                left: `${(xPos / chartWidth) * 100}%`,
                width: `${(barWidth / chartWidth) * 100}%`,
                height: `${(barHeight / chartHeight) * 100}%`,
                backgroundColor: color,
                bottom: 0,
              }}
              onClick={() => onDataPointClick?.(point, seriesData.id)}
              onMouseEnter={() => {
                setHoveredPoint({point, seriesId: seriesData.id});
                onDataPointHover?.(point, seriesData.id);
              }}
              onMouseLeave={() => {
                setHoveredPoint(null);
                onDataPointHover?.(null, null);
              }}
            />
          );
        })}
      </div>
    );
  };

  const renderLineSeries = (seriesData: ChartSeries, seriesIndex: number, color: string, chartWidth: number, chartHeight: number) => {
    const points = seriesData.data.map((point, index) => {
      const x = (index / (chartData!.dataPointCount - 1)) * chartWidth;
      const y = chartHeight - ((point.y - chartData!.yMin) / chartData!.yRange) * chartHeight;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div key={seriesData.id} className="nexus-chart__series nexus-chart__series--line">
        <svg
          className="nexus-chart__line-svg"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="none"
        >
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="nexus-chart__line"
          />
          {seriesData.data.map((point, pointIndex) => {
            const x = (pointIndex / (chartData!.dataPointCount - 1)) * chartWidth;
            const y = chartHeight - ((point.y - chartData!.yMin) / chartData!.yRange) * chartHeight;
            
            return (
              <circle
                key={`${seriesData.id}-point-${pointIndex}`}
                cx={x}
                cy={y}
                r="4"
                fill={color}
                className="nexus-chart__point"
                onClick={() => onDataPointClick?.(point, seriesData.id)}
                onMouseEnter={() => {
                  setHoveredPoint({point, seriesId: seriesData.id});
                  onDataPointHover?.(point, seriesData.id);
                }}
                onMouseLeave={() => {
                  setHoveredPoint(null);
                  onDataPointHover?.(null, null);
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  const renderAreaSeries = (seriesData: ChartSeries, seriesIndex: number, color: string, chartWidth: number, chartHeight: number) => {
    const points = seriesData.data.map((point, index) => {
      const x = (index / (chartData!.dataPointCount - 1)) * chartWidth;
      const y = chartHeight - ((point.y - chartData!.yMin) / chartData!.yRange) * chartHeight;
      return `${x},${y}`;
    }).join(' ');

    const areaPoints = `0,${chartHeight} ${points} ${chartWidth},${chartHeight}`;

    return (
      <div key={seriesData.id} className="nexus-chart__series nexus-chart__series--area">
        <svg
          className="nexus-chart__area-svg"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="none"
        >
          <polygon
            points={areaPoints}
            fill={color}
            fillOpacity="0.3"
            className="nexus-chart__area"
          />
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="nexus-chart__area-line"
          />
        </svg>
      </div>
    );
  };

  const renderLegend = () => {
    if (!showLegend || !series.length) return null;

    return (
      <div className="nexus-chart__legend">
        {series.map((seriesData, index) => (
          <div key={seriesData.id} className="nexus-chart__legend-item">
            <div 
              className="nexus-chart__legend-indicator"
              style={{ backgroundColor: seriesData.color || colors[index % colors.length] }}
            />
            <span className="nexus-chart__legend-label">{seriesData.title}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderAxes = () => {
    if (!showAxes || !chartData) return null;

    return (
      <div className="nexus-chart__axes">
        {xAxisLabel && (
          <div className="nexus-chart__axis-label nexus-chart__axis-label--x">
            {xAxisLabel}
          </div>
        )}
        {yAxisLabel && (
          <div className="nexus-chart__axis-label nexus-chart__axis-label--y">
            {yAxisLabel}
          </div>
        )}
      </div>
    );
  };

  const renderTooltip = () => {
    if (!hoveredPoint) return null;

    return (
      <div className="nexus-chart__tooltip">
        <div className="nexus-chart__tooltip-content">
          <div className="nexus-chart__tooltip-label">
            {hoveredPoint.point.label || hoveredPoint.point.x}
          </div>
          <div className="nexus-chart__tooltip-value">
            {hoveredPoint.point.y}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div ref={ref} className={classes} {...props}>
        <div className="nexus-chart__loading">
          <div className="nexus-chart__loading-spinner" />
          <span className="nexus-chart__loading-text">Loading chart...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div ref={ref} className={classes} {...props}>
        <div className="nexus-chart__error">
          <span className="nexus-chart__error-text">{error}</span>
        </div>
      </div>
    );
  }

  if (!series.length) {
    return (
      <div ref={ref} className={classes} {...props}>
        <div className="nexus-chart__empty">
          <span className="nexus-chart__empty-text">No data available</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={classes} style={{ height, width }} {...props}>
      {title && (
        <div className="nexus-chart__header">
          <h3 className="nexus-chart__title">{title}</h3>
        </div>
      )}
      
      <div className="nexus-chart__container" ref={chartRef}>
        {showGrid && <div className="nexus-chart__grid" />}
        
        <div className="nexus-chart__content">
          {renderChartElements()}
        </div>
        
        {renderAxes()}
        {renderTooltip()}
      </div>
      
      {renderLegend()}
    </div>
  );
});

Chart.displayName = 'Chart';
