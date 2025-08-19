import React, { useState, useRef, useEffect } from 'react';
import './select.css';

export interface SelectOptionProps {
  /**
   * The value of the option
   */
  value: string | number;
  
  /**
   * The display label for the option
   */
  label: string;
  
  /**
   * Optional supporting text
   */
  supportingText?: string;
  
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;
  
  /**
   * Whether this option is disabled
   */
  disabled?: boolean;
}

export interface SelectProps {
  /**
   * Array of options to display
   */
  options: SelectOptionProps[];
  
  /**
   * Currently selected value
   */
  value?: string | number;
  
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  
  /**
   * Label text for the select
   */
  label?: string;
  
  /**
   * Whether to show a label
   */
  showLabel?: boolean;
  
  /**
   * Type of select input
   */
  type?: 'default' | 'icon-leading' | 'search';
  
  /**
   * Whether the select is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the select has an error state
   */
  error?: boolean;
  
  /**
   * Help text below the select
   */
  helpText?: string;
  
  /**
   * Function called when selection changes
   */
  onChange?: (value: string | number) => void;
  
  /**
   * Function called when search text changes (for search type)
   */
  onSearch?: (searchText: string) => void;
  
  /**
   * Whether the dropdown is open (controlled)
   */
  isOpen?: boolean;
  
  /**
   * Function called when dropdown should open/close
   */
  onToggle?: (isOpen: boolean) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * ID for the select input
   */
  id?: string;
}

/**
 * User icon component
 */
const UserIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15906 9.16667 6.66668 7.67428 6.66668 5.83333C6.66668 3.99238 8.15906 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z" 
      stroke="currentColor" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Search icon component
 */
const SearchIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" 
      stroke="currentColor" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron down icon component
 */
const ChevronDownIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 7.5L10 12.5L15 7.5" 
      stroke="currentColor" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron up icon component
 */
const ChevronUpIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M15 12.5L10 7.5L5 12.5" 
      stroke="currentColor" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Check icon component for selected items
 */
const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M16.6667 5L7.50001 14.1667L3.33334 10" 
      stroke="currentColor" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Select option component for dropdown items
 */
export const SelectOption = React.forwardRef<HTMLButtonElement, SelectOptionProps & {
  isSelected: boolean;
  onClick: () => void;
  showCheck?: boolean;
}>(({
  label,
  supportingText,
  icon,
  disabled = false,
  isSelected = false,
  onClick,
  showCheck = true,
  ...props
}, ref) => {
  const baseClasses = 'nexus-select-option';
  const selectedClass = isSelected ? 'nexus-select-option--selected' : '';
  const disabledClass = disabled ? 'nexus-select-option--disabled' : '';
  
  const classes = [
    baseClasses,
    selectedClass,
    disabledClass
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="nexus-select-option__content">
        {icon && (
          <span className="nexus-select-option__icon">
            {icon}
          </span>
        )}
        <div className="nexus-select-option__text">
          <span className="nexus-select-option__label">{label}</span>
          {supportingText && (
            <span className="nexus-select-option__supporting-text">
              {supportingText}
            </span>
          )}
        </div>
      </div>
      {showCheck && isSelected && (
        <span className="nexus-select-option__check">
          <CheckIcon />
        </span>
      )}
    </button>
  );
});

SelectOption.displayName = 'SelectOption';

/**
 * Select dropdown component
 */
export const SelectDropdown = React.forwardRef<HTMLDivElement, {
  options: SelectOptionProps[];
  selectedValue?: string | number;
  onSelect: (value: string | number) => void;
  isOpen: boolean;
  showIcons?: boolean;
}>(({
  options,
  selectedValue,
  onSelect,
  isOpen,
  showIcons = false,
  ...props
}, ref) => {
  const baseClasses = 'nexus-select-dropdown';
  const openClass = isOpen ? 'nexus-select-dropdown--open' : '';
  
  const classes = [
    baseClasses,
    openClass
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      className={classes}
      {...props}
    >
      {options.map((option, index) => (
        <SelectOption
          key={`${option.value}-${index}`}
          {...option}
          isSelected={option.value === selectedValue}
          onClick={() => onSelect(option.value)}
          showCheck={!showIcons}
        />
      ))}
    </div>
  );
});

SelectDropdown.displayName = 'SelectDropdown';

/**
 * Main Select component
 */
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(({
  options,
  value,
  placeholder = 'Select an option',
  label,
  showLabel = true,
  type = 'default',
  disabled = false,
  error = false,
  helpText,
  onChange,
  onSearch,
  isOpen: controlledIsOpen,
  onToggle,
  className,
  id,
  ...props
}, ref) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const selectedOption = options.find(option => option.value === value);
  
  const filteredOptions = type === 'search' && searchText
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchText.toLowerCase()) ||
        (option.supportingText && option.supportingText.toLowerCase().includes(searchText.toLowerCase()))
      )
    : options;

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    if (onToggle) {
      onToggle(newIsOpen);
    } else {
      setInternalIsOpen(newIsOpen);
    }
  };

  const handleSelect = (optionValue: string | number) => {
    if (onChange) {
      onChange(optionValue);
    }
    
    if (onToggle) {
      onToggle(false);
    } else {
      setInternalIsOpen(false);
    }
    
    if (type === 'search') {
      setSearchText('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    if (onSearch) {
      onSearch(newSearchText);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (onToggle) {
          onToggle(false);
        } else {
          setInternalIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onToggle]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          e.preventDefault();
          handleToggle();
        }
        break;
      case 'Escape':
        if (isOpen) {
          e.preventDefault();
          if (onToggle) {
            onToggle(false);
          } else {
            setInternalIsOpen(false);
          }
        }
        break;
      case 'ArrowDown':
        if (!isOpen) {
          e.preventDefault();
          handleToggle();
        }
        break;
    }
  };

  const baseClasses = 'nexus-select-container';
  const errorClass = error ? 'nexus-select-container--error' : '';
  const disabledClass = disabled ? 'nexus-select-container--disabled' : '';
  
  const containerClasses = [
    baseClasses,
    errorClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'nexus-select-input',
    `nexus-select-input--${type}`,
    isOpen ? 'nexus-select-input--open' : '',
    error ? 'nexus-select-input--error' : '',
    disabled ? 'nexus-select-input--disabled' : ''
  ].filter(Boolean).join(' ');

  const getDisplayIcon = () => {
    if (type === 'search') return <SearchIcon />;
    if (type === 'icon-leading') return <UserIcon />;
    return null;
  };

  const getDisplayText = () => {
    if (type === 'search' && isOpen) {
      return searchText;
    }
    if (selectedOption) {
      return selectedOption.label;
    }
    return placeholder;
  };

  const getDisplaySupportingText = () => {
    if (type === 'search' && isOpen) {
      return '';
    }
    if (selectedOption && selectedOption.supportingText) {
      return selectedOption.supportingText;
    }
    return '';
  };

  return (
    <div className={containerClasses} {...props}>
      {showLabel && label && (
        <label htmlFor={id} className="nexus-select-label">
          {label}
        </label>
      )}
      
      <div className="nexus-select-wrapper" ref={selectRef}>
        <div
          className={inputClasses}
          onClick={!disabled ? handleToggle : undefined}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          id={id}
        >
          <div className="nexus-select-input__content">
            {getDisplayIcon() && (
              <span className="nexus-select-input__icon">
                {getDisplayIcon()}
              </span>
            )}
            
            {type === 'search' && isOpen ? (
              <input
                type="text"
                className="nexus-select-input__search"
                value={searchText}
                onChange={handleSearchChange}
                placeholder={placeholder}
                autoFocus
              />
            ) : (
              <div className="nexus-select-input__text">
                <span className={`nexus-select-input__value ${!selectedOption ? 'nexus-select-input__placeholder' : ''}`}>
                  {getDisplayText()}
                </span>
                {getDisplaySupportingText() && (
                  <span className="nexus-select-input__supporting-text">
                    {getDisplaySupportingText()}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <span className="nexus-select-input__chevron">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </div>
        
        <SelectDropdown
          ref={dropdownRef}
          options={filteredOptions}
          selectedValue={value}
          onSelect={handleSelect}
          isOpen={isOpen}
          showIcons={type === 'icon-leading'}
        />
      </div>
      
      {helpText && (
        <p className={`nexus-select-help-text ${error ? 'nexus-select-help-text--error' : ''}`}>
          {helpText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

// Export icons for use in stories
export { UserIcon, SearchIcon, ChevronDownIcon, ChevronUpIcon, CheckIcon };
