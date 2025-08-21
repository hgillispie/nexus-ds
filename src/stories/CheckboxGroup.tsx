import * as React from 'react';
import { useState } from 'react';
import './checkboxgroup.css';

// Icon components for the featured icons
const LayersIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33325 9.66667L7.99992 13L14.6666 9.66667M7.99992 3L1.33325 6.33333L7.99992 9.66667L14.6666 6.33333L7.99992 3Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ThreeLayersIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_8716_10526)">
      <path d="M1.33325 11.3334L7.99992 14.6667L14.6666 11.3334M1.33325 8.00004L7.99992 11.3334L14.6666 8.00004M7.99992 1.33337L1.33325 4.66671L7.99992 8.00004L14.6666 4.66671L7.99992 1.33337Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_8716_10526">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const ZapIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66667 1.33337L2 9.33337H8L7.33333 14.6667L14 6.66671H8L8.66667 1.33337Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CodepenIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_8716_11002)">
      <path d="M7.99992 1.33337L14.6666 5.66671M7.99992 1.33337L1.33325 5.66671M7.99992 1.33337V5.66671M14.6666 5.66671V10.3334M14.6666 5.66671L7.99992 10.3334M14.6666 10.3334L7.99992 14.6667M14.6666 10.3334L7.99992 5.66671M7.99992 14.6667L1.33325 10.3334M7.99992 14.6667V10.3334M1.33325 10.3334V5.66671M1.33325 10.3334L7.99992 5.66671M1.33325 5.66671L7.99992 10.3334" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_8716_11002">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const SmileIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_8716_11030)">
      <path d="M5.33325 9.33337C5.33325 9.33337 6.33325 10.6667 7.99992 10.6667C9.66659 10.6667 10.6666 9.33337 10.6666 9.33337M5.99992 6.00004H6.00659M9.99992 6.00004H10.0066M14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_8716_11030">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const CheckIcon = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33341 2.5L3.75008 7.08333L1.66675 5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIconMd = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Badge component for the "Limited time only" badge
const Badge = ({ children, color = 'success' }: { children: React.ReactNode; color?: 'success' }) => (
  <div className={`checkboxgroup-badge checkboxgroup-badge--${color}`}>
    <div className="checkboxgroup-badge__content">
      {children}
    </div>
  </div>
);

// Checkbox component for selection state
const CheckboxInput = ({ 
  checked, 
  size = 'sm',
  onChange,
  disabled = false 
}: { 
  checked: boolean; 
  size?: 'sm' | 'md';
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}) => (
  <div 
    className={`checkboxgroup-checkbox checkboxgroup-checkbox--${size} ${checked ? 'checkboxgroup-checkbox--checked' : ''} ${disabled ? 'checkboxgroup-checkbox--disabled' : ''}`}
    onClick={() => !disabled && onChange?.(!checked)}
  >
    {checked && (size === 'sm' ? <CheckIcon /> : <CheckIconMd />)}
  </div>
);

// Featured icon component
const FeaturedIcon = ({ 
  icon, 
  size = 'sm' 
}: { 
  icon: 'layers' | '3-layers' | 'zap' | 'codepen' | 'smile'; 
  size?: 'sm' | 'md';
}) => {
  const iconSize = size === 'sm' ? 16 : 20;
  const iconComponents = {
    'layers': <LayersIcon size={iconSize} />,
    '3-layers': <ThreeLayersIcon size={iconSize} />,
    'zap': <ZapIcon size={iconSize} />,
    'codepen': <CodepenIcon size={iconSize} />,
    'smile': <SmileIcon size={iconSize} />
  };

  return (
    <div className={`checkboxgroup-featured-icon checkboxgroup-featured-icon--${size}`}>
      {iconComponents[icon]}
    </div>
  );
};

// Individual checkbox group item interface
export interface CheckboxGroupItemData {
  id: string;
  planName: string;
  price: string;
  period: string;
  description: string;
  icon?: 'layers' | '3-layers' | 'zap' | 'codepen' | 'smile';
  badge?: string;
  selected?: boolean;
  disabled?: boolean;
}

// Individual checkbox group item component
const CheckboxGroupItem = ({
  item,
  size = 'sm',
  layout = 'simple',
  onSelectionChange,
  className = ''
}: {
  item: CheckboxGroupItemData;
  size?: 'sm' | 'md';
  layout?: 'simple' | 'card';
  onSelectionChange?: (id: string, selected: boolean) => void;
  className?: string;
}) => {
  const handleClick = () => {
    if (!item.disabled) {
      onSelectionChange?.(item.id, !item.selected);
    }
  };

  if (layout === 'card') {
    return (
      <div
        className={`checkboxgroup-item checkboxgroup-item--card checkboxgroup-item--${size} ${item.selected ? 'checkboxgroup-item--selected' : ''} ${item.disabled ? 'checkboxgroup-item--disabled' : ''} ${!item.icon ? 'checkboxgroup-item--no-icon' : ''} ${className}`}
        onClick={handleClick}
      >
        <div className="checkboxgroup-item__header">
          <div className="checkboxgroup-item__header-content">
            {item.icon && (
              <div className="checkboxgroup-item__icon-wrapper">
                <FeaturedIcon icon={item.icon} size={size} />
              </div>
            )}
            <div className="checkboxgroup-item__plan-name">
              {item.planName}
            </div>
          </div>
          <CheckboxInput 
            checked={item.selected || false} 
            size={size}
            disabled={item.disabled}
            onChange={(checked) => onSelectionChange?.(item.id, checked)}
          />
        </div>
        <div className="checkboxgroup-item__body">
          <div className="checkboxgroup-item__content">
            {item.badge && (
              <Badge color="success">{item.badge}</Badge>
            )}
            <div className="checkboxgroup-item__pricing">
              <div className="checkboxgroup-item__price-row">
                <div className="checkboxgroup-item__price">{item.price}</div>
                <div className="checkboxgroup-item__period">{item.period}</div>
              </div>
              <div className="checkboxgroup-item__description">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Simple layout
  return (
    <div
      className={`checkboxgroup-item checkboxgroup-item--simple checkboxgroup-item--${size} ${item.selected ? 'checkboxgroup-item--selected' : ''} ${item.disabled ? 'checkboxgroup-item--disabled' : ''} ${!item.icon ? 'checkboxgroup-item--no-icon' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className="checkboxgroup-item__content">
        {item.icon && (
          <div className="checkboxgroup-item__icon-wrapper">
            <FeaturedIcon icon={item.icon} size={size} />
          </div>
        )}
        <div className="checkboxgroup-item__text">
          <div className="checkboxgroup-item__title">
            {item.planName} {item.price}/{item.period}
          </div>
          <div className="checkboxgroup-item__description">
            {item.description}
          </div>
        </div>
      </div>
      <CheckboxInput 
        checked={item.selected || false} 
        size={size}
        disabled={item.disabled}
        onChange={(checked) => onSelectionChange?.(item.id, checked)}
      />
    </div>
  );
};

// Main CheckboxGroup component interface
export interface CheckboxGroupProps {
  /** Array of checkbox items */
  items: CheckboxGroupItemData[];
  /** Size variant */
  size?: 'sm' | 'md';
  /** Layout variant */
  layout?: 'simple' | 'card';
  /** Allow multiple selections */
  allowMultiple?: boolean;
  /** Callback when selection changes */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Custom class name */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

// Main CheckboxGroup component
export const CheckboxGroup = ({
  items,
  size = 'sm',
  layout = 'simple',
  allowMultiple = false,
  onSelectionChange,
  className = '',
  disabled = false,
  ...props
}: CheckboxGroupProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(
    items.filter(item => item.selected).map(item => item.id)
  );

  const handleItemSelectionChange = (id: string, selected: boolean) => {
    if (disabled) return;

    let newSelection: string[];
    
    if (allowMultiple) {
      if (selected) {
        newSelection = [...selectedItems, id];
      } else {
        newSelection = selectedItems.filter(itemId => itemId !== id);
      }
    } else {
      newSelection = selected ? [id] : [];
    }

    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  const itemsWithSelection = items.map(item => ({
    ...item,
    selected: selectedItems.includes(item.id),
    disabled: disabled || item.disabled
  }));

  return (
    <div 
      className={`checkboxgroup checkboxgroup--${size} checkboxgroup--${layout} ${className}`}
      {...props}
    >
      {itemsWithSelection.map((item) => (
        <CheckboxGroupItem
          key={item.id}
          item={item}
          size={size}
          layout={layout}
          onSelectionChange={handleItemSelectionChange}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
