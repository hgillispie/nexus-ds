import React from 'react';
import './input.css';

export interface InputProps {
  /**
   * Type of input field
   */
  type?: 'default' | 'payment' | 'leading-dropdown' | 'trailing-dropdown' | 'leading-text';
  
  /**
   * Whether this is an error state
   */
  error?: boolean;
  
  /**
   * Label text for the input
   */
  label?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Input value
   */
  value?: string;
  
  /**
   * Help/hint text below the input
   */
  helpText?: string;
  
  /**
   * Whether to show the help icon
   */
  showHelpIcon?: boolean;
  
  /**
   * Leading text for leading-text type (e.g., "http://")
   */
  leadingText?: string;
  
  /**
   * Dropdown value for dropdown types
   */
  dropdownValue?: string;
  
  /**
   * Dropdown options for dropdown types
   */
  dropdownOptions?: string[];
  
  /**
   * Icon to display (for default and payment types)
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  
  /**
   * Input change handler
   */
  onChange?: (value: string) => void;
  
  /**
   * Dropdown change handler
   */
  onDropdownChange?: (value: string) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface TextareaProps {
  /**
   * Whether this is an error state
   */
  error?: boolean;
  
  /**
   * Label text for the textarea
   */
  label?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Textarea value
   */
  value?: string;
  
  /**
   * Help/hint text below the textarea
   */
  helpText?: string;
  
  /**
   * Number of rows
   */
  rows?: number;
  
  /**
   * Whether the textarea is disabled
   */
  disabled?: boolean;
  
  /**
   * Textarea change handler
   */
  onChange?: (value: string) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Mail icon component
 */
const MailIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M18.3333 4.99998C18.3333 4.08331 17.5833 3.33331 16.6667 3.33331H3.33333C2.41666 3.33331 1.66666 4.08331 1.66666 4.99998M18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6667 16.6666H3.33333C2.41666 16.6666 1.66666 15.9166 1.66666 15V4.99998M18.3333 4.99998L10 10.8333L1.66666 4.99998" 
      stroke="#717680" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Help icon component
 */
const HelpIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_8677_842)">
      <path 
        d="M6.06001 5.99998C6.21675 5.55442 6.52611 5.17872 6.93331 4.9394C7.34052 4.70009 7.81927 4.61261 8.28479 4.69245C8.75032 4.7723 9.17255 5.01433 9.47673 5.37567C9.7809 5.737 9.94738 6.19433 9.94668 6.66665C9.94668 7.99998 7.94668 8.66665 7.94668 8.66665M8.00001 11.3333H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" 
        stroke="#A4A7AE" 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8677_842">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/**
 * Alert icon component
 */
const AlertIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1094_4748)">
      <path 
        d="M8.00001 5.33331V7.99998M8.00001 10.6666H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" 
        stroke="#0EA5E9" 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1094_4748">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/**
 * Chevron down icon component
 */
const ChevronDownIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 7.5L10 12.5L15 7.5" 
      stroke="#717680" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Mastercard payment icon component
 */
const MastercardIcon: React.FC = () => (
  <div className="nexus-input__payment-icon">
    <svg width="22" height="13" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z" 
        fill="#ED0006"
      />
    </svg>
    <svg width="11" height="13" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M0.178955 11.8294C1.63689 10.6005 2.56136 8.77192 2.56136 6.72997C2.56136 4.68801 1.63689 2.85941 0.178955 1.63051C1.363 0.632465 2.89891 0.0299683 4.57724 0.0299683C8.32211 0.0299683 11.3579 3.02966 11.3579 6.72997C11.3579 10.4303 8.32211 13.43 4.57724 13.43C2.89891 13.43 1.363 12.8275 0.178955 11.8294Z" 
        fill="#F9A000"
      />
    </svg>
    <svg width="5" height="10" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3.17901 10.8294C4.63693 9.60052 5.56139 7.77193 5.56139 5.72999C5.56139 3.68805 4.63693 1.85946 3.17901 0.630554C1.72109 1.85946 0.796631 3.68805 0.796631 5.72999C0.796631 7.77193 1.72109 9.60052 3.17901 10.8294Z" 
        fill="#FF5E00"
      />
    </svg>
  </div>
);

/**
 * Input field component with multiple variants
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  type = 'default',
  error = false,
  label,
  placeholder,
  value,
  helpText,
  showHelpIcon = true,
  leadingText,
  dropdownValue,
  dropdownOptions = [],
  icon,
  disabled = false,
  onChange,
  onDropdownChange,
  className,
  ...props
}, ref) => {
  // Build CSS classes
  const containerClasses = [
    'nexus-input-container',
    className
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'nexus-input',
    `nexus-input--${type}`,
    error ? 'nexus-input--error' : '',
    disabled ? 'nexus-input--disabled' : ''
  ].filter(Boolean).join(' ');

  const helpTextClasses = [
    'nexus-input__help-text',
    error ? 'nexus-input__help-text--error' : ''
  ].filter(Boolean).join(' ');

  // Default icons for different input types
  const getDefaultIcon = () => {
    switch (type) {
      case 'default':
        return <MailIcon />;
      case 'payment':
        return <MastercardIcon />;
      default:
        return null;
    }
  };

  const displayIcon = icon || getDefaultIcon();

  return (
    <div className={containerClasses}>
      {label && (
        <label className="nexus-input__label">
          {label}
        </label>
      )}
      
      <div className={inputClasses}>
        {/* Leading dropdown */}
        {type === 'leading-dropdown' && (
          <div className="nexus-input__dropdown nexus-input__dropdown--leading">
            <span className="nexus-input__dropdown-text">{dropdownValue || 'US'}</span>
            <ChevronDownIcon />
          </div>
        )}
        
        {/* Leading text */}
        {type === 'leading-text' && (
          <div className="nexus-input__leading-text">
            {leadingText || 'http://'}
          </div>
        )}
        
        {/* Main input content */}
        <div className="nexus-input__content">
          {displayIcon && type !== 'trailing-dropdown' && (
            <span className="nexus-input__icon">
              {displayIcon}
            </span>
          )}
          
          {type === 'trailing-dropdown' && (
            <span className="nexus-input__currency">$</span>
          )}
          
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            className="nexus-input__field"
            {...props}
          />
          
          {error ? (
            <span className="nexus-input__alert">
              <AlertIcon />
            </span>
          ) : (
            showHelpIcon && type !== 'leading-dropdown' && type !== 'trailing-dropdown' && (
              <span className="nexus-input__help-icon">
                <HelpIcon />
              </span>
            )
          )}
        </div>
        
        {/* Trailing dropdown */}
        {type === 'trailing-dropdown' && (
          <div className="nexus-input__dropdown nexus-input__dropdown--trailing">
            <span className="nexus-input__dropdown-text">{dropdownValue || 'USD'}</span>
            <ChevronDownIcon />
          </div>
        )}
      </div>
      
      {helpText && (
        <p className={helpTextClasses}>
          {helpText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

/**
 * Textarea component
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  error = false,
  label,
  placeholder = 'Enter a description...',
  value,
  helpText = 'This is a hint text to help user.',
  rows = 4,
  disabled = false,
  onChange,
  className,
  ...props
}, ref) => {
  const containerClasses = [
    'nexus-textarea-container',
    className
  ].filter(Boolean).join(' ');

  const textareaClasses = [
    'nexus-textarea',
    error ? 'nexus-textarea--error' : '',
    disabled ? 'nexus-textarea--disabled' : ''
  ].filter(Boolean).join(' ');

  const helpTextClasses = [
    'nexus-textarea__help-text',
    error ? 'nexus-textarea__help-text--error' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label className="nexus-textarea__label">
          {label}
        </label>
      )}
      
      <div className={textareaClasses}>
        <textarea
          ref={ref}
          placeholder={placeholder}
          value={value}
          rows={rows}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className="nexus-textarea__field"
          {...props}
        />
      </div>
      
      {helpText && (
        <p className={helpTextClasses}>
          {helpText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';
