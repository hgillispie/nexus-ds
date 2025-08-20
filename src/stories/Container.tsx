import React from 'react';

export interface ContainerProps {
  /** Container content */
  children: React.ReactNode;
  /** Container size - affects max-width */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

const sizeMap = {
  xs: '576px',
  sm: '768px', 
  md: '992px',
  lg: '1200px',
  xl: '1400px',
};

/**
 * Container component provides a responsive wrapper with predefined max-widths.
 * It centers content and provides consistent spacing across different screen sizes.
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page Content</h1>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'md', className = '', style, 'data-testid': dataTestId, ...props }, ref) => {
    const maxWidth = typeof size === 'number' ? `${size}px` : sizeMap[size];
    
    const containerStyle: React.CSSProperties = {
      width: '100%',
      maxWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '16px',
      paddingRight: '16px',
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`container ${className}`}
        style={containerStyle}
        data-testid={dataTestId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';