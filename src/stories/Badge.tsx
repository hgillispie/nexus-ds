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
   * Badge variant
   */
  variant?: 'filled' | 'light' | 'outline';

  /**
   * Whether to show an icon and its position
   */
  icon?: 'none' | 'trailing';

  /**
   * Margin bottom
   */
  mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Additional styles
   */
  style?: React.CSSProperties;

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
const spacingMap = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
  children,
  size = 'sm',
  color = 'primary',
  variant = 'filled',
  icon = 'none',
  mb,
  className,
  style,
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'nexus-badge';
  const sizeClass = `nexus-badge--size-${size}`;

  // Calculate margin bottom
  const marginBottom = mb ? (typeof mb === 'string' && spacingMap[mb as keyof typeof spacingMap] ? spacingMap[mb as keyof typeof spacingMap] : mb) : undefined;

  // Combine styles
  const badgeStyle: React.CSSProperties = {
    marginBottom,
    ...style,
  };
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
      style={badgeStyle}
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
