import React from 'react';
import './badge.css';

export interface BadgeProps {
  /**
   * The content to display inside the badge
   */
  children: React.ReactNode;
  
  /**
   * Badge size variant
   */
  size?: 'sm' | 'md';
  
  /**
   * Badge color theme
   */
  color?: 'primary' | 'gray' | 'error' | 'warning' | 'success';
  
  /**
   * Whether to show an icon and its position
   */
  icon?: 'none' | 'trailing';
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Click handler for interactive badges
   */
  onClick?: () => void;
}

/**
 * Arrow Right Icon component used in badges
 */
const ArrowRightIcon: React.FC<{ size: 'sm' | 'md' }> = ({ size }) => {
  const iconSize = size === 'sm' ? '12' : '12'; // Both use 12px as per design
  
  return (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="nexus-badge__icon"
    >
      <path 
        d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * Badge component for status indicators and labels
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
  children,
  size = 'sm',
  color = 'primary',
  icon = 'none',
  className,
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'nexus-badge';
  const sizeClass = `nexus-badge--size-${size}`;
  const colorClass = `nexus-badge--color-${color}`;
  const iconClass = icon !== 'none' ? `nexus-badge--icon-${icon}` : '';
  const interactiveClass = onClick ? 'nexus-badge--interactive' : '';
  
  const classes = [
    baseClasses,
    sizeClass,
    colorClass,
    iconClass,
    interactiveClass,
    className
  ].filter(Boolean).join(' ');

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      ref={ref as any}
      className={classes}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
      {...props}
    >
      <span className="nexus-badge__text">
        {children}
      </span>
      {icon === 'trailing' && <ArrowRightIcon size={size} />}
    </Component>
  );
});

Badge.displayName = 'Badge';
