import React from 'react';

export interface SimpleGridProps {
  /** Grid content */
  children: React.ReactNode;
  /** Number of columns or responsive columns object */
  cols?: number | { base?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** Gap between grid items */
  spacing?: number | string;
  /** Vertical gap (if different from spacing) */
  verticalSpacing?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

/**
 * SimpleGrid component creates an auto-fitting grid with equal-width columns.
 * Much simpler than Grid - just specify number of columns and it handles the rest.
 * 
 * @example
 * ```tsx
 * <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </SimpleGrid>
 * ```
 */
export const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ 
    children, 
    cols = 1, 
    spacing = '16px', 
    verticalSpacing,
    className = '', 
    style, 
    'data-testid': dataTestId, 
    ...props 
  }, ref) => {
    
    // Convert spacing values
    const getSpacing = (value: number | string) => {
      return typeof value === 'number' ? `${value}px` : value;
    };

    const horizontalSpacing = getSpacing(spacing);
    const finalVerticalSpacing = verticalSpacing ? getSpacing(verticalSpacing) : horizontalSpacing;

    // Generate responsive CSS
    const responsiveCSS = React.useMemo(() => {
      if (typeof cols === 'object') {
        const breakpoints = {
          base: '0px',
          sm: '576px',
          md: '768px', 
          lg: '992px',
          xl: '1200px',
        };
        
        let css = '';
        
        Object.entries(cols).forEach(([key, value]) => {
          if (value !== undefined) {
            const breakpoint = breakpoints[key as keyof typeof breakpoints];
            const mediaQuery = key === 'base' 
              ? '' 
              : `@media (min-width: ${breakpoint})`;
            
            const rule = `
              ${mediaQuery ? `${mediaQuery} {` : ''}
                .simple-grid-responsive {
                  grid-template-columns: repeat(${value}, 1fr);
                }
              ${mediaQuery ? '}' : ''}
            `;
            
            css += rule;
          }
        });
        
        return css;
      }
      return '';
    }, [cols]);

    // Calculate grid template columns
    const getGridColumns = () => {
      if (typeof cols === 'number') {
        return `repeat(${cols}, 1fr)`;
      }
      // For responsive, use base value as fallback
      const baseCols = cols.base || 1;
      return `repeat(${baseCols}, 1fr)`;
    };

    const simpleGridStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: `${finalVerticalSpacing} ${horizontalSpacing}`,
      ...style,
    };

    // Add responsive class if needed
    const hasResponsive = typeof cols === 'object';
    const finalClassName = hasResponsive 
      ? `simple-grid simple-grid-responsive ${className}`
      : `simple-grid ${className}`;

    return (
      <>
        {responsiveCSS && (
          <style dangerouslySetInnerHTML={{ __html: responsiveCSS }} />
        )}
        <div
          ref={ref}
          className={finalClassName}
          style={simpleGridStyle}
          data-testid={dataTestId}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);

SimpleGrid.displayName = 'SimpleGrid';