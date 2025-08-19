import React from 'react';
import './dropdown.css';

export interface DropdownHeaderProps {
  /**
   * Type of header - either 'avatar' for user profile or 'text' for simple header
   */
  type: 'avatar' | 'text';

  /**
   * Header text content
   */
  title: string;

  /**
   * Subtitle text (only used with avatar type)
   */
  subtitle?: string;

  /**
   * Avatar image URL (only used with avatar type)
   */
  avatarSrc?: string;

  /**
   * Avatar alt text (only used with avatar type)
   */
  avatarAlt?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface DropdownItemProps {
  /**
   * The content to display in the dropdown item
   */
  children: React.ReactNode;

  /**
   * Optional icon to display before the text
   */
  icon?: React.ReactNode;

  /**
   * Optional keyboard shortcut text
   */
  shortcut?: string;

  /**
   * Whether this item is disabled
   */
  disabled?: boolean;

  /**
   * Click handler for the dropdown item
   */
  onClick?: () => void;

  /**
   * Whether this item is currently selected/active
   */
  active?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Dropdown header component
 */
export const DropdownHeader = React.forwardRef<HTMLDivElement, DropdownHeaderProps>(({
  type,
  title,
  subtitle,
  avatarSrc,
  avatarAlt,
  className,
  ...props
}, ref) => {
  const baseClasses = 'nexus-dropdown-header';
  const typeClass = `nexus-dropdown-header--${type}`;

  const classes = [
    baseClasses,
    typeClass,
    className
  ].filter(Boolean).join(' ');

  if (type === 'avatar') {
    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        <div className="nexus-dropdown-header__avatar-group">
          <div className="nexus-dropdown-header__avatar">
            <img
              src={avatarSrc || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80'}
              alt={avatarAlt || 'User avatar'}
              className="nexus-dropdown-header__avatar-image"
            />
          </div>
          <div className="nexus-dropdown-header__text-group">
            <div className="nexus-dropdown-header__title">
              {title}
            </div>
            {subtitle && (
              <div className="nexus-dropdown-header__subtitle">
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={classes}
      {...props}
    >
      <div className="nexus-dropdown-header__title">
        {title}
      </div>
    </div>
  );
});

DropdownHeader.displayName = 'DropdownHeader';

/**
 * Individual dropdown item component
 */
export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(({
  children,
  icon,
  shortcut,
  disabled = false,
  onClick,
  active = false,
  className,
  ...props
}, ref) => {
  const baseClasses = 'nexus-dropdown-item';
  const activeClass = active ? 'nexus-dropdown-item--active' : '';
  const disabledClass = disabled ? 'nexus-dropdown-item--disabled' : '';
  
  const classes = [
    baseClasses,
    activeClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="nexus-dropdown-item__content">
        {icon && (
          <span className="nexus-dropdown-item__icon">
            {icon}
          </span>
        )}
        <span className="nexus-dropdown-item__text">
          {children}
        </span>
      </div>
      {shortcut && (
        <span className="nexus-dropdown-item__shortcut">
          {shortcut}
        </span>
      )}
    </button>
  );
});

DropdownItem.displayName = 'DropdownItem';

export interface DropdownProps {
  /**
   * Array of dropdown items or custom content
   */
  children: React.ReactNode;
  
  /**
   * Whether the dropdown is open/visible
   */
  isOpen?: boolean;
  
  /**
   * Function called when dropdown should close
   */
  onClose?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Custom width for the dropdown
   */
  width?: number | string;
}

/**
 * User icon component used in dropdown examples
 */
const UserIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M13.3334 14V12.6667C13.3334 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33335C4.62611 10 3.94783 10.281 3.44774 10.781C2.94764 11.2811 2.66669 11.9594 2.66669 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47278 7.33333 8.00002 7.33333C6.52726 7.33333 5.33335 6.13943 5.33335 4.66667C5.33335 3.19391 6.52726 2 8.00002 2C9.47278 2 10.6667 3.19391 10.6667 4.66667Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Settings icon component
 */
const SettingsIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_settings)">
      <path 
        d="M8.00002 10C9.10459 10 10 9.10459 10 8.00002C10 6.89545 9.10459 6.00002 8.00002 6.00002C6.89545 6.00002 6.00002 6.89545 6.00002 8.00002C6.00002 9.10459 6.89545 10 8.00002 10Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12.9334 10C12.8446 10.2011 12.8181 10.4241 12.8573 10.6404C12.8966 10.8567 12.9997 11.0562 13.1534 11.2134L13.1934 11.2534C13.3173 11.3772 13.4157 11.5242 13.4828 11.6861C13.5499 11.848 13.5844 12.0215 13.5844 12.1967C13.5844 12.3719 13.5499 12.5454 13.4828 12.7073C13.4157 12.8691 13.3173 13.0162 13.1934 13.14C13.0695 13.264 12.9225 13.3623 12.7606 13.4294C12.5987 13.4965 12.4252 13.5311 12.25 13.5311C12.0748 13.5311 11.9013 13.4965 11.7394 13.4294C11.5776 13.3623 11.4305 13.264 11.3067 13.14L11.2667 13.1C11.1096 12.9463 10.91 12.8432 10.6937 12.804C10.4775 12.7648 10.2544 12.7913 10.0534 12.88C9.85617 12.9645 9.68801 13.1048 9.56956 13.2837C9.45111 13.4626 9.38754 13.6722 9.38669 13.8867V14C9.38669 14.3536 9.24621 14.6928 8.99616 14.9428C8.74611 15.1929 8.40698 15.3334 8.05335 15.3334C7.69973 15.3334 7.36059 15.1929 7.11054 14.9428C6.8605 14.6928 6.72002 14.3536 6.72002 14V13.94C6.71486 13.7194 6.64343 13.5053 6.51503 13.3258C6.38662 13.1463 6.20718 13.0095 6.00002 12.9334C5.79894 12.8446 5.57589 12.8181 5.35963 12.8573C5.14336 12.8966 4.94381 12.9997 4.78669 13.1534L4.74669 13.1934C4.62286 13.3173 4.4758 13.4157 4.31394 13.4828C4.15208 13.5499 3.97857 13.5844 3.80335 13.5844C3.62813 13.5844 3.45463 13.5499 3.29277 13.4828C3.1309 13.4157 2.98385 13.3173 2.86002 13.1934C2.73605 13.0695 2.63771 12.9225 2.57061 12.7606C2.50351 12.5987 2.46897 12.4252 2.46897 12.25C2.46897 12.0748 2.50351 11.9013 2.57061 11.7394C2.63771 11.5776 2.73605 11.4305 2.86002 11.3067L2.90002 11.2667C3.05371 11.1096 3.15681 10.91 3.19602 10.6937C3.23524 10.4775 3.20876 10.2544 3.12002 10.0534C3.03551 9.85617 2.89519 9.68801 2.71633 9.56956C2.53747 9.45111 2.32788 9.38754 2.11335 9.38669H2.00002C1.6464 9.38669 1.30726 9.24621 1.05721 8.99616C0.807163 8.74611 0.666687 8.40698 0.666687 8.05335C0.666687 7.69973 0.807163 7.36059 1.05721 7.11054C1.30726 6.8605 1.6464 6.72002 2.00002 6.72002H2.06002C2.28068 6.71486 2.49469 6.64343 2.67422 6.51503C2.85375 6.38662 2.9905 6.20718 3.06669 6.00002C3.15543 5.79894 3.1819 5.57589 3.14269 5.35963C3.10348 5.14336 3.00038 4.94381 2.84669 4.78669L2.80669 4.74669C2.68272 4.62286 2.58437 4.4758 2.51727 4.31394C2.45017 4.15208 2.41564 3.97857 2.41564 3.80335C2.41564 3.62813 2.45017 3.45463 2.51727 3.29277C2.58437 3.1309 2.68272 2.98385 2.80669 2.86002C2.93052 2.73605 3.07757 2.63771 3.23943 2.57061C3.4013 2.50351 3.5748 2.46897 3.75002 2.46897C3.92524 2.46897 4.09874 2.50351 4.26061 2.57061C4.42247 2.63771 4.56952 2.73605 4.69335 2.86002L4.73335 2.90002C4.89047 3.05371 5.09003 3.15681 5.30629 3.19602C5.52256 3.23524 5.74561 3.20876 5.94669 3.12002H6.00002C6.1972 3.03551 6.36536 2.89519 6.48382 2.71633C6.60227 2.53747 6.66583 2.32788 6.66669 2.11335V2.00002C6.66669 1.6464 6.80716 1.30726 7.05721 1.05721C7.30726 0.807163 7.6464 0.666687 8.00002 0.666687C8.35364 0.666687 8.69278 0.807163 8.94283 1.05721C9.19288 1.30726 9.33335 1.6464 9.33335 2.00002V2.06002C9.33421 2.27454 9.39777 2.48414 9.51622 2.663C9.63468 2.84186 9.80284 2.98218 10 3.06669C10.2011 3.15543 10.4241 3.1819 10.6404 3.14269C10.8567 3.10348 11.0562 3.00038 11.2134 2.84669L11.2534 2.80669C11.3772 2.68272 11.5242 2.58437 11.6861 2.51727C11.848 2.45017 12.0215 2.41564 12.1967 2.41564C12.3719 2.41564 12.5454 2.45017 12.7073 2.51727C12.8691 2.58437 13.0162 2.68272 13.14 2.80669C13.264 2.93052 13.3623 3.07757 13.4294 3.23943C13.4965 3.4013 13.5311 3.5748 13.5311 3.75002C13.5311 3.92524 13.4965 4.09874 13.4294 4.26061C13.3623 4.42247 13.264 4.56952 13.14 4.69335L13.1 4.73335C12.9463 4.89047 12.8432 5.09003 12.804 5.30629C12.7648 5.52256 12.7913 5.74561 12.88 5.94669V6.00002C12.9645 6.1972 13.1048 6.36536 13.2837 6.48382C13.4626 6.60227 13.6722 6.66583 13.8867 6.66669H14C14.3536 6.66669 14.6928 6.80716 14.9428 7.05721C15.1929 7.30726 15.3334 7.6464 15.3334 8.00002C15.3334 8.35364 15.1929 8.69278 14.9428 8.94283C14.6928 9.19288 14.3536 9.33335 14 9.33335H13.94C13.7255 9.33421 13.5159 9.39777 13.337 9.51622C13.1582 9.63468 13.0179 9.80284 12.9334 10Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_settings">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/**
 * Zap/Lightning icon component
 */
const ZapIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8.66667 1.33331L2 9.33331H8L7.33333 14.6666L14 6.66665H8L8.66667 1.33331Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Home icon component
 */
const HomeIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M6 14.6666V7.99998H10V14.6666M2 5.99998L8 1.33331L14 5.99998V13.3333C14 13.6869 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6666 12.6667 14.6666H3.33333C2.97971 14.6666 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.6869 2 13.3333V5.99998Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Log out icon component
 */
const LogOutIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Dropdown divider component
 */
export const DropdownDivider: React.FC = () => (
  <div className="nexus-dropdown-divider" />
);

/**
 * Dropdown menu component
 */
export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(({
  children,
  isOpen = true,
  onClose,
  className,
  width = 240,
  ...props
}, ref) => {
  const baseClasses = 'nexus-dropdown';
  const openClass = isOpen ? 'nexus-dropdown--open' : '';
  
  const classes = [
    baseClasses,
    openClass,
    className
  ].filter(Boolean).join(' ');

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <div
      ref={ref}
      className={classes}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

// Export icons for use in stories
export { UserIcon, SettingsIcon, ZapIcon, HomeIcon, LogOutIcon };
