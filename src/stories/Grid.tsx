import React from 'react';

// Grid Container Component
export interface GridProps {
  /** Grid content - typically GridCol components */
  children: React.ReactNode;
  /** Gap between columns and rows */
  gap?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

/**
 * Grid component provides a 12-column responsive grid system.
 * Use with GridCol components to create flexible layouts.
 * 
 * @example
 * ```tsx
 * <Grid gap="md">
 *   <GridCol span={6}>Half width</GridCol>
 *   <GridCol span={6}>Half width</GridCol>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, gap = '16px', className = '', style, 'data-testid': dataTestId, ...props }, ref) => {
    const gridStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`grid ${className}`}
        style={gridStyle}
        data-testid={dataTestId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

// Grid Column Component
export interface GridColProps {
  /** Column content */
  children: React.ReactNode;
  /** Number of columns to span (1-12) or responsive object */
  span?: number | { base?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** Column offset */
  offset?: number | { base?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

/**
 * GridCol component represents a column within a Grid.
 * Supports responsive spans and offsets.
 * 
 * @example
 * ```tsx
 * <GridCol span={{ base: 12, md: 6, lg: 4 }}>
 *   Responsive column
 * </GridCol>
 * ```
 */
export const GridCol = React.forwardRef<HTMLDivElement, GridColProps>(
  ({ children, span = 12, offset = 0, className = '', style, 'data-testid': dataTestId, ...props }, ref) => {
    // Calculate grid column styles
    const getGridColumn = (spanValue: number, offsetValue: number) => {
      const start = offsetValue + 1;
      const end = start + spanValue;
      return `${start} / ${end}`;
    };

    // Handle responsive spans and offsets
    const createResponsiveStyles = () => {
      const styles: React.CSSProperties = {};
      
      if (typeof span === 'number' && typeof offset === 'number') {
        styles.gridColumn = getGridColumn(span, offset);
      } else {
        // Handle responsive values
        const spanObj = typeof span === 'object' ? span : { base: span };
        const offsetObj = typeof offset === 'object' ? offset : { base: offset };
        
        // Base styles
        const baseSpan = spanObj.base || 12;
        const baseOffset = offsetObj.base || 0;
        styles.gridColumn = getGridColumn(baseSpan, baseOffset);
      }
      
      return styles;
    };

    const gridColStyle: React.CSSProperties = {
      ...createResponsiveStyles(),
      minWidth: 0, // Prevent overflow
      ...style,
    };

    // Generate responsive CSS if needed
    const responsiveCSS = React.useMemo(() => {
      if (typeof span === 'object' || typeof offset === 'object') {
        const spanObj = typeof span === 'object' ? span : {};
        const offsetObj = typeof offset === 'object' ? offset : {};
        
        let css = '';
        
        // Responsive breakpoints
        const breakpoints = {
          sm: '576px',
          md: '768px', 
          lg: '992px',
          xl: '1200px',
        };
        
        Object.entries(breakpoints).forEach(([key, value]) => {
          const responsiveSpan = spanObj[key as keyof typeof spanObj];
          const responsiveOffset = offsetObj[key as keyof typeof offsetObj];
          
          if (responsiveSpan !== undefined || responsiveOffset !== undefined) {
            const finalSpan = responsiveSpan !== undefined ? responsiveSpan : (spanObj.base || 12);
            const finalOffset = responsiveOffset !== undefined ? responsiveOffset : (offsetObj.base || 0);
            
            css += `
              @media (min-width: ${value}) {
                .grid-col-responsive {
                  grid-column: ${getGridColumn(finalSpan, finalOffset)};
                }
              }
            `;
          }
        });
        
        return css;
      }
      return '';
    }, [span, offset]);

    // Add responsive class if needed
    const hasResponsive = typeof span === 'object' || typeof offset === 'object';
    const finalClassName = hasResponsive 
      ? `grid-col grid-col-responsive ${className}`
      : `grid-col ${className}`;

    return (
      <>
        {responsiveCSS && (
          <style dangerouslySetInnerHTML={{ __html: responsiveCSS }} />
        )}
        <div
          ref={ref}
          className={finalClassName}
          style={gridColStyle}
          data-testid={dataTestId}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);

GridCol.displayName = 'GridCol';