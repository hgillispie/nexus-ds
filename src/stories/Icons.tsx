import React from 'react';
import { iconPaths } from './iconPaths';

export interface IconProps {
  /** The name of the icon to display */
  name: IconName;
  /** Size of the icon */
  size?: 'small' | 'medium' | 'large' | number;
  /** Color of the icon */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Width of the stroke */
  strokeWidth?: number;
  /** Accessibility label */
  'aria-label'?: string;
}

export type IconName = keyof typeof iconPaths;

/**
 * Icon component from the Nexus Design System
 * 
 * A comprehensive icon library with consistent styling and accessibility features.
 * All icons are SVG-based and support customization of size, color, and stroke width.
 */
const Icons = React.memo(React.forwardRef<SVGSVGElement, IconProps>(({
  name,
  size = 'medium',
  color = '#181D27',
  className = '',
  strokeWidth = 2,
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
  };

  const iconSize = typeof size === 'number' ? size : sizeMap[size];
  
  const commonProps = {
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `nexus-icon nexus-icon--${name} ${className}`.trim(),
    'aria-label': ariaLabel || name.replace(/-/g, ' '),
    ref,
    ...props
  };

  const strokeProps = {
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths = iconPaths[name];
  
  if (!paths) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const renderPaths = () => {
    if (Array.isArray(paths)) {
      return paths.map((path, index) => (
        <path key={index} d={path} {...strokeProps} />
      ));
    }
    return <path d={paths} {...strokeProps} />;
  };

  return (
    <svg {...commonProps}>
      {renderPaths()}
    </svg>
  );
}));

Icons.displayName = 'Icons';

export default Icons;
