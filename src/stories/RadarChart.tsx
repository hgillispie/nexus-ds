import React, { useMemo } from 'react';
import './radarchart.css';

export interface RadarDataPoint {
  axis: string;
  value: number;
  label?: string;
}

export interface RadarSeries {
  id: string;
  title: string;
  data: RadarDataPoint[];
  color?: string;
}

export interface RadarChartProps {
  /**
   * Array of data series to display
   */
  series: RadarSeries[];
  
  /**
   * Chart size variant
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Chart title
   */
  title?: string;
  
  /**
   * Whether to show legend
   */
  showLegend?: boolean;
  
  /**
   * Legend position
   */
  legendPosition?: 'right' | 'bottom';
  
  /**
   * Maximum value for the radar chart scale
   */
  maxValue?: number;
  
  /**
   * Number of scale levels (concentric polygons)
   */
  levels?: number;
  
  /**
   * Whether to show scale labels
   */
  showScaleLabels?: boolean;
  
  /**
   * Whether to show axis labels
   */
  showAxisLabels?: boolean;
  
  /**
   * Height of the chart container
   */
  height?: number;
  
  /**
   * Width of the chart container
   */
  width?: number;
  
  /**
   * Custom color palette
   */
  colors?: string[];
  
  /**
   * Whether to enable animations
   */
  animate?: boolean;
  
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
  
  /**
   * Whether the chart is loading
   */
  loading?: boolean;
  
  /**
   * Error state
   */
  error?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Callback for data point interactions
   */
  onDataPointClick?: (point: RadarDataPoint, seriesId: string) => void;
  
  /**
   * Callback for data point hover
   */
  onDataPointHover?: (point: RadarDataPoint | null, seriesId: string | null) => void;
}

// Default color palette matching Figma design
const DEFAULT_COLORS = [
  'var(--radar-color-1, #0F172A)',
  'var(--radar-color-2, #EE46BC)', 
  'var(--radar-color-3, #0BA5EC)',
  'var(--radar-color-4, #52c41a)',
  'var(--radar-color-5, #faad14)',
  'var(--radar-color-6, #f5222d)',
];

/**
 * RadarChart component for displaying multi-dimensional data in a circular layout
 */
export const RadarChart = React.forwardRef<HTMLDivElement, RadarChartProps>(({
  series = [],
  size = 'md',
  title,
  showLegend = false,
  legendPosition = 'right',
  maxValue,
  levels = 5,
  showScaleLabels = true,
  showAxisLabels = true,
  height,
  width,
  colors = DEFAULT_COLORS,
  animate = true,
  animationDuration = 300,
  loading = false,
  error,
  className,
  onDataPointClick,
  onDataPointHover,
  ...props
}, ref) => {
  const [hoveredSeries, setHoveredSeries] = React.useState<string | null>(null);

  // Build CSS classes
  const baseClasses = 'nexus-radar-chart';
  const sizeClass = `nexus-radar-chart--${size}`;
  const legendClass = showLegend ? `nexus-radar-chart--legend-${legendPosition}` : '';
  const loadingClass = loading ? 'nexus-radar-chart--loading' : '';
  const errorClass = error ? 'nexus-radar-chart--error' : '';

  const classes = [
    baseClasses,
    sizeClass,
    legendClass,
    loadingClass,
    errorClass,
    className
  ].filter(Boolean).join(' ');

  // Calculate chart dimensions and data ranges
  const chartData = useMemo(() => {
    if (!series.length) return null;

    // Get all unique axes from all series
    const allAxes = Array.from(new Set(
      series.flatMap(s => s.data.map(d => d.axis))
    ));

    // Calculate max value across all series
    const allValues = series.flatMap(s => s.data.map(d => d.value));
    const calculatedMaxValue = maxValue || Math.max(...allValues, 1000);

    // Ensure all series have data for all axes
    const normalizedSeries = series.map(s => ({
      ...s,
      data: allAxes.map(axis => {
        const existing = s.data.find(d => d.axis === axis);
        return existing || { axis, value: 0 };
      })
    }));

    return {
      axes: allAxes,
      maxValue: calculatedMaxValue,
      series: normalizedSeries,
      angleStep: (2 * Math.PI) / allAxes.length
    };
  }, [series, maxValue]);

  // Generate scale levels (concentric polygons)
  const generateScaleLevels = () => {
    if (!chartData) return [];
    
    const centerX = 156; // Center of the 312px viewBox
    const centerY = 156;
    const maxRadius = 140; // Maximum radius
    
    return Array.from({ length: levels }, (_, i) => {
      const level = i + 1;
      const radius = (maxRadius * level) / levels;
      const value = (chartData.maxValue * level) / levels;
      
      // Generate polygon points
      const points = chartData.axes.map((_, axisIndex) => {
        const angle = axisIndex * chartData.angleStep - Math.PI / 2; // Start from top
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      
      return { level, radius, value, points };
    });
  };

  // Generate axis rays
  const generateAxisRays = () => {
    if (!chartData) return [];
    
    const centerX = 156;
    const centerY = 156;
    const maxRadius = 140;
    
    return chartData.axes.map((axis, index) => {
      const angle = index * chartData.angleStep - Math.PI / 2;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);
      
      return {
        axis,
        x1: centerX,
        y1: centerY,
        x2: x,
        y2: y,
        labelX: centerX + (maxRadius + 20) * Math.cos(angle),
        labelY: centerY + (maxRadius + 20) * Math.sin(angle)
      };
    });
  };

  // Generate data series paths
  const generateSeriesPaths = () => {
    if (!chartData) return [];
    
    const centerX = 156;
    const centerY = 156;
    const maxRadius = 140;
    
    return chartData.series.map((seriesData, seriesIndex) => {
      const points = seriesData.data.map((point, index) => {
        const angle = index * chartData.angleStep - Math.PI / 2;
        const normalizedValue = point.value / chartData.maxValue;
        const radius = maxRadius * normalizedValue;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      
      const color = seriesData.color || colors[seriesIndex % colors.length];
      
      return {
        ...seriesData,
        points,
        color,
        fillOpacity: hoveredSeries && hoveredSeries !== seriesData.id ? 0.3 : 0.2
      };
    });
  };

  const scaleLevels = generateScaleLevels();
  const axisRays = generateAxisRays();
  const seriesPaths = generateSeriesPaths();

  const renderScaleLevels = () => {
    return scaleLevels.map(level => (
      <polygon
        key={level.level}
        points={level.points}
        className="nexus-radar-chart__scale-level"
        fill="none"
        stroke="var(--radar-grid-color)"
        strokeWidth="1"
      />
    ));
  };

  const renderAxisRays = () => {
    return axisRays.map((ray, index) => (
      <line
        key={ray.axis}
        x1={ray.x1}
        y1={ray.y1}
        x2={ray.x2}
        y2={ray.y2}
        className="nexus-radar-chart__axis-ray"
        stroke="var(--radar-grid-color)"
        strokeWidth="1"
      />
    ));
  };

  const renderScaleLabels = () => {
    if (!showScaleLabels || !chartData) return null;
    
    const centerX = 156;
    const centerY = 156;
    const maxRadius = 140;
    
    // Show labels on the first axis (top)
    const angle = -Math.PI / 2;
    
    return scaleLevels.map(level => {
      const radius = (maxRadius * level.level) / levels;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      return (
        <g key={`scale-${level.level}`} className="nexus-radar-chart__scale-label-group">
          <rect
            x={x - 24}
            y={y - 11}
            width={48}
            height={22}
            rx={11}
            className="nexus-radar-chart__scale-label-bg"
          />
          <text
            x={x}
            y={y + 4}
            className="nexus-radar-chart__scale-label"
            textAnchor="middle"
          >
            {level.value.toLocaleString()}
          </text>
        </g>
      );
    });
  };

  const renderAxisLabels = () => {
    if (!showAxisLabels) return null;
    
    return axisRays.map(ray => (
      <text
        key={`axis-${ray.axis}`}
        x={ray.labelX}
        y={ray.labelY + 4}
        className="nexus-radar-chart__axis-label"
        textAnchor="middle"
      >
        {ray.axis}
      </text>
    ));
  };

  const renderSeries = () => {
    return seriesPaths.map((seriesData, index) => (
      <g
        key={seriesData.id}
        className="nexus-radar-chart__series"
        onMouseEnter={() => {
          setHoveredSeries(seriesData.id);
          onDataPointHover?.(null, seriesData.id);
        }}
        onMouseLeave={() => {
          setHoveredSeries(null);
          onDataPointHover?.(null, null);
        }}
      >
        <polygon
          points={seriesData.points}
          fill={seriesData.color}
          fillOpacity={seriesData.fillOpacity}
          stroke={seriesData.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="nexus-radar-chart__series-path"
          style={{
            transition: animate ? `all ${animationDuration}ms ease-in-out` : 'none'
          }}
        />
      </g>
    ));
  };

  const renderLegend = () => {
    if (!showLegend || !series.length) return null;

    return (
      <div className={`nexus-radar-chart__legend nexus-radar-chart__legend--${legendPosition}`}>
        {series.map((seriesData, index) => (
          <div key={seriesData.id} className="nexus-radar-chart__legend-item">
            <div 
              className="nexus-radar-chart__legend-indicator"
              style={{ backgroundColor: seriesData.color || colors[index % colors.length] }}
            />
            <span className="nexus-radar-chart__legend-label">{seriesData.title}</span>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div ref={ref} className={classes} style={{ height, width }} {...props}>
        <div className="nexus-radar-chart__loading">
          <div className="nexus-radar-chart__loading-spinner" />
          <span className="nexus-radar-chart__loading-text">Loading chart...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div ref={ref} className={classes} style={{ height, width }} {...props}>
        <div className="nexus-radar-chart__error">
          <span className="nexus-radar-chart__error-text">{error}</span>
        </div>
      </div>
    );
  }

  if (!series.length) {
    return (
      <div ref={ref} className={classes} style={{ height, width }} {...props}>
        <div className="nexus-radar-chart__empty">
          <span className="nexus-radar-chart__empty-text">No data available</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={classes} style={{ height, width }} {...props}>
      {title && (
        <div className="nexus-radar-chart__header">
          <h3 className="nexus-radar-chart__title">{title}</h3>
        </div>
      )}
      
      <div className="nexus-radar-chart__container">
        <div className="nexus-radar-chart__chart">
          <svg
            className="nexus-radar-chart__svg"
            viewBox="0 0 312 312"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Scale levels (concentric polygons) */}
            {renderScaleLevels()}
            
            {/* Axis rays */}
            {renderAxisRays()}
            
            {/* Scale labels */}
            {renderScaleLabels()}
            
            {/* Axis labels */}
            {renderAxisLabels()}
            
            {/* Data series */}
            {renderSeries()}
          </svg>
        </div>
        
        {renderLegend()}
      </div>
    </div>
  );
});

RadarChart.displayName = 'RadarChart';
