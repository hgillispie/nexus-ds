import React, { useState } from 'react';
import { Stack, Group } from './Flex';
import { Badge } from './Badge';
import './sidebar.css';

export interface SidebarItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  badge?: string | number;
  children?: SidebarItem[];
  disabled?: boolean;
}

export interface SidebarSection {
  label?: string;
  items: SidebarItem[];
}

export interface SidebarUserProps {
  name: string;
  email?: string;
  avatar?: string;
  role?: string;
  onClick?: () => void;
}

export interface SidebarProps {
  /** Sidebar sections */
  sections?: SidebarSection[];
  /** Flat list of sidebar items (alternative to sections) */
  items?: SidebarItem[];
  /** User information at the bottom */
  user?: SidebarUserProps;
  /** Sidebar header content */
  header?: React.ReactNode;
  /** Sidebar footer content */
  footer?: React.ReactNode;
  /** Sidebar width */
  width?: number;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Additional CSS classes */
  className?: string;
  /** Additional styles */
  style?: React.CSSProperties;
}

/**
 * Sidebar component for navigation
 */
export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  items,
  user,
  header,
  footer,
  width = 260,
  backgroundColor = '#ffffff',
  borderColor = '#e5e7eb',
  className = '',
  style,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const renderItem = (item: SidebarItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);

    return (
      <div key={item.label}>
        <button
          className={`sidebar-item ${item.active ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.label);
            } else if (!item.disabled) {
              item.onClick?.();
            }
          }}
          disabled={item.disabled}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: `8px ${16 + depth * 16}px`,
            backgroundColor: item.active ? '#f3f4f6' : 'transparent',
            border: 'none',
            borderRadius: '6px',
            color: item.disabled ? '#9ca3af' : item.active ? '#0a0e1b' : '#6b7280',
            fontSize: '14px',
            fontWeight: item.active ? '500' : '400',
            cursor: item.disabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
            textAlign: 'left',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={(e) => {
            if (!item.active && !item.disabled) {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.color = '#374151';
            }
          }}
          onMouseLeave={(e) => {
            if (!item.active && !item.disabled) {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#6b7280';
            }
          }}
        >
          {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
          <span style={{ flex: 1 }}>{item.label}</span>
          {item.badge && (
            <Badge 
              variant="filled" 
              size="sm"
            >
              {item.badge}
            </Badge>
          )}
          {hasChildren && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }}
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        
        {hasChildren && isExpanded && (
          <div style={{ marginTop: '4px' }}>
            {item.children.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const renderSection = (section: SidebarSection, index: number) => (
    <div key={index} style={{ marginBottom: '24px' }}>
      {section.label && (
        <div
          style={{
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {section.label}
        </div>
      )}
      <Stack gap="4px">
        {section.items.map((item) => renderItem(item))}
      </Stack>
    </div>
  );

  return (
    <aside
      className={`sidebar ${className}`}
      style={{
        width: `${width}px`,
        height: '100%',
        backgroundColor,
        borderRight: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {header && (
        <div className="sidebar-header" style={{ padding: '16px', borderBottom: `1px solid ${borderColor}` }}>
          {header}
        </div>
      )}

      <div
        className="sidebar-content"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        {sections && sections.map((section, index) => renderSection(section, index))}
        {items && (
          <Stack gap="4px">
            {items.map((item) => renderItem(item))}
          </Stack>
        )}
      </div>

      {user && (
        <div
          className="sidebar-user"
          style={{
            padding: '16px',
            borderTop: `1px solid ${borderColor}`,
          }}
        >
          <button
            onClick={user.onClick}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#6b7280',
                }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151', fontFamily: 'Inter, sans-serif' }}>
                {user.name}
              </div>
              {user.email && (
                <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                  {user.email}
                </div>
              )}
              {user.role && (
                <div style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                  {user.role}
                </div>
              )}
            </div>
          </button>
        </div>
      )}

      {footer && (
        <div className="sidebar-footer" style={{ padding: '16px', borderTop: `1px solid ${borderColor}` }}>
          {footer}
        </div>
      )}
    </aside>
  );
};

// Drawer Sidebar Component
export interface DrawerSidebarProps extends SidebarProps {
  /** Whether the drawer is opened */
  opened: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Position of the drawer */
  position?: 'left' | 'right';
  /** Overlay background */
  withOverlay?: boolean;
}

/**
 * Drawer-style sidebar for mobile
 */
export const DrawerSidebar: React.FC<DrawerSidebarProps> = ({
  opened,
  onClose,
  position = 'left',
  withOverlay = true,
  width = 260,
  ...sidebarProps
}) => {
  if (!opened) return null;

  return (
    <>
      {withOverlay && (
        <div
          className="drawer-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
      )}
      <div
        className="drawer-sidebar"
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          [position]: 0,
          width: `${width}px`,
          zIndex: 1000,
          transform: opened ? 'translateX(0)' : position === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <Sidebar width={width} {...sidebarProps} />
      </div>
    </>
  );
};