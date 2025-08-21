import React from 'react';
import { Text } from './Text';
import { Button } from './Button';
import { Badge } from './Badge';
import { Group } from './Flex';
import { Avatar } from './Avatar';
import Icons from './Icons';
import './card.css';

export interface CardAction {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  color?: string;
  disabled?: boolean;
}

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Optional header content */
  header?: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card subtitle or description */
  subtitle?: string;
  /** Footer content */
  footer?: React.ReactNode;
  /** Image section at the top */
  image?: string | React.ReactNode;
  /** Badge in the header */
  badge?: {
    label: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  };
  /** Action buttons */
  actions?: CardAction[];
  /** Card variant */
  variant?: 'default' | 'elevated' | 'outline' | 'subtle';
  /** Card size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the card is interactive/clickable */
  interactive?: boolean;
  /** Click handler for the entire card */
  onClick?: () => void;
  /** Custom className */
  className?: string;
  /** Padding */
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Border radius */
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Custom styles */
  style?: React.CSSProperties;
  /** Whether to show dividers */
  withDividers?: boolean;
  /** Whether to show border */
  withBorder?: boolean;
  /** Loading state */
  loading?: boolean;
}

/**
 * Card component for the Nexus Design System
 * 
 * A flexible container component that can display content with optional header,
 * footer, actions, and various styling options.
 */
export const Card: React.FC<CardProps> = ({
  children,
  header,
  title,
  subtitle,
  footer,
  image,
  badge,
  actions = [],
  variant = 'default',
  size = 'md',
  interactive = false,
  onClick,
  className,
  padding = 'md',
  radius = 'md',
  style,
  withDividers = false,
  withBorder = true,
  loading = false,
  ...props
}) => {
  const hasHeader = header || title || subtitle || badge || actions.length > 0;
  
  const cardClassName = [
    'nexus-card',
    `nexus-card--${variant}`,
    `nexus-card--${size}`,
    `nexus-card--radius-${radius}`,
    interactive || onClick ? 'nexus-card--interactive' : '',
    withBorder ? 'nexus-card--with-border' : '',
    loading ? 'nexus-card--loading' : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClassName}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      {...props}
    >
      {/* Image Section */}
      {image && (
        <div className="nexus-card__image">
          {typeof image === 'string' ? (
            <img src={image} alt="" />
          ) : (
            image
          )}
        </div>
      )}

      {/* Header Section */}
      {hasHeader && (
        <>
          <div className={`nexus-card__header nexus-card__section--${padding}`}>
            {header ? (
              header
            ) : (
              <Group justify="space-between" align="flex-start">
                <div className="nexus-card__header-content">
                  <Group gap="sm" align="center" wrap="wrap">
                    {title && (
                      <Text className="nexus-card__title" weight="semibold" size={size === 'sm' ? 'md' : size === 'lg' ? 'lg' : 'md'}>
                        {title}
                      </Text>
                    )}
                    {badge && (
                      <Badge
                        variant={badge.variant || 'secondary'}
                        size="sm"
                        className="nexus-card__badge"
                      >
                        {badge.label}
                      </Badge>
                    )}
                  </Group>
                  {subtitle && (
                    <Text className="nexus-card__subtitle" size="sm" color="secondary">
                      {subtitle}
                    </Text>
                  )}
                </div>
                
                {actions.length > 0 && (
                  <Group gap="xs">
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant || 'ghost'}
                        size="sm"
                        onClick={action.onClick}
                        disabled={action.disabled}
                        className="nexus-card__action"
                        aria-label={action.label}
                      >
                        {action.icon || <Icons name="more-horizontal" size="small" />}
                      </Button>
                    ))}
                  </Group>
                )}
              </Group>
            )}
          </div>
          {withDividers && <div className="nexus-card__divider" />}
        </>
      )}

      {/* Content Section */}
      <div className={`nexus-card__content nexus-card__section--${padding}`}>
        {children}
      </div>

      {/* Footer Section */}
      {footer && (
        <>
          {withDividers && <div className="nexus-card__divider" />}
          <div className={`nexus-card__footer nexus-card__section--${padding}`}>
            {footer}
          </div>
        </>
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="nexus-card__loading-overlay">
          <Icons name="loader" size="medium" className="nexus-card__loading-spinner" />
        </div>
      )}
    </div>
  );
};

export default Card;
