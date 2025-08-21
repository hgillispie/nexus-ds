import React, { useState } from 'react';
import { Group } from './Flex';
import { Badge } from './Badge';
import './navigation.css';

export interface NavigationItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface UserMenuProps {
  name: string;
  email: string;
  avatar?: string;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

export interface NavigationProps {
  /** Brand/logo element */
  brand?: React.ReactNode;
  /** Navigation items */
  items?: NavigationItem[];
  /** Right side content (user menu, actions, etc) */
  rightSection?: React.ReactNode;
  /** User menu configuration */
  userMenu?: UserMenuProps;
  /** Height of the navigation bar */
  height?: number;
  /** Background color */
  backgroundColor?: string;
  /** Show burger menu on mobile */
  withBurger?: boolean;
  /** Burger menu opened state */
  opened?: boolean;
  /** Burger menu toggle handler */
  onToggle?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Additional styles */
  style?: React.CSSProperties;
}

/**
 * Navigation component for application headers
 */
export const Navigation: React.FC<NavigationProps> = ({
  brand,
  items = [],
  rightSection,
  userMenu,
  height = 60,
  backgroundColor = '#ffffff',
  withBurger = false,
  opened = false,
  onToggle,
  className = '',
  style,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(opened);

  React.useEffect(() => {
    setMobileMenuOpen(opened);
  }, [opened]);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    onToggle?.();
  };

  return (
    <>
      <nav
        className={`navigation ${className}`}
        style={{
          height: `${height}px`,
          backgroundColor,
          borderBottom: '1px solid #e5e7eb',
          position: 'relative',
          ...style,
        }}
      >
        <div style={{ 
          height: '100%',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Group gap="32px">
            {withBurger && (
              <button
                className="burger-button"
                onClick={handleToggle}
                style={{
                  display: 'none',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  width: '24px',
                  height: '24px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#374151',
                  borderRadius: '10px',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                  transition: 'transform 0.3s',
                }} />
                <span style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#374151',
                  borderRadius: '10px',
                  opacity: mobileMenuOpen ? 0 : 1,
                  transition: 'opacity 0.3s',
                }} />
                <span style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#374151',
                  borderRadius: '10px',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
                  transition: 'transform 0.3s',
                }} />
              </button>
            )}
            
            {brand && <div className="navigation-brand">{brand}</div>}
            
            <div className="navigation-items desktop-only" style={{ display: 'flex', gap: '4px' }}>
              {items.map((item, index) => (
                <button
                  key={index}
                  className={`navigation-item ${item.active ? 'active' : ''}`}
                  onClick={item.onClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: item.active ? '#f3f4f6' : 'transparent',
                    border: 'none',
                    borderRadius: '6px',
                    color: item.active ? '#0a0e1b' : '#6b7280',
                    fontSize: '14px',
                    fontWeight: item.active ? '500' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                      e.currentTarget.style.color = '#374151';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#6b7280';
                    }
                  }}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant="filled" 
                      size="sm"
                      style={{ marginLeft: '4px' }}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </Group>

          <div className="navigation-right">
            {rightSection}
            {userMenu && (
              <div style={{ position: 'relative' }}>
                <button
                  className="user-menu-trigger"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    backgroundColor: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {userMenu.avatar ? (
                    <img
                      src={userMenu.avatar}
                      alt={userMenu.name}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#6b7280',
                    }}>
                      {userMenu.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151', fontFamily: 'Inter, sans-serif' }}>
                      {userMenu.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                      {userMenu.email}
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                      transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {userMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: 0,
                      minWidth: '200px',
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      zIndex: 1000,
                      overflow: 'hidden',
                    }}
                  >
                    {userMenu.onProfile && (
                      <button
                        onClick={() => {
                          userMenu.onProfile?.();
                          setUserMenuOpen(false);
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          fontSize: '14px',
                          color: '#374151',
                          cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f9fafb';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        Profile
                      </button>
                    )}
                    {userMenu.onSettings && (
                      <button
                        onClick={() => {
                          userMenu.onSettings?.();
                          setUserMenuOpen(false);
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          fontSize: '14px',
                          color: '#374151',
                          cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f9fafb';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        Settings
                      </button>
                    )}
                    {(userMenu.onProfile || userMenu.onSettings) && userMenu.onLogout && (
                      <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '4px 0' }} />
                    )}
                    {userMenu.onLogout && (
                      <button
                        onClick={() => {
                          userMenu.onLogout?.();
                          setUserMenuOpen(false);
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          fontSize: '14px',
                          color: '#ef4444',
                          cursor: 'pointer',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#fef2f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {withBurger && mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: `${height}px`,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 999,
            padding: '8px',
          }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              className={`mobile-menu-item ${item.active ? 'active' : ''}`}
              onClick={() => {
                item.onClick?.();
                handleToggle();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                backgroundColor: item.active ? '#f3f4f6' : 'transparent',
                border: 'none',
                borderRadius: '6px',
                color: item.active ? '#0a0e1b' : '#6b7280',
                fontSize: '14px',
                fontWeight: item.active ? '500' : '400',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge && (
                <Badge 
                  variant="filled" 
                  size="sm"
                  style={{ marginLeft: 'auto' }}
                >
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .burger-button {
            display: flex !important;
          }
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};