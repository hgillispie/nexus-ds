import React from 'react';
import './buttongroup.css';

export interface ButtonGroupItem {
  /**
   * The content of the button
   */
  children: React.ReactNode;
  
  /**
   * Whether this button is currently selected/active
   */
  current?: boolean;
  
  /**
   * Click handler for this button
   */
  onClick?: () => void;
  
  /**
   * Optional ID for the button
   */
  id?: string;
}

export interface ButtonGroupProps {
  /**
   * Icon configuration for the button group
   */
  icon?: 'false' | 'leading' | 'only';
  
  /**
   * Array of button items to render
   */
  items: ButtonGroupItem[];
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Circle icon component used in button group with leading icons
 */
const CircleIcon: React.FC = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8678_3350)">
      <path 
        d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6025 1.66669 10.0001 1.66669C5.39771 1.66669 1.66675 5.39765 1.66675 10C1.66675 14.6024 5.39771 18.3334 10.0001 18.3334Z" 
        stroke="#717680" 
        strokeWidth="1.67" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_8678_3350">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/**
 * Arrow Left icon component
 */
const ArrowLeftIcon: React.FC = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M15.8334 10H4.16675M4.16675 10L10.0001 15.8334M4.16675 10L10.0001 4.16669" 
      stroke="#717680" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Plus icon component
 */
const PlusIcon: React.FC = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10.0001 4.16669V15.8334M4.16675 10H15.8334" 
      stroke="#717680" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Arrow Right icon component
 */
const ArrowRightIcon: React.FC = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334" 
      stroke="#717680" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Button Group component for grouping related actions
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({
  icon = 'false',
  items,
  className,
  ...props
}, ref) => {
  const baseClasses = 'nexus-button-group';
  const iconClass = `nexus-button-group--icon-${icon}`;
  
  const classes = [
    baseClasses,
    iconClass,
    className
  ].filter(Boolean).join(' ');

  // Define default icons for icon-only variant
  const defaultIcons = [ArrowLeftIcon, PlusIcon, ArrowRightIcon];

  return (
    <div
      ref={ref}
      className={classes}
      role="group"
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const buttonClasses = [
          'nexus-button-group__item',
          item.current ? 'nexus-button-group__item--current' : '',
          isLast ? 'nexus-button-group__item--last' : ''
        ].filter(Boolean).join(' ');

        return (
          <button
            key={item.id || index}
            type="button"
            className={buttonClasses}
            onClick={item.onClick}
          >
            {icon === 'leading' && <CircleIcon />}
            {icon === 'only' ? (
              React.createElement(defaultIcons[index % defaultIcons.length])
            ) : (
              <span className="nexus-button-group__text">
                {item.children}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';
