import React from 'react';

// Base Flex Component
export interface FlexProps {
  /** Flex content */
  children: React.ReactNode;
  /** Flex direction */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Justify content */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Align items */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** Flex wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Gap between items */
  gap?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

/**
 * Flex component provides flexbox layout utilities.
 * Use for creating flexible layouts with precise control.
 * 
 * @example
 * ```tsx
 * <Flex direction="row" justify="center" align="center" gap="md">
 *   <Item />
 *   <Item />
 * </Flex>
 * ```
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ 
    children, 
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    wrap = 'nowrap',
    gap = 0,
    className = '', 
    style, 
    'data-testid': dataTestId, 
    ...props 
  }, ref) => {
    
    const flexStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap,
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`flex ${className}`}
        style={flexStyle}
        data-testid={dataTestId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

// Group Component (Horizontal flex with common patterns)
export interface GroupProps {
  /** Group content */
  children: React.ReactNode;
  /** Justify content - common patterns */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  /** Align items */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** Gap between items */
  gap?: number | string;
  /** Allow items to wrap */
  wrap?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

/**
 * Group component for horizontal layouts with common patterns.
 * Simplified version of Flex for common horizontal use cases.
 * 
 * @example
 * ```tsx
 * <Group justify="space-between" align="center">
 *   <Logo />
 *   <Button>Action</Button>
 * </Group>
 * ```
 */
export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ 
    children, 
    justify = 'flex-start',
    align = 'center',
    gap = '16px',
    wrap = false,
    className = '', 
    style, 
    'data-testid': dataTestId, 
    ...props 
  }, ref) => {
    
    const groupStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`group ${className}`}
        style={groupStyle}
        data-testid={dataTestId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Group.displayName = 'Group';

// Stack Component (Vertical flex)
export interface StackProps {
  /** Stack content */
  children: React.ReactNode;
  /** Align items horizontally */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  /** Justify content vertically */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  /** Gap between items */
  gap?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data test id for testing */
  'data-testid'?: string;
}

/**
 * Stack component for vertical layouts.
 * Simplified version of Flex for vertical stacking.
 * 
 * @example
 * ```tsx
 * <Stack gap="lg" align="center">
 *   <Title />
 *   <Description />
 *   <Button />
 * </Stack>
 * ```
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    children, 
    align = 'stretch',
    justify = 'flex-start',
    gap = '16px',
    className = '', 
    style, 
    'data-testid': dataTestId, 
    ...props 
  }, ref) => {
    
    const stackStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align,
      justifyContent: justify,
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`stack ${className}`}
        style={stackStyle}
        data-testid={dataTestId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';