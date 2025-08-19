import React from 'react';
import { Paper, Group, Text, Badge, ActionIcon, Divider } from '@mantine/core';
import './card.css';

export interface CardAction {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: 'subtle' | 'filled' | 'outline';
  color?: string;
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
    color?: string;
    variant?: 'filled' | 'light' | 'outline';
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
}

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
  ...props
}) => {
  const hasHeader = header || title || subtitle || badge || actions.length > 0;
  const cardClassName = `
    nexus-card
    nexus-card--${variant}
    nexus-card--${size}
    ${interactive || onClick ? 'nexus-card--interactive' : ''}
    ${className || ''}
  `.trim();

  const paddingValue = {
    xs: 'xs',
    sm: 'sm', 
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  }[padding];

  return (
    <Paper
      className={cardClassName}
      p={0}
      radius={radius}
      style={style}
      onClick={onClick}
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
          <div className={`nexus-card__header nexus-card__section--${paddingValue}`}>
            {header ? (
              header
            ) : (
              <Group justify="space-between" align="flex-start">
                <div className="nexus-card__header-content">
                  <Group gap="sm" align="center">
                    {title && (
                      <Text className="nexus-card__title" fw={600}>
                        {title}
                      </Text>
                    )}
                    {badge && (
                      <Badge
                        variant={badge.variant || 'light'}
                        color={badge.color}
                        size="sm"
                        className="nexus-card__badge"
                      >
                        {badge.label}
                      </Badge>
                    )}
                  </Group>
                  {subtitle && (
                    <Text className="nexus-card__subtitle" size="sm" c="dimmed">
                      {subtitle}
                    </Text>
                  )}
                </div>
                
                {actions.length > 0 && (
                  <Group gap="xs">
                    {actions.map((action, index) => (
                      <ActionIcon
                        key={index}
                        variant={action.variant || 'subtle'}
                        color={action.color}
                        size="sm"
                        onClick={action.onClick}
                        title={action.label}
                        className="nexus-card__action"
                      >
                        {action.icon || <MoreIcon />}
                      </ActionIcon>
                    ))}
                  </Group>
                )}
              </Group>
            )}
          </div>
          {withDividers && <Divider className="nexus-card__divider" />}
        </>
      )}

      {/* Content Section */}
      <div className={`nexus-card__content nexus-card__section--${paddingValue}`}>
        {children}
      </div>

      {/* Footer Section */}
      {footer && (
        <>
          {withDividers && <Divider className="nexus-card__divider" />}
          <div className={`nexus-card__footer nexus-card__section--${paddingValue}`}>
            {footer}
          </div>
        </>
      )}
    </Paper>
  );
};

export default Card;
