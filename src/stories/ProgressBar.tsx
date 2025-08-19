import React from 'react';
import './progressbar.css';

// Tooltip arrow component for floating labels
const TooltipArrow = ({ direction = 'down' }: { direction?: 'up' | 'down' }) => {
  if (direction === 'down') {
    return (
      <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z" fill="white"/>
      </svg>
    );
  }
  
  return (
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.92894 8.51471C1.03803 8.51471 0.591868 7.43757 1.22183 6.8076L7.29289 0.736529C7.68342 0.346004 8.31658 0.346005 8.70711 0.736529L14.7782 6.8076C15.4081 7.43757 14.962 8.51471 14.0711 8.51471L1.92894 8.51471Z" fill="white"/>
    </svg>
  );
};

// Tooltip component for floating labels
const Tooltip = ({ 
  children, 
  position = 'top',
  style 
}: { 
  children: React.ReactNode; 
  position?: 'top' | 'bottom';
  style?: React.CSSProperties;
}) => (
  <div className={`progressbar-tooltip progressbar-tooltip--${position}`} style={style}>
    {position === 'top' && <TooltipArrow direction="down" />}
    <div className="progressbar-tooltip__content">
      {children}
    </div>
    {position === 'bottom' && <TooltipArrow direction="up" />}
  </div>
);

// ProgressBar component interface
export interface ProgressBarProps {
  /** Progress value between 0 and 100 */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Label position */
  label?: 'right' | 'bottom' | 'top-floating' | 'bottom-floating' | false;
  /** Show percentage text */
  showPercentage?: boolean;
  /** Custom label text (overrides percentage) */
  labelText?: string;
  /** Progress bar width */
  width?: number | string;
  /** Progress bar height */
  height?: number;
  /** Background color */
  backgroundColor?: string;
  /** Progress color */
  progressColor?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Accessibility description */
  'aria-describedby'?: string;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Callback when progress changes */
  onProgressChange?: (value: number) => void;
}

// Main ProgressBar component
export const ProgressBar = ({
  value,
  max = 100,
  label = 'right',
  showPercentage = true,
  labelText,
  width = 320,
  height = 8,
  backgroundColor,
  progressColor,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  animationDuration = 300,
  onProgressChange,
  ...props
}: ProgressBarProps) => {
  // Clamp value between 0 and max
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = Math.round((clampedValue / max) * 100);
  
  // Calculate progress width
  const progressWidth = `${percentage}%`;
  
  // Get display text
  const displayText = labelText || `${percentage}%`;
  
  // Handle value changes
  React.useEffect(() => {
    onProgressChange?.(clampedValue);
  }, [clampedValue, onProgressChange]);

  // Calculate tooltip position for floating labels
  const getTooltipPosition = (): React.CSSProperties => {
    const progressBarWidth = typeof width === 'number' ? width : 320;
    const tooltipWidth = displayText.length <= 3 ? 43 : displayText.length <= 4 ? 50 : 56;
    const progressPixels = (percentage / 100) * progressBarWidth;
    const left = Math.max(-17, Math.min(progressPixels - tooltipWidth / 2, progressBarWidth - tooltipWidth));
    
    return { left: `${left}px` };
  };

  const progressBarClasses = [
    'progressbar',
    label && `progressbar--label-${label.replace('-', '_')}`,
    disabled && 'progressbar--disabled',
    className
  ].filter(Boolean).join(' ');

  const progressBarStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: `${height}px`,
    backgroundColor,
    ...props.style
  };

  const progressStyle: React.CSSProperties = {
    width: progressWidth,
    height: `${height}px`,
    backgroundColor: progressColor,
    transition: `width ${animationDuration}ms ease-in-out`
  };

  return (
    <div className={progressBarClasses}>
      <div className="progressbar__container">
        {/* Progress bar track */}
        <div 
          className="progressbar__track"
          style={progressBarStyle}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
        >
          {/* Progress bar fill */}
          <div 
            className="progressbar__fill"
            style={progressStyle}
          />
          
          {/* Floating tooltips */}
          {label === 'top-floating' && (
            <Tooltip position="top" style={getTooltipPosition()}>
              {showPercentage && displayText}
            </Tooltip>
          )}
          
          {label === 'bottom-floating' && (
            <Tooltip position="bottom" style={getTooltipPosition()}>
              {showPercentage && displayText}
            </Tooltip>
          )}
        </div>

        {/* Static labels */}
        {label === 'right' && showPercentage && (
          <div className="progressbar__label progressbar__label--right">
            {displayText}
          </div>
        )}
      </div>

      {/* Bottom label */}
      {label === 'bottom' && showPercentage && (
        <div className="progressbar__label progressbar__label--bottom">
          {displayText}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
