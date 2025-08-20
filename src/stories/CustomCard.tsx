import React from 'react';

export interface CustomCardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card padding */
  padding?: number | string;
  /** Border radius */
  radius?: number | string;
  /** Shadow intensity */
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Show border */
  withBorder?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Card component provides a container with border, shadow, and sections.
 * Perfect for displaying grouped content with consistent styling.
 * 
 * @example
 * ```tsx
 * <Card shadow="sm" padding="lg" radius="md" withBorder>
 *   <Card.Section>
 *     <Image src="..." />
 *   </Card.Section>
 *   <Text>Content</Text>
 * </Card>
 * ```
 */
export const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ 
    children, 
    padding = '16px',
    radius = '8px',
    shadow = 'sm',
    withBorder = false,
    className = '', 
    style, 
    'data-testid': dataTestId,
    onClick,
    ...props 
  }, ref) => {
    
    // Shadow styles
    const shadowMap = {
      none: 'none',
      xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    };

    const cardStyle: React.CSSProperties = {
      backgroundColor: '#ffffff',
      borderRadius: typeof radius === 'number' ? `${radius}px` : radius,
      padding: typeof padding === 'number' ? `${padding}px` : padding,
      boxShadow: shadowMap[shadow],
      border: withBorder ? '1px solid #e5e7eb' : 'none',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow 0.15s ease, transform 0.15s ease',
      ...style,
    };

    // Add hover effects if clickable
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        e.currentTarget.style.boxShadow = shadowMap[shadow === 'none' ? 'sm' : 'lg'];
        e.currentTarget.style.transform = 'translateY(-2px)';
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        e.currentTarget.style.boxShadow = shadowMap[shadow];
        e.currentTarget.style.transform = 'translateY(0)';
      }
    };

    return (
      <div
        ref={ref}
        className={`card ${onClick ? 'card-clickable' : ''} ${className}`}
        style={cardStyle}
        data-testid={dataTestId}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = 'CustomCard';

// Card Section Component
export interface CardSectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Remove padding */
  withBorder?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * CardSection component for creating distinct sections within a card.
 * Typically used for images, headers, or separated content areas.
 */
export const CardSection = React.forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, withBorder = false, className = '', style, ...props }, ref) => {
    const sectionStyle: React.CSSProperties = {
      margin: '-16px -16px 16px -16px', // Negative margins to extend to card edges
      borderBottom: withBorder ? '1px solid #e5e7eb' : 'none',
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`card-section ${className}`}
        style={sectionStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardSection.displayName = 'CardSection';

// Attach Section to Card
(CustomCard as any).Section = CardSection;