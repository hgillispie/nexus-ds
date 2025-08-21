import React from 'react';

export interface AvatarProps {
  /** Avatar content (initials, icon, or image) */
  children?: React.ReactNode;
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Border radius */
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Background color */
  color?: string;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Click handler */
  onClick?: () => void;
}

const sizeMap = {
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '48px',
  xl: '56px',
};

const radiusMap = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '50%',
};

const fontSizeMap = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
};

/**
 * Avatar component for displaying user profile images or initials
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    children, 
    src,
    alt,
    size = 'md', 
    radius = 'md',
    color = '#6b7280',
    className = '', 
    style,
    onClick,
    ...props 
  }, ref) => {
    const avatarSize = typeof size === 'number' ? `${size}px` : sizeMap[size];
    const borderRadius = typeof radius === 'number' ? `${radius}px` : radiusMap[radius];
    const fontSize = typeof size === 'number' ? `${size * 0.35}px` : fontSizeMap[size];
    
    const avatarStyle: React.CSSProperties = {
      width: avatarSize,
      height: avatarSize,
      borderRadius,
      backgroundColor: src ? 'transparent' : color,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize,
      fontWeight: '500',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      flexShrink: 0,
      ...style,
    };

    const imageStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    };

    return (
      <div
        ref={ref}
        className={`nexus-avatar ${className}`}
        style={avatarStyle}
        onClick={onClick}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} style={imageStyle} />
        ) : (
          children
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';