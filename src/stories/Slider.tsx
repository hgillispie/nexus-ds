import React, { useState, useEffect, useRef, useCallback } from 'react';
import './slider.css';

// Slider component interface
export interface SliderProps {
  /** Current value for single slider or start value for range slider */
  value?: number;
  /** End value for range slider (if provided, enables range mode) */
  endValue?: number;
  /** Minimum value (default: 0) */
  min?: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Step increment (default: 1) */
  step?: number;
  /** Show value labels */
  showLabels?: boolean;
  /** Custom label format function */
  labelFormat?: (value: number) => string;
  /** Disabled state */
  disabled?: boolean;
  /** Track width in pixels */
  width?: number | string;
  /** Track height in pixels */
  height?: number;
  /** Handle size in pixels */
  handleSize?: number;
  /** Custom CSS class */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Callback when value changes */
  onChange?: (value: number | [number, number]) => void;
  /** Callback when sliding starts */
  onSlideStart?: () => void;
  /** Callback when sliding ends */
  onSlideEnd?: () => void;
  /** ARIA label */
  'aria-label'?: string;
  /** ARIA labelledby */
  'aria-labelledby'?: string;
}

export const Slider: React.FC<SliderProps> = ({
  value = 0,
  endValue,
  min = 0,
  max = 100,
  step = 1,
  showLabels = true,
  labelFormat = (val) => `${val}%`,
  disabled = false,
  width = '100%',
  height = 4,
  handleSize = 20,
  className = '',
  style,
  onChange,
  onSlideStart,
  onSlideEnd,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}) => {
  const isRange = endValue !== undefined;
  const [isDragging, setIsDragging] = useState<'start' | 'end' | null>(null);
  const [startValue, setStartValue] = useState(Math.max(min, Math.min(max, value)));
  const [endVal, setEndVal] = useState(isRange ? Math.max(min, Math.min(max, endValue)) : value);
  const trackRef = useRef<HTMLDivElement>(null);

  // Ensure start value is always less than or equal to end value in range mode
  useEffect(() => {
    if (isRange && startValue > endVal) {
      if (isDragging === 'start') {
        setEndVal(startValue);
      } else if (isDragging === 'end') {
        setStartValue(endVal);
      }
    }
  }, [startValue, endVal, isRange, isDragging]);

  // Update internal state when props change
  useEffect(() => {
    setStartValue(Math.max(min, Math.min(max, value)));
  }, [value, min, max]);

  useEffect(() => {
    if (isRange && endValue !== undefined) {
      setEndVal(Math.max(min, Math.min(max, endValue)));
    }
  }, [endValue, min, max, isRange]);

  const getValueFromPosition = useCallback((clientX: number): number => {
    if (!trackRef.current) return min;
    
    const rect = trackRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const rawValue = min + percentage * (max - min);
    
    // Round to nearest step
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.max(min, Math.min(max, steppedValue));
  }, [min, max, step]);

  const handleMouseDown = useCallback((handle: 'start' | 'end') => (e: React.MouseEvent) => {
    if (disabled) return;
    
    e.preventDefault();
    setIsDragging(handle);
    onSlideStart?.();

    const handleMouseMove = (e: MouseEvent) => {
      const newValue = getValueFromPosition(e.clientX);
      
      if (handle === 'start') {
        setStartValue(newValue);
        if (!isRange && onChange) {
          onChange(newValue);
        }
      } else if (handle === 'end' && isRange) {
        setEndVal(newValue);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(null);
      onSlideEnd?.();
      
      if (onChange) {
        if (isRange) {
          onChange([Math.min(startValue, endVal), Math.max(startValue, endVal)]);
        } else {
          onChange(startValue);
        }
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [disabled, getValueFromPosition, isRange, onChange, onSlideStart, onSlideEnd, startValue, endVal]);

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    if (disabled || isDragging) return;
    
    const newValue = getValueFromPosition(e.clientX);
    
    if (isRange) {
      // In range mode, move the closest handle
      const startDistance = Math.abs(newValue - startValue);
      const endDistance = Math.abs(newValue - endVal);
      
      if (startDistance < endDistance) {
        setStartValue(newValue);
      } else {
        setEndVal(newValue);
      }
      
      if (onChange) {
        const sortedValues = [startValue, endVal].sort((a, b) => a - b);
        onChange([sortedValues[0], sortedValues[1]]);
      }
    } else {
      setStartValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  }, [disabled, isDragging, getValueFromPosition, isRange, startValue, endVal, onChange]);

  const handleKeyDown = useCallback((handle: 'start' | 'end') => (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    let delta = 0;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        delta = -step;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        delta = step;
        break;
      case 'Home':
        delta = min - (handle === 'start' ? startValue : endVal);
        break;
      case 'End':
        delta = max - (handle === 'start' ? startValue : endVal);
        break;
      case 'PageDown':
        delta = -step * 10;
        break;
      case 'PageUp':
        delta = step * 10;
        break;
      default:
        return;
    }
    
    e.preventDefault();
    
    const currentValue = handle === 'start' ? startValue : endVal;
    const newValue = Math.max(min, Math.min(max, currentValue + delta));
    
    if (handle === 'start') {
      setStartValue(newValue);
      if (!isRange && onChange) {
        onChange(newValue);
      }
    } else if (handle === 'end' && isRange) {
      setEndVal(newValue);
    }
    
    if (isRange && onChange) {
      const sortedValues = handle === 'start' 
        ? [newValue, endVal].sort((a, b) => a - b)
        : [startValue, newValue].sort((a, b) => a - b);
      onChange([sortedValues[0], sortedValues[1]]);
    }
  }, [disabled, step, min, max, startValue, endVal, isRange, onChange]);

  // Calculate positions and progress
  const startPercent = ((startValue - min) / (max - min)) * 100;
  const endPercent = isRange ? ((endVal - min) / (max - min)) * 100 : startPercent;
  const progressLeft = isRange ? Math.min(startPercent, endPercent) : 0;
  const progressWidth = isRange ? Math.abs(endPercent - startPercent) : startPercent;

  const sliderClasses = [
    'slider',
    disabled && 'slider--disabled',
    isDragging && 'slider--dragging',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={sliderClasses}
      style={{
        ...style,
        width,
        '--slider-track-height': `${height}px`,
        '--slider-handle-size': `${handleSize}px`,
      } as React.CSSProperties}
    >
      <div 
        className="slider__track-container"
        ref={trackRef}
        onClick={handleTrackClick}
      >
        <div className="slider__track" />
        <div 
          className="slider__progress"
          style={{
            left: `${progressLeft}%`,
            width: `${progressWidth}%`,
          }}
        />
        
        {/* Start handle */}
        <div
          className={`slider__handle slider__handle--start ${
            isDragging === 'start' ? 'slider__handle--dragging' : ''
          }`}
          style={{ left: `${startPercent}%` }}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={startValue}
          aria-valuetext={labelFormat(startValue)}
          aria-label={ariaLabel || (isRange ? 'Start value' : 'Slider value')}
          aria-labelledby={ariaLabelledBy}
          aria-disabled={disabled}
          onMouseDown={handleMouseDown('start')}
          onKeyDown={handleKeyDown('start')}
        />
        
        {/* End handle (range mode only) */}
        {isRange && (
          <div
            className={`slider__handle slider__handle--end ${
              isDragging === 'end' ? 'slider__handle--dragging' : ''
            }`}
            style={{ left: `${endPercent}%` }}
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={endVal}
            aria-valuetext={labelFormat(endVal)}
            aria-label="End value"
            aria-labelledby={ariaLabelledBy}
            aria-disabled={disabled}
            onMouseDown={handleMouseDown('end')}
            onKeyDown={handleKeyDown('end')}
          />
        )}
      </div>
      
      {/* Labels */}
      {showLabels && (
        <div className="slider__labels">
          <span 
            className="slider__label slider__label--start"
            style={{ left: `${startPercent}%` }}
          >
            {labelFormat(startValue)}
          </span>
          {isRange && (
            <span 
              className="slider__label slider__label--end"
              style={{ left: `${endPercent}%` }}
            >
              {labelFormat(endVal)}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Slider;
