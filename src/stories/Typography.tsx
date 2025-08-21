import React from 'react';
import './typography.css';

export interface TypographyProps {
  /** Typography variant */
  variant?: 
    | 'display-2xl'
    | 'display-xl' 
    | 'display-lg'
    | 'display-md'
    | 'display-sm'
    | 'display-xs'
    | 'text-xl'
    | 'text-lg'
    | 'text-md'
    | 'text-sm'
    | 'text-xs';
  /** Font weight */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /** Text color */
  color?: 'default' | 'secondary' | 'muted';
  /** Text content */
  children: React.ReactNode;
  /** HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  /** Additional CSS class */
  className?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

/**
 * Typography component for consistent text styling across the design system
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'text-md',
  weight = 'regular',
  color = 'default',
  children,
  as = 'p',
  className = '',
  align = 'left',
  ...props
}) => {
  const Component = as;
  
  const classes = [
    'nexus-typography',
    `nexus-typography--${variant}`,
    `nexus-typography--${weight}`,
    `nexus-typography--${color}`,
    `nexus-typography--${align}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Helper components for common use cases
export const Heading: React.FC<Omit<TypographyProps, 'variant'> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }> = ({ 
  level = 1, 
  weight = 'semibold',
  ...props 
}) => {
  const variantMap: Record<1 | 2 | 3 | 4 | 5 | 6, TypographyProps['variant']> = {
    1: 'display-2xl',
    2: 'display-xl',
    3: 'display-lg',
    4: 'display-md',
    5: 'display-sm',
    6: 'display-xs'
  };
  
  const asMap: Record<1 | 2 | 3 | 4 | 5 | 6, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
    1: 'h1',
    2: 'h2', 
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6'
  };
  
  return (
    <Typography 
      variant={variantMap[level]}
      weight={weight}
      as={asMap[level]}
      {...props}
    />
  );
};

export const Text: React.FC<Omit<TypographyProps, 'variant'> & { size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' }> = ({
  size = 'md',
  weight = 'regular',
  ...props
}) => {
  return (
    <Typography 
      variant={`text-${size}` as TypographyProps['variant']}
      weight={weight}
      {...props}
    />
  );
};

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = ({
  weight = 'regular',
  color = 'muted',
  ...props
}) => {
  return (
    <Typography 
      variant="text-xs"
      weight={weight}
      color={color}
      as="span"
      {...props}
    />
  );
};

export default Typography;
