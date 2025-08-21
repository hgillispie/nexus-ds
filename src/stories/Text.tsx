import React from 'react';

export interface TextProps {
  /** Text content */
  children: React.ReactNode;
  /**
   * Font size variant
   * @default 'md'
   * xs: 12px, sm: 14px, md: 16px, lg: 18px, xl: 20px, 2xl: 24px, 3xl: 30px, 4xl: 36px
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /**
   * Font weight
   * @default 'normal'
   * Use 'medium' (500) for emphasis, 'semibold' (600) for strong emphasis, 'bold' (700) for maximum emphasis
   */
  fw?: number | 'normal' | 'medium' | 'semibold' | 'bold' | 500 | 600 | 700;
  /**
   * Text color
   * @default 'inherit'
   * Use 'dimmed' for secondary text, or any custom color value
   */
  c?: 'dimmed' | string;
  /**
   * Margin bottom for consistent spacing
   * @default undefined
   * xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px
   *
   * SPACING GUIDELINES:
   * - Use 'sm' (8px) for tight content like lists
   * - Use 'md' (16px) for standard paragraphs
   * - Use 'lg' (24px) for section breaks
   * - Use 'xl' (32px) for major section separation
   *
   * For more complex layouts, prefer explicit div wrappers with tokens.spacing values
   */
  mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  /** HTML element to render as */
  component?: keyof JSX.IntrinsicElements;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Click handler */
  onClick?: () => void;
  /** Additional props */
  [key: string]: any;
}

const sizeMap = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
};

const spacingMap = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

const weightMap = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  500: '500',
  600: '600',
  700: '700',
};

/**
 * Text component for displaying text content with consistent typography
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ 
    children, 
    size = 'md', 
    fw,
    c,
    mb,
    component = 'span',
    className = '', 
    style,
    ...props 
  }, ref) => {
    const Component = component as any;
    
    const fontSize = sizeMap[size as keyof typeof sizeMap] || size;
    const fontWeight = fw ? (weightMap[fw as keyof typeof weightMap] || fw) : undefined;
    const color = c === 'dimmed' ? '#6b7280' : c;
    const marginBottom = mb ? (spacingMap[mb as keyof typeof spacingMap] || mb) : undefined;
    
    const textStyle: React.CSSProperties = {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize,
      fontWeight,
      color,
      marginBottom,
      margin: marginBottom ? `0 0 ${marginBottom} 0` : undefined,
      lineHeight: '1.5',
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={`nexus-text ${className}`}
        style={textStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
