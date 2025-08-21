import React from 'react';
import { Container } from './Container';
import { Stack, Group } from './Flex';
import './pagelayout.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Page subtitle or description */
  subtitle?: string;
  /** Breadcrumb navigation */
  breadcrumbs?: BreadcrumbItem[];
  /** Action buttons or components */
  actions?: React.ReactNode;
  /** Custom className */
  className?: string;
}

export interface PageLayoutProps {
  /** Page content */
  children: React.ReactNode;
  /** Header configuration */
  header?: PageHeaderProps;
  /** Navigation component */
  navbar?: React.ReactNode;
  /** Sidebar component */
  aside?: React.ReactNode;
  /** Footer component */
  footer?: React.ReactNode;
  /** Container size for content */
  containerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Background color */
  backgroundColor?: string;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

/**
 * PageHeader component for page titles and breadcrumbs
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  actions,
  className = '',
}) => {
  return (
    <div
      className={`page-header ${className}`}
      style={{
        padding: '24px 0',
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Container size="xl">
        <Stack gap="16px">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol
                style={{
                  display: 'flex',
                  gap: '8px',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {breadcrumbs.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {index > 0 && (
                      <span style={{ color: '#9ca3af' }}>/</span>
                    )}
                    {item.href || item.onClick ? (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        style={{
                          color: '#6b7280',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#374151';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#6b7280';
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ color: '#374151', fontWeight: '500' }}>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          <Group justify="space-between" align="flex-start">
            <div>
              <h1 
                style={{ 
                  margin: 0, 
                  fontSize: '32px', 
                  fontWeight: '700',
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {title}
              </h1>
              {subtitle && (
                <p 
                  style={{ 
                    margin: '8px 0 0 0', 
                    fontSize: '16px',
                    color: '#6b7280',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
            {actions && (
              <div>{actions}</div>
            )}
          </Group>
        </Stack>
      </Container>
    </div>
  );
};

/**
 * PageContainer component for wrapping page content
 */
export interface PageContainerProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  style?: React.CSSProperties;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  size = 'xl',
  className = '',
  style,
}) => {
  return (
    <Container size={size} className={`page-container ${className}`} style={style}>
      {children}
    </Container>
  );
};

/**
 * PageContent component for main content area
 */
export interface PageContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  className = '',
  style,
}) => {
  return (
    <div 
      className={`page-content ${className}`}
      style={{
        padding: '32px 0',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * PageLayout component for complete page structure
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  header,
  navbar,
  aside,
  footer,
  containerSize = 'xl',
  backgroundColor = '#f9fafb',
  className = '',
  style,
}) => {
  const hasAside = Boolean(aside);
  
  return (
    <div
      className={`page-layout ${className}`}
      style={{
        minHeight: '100vh',
        backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {navbar && (
        <div className="page-layout-navbar">
          {navbar}
        </div>
      )}
      
      {header && <PageHeader {...header} />}
      
      <div
        className="page-layout-body"
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        {aside && (
          <aside className="page-layout-aside">
            {aside}
          </aside>
        )}
        
        <main
          className="page-layout-main"
          style={{
            flex: 1,
            padding: '32px 0',
          }}
        >
          <Container size={containerSize}>
            {children}
          </Container>
        </main>
      </div>
      
      {footer && (
        <footer
          className="page-layout-footer"
          style={{
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '24px 0',
          }}
        >
          <Container size={containerSize}>
            {footer}
          </Container>
        </footer>
      )}
    </div>
  );
};