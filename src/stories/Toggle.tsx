import React, { useState, useRef, useEffect } from 'react';
import './toggle.css';

export interface ToggleProps {
  /**
   * Whether the toggle is checked/pressed
   */
  checked?: boolean;
  
  /**
   * Default checked state for uncontrolled usage
   */
  defaultChecked?: boolean;
  
  /**
   * Size variant of the toggle
   */
  size?: 'sm' | 'md';
  
  /**
   * Whether to show text label
   */
  showText?: boolean;
  
  /**
   * Text label for the toggle
   */
  label?: string;
  
  /**
   * Whether to show supporting text
   */
  showSupportingText?: boolean;
  
  /**
   * Supporting text description
   */
  supportingText?: string;
  
  /**
   * Whether the toggle is disabled
   */
  disabled?: boolean;
  
  /**
   * Callback when toggle state changes
   */
  onChange?: (checked: boolean) => void;
  
  /**
   * Callback when toggle is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Callback when toggle receives focus
   */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  
  /**
   * Callback when toggle loses focus
   */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Unique identifier for the toggle
   */
  id?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA described by for accessibility
   */
  'aria-describedby'?: string;
}

/**
 * Toggle component for binary on/off states
 * 
 * Features:
 * - Two sizes: sm (36x20px) and md (44x24px)
 * - Optional text label and supporting text
 * - Comprehensive accessibility support
 * - Keyboard navigation (Space/Enter to toggle)
 * - Focus management and visual states
 * - Disabled state support
 * - Controlled and uncontrolled modes
 */
export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(({
  checked,
  defaultChecked = false,
  size = 'md',
  showText = false,
  label = 'Remember me',
  showSupportingText = false,
  supportingText = 'Save my login details for next time.',
  disabled = false,
  onChange,
  onClick,
  onFocus,
  onBlur,
  className,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  // Handle controlled vs uncontrolled state
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;
  
  // Generate unique IDs for accessibility
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = `${toggleId}-label`;
  const supportingTextId = `${toggleId}-supporting-text`;
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    const newChecked = !checkedValue;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
    onClick?.(event);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    // Handle Space and Enter keys
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      const newChecked = !checkedValue;
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      onChange?.(newChecked);
    }
  };
  
  // Build class names
  const baseClasses = 'nexus-toggle';
  const sizeClass = `nexus-toggle--${size}`;
  const checkedClass = checkedValue ? 'nexus-toggle--checked' : '';
  const disabledClass = disabled ? 'nexus-toggle--disabled' : '';
  const textClass = showText ? 'nexus-toggle--with-text' : '';
  
  const toggleClasses = [
    baseClasses,
    sizeClass,
    checkedClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');
  
  const containerClasses = [
    'nexus-toggle-container',
    textClass
  ].filter(Boolean).join(' ');
  
  // Build ARIA describedby
  const describedByIds = [];
  if (showText && label) describedByIds.push(labelId);
  if (showSupportingText && supportingText) describedByIds.push(supportingTextId);
  if (ariaDescribedBy) describedByIds.push(ariaDescribedBy);
  
  const finalAriaDescribedBy = describedByIds.length > 0 ? describedByIds.join(' ') : undefined;
  
  if (!showText && !showSupportingText) {
    // Render just the toggle switch
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        id={toggleId}
        className={toggleClasses}
        aria-checked={checkedValue}
        aria-label={ariaLabel || label}
        aria-describedby={finalAriaDescribedBy}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      >
        <span className="nexus-toggle__track">
          <span className="nexus-toggle__thumb" />
        </span>
      </button>
    );
  }
  
  // Render toggle with text content
  return (
    <div className={containerClasses}>
      <button
        ref={ref}
        type="button"
        role="switch"
        id={toggleId}
        className={toggleClasses}
        aria-checked={checkedValue}
        aria-label={ariaLabel}
        aria-describedby={finalAriaDescribedBy}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      >
        <span className="nexus-toggle__track">
          <span className="nexus-toggle__thumb" />
        </span>
      </button>
      
      {(showText || showSupportingText) && (
        <div className="nexus-toggle-text">
          {showText && label && (
            <div 
              id={labelId}
              className="nexus-toggle-text__label"
            >
              {label}
            </div>
          )}
          
          {showSupportingText && supportingText && (
            <div 
              id={supportingTextId}
              className="nexus-toggle-text__supporting"
            >
              {supportingText}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Toggle.displayName = 'Toggle';
