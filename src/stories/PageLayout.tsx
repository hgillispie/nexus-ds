import React from 'react';
import { AppShell, Container, Stack, Group, Text, Breadcrumbs, Anchor } from '@mantine/core';
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
  /** Container size */
  containerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
  /** Page padding */
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  /** Whether to use full width layout */
  fluid?: boolean;
  /** Custom className */
  className?: string;
  /** Background color variant */
  bg?: 'default' | 'alt' | 'container';
}

export interface PageContainerProps {
  /** Container content */
  children: React.ReactNode;
  /** Container size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
  /** Container padding */
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  /** Custom className */
  className?: string;
  /** Whether to center content */
  centered?: boolean;
}

export interface PageContentProps {
  /** Content */
  children: React.ReactNode;
  /** Content spacing */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Custom className */
  className?: string;
}

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs = [],
  actions,
  className,
}) => {
  return (
    <div className={`nexus-page-header ${className || ''}`}>
      <Container size="lg" className="nexus-page-header__container">
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={<ChevronRightIcon />}
            className="nexus-page-header__breadcrumbs"
            mb="sm"
          >
            {breadcrumbs.map((item, index) => (
              <Anchor
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="nexus-page-header__breadcrumb"
              >
                {item.label}
              </Anchor>
            ))}
          </Breadcrumbs>
        )}
        
        <Group justify="space-between" align="flex-start">
          <div className="nexus-page-header__content">
            <Text className="nexus-page-header__title" component="h1">
              {title}
            </Text>
            {subtitle && (
              <Text className="nexus-page-header__subtitle">
                {subtitle}
              </Text>
            )}
          </div>
          
          {actions && (
            <div className="nexus-page-header__actions">
              {actions}
            </div>
          )}
        </Group>
      </Container>
    </div>
  );
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  size = 'lg',
  padding = 'md',
  className,
  centered = false,
}) => {
  const containerClassName = `
    nexus-page-container
    nexus-page-container--${padding}
    ${centered ? 'nexus-page-container--centered' : ''}
    ${className || ''}
  `.trim();

  const containerSize = size === 'fluid' ? undefined : size;

  return (
    <Container
      size={containerSize}
      className={containerClassName}
      fluid={size === 'fluid'}
    >
      {children}
    </Container>
  );
};

export const PageContent: React.FC<PageContentProps> = ({
  children,
  spacing = 'md',
  className,
}) => {
  return (
    <Stack
      gap={spacing}
      className={`nexus-page-content ${className || ''}`}
    >
      {children}
    </Stack>
  );
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  header,
  navbar,
  aside,
  footer,
  containerSize = 'lg',
  padding = 'md',
  fluid = false,
  className,
  bg = 'default',
}) => {
  const layoutClassName = `
    nexus-page-layout
    nexus-page-layout--bg-${bg}
    ${className || ''}
  `.trim();

  const content = (
    <main className="nexus-page-layout__main">
      {header && <PageHeader {...header} />}
      <div className="nexus-page-layout__content">
        {fluid ? (
          <div className={`nexus-page-layout__fluid-content nexus-page-layout__content--${padding}`}>
            {children}
          </div>
        ) : (
          <PageContainer size={containerSize} padding={padding}>
            {children}
          </PageContainer>
        )}
      </div>
    </main>
  );

  // If we have navbar or aside, use AppShell
  if (navbar || aside) {
    return (
      <AppShell
        className={layoutClassName}
        navbar={navbar ? { width: 280, breakpoint: 'sm' } : undefined}
        aside={aside ? { width: 320, breakpoint: 'md' } : undefined}
        padding={0}
      >
        {navbar && (
          <AppShell.Navbar className="nexus-page-layout__navbar">
            {navbar}
          </AppShell.Navbar>
        )}
        
        <AppShell.Main>
          {content}
        </AppShell.Main>
        
        {aside && (
          <AppShell.Aside className="nexus-page-layout__aside">
            {aside}
          </AppShell.Aside>
        )}
        
        {footer && (
          <footer className="nexus-page-layout__footer">
            <PageContainer size={containerSize} padding={padding}>
              {footer}
            </PageContainer>
          </footer>
        )}
      </AppShell>
    );
  }

  // Simple layout without sidebars
  return (
    <div className={layoutClassName}>
      {content}
      {footer && (
        <footer className="nexus-page-layout__footer">
          <PageContainer size={containerSize} padding={padding}>
            {footer}
          </PageContainer>
        </footer>
      )}
    </div>
  );
};

export default PageLayout;
