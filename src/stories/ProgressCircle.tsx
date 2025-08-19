import React from 'react';
import './progresscircle.css';

// Size configurations for different circle sizes
const SIZE_CONFIG = {
  xxs: {
    diameter: 64,
    strokeWidth: 6,
    fontSize: 14,
    labelFontSize: 12
  },
  xs: {
    diameter: 160,
    strokeWidth: 16,
    fontSize: 24,
    labelFontSize: 12
  },
  sm: {
    diameter: 200,
    strokeWidth: 20,
    fontSize: 30,
    labelFontSize: 12
  },
  md: {
    diameter: 240,
    strokeWidth: 24,
    fontSize: 36,
    labelFontSize: 14
  },
  lg: {
    diameter: 280,
    strokeWidth: 28,
    fontSize: 48,
    labelFontSize: 14
  }
};

// ProgressCircle component interface
export interface ProgressCircleProps {
  /** Progress value between 0 and 100 */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Size variant */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Shape variant */
  shape?: 'circle' | 'half-circle';
  /** Show label text */
  showLabel?: boolean;
  /** Label text (overrides default) */
  label?: string;
  /** Show percentage text */
  showPercentage?: boolean;
  /** Custom percentage text */
  percentageText?: string;
  /** Background stroke color */
  backgroundColor?: string;
  /** Progress stroke color */
  progressColor?: string;
  /** Text color */
  textColor?: string;
  /** Label text color */
  labelColor?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Callback when progress changes */
  onProgressChange?: (value: number) => void;
}

// Main ProgressCircle component
export const ProgressCircle = ({
  value,
  max = 100,
  size = 'md',
  shape = 'circle',
  showLabel = true,
  label = 'Active users',
  showPercentage = true,
  percentageText,
  backgroundColor,
  progressColor,
  textColor,
  labelColor,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
  animationDuration = 1000,
  onProgressChange,
  ...props
}: ProgressCircleProps) => {
  // Clamp value between 0 and max
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = Math.round((clampedValue / max) * 100);
  
  // Get size configuration
  const config = SIZE_CONFIG[size];
  const { diameter, strokeWidth, fontSize, labelFontSize } = config;
  
  // Calculate circle properties
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = diameter / 2;
  
  // Calculate stroke dash array for progress
  const strokeDasharray = shape === 'half-circle' ? circumference / 2 : circumference;
  const strokeDashoffset = shape === 'half-circle' 
    ? (strokeDasharray * (100 - percentage)) / 100
    : (circumference * (100 - percentage)) / 100;
  
  // Get display text
  const displayPercentage = percentageText || `${percentage}%`;
  
  // Handle value changes
  React.useEffect(() => {
    onProgressChange?.(clampedValue);
  }, [clampedValue, onProgressChange]);

  // Create path for half circle
  const getHalfCirclePath = (isBackground = false) => {
    const startAngle = Math.PI; // Start from left (180 degrees)
    const endAngle = 0; // End at right (0 degrees)
    
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
  };

  // Create path for progress half circle
  const getProgressHalfCirclePath = () => {
    const progressAngle = Math.PI * (percentage / 100);
    const startAngle = Math.PI;
    const endAngle = Math.PI - progressAngle;
    
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    
    const largeArcFlag = progressAngle > Math.PI ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  const progressCircleClasses = [
    'progresscircle',
    `progresscircle--${size}`,
    `progresscircle--${shape.replace('-', '_')}`,
    disabled && 'progresscircle--disabled',
    className
  ].filter(Boolean).join(' ');

  const svgHeight = shape === 'half-circle' ? diameter / 2 + strokeWidth : diameter;
  const contentCenterY = shape === 'half-circle' ? diameter / 2 - 20 : center;

  return (
    <div className={progressCircleClasses} {...props}>
      <div className="progresscircle__container">
        {/* SVG Circle */}
        <svg 
          className="progresscircle__svg"
          width={diameter} 
          height={svgHeight}
          viewBox={`0 0 ${diameter} ${svgHeight}`}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={ariaLabel}
        >
          {/* Background circle/half-circle */}
          {shape === 'circle' ? (
            <circle
              className="progresscircle__background"
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={backgroundColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          ) : (
            <path
              className="progresscircle__background"
              d={getHalfCirclePath(true)}
              fill="none"
              stroke={backgroundColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
          
          {/* Progress circle/half-circle */}
          {shape === 'circle' ? (
            <circle
              className="progresscircle__progress"
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={progressColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: `stroke-dashoffset ${animationDuration}ms ease-in-out`,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center'
              }}
            />
          ) : (
            <path
              className="progresscircle__progress"
              d={getProgressHalfCirclePath()}
              fill="none"
              stroke={progressColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{
                transition: `d ${animationDuration}ms ease-in-out`
              }}
            />
          )}
        </svg>

        {/* Content overlay */}
        <div className="progresscircle__content">
          {/* Label */}
          {showLabel && label && size !== 'xxs' && (
            <div 
              className="progresscircle__label"
              style={{ 
                fontSize: `${labelFontSize}px`,
                color: labelColor,
                ...(shape === 'half-circle' && {
                  transform: `translateY(${-fontSize / 2}px)`
                })
              }}
            >
              {label}
            </div>
          )}
          
          {/* Percentage */}
          {showPercentage && (
            <div 
              className="progresscircle__percentage"
              style={{ 
                fontSize: `${fontSize}px`,
                color: textColor
              }}
            >
              {displayPercentage}
            </div>
          )}
          
          {/* XXS size external label */}
          {size === 'xxs' && showLabel && label && (
            <div className="progresscircle__external-label">
              {label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
