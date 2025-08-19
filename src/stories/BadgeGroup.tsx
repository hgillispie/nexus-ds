import React from 'react';
import { Badge, BadgeProps } from './Badge';
import './badgegroup.css';

export interface BadgeGroupProps {
  /**
   * The main message text to display
   */
  message: React.ReactNode;
  
  /**
   * Badge configuration
   */
  badge: {
    /**
     * Badge content
     */
    children: React.ReactNode;
    
    /**
     * Badge color theme
     */
    color?: BadgeProps['color'];
    
    /**
     * Whether the badge has an icon
     */
    hasIcon?: boolean;
  };
  
  /**
   * Position of the badge relative to the message
   */
  badgePosition?: 'leading' | 'trailing';
  
  /**
   * Size variant affecting both badge and message
   */
  size?: 'md' | 'lg';
  
  /**
   * Whether to show an arrow icon after the message (for leading badge groups)
   */
  showMessageIcon?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Click handler for interactive badge groups
   */
  onClick?: () => void;
}

/**
 * Arrow Right Icon component for message content
 */
const MessageArrowIcon: React.FC = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="nexus-badge-group__message-icon"
  >
    <path 
      d="M3.33333 8.00001H12.6667M12.6667 8.00001L8 3.33334M12.6667 8.00001L8 12.6667" 
      stroke="currentColor" 
      strokeWidth="1.3333" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Badge Group component that combines a badge with message text
 */
export const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(({
  message,
  badge,
  badgePosition = 'leading',
  size = 'md',
  showMessageIcon = false,
  className,
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'nexus-badge-group';
  const positionClass = `nexus-badge-group--${badgePosition}`;
  const sizeClass = `nexus-badge-group--size-${size}`;
  const interactiveClass = onClick ? 'nexus-badge-group--interactive' : '';
  
  const classes = [
    baseClasses,
    positionClass,
    sizeClass,
    interactiveClass,
    className
  ].filter(Boolean).join(' ');

  // Determine badge size based on BadgeGroup size
  const badgeSize = size === 'lg' ? 'md' : 'sm';
  
  // Determine if badge should have trailing icon
  const badgeIcon = badge.hasIcon ? 'trailing' : 'none';

  const badgeElement = (
    <Badge
      size={badgeSize}
      color={badge.color}
      icon={badgeIcon}
      onClick={onClick}
    >
      {badge.children}
    </Badge>
  );

  const messageElement = (
    <div className="nexus-badge-group__message">
      <span className="nexus-badge-group__message-text">
        {message}
      </span>
      {showMessageIcon && <MessageArrowIcon />}
    </div>
  );

  const messageWithIcon = showMessageIcon ? (
    <div className="nexus-badge-group__content">
      {messageElement}
    </div>
  ) : messageElement;

  return (
    <div
      ref={ref}
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {badgePosition === 'leading' ? (
        <>
          {badgeElement}
          {showMessageIcon ? messageWithIcon : messageElement}
        </>
      ) : (
        <>
          {messageElement}
          {badgeElement}
        </>
      )}
    </div>
  );
});

BadgeGroup.displayName = 'BadgeGroup';
