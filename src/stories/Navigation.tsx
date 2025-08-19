import React from 'react';
import {
  Burger,
  Group,
  Text,
  UnstyledButton,
  Avatar,
  Menu,
  Divider,
  ActionIcon,
  Badge,
  Indicator,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
  /** Brand/logo text or component */
  brand?: React.ReactNode;
  /** Navigation items for the main menu */
  items?: NavigationItem[];
  /** User menu configuration */
  user?: UserMenuProps;
  /** Additional actions in the header */
  actions?: React.ReactNode[];
  /** Whether to show the mobile menu burger */
  showMobileMenu?: boolean;
  /** Callback when mobile menu is toggled */
  onMobileMenuToggle?: (opened: boolean) => void;
  /** Search component */
  search?: React.ReactNode;
  /** Notifications count */
  notificationsCount?: number;
  /** Callback for notifications click */
  onNotificationsClick?: () => void;
  /** Custom className */
  className?: string;
}

const NotificationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M15 6.66669C15 5.34061 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.34061 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70803 18.3304 9.42117 18.2537 9.16816 18.1079C8.91514 17.9622 8.70482 17.7526 8.55835 17.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Navigation: React.FC<NavigationProps> = ({
  brand = "Untitled UI",
  items = [],
  user,
  actions = [],
  showMobileMenu = true,
  onMobileMenuToggle,
  search,
  notificationsCount,
  onNotificationsClick,
  className,
}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  const handleMobileToggle = () => {
    toggleMobile();
    onMobileMenuToggle?.(mobileOpened);
  };

  return (
    <header className={`nexus-navigation ${className || ''}`}>
      <div className="nexus-navigation__container">
        <Group justify="space-between" h="100%">
          {/* Left Section: Brand + Navigation */}
          <Group gap="xl">
            {/* Mobile Menu Burger */}
            {showMobileMenu && (
              <Burger
                opened={mobileOpened}
                onClick={handleMobileToggle}
                hiddenFrom="sm"
                size="sm"
                className="nexus-navigation__burger"
              />
            )}

            {/* Brand */}
            <Group gap="sm">
              {typeof brand === 'string' ? (
                <Text className="nexus-navigation__brand">{brand}</Text>
              ) : (
                brand
              )}
            </Group>

            {/* Desktop Navigation */}
            <Group gap="xs" visibleFrom="sm">
              {items.map((item, index) => (
                <UnstyledButton
                  key={index}
                  className={`nexus-navigation__item ${item.active ? 'nexus-navigation__item--active' : ''}`}
                  onClick={item.onClick}
                >
                  <Group gap="xs">
                    {item.icon}
                    <Text size="sm">{item.label}</Text>
                    {item.badge && (
                      <Badge size="xs" variant="filled" className="nexus-navigation__badge">
                        {item.badge}
                      </Badge>
                    )}
                  </Group>
                </UnstyledButton>
              ))}
            </Group>
          </Group>

          {/* Center Section: Search */}
          {search && (
            <div className="nexus-navigation__search">
              {search}
            </div>
          )}

          {/* Right Section: Actions + User */}
          <Group gap="sm">
            {/* Notifications */}
            {(notificationsCount !== undefined || onNotificationsClick) && (
              <ActionIcon
                variant="subtle"
                size="lg"
                className="nexus-navigation__notification"
                onClick={onNotificationsClick}
              >
                {notificationsCount && notificationsCount > 0 ? (
                  <Indicator inline label={notificationsCount} size={16}>
                    <NotificationIcon />
                  </Indicator>
                ) : (
                  <NotificationIcon />
                )}
              </ActionIcon>
            )}

            {/* Additional Actions */}
            {actions.map((action, index) => (
              <div key={index}>{action}</div>
            ))}

            {/* User Menu */}
            {user && (
              <Menu position="bottom-end" withArrow>
                <Menu.Target>
                  <UnstyledButton className="nexus-navigation__user">
                    <Group gap="sm">
                      <Avatar src={user.avatar} size="sm" radius="xl">
                        {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </Avatar>
                      <div className="nexus-navigation__user-info" style={{ display: 'none' }}>
                        <Text size="sm" fw={500}>{user.name}</Text>
                        <Text size="xs" c="dimmed">{user.email}</Text>
                      </div>
                      <ChevronDownIcon />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>
                    <div>
                      <Text size="sm" fw={500}>{user.name}</Text>
                      <Text size="xs" c="dimmed">{user.email}</Text>
                    </div>
                  </Menu.Label>
                  <Divider />
                  <Menu.Item onClick={user.onProfile}>Profile</Menu.Item>
                  <Menu.Item onClick={user.onSettings}>Settings</Menu.Item>
                  <Divider />
                  <Menu.Item color="red" onClick={user.onLogout}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
          </Group>
        </Group>
      </div>
    </header>
  );
};

export default Navigation;
