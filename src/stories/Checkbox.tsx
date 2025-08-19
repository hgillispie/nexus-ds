import React, { useState, useRef, useId } from 'react';
import './checkbox.css';

export interface CheckboxProps {
  /**
   * Type of input - checkbox or radio
   */
  type?: 'checkbox' | 'radio';
  
  /**
   * Whether the checkbox/radio is checked
   */
  checked?: boolean;
  
  /**
   * Default checked state for uncontrolled usage
   */
  defaultChecked?: boolean;
  
  /**
   * Whether the checkbox is in indeterminate state (only for checkbox type)
   */
  indeterminate?: boolean;
  
  /**
   * Size variant of the checkbox/radio
   */
  size?: 'sm' | 'md';
  
  /**
   * Whether to show text label
   */
  showText?: boolean;
  
  /**
   * Text label for the checkbox/radio
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
   * Whether the checkbox/radio is disabled
   */
  disabled?: boolean;
  
  /**
   * Name attribute for radio button groups
   */
  name?: string;
  
  /**
   * Value attribute for the input
   */
  value?: string | number;
  
  /**
   * Callback when checkbox/radio state changes
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Callback when checkbox/radio is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  
  /**
   * Callback when checkbox/radio receives focus
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Callback when checkbox/radio loses focus
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Unique identifier for the checkbox/radio
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
  
  /**
   * Required field indicator
   */
  required?: boolean;
}

/**
 * CheckIcon component for checked state
 */
const CheckIcon: React.FC<{ size: 'sm' | 'md' }> = ({ size }) => {
  if (size === 'sm') {
    return (
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="nexus-checkbox__check-icon"
      >
        <path 
          d="M10 3L4.5 8.5L2 6" 
          stroke="currentColor" 
          strokeWidth="1.6666" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="nexus-checkbox__check-icon"
    >
      <path 
        d="M11.6666 3.5L5.24992 9.91667L2.33325 7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * MinusIcon component for indeterminate state
 */
const MinusIcon: React.FC<{ size: 'sm' | 'md' }> = ({ size }) => {
  if (size === 'sm') {
    return (
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="nexus-checkbox__minus-icon"
      >
        <path 
          d="M2.5 6H9.5" 
          stroke="currentColor" 
          strokeWidth="1.66666" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="nexus-checkbox__minus-icon"
    >
      <path 
        d="M2.91675 7H11.0834" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * Checkbox component for binary selection with support for radio button mode
 * 
 * Features:
 * - Two types: checkbox and radio
 * - Two sizes: sm (16px) and md (20px)
 * - Indeterminate state (checkbox only)
 * - Optional text label and supporting text
 * - Comprehensive accessibility support
 * - Keyboard navigation
 * - Focus management and visual states
 * - Disabled state support
 * - Controlled and uncontrolled modes
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  type = 'checkbox',
  checked,
  defaultChecked = false,
  indeterminate = false,
  size = 'md',
  showText = false,
  label = 'Remember me',
  showSupportingText = false,
  supportingText = 'Save my login details for next time.',
  disabled = false,
  name,
  value,
  onChange,
  onClick,
  onFocus,
  onBlur,
  className,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  required = false,
  ...props
}, ref) => {
  // Handle controlled vs uncontrolled state
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;
  
  // Generate unique IDs for accessibility
  const componentId = useId();
  const inputId = id || `checkbox-${componentId}`;
  const labelId = `${inputId}-label`;
  const supportingTextId = `${inputId}-supporting-text`;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked, event);
  };
  
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event);
  };
  
  // Build class names
  const containerClasses = [
    'nexus-checkbox-container',
    showText || showSupportingText ? 'nexus-checkbox-container--with-text' : '',
    className
  ].filter(Boolean).join(' ');
  
  const inputClasses = [
    'nexus-checkbox',
    `nexus-checkbox--${type}`,
    `nexus-checkbox--${size}`,
    checkedValue ? 'nexus-checkbox--checked' : '',
    indeterminate && type === 'checkbox' ? 'nexus-checkbox--indeterminate' : '',
    disabled ? 'nexus-checkbox--disabled' : ''
  ].filter(Boolean).join(' ');
  
  // Build ARIA describedby
  const describedByIds = [];
  if (showSupportingText && supportingText) describedByIds.push(supportingTextId);
  if (ariaDescribedBy) describedByIds.push(ariaDescribedBy);
  
  const finalAriaDescribedBy = describedByIds.length > 0 ? describedByIds.join(' ') : undefined;
  
  // Handle indeterminate state via ref effect
  const inputRef = useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (inputRef.current && type === 'checkbox') {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, type]);
  
  // Combine refs
  const combinedRef = (node: HTMLInputElement) => {
    inputRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  
  if (!showText && !showSupportingText) {
    // Render just the input control
    return (
      <div className="nexus-checkbox-wrapper">
        <input
          ref={combinedRef}
          type={type}
          id={inputId}
          name={name}
          value={value}
          checked={checkedValue}
          disabled={disabled}
          required={required}
          className={inputClasses}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-label={ariaLabel || label}
          aria-describedby={finalAriaDescribedBy}
          {...props}
        />
        <label htmlFor={inputId} className="nexus-checkbox__visual">
          <span className="nexus-checkbox__box">
            {checkedValue && !indeterminate && <CheckIcon size={size} />}
            {indeterminate && type === 'checkbox' && <MinusIcon size={size} />}
            {type === 'radio' && checkedValue && <span className="nexus-checkbox__radio-dot" />}
          </span>
        </label>
      </div>
    );
  }
  
  // Render input with text content
  return (
    <div className={containerClasses}>
      <div className="nexus-checkbox-wrapper">
        <input
          ref={combinedRef}
          type={type}
          id={inputId}
          name={name}
          value={value}
          checked={checkedValue}
          disabled={disabled}
          required={required}
          className={inputClasses}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-describedby={finalAriaDescribedBy}
          {...props}
        />
        <label htmlFor={inputId} className="nexus-checkbox__visual">
          <span className="nexus-checkbox__box">
            {checkedValue && !indeterminate && <CheckIcon size={size} />}
            {indeterminate && type === 'checkbox' && <MinusIcon size={size} />}
            {type === 'radio' && checkedValue && <span className="nexus-checkbox__radio-dot" />}
          </span>
        </label>
      </div>
      
      {(showText || showSupportingText) && (
        <div className="nexus-checkbox-text">
          {showText && label && (
            <label 
              htmlFor={inputId}
              id={labelId}
              className="nexus-checkbox-text__label"
            >
              {label}
            </label>
          )}
          
          {showSupportingText && supportingText && (
            <div 
              id={supportingTextId}
              className="nexus-checkbox-text__supporting"
            >
              {supportingText}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
