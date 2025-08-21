import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Size of the button
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Visual hierarchy of the button (legacy)
   */
  hierarchy?: 'primary' | 'secondary-color' | 'secondary-gray';

  /**
   * Button variant (modern interface)
   */
  variant?: 'primary' | 'outline' | 'subtle' | 'filled';

  /**
   * Icon configuration for the button
   */
  icon?: 'none' | 'trailing' | 'only';

  /**
   * Whether this is a destructive action
   */
  destructive?: boolean;

  /**
   * Button state (controlled externally for demonstration)
   */
  state?: 'default' | 'hover' | 'focused' | 'disabled';

  /**
   * Button text content
   */
  children?: React.ReactNode;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Additional styles
   */
  style?: React.CSSProperties;
}

/**
 * Circle icon component used in button examples
 */
const CircleIcon: React.FC<{ stroke: string }> = ({ stroke }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8677_116)">
      <path 
        d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" 
        stroke={stroke} 
        strokeWidth="1.67" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8677_116">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  size = 'md',
  hierarchy,
  variant = 'primary',
  icon = 'none',
  destructive = false,
  state = 'default',
  children = 'Button CTA',
  disabled = false,
  onClick,
  className,
  fullWidth = false,
  style,
  ...props
}, ref) => {
  // Map variant to hierarchy for backward compatibility
  const getHierarchy = () => {
    if (hierarchy) return hierarchy; // Use hierarchy if explicitly provided

    switch (variant) {
      case 'outline':
        return 'secondary-color';
      case 'subtle':
        return 'secondary-gray';
      case 'filled':
      case 'primary':
      default:
        return 'primary';
    }
  };

  // Build CSS classes based on props
  const baseClasses = 'nexus-button';
  const sizeClass = `nexus-button--${size}`;
  const hierarchyClass = `nexus-button--${getHierarchy()}`;
  const iconClass = `nexus-button--icon-${icon}`;
  const destructiveClass = destructive ? 'nexus-button--destructive' : '';
  const stateClass = state !== 'default' ? `nexus-button--${state}` : '';
  const fullWidthClass = fullWidth ? 'nexus-button--full-width' : '';
  
  const classes = [
    baseClasses,
    sizeClass,
    hierarchyClass,
    iconClass,
    destructiveClass,
    stateClass,
    fullWidthClass,
    className
  ].filter(Boolean).join(' ');

  // Determine icon color based on hierarchy and destructive state
  const getIconColor = () => {
    if (disabled || state === 'disabled') {
      if (hierarchy === 'primary') return '#FFF';
      if (hierarchy === 'secondary-color') return destructive ? '#67E8F9' : '#94A3B8';
      if (hierarchy === 'secondary-gray') return '#D5D7DA';
    }
    
    if (hierarchy === 'primary') return '#FFF';
    if (hierarchy === 'secondary-color') return destructive ? '#0891B2' : '#0C1427';
    if (hierarchy === 'secondary-gray') return destructive ? '#0891B2' : '#414651';
    
    return '#FFF';
  };

  const iconColor = getIconColor();
  const isIconOnly = icon === 'only';
  const hasIcon = icon === 'trailing' || icon === 'only';

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      disabled={disabled || state === 'disabled'}
      onClick={onClick}
      style={style}
      {...props}
    >
      {!isIconOnly && (
        <span className="nexus-button__text">
          {children}
        </span>
      )}
      {hasIcon && (
        <CircleIcon stroke={iconColor} />
      )}
    </button>
  );
});

Button.displayName = 'Button';
