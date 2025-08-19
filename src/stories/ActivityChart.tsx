import React from 'react';
import './activitychart.css';

export interface ActivityDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ActivityChartProps {
  /** Data for the three activity rings */
  data: ActivityDataPoint[];
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Show center label */
  showLabel?: boolean;
  /** Show legend */
  showLegend?: boolean;
  /** Legend position */
  legendPosition?: 'bottom' | 'right';
  /** Center text label */
  label?: string;
  /** Center value to display */
  value?: string | number;
  /** Custom className */
  className?: string;
}

// Default colors matching the Figma design
const DEFAULT_COLORS = [
  '#0F172A', // Brand-600 - outer ring
  '#64748B', // Brand-400 - middle ring  
  '#09101F', // Brand-800 - inner ring
];

// Size configurations
const SIZE_CONFIG = {
  xs: {
    container: 160,
    outerRing: { radius: 76, strokeWidth: 8 },
    middleRing: { radius: 68, strokeWidth: 8 },
    innerRing: { radius: 56, strokeWidth: 8 },
    numberSize: 20,
    labelSize: 12
  },
  sm: {
    container: 200,
    outerRing: { radius: 94, strokeWidth: 12 },
    middleRing: { radius: 83, strokeWidth: 12 },
    innerRing: { radius: 67, strokeWidth: 12 },
    numberSize: 24,
    labelSize: 12
  },
  md: {
    container: 240,
    outerRing: { radius: 112, strokeWidth: 16 },
    middleRing: { radius: 100, strokeWidth: 16 },
    innerRing: { radius: 80, strokeWidth: 16 },
    numberSize: 30,
    labelSize: 14
  },
  lg: {
    container: 280,
    outerRing: { radius: 131, strokeWidth: 18 },
    middleRing: { radius: 116, strokeWidth: 18 },
    innerRing: { radius: 92, strokeWidth: 18 },
    numberSize: 36,
    labelSize: 14
  }
};

interface ActivityRingProps {
  radius: number;
  strokeWidth: number;
  progress: number;
  color: string;
  backgroundColor?: string;
}

const ActivityRing: React.FC<ActivityRingProps> = ({
  radius,
  strokeWidth,
  progress,
  color,
  backgroundColor = '#F5F5F5'
}) => {
  const center = 140; // Fixed center point
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <g>
      {/* Background ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Progress ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${center} ${center})`}
        className="activity-ring-progress"
      />
    </g>
  );
};

const LegendItem: React.FC<{
  color: string;
  label: string;
  isVertical?: boolean;
}> = ({ color, label, isVertical = false }) => (
  <div className={`activity-legend-item ${isVertical ? 'activity-legend-item--vertical' : ''}`}>
    <div className="activity-legend-dot" style={{ backgroundColor: color }} />
    <span className="activity-legend-label">{label}</span>
  </div>
);

export const ActivityChart: React.FC<ActivityChartProps> = ({
  data = [],
  size = 'md',
  showLabel = true,
  showLegend = false,
  legendPosition = 'bottom',
  label = 'Active users',
  value = '1,000',
  className = '',
  ...props
}) => {
  const config = SIZE_CONFIG[size];
  const center = 140;

  // Ensure we have exactly 3 data points (outer, middle, inner)
  const normalizedData = [...data];
  while (normalizedData.length < 3) {
    normalizedData.push({ label: `Series ${normalizedData.length + 1}`, value: 0.75 });
  }
  normalizedData.splice(3); // Keep only first 3

  // Add default colors if not provided
  const dataWithColors = normalizedData.map((item, index) => ({
    ...item,
    color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]
  }));

  const containerClasses = [
    'activity-chart',
    `activity-chart--${size}`,
    showLegend && `activity-chart--legend-${legendPosition}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} {...props}>
      <div className="activity-chart-container">
        <div className="activity-chart-gauge">
          <svg
            width={config.container}
            height={config.container}
            viewBox="0 0 280 280"
            className="activity-chart-svg"
          >
            {/* Outer ring */}
            <ActivityRing
              radius={config.outerRing.radius}
              strokeWidth={config.outerRing.strokeWidth}
              progress={Math.min(Math.max(dataWithColors[0]?.value || 0, 0), 1)}
              color={dataWithColors[0]?.color || DEFAULT_COLORS[0]}
            />
            
            {/* Middle ring */}
            <ActivityRing
              radius={config.middleRing.radius}
              strokeWidth={config.middleRing.strokeWidth}
              progress={Math.min(Math.max(dataWithColors[1]?.value || 0, 0), 1)}
              color={dataWithColors[1]?.color || DEFAULT_COLORS[1]}
            />
            
            {/* Inner ring */}
            <ActivityRing
              radius={config.innerRing.radius}
              strokeWidth={config.innerRing.strokeWidth}
              progress={Math.min(Math.max(dataWithColors[2]?.value || 0, 0), 1)}
              color={dataWithColors[2]?.color || DEFAULT_COLORS[2]}
            />
          </svg>

          {/* Center content */}
          <div className="activity-chart-center">
            {showLabel && (
              <div className="activity-chart-center-content">
                <div 
                  className="activity-chart-label"
                  style={{ fontSize: `${config.labelSize}px` }}
                >
                  {label}
                </div>
                <div 
                  className="activity-chart-value"
                  style={{ fontSize: `${config.numberSize}px` }}
                >
                  {value}
                </div>
              </div>
            )}
            {!showLabel && (
              <div 
                className="activity-chart-value activity-chart-value--no-label"
                style={{ fontSize: `${config.numberSize}px` }}
              >
                {value}
              </div>
            )}
          </div>
        </div>

        {showLegend && (
          <div className={`activity-chart-legend activity-chart-legend--${legendPosition}`}>
            {dataWithColors.map((item, index) => (
              <LegendItem
                key={index}
                color={item.color}
                label={item.label}
                isVertical={legendPosition === 'right'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
