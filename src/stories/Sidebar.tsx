import React from 'react';
import {
  AppShell,
  Drawer,
  NavLink,
  ScrollArea,
  Divider,
  Group,
  Text,
  Badge,
  Collapse,
  UnstyledButton,
  Avatar,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
  /** Whether sidebar is collapsible */
  collapsible?: boolean;
  /** Whether sidebar is collapsed */
  collapsed?: boolean;
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void;
  /** Sidebar width when expanded */
  width?: number;
  /** Custom className */
  className?: string;
}

export interface DrawerSidebarProps extends SidebarProps {
  /** Whether drawer is opened */
  opened: boolean;
  /** Callback when drawer is closed */
  onClose: () => void;
  /** Drawer title */
  title?: string;
  /** Drawer position */
  position?: 'left' | 'right';
  /** Drawer size */
  size?: number | string;
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

const CollapseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13 6L8 11L3 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SidebarItemComponent: React.FC<{
  item: SidebarItem;
  level?: number;
  collapsed?: boolean;
}> = ({ item, level = 0, collapsed = false }) => {
  const [childrenOpened, { toggle: toggleChildren }] = useDisclosure(false);
  const hasChildren = item.children && item.children.length > 0;
  
  const handleClick = () => {
    if (hasChildren) {
      toggleChildren();
    } else if (item.onClick) {
      item.onClick();
    }
  };

  if (hasChildren) {
    return (
      <>
        <UnstyledButton
          className={`nexus-sidebar__item nexus-sidebar__item--parent ${
            item.active ? 'nexus-sidebar__item--active' : ''
          } ${item.disabled ? 'nexus-sidebar__item--disabled' : ''}`}
          onClick={handleClick}
          disabled={item.disabled}
          style={{ paddingLeft: `${0.75 + level * 1}rem` }}
        >
          <Group justify="space-between" gap="xs">
            <Group gap="xs" style={{ flex: 1, minWidth: 0 }}>
              {item.icon && (
                <div className="nexus-sidebar__icon">
                  {item.icon}
                </div>
              )}
              {!collapsed && (
                <Text className="nexus-sidebar__label" truncate>
                  {item.label}
                </Text>
              )}
            </Group>
            {!collapsed && (
              <div className={`nexus-sidebar__chevron ${childrenOpened ? 'nexus-sidebar__chevron--open' : ''}`}>
                <CollapseIcon />
              </div>
            )}
            {item.badge && !collapsed && (
              <Badge size="xs" className="nexus-sidebar__badge">
                {item.badge}
              </Badge>
            )}
          </Group>
        </UnstyledButton>
        
        {!collapsed && (
          <Collapse in={childrenOpened}>
            <div className="nexus-sidebar__children">
              {item.children?.map((child, index) => (
                <SidebarItemComponent
                  key={index}
                  item={child}
                  level={level + 1}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <NavLink
      className={`nexus-sidebar__item ${item.active ? 'nexus-sidebar__item--active' : ''}`}
      href={item.href}
      onClick={item.onClick}
      disabled={item.disabled}
      style={{ paddingLeft: `${0.75 + level * 1}rem` }}
      label={!collapsed ? item.label : undefined}
      leftSection={item.icon}
      rightSection={
        item.badge && !collapsed ? (
          <Badge size="xs" className="nexus-sidebar__badge">
            {item.badge}
          </Badge>
        ) : undefined
      }
    />
  );
};

const SidebarContent: React.FC<{
  sections?: SidebarSection[];
  items?: SidebarItem[];
  user?: SidebarUserProps;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsed?: boolean;
}> = ({ sections, items, user, header, footer, collapsed = false }) => {
  return (
    <div className="nexus-sidebar__content">
      {header && (
        <div className="nexus-sidebar__header">
          {header}
        </div>
      )}
      
      <ScrollArea className="nexus-sidebar__scroll">
        <div className="nexus-sidebar__nav">
          {sections ? (
            sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="nexus-sidebar__section">
                {section.label && !collapsed && (
                  <Text className="nexus-sidebar__section-label">
                    {section.label}
                  </Text>
                )}
                <div className="nexus-sidebar__section-items">
                  {section.items.map((item, itemIndex) => (
                    <SidebarItemComponent
                      key={itemIndex}
                      item={item}
                      collapsed={collapsed}
                    />
                  ))}
                </div>
                {sectionIndex < sections.length - 1 && !collapsed && (
                  <Divider className="nexus-sidebar__divider" />
                )}
              </div>
            ))
          ) : (
            items?.map((item, index) => (
              <SidebarItemComponent
                key={index}
                item={item}
                collapsed={collapsed}
              />
            ))
          )}
        </div>
      </ScrollArea>
      
      {user && (
        <div className="nexus-sidebar__user">
          <UnstyledButton
            className="nexus-sidebar__user-button"
            onClick={user.onClick}
          >
            <Group gap="sm">
              <Avatar src={user.avatar} size="sm" radius="xl">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </Avatar>
              {!collapsed && (
                <div className="nexus-sidebar__user-info">
                  <Text className="nexus-sidebar__user-name" size="sm" fw={500}>
                    {user.name}
                  </Text>
                  {user.email && (
                    <Text className="nexus-sidebar__user-email" size="xs" c="dimmed">
                      {user.email}
                    </Text>
                  )}
                  {user.role && (
                    <Text className="nexus-sidebar__user-role" size="xs" c="dimmed">
                      {user.role}
                    </Text>
                  )}
                </div>
              )}
            </Group>
          </UnstyledButton>
        </div>
      )}
      
      {footer && (
        <div className="nexus-sidebar__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  items,
  user,
  header,
  footer,
  collapsible = false,
  collapsed = false,
  onCollapseChange,
  width = 280,
  className,
}) => {
  const sidebarClassName = `
    nexus-sidebar
    ${collapsed ? 'nexus-sidebar--collapsed' : ''}
    ${collapsible ? 'nexus-sidebar--collapsible' : ''}
    ${className || ''}
  `.trim();

  const content = (
    <SidebarContent
      sections={sections}
      items={items}
      user={user}
      header={header}
      footer={footer}
      collapsed={collapsed}
    />
  );


  return (
    <div className={sidebarClassName} style={{ width: collapsed ? 80 : width }}>
      {collapsible && (
        <ActionIcon
          className="nexus-sidebar__collapse-button"
          variant="subtle"
          onClick={() => onCollapseChange?.(!collapsed)}
        >
          <ChevronRightIcon />
        </ActionIcon>
      )}
      {content}
    </div>
  );
};

export const DrawerSidebar: React.FC<DrawerSidebarProps> = ({
  opened,
  onClose,
  title,
  position = 'left',
  size = 280,
  sections,
  items,
  user,
  header,
  footer,
  className,
  ...props
}) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={title}
      position={position}
      size={size}
      className={`nexus-drawer-sidebar ${className || ''}`}
      padding={0}
    >
      <SidebarContent
        sections={sections}
        items={items}
        user={user}
        header={header}
        footer={footer}
        collapsed={false}
      />
    </Drawer>
  );
};

export default Sidebar;
