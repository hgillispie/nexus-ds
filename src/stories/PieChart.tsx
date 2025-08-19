import React from 'react';
import './piechart.css';

export interface PieChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface PieChartProps {
  data: PieChartDataPoint[];
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
  legendPosition?: 'right' | 'bottom';
  centerContent?: React.ReactNode;
  animationDuration?: number;
  strokeWidth?: number;
  strokeColor?: string;
}

const DEFAULT_COLORS = [
  '#0F172A', // slate-900
  '#475569', // slate-600  
  '#64748B', // slate-500
  '#94A3B8', // slate-400
  '#CBD5E1', // slate-300
  '#E2E8F0', // slate-200
];

const SIZE_CONFIG = {
  xxs: { size: 120, strokeWidth: 30 },
  xs: { size: 160, strokeWidth: 40 },
  sm: { size: 200, strokeWidth: 50 },
  md: { size: 240, strokeWidth: 60 },
  lg: { size: 280, strokeWidth: 70 },
};

function calculatePieSlices(data: PieChartDataPoint[]): Array<PieChartDataPoint & { 
  angle: number; 
  startAngle: number; 
  endAngle: number;
  color: string;
}> {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90; // Start from top

  return data.map((item, index) => {
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    return {
      ...item,
      angle,
      startAngle,
      endAngle,
      color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
    };
  });
}

function createArcPath(
  centerX: number,
  centerY: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
): string {
  const startAngleRad = (startAngle * Math.PI) / 180;
  const endAngleRad = (endAngle * Math.PI) / 180;

  const x1 = centerX + outerRadius * Math.cos(startAngleRad);
  const y1 = centerY + outerRadius * Math.sin(startAngleRad);
  const x2 = centerX + outerRadius * Math.cos(endAngleRad);
  const y2 = centerY + outerRadius * Math.sin(endAngleRad);

  const x3 = centerX + innerRadius * Math.cos(endAngleRad);
  const y3 = centerY + innerRadius * Math.sin(endAngleRad);
  const x4 = centerX + innerRadius * Math.cos(startAngleRad);
  const y4 = centerY + innerRadius * Math.sin(startAngleRad);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', x1, y1,
    'A', outerRadius, outerRadius, 0, largeArcFlag, 1, x2, y2,
    'L', x3, y3,
    'A', innerRadius, innerRadius, 0, largeArcFlag, 0, x4, y4,
    'Z'
  ].join(' ');
}

const LegendItem: React.FC<{ 
  color: string; 
  label: string; 
  className?: string;
}> = ({ color, label, className }) => (
  <div className={`piechart-legend-item ${className || ''}`}>
    <div className="piechart-legend-dot" style={{ backgroundColor: color }} />
    <span className="piechart-legend-label">{label}</span>
  </div>
);

const Legend: React.FC<{
  items: Array<{ color: string; label: string }>;
  position: 'right' | 'bottom';
  className?: string;
}> = ({ items, position, className }) => (
  <div className={`piechart-legend piechart-legend--${position} ${className || ''}`}>
    {items.map((item, index) => (
      <LegendItem 
        key={`${item.label}-${index}`}
        color={item.color}
        label={item.label}
      />
    ))}
  </div>
);

export const PieChart: React.FC<PieChartProps> = ({
  data,
  size = 'md',
  showLegend = true,
  innerRadius,
  outerRadius,
  className = '',
  legendPosition = 'right',
  centerContent,
  animationDuration = 300,
  strokeWidth = 1,
  strokeColor = 'transparent',
  ...props
}) => {
  const config = SIZE_CONFIG[size];
  const defaultInnerRadius = config.size / 2 - config.strokeWidth;
  const defaultOuterRadius = config.size / 2;
  
  const finalInnerRadius = innerRadius ?? defaultInnerRadius;
  const finalOuterRadius = outerRadius ?? defaultOuterRadius;
  
  const slices = calculatePieSlices(data);
  const centerX = config.size / 2;
  const centerY = config.size / 2;

  const legendItems = slices.map(slice => ({
    color: slice.color,
    label: slice.label,
  }));

  if (data.length === 0) {
    return (
      <div className={`piechart piechart--${size} piechart--empty ${className}`}>
        <div className="piechart-empty-message">No data available</div>
      </div>
    );
  }

  return (
    <div 
      className={`piechart piechart--${size} ${showLegend ? `piechart--with-legend piechart--legend-${legendPosition}` : ''} ${className}`}
      {...props}
    >
      <div className="piechart-chart-container">
        <svg
          className="piechart-svg"
          width={config.size}
          height={config.size}
          viewBox={`0 0 ${config.size} ${config.size}`}
        >
          {/* Background ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={finalOuterRadius}
            fill="var(--piechart-background-color, #E2E8F0)"
            className="piechart-background"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={finalInnerRadius}
            fill="var(--piechart-inner-background, white)"
            className="piechart-inner-background"
          />

          {/* Pie slices */}
          {slices.map((slice, index) => {
            const path = createArcPath(
              centerX,
              centerY,
              finalInnerRadius,
              finalOuterRadius,
              slice.startAngle,
              slice.endAngle
            );

            return (
              <path
                key={`slice-${index}`}
                d={path}
                fill={slice.color}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                className="piechart-slice"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: `${animationDuration}ms`,
                }}
              />
            );
          })}
        </svg>

        {/* Center content */}
        {centerContent && (
          <div className="piechart-center-content">
            {centerContent}
          </div>
        )}
      </div>

      {/* Legend */}
      {showLegend && (
        <Legend 
          items={legendItems}
          position={legendPosition}
          className="piechart-legend-container"
        />
      )}
    </div>
  );
};

export default PieChart;
