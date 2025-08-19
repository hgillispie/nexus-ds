import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableColumn, TableAction, EditIcon, DeleteIcon } from './Table';
import React from 'react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible table component for displaying tabular data with sorting, selection, and action capabilities.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal'],
      description: 'Visual style variant of the table'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table cells and spacing'
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether rows should have hover effects'
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected with checkboxes'
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state with spinner'
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Makes the header sticky when scrolling'
    },
    data: {
      control: 'object',
      description: 'Array of data objects to display'
    },
    columns: {
      control: 'object',
      description: 'Column configuration array'
    },
    actions: {
      control: 'object',
      description: 'Available actions for each row'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for team members
const teamMembersData = [
  {
    id: '1',
    name: 'Olivia Rhye',
    email: '@olivia',
    avatar: 'https://ui-avatars.com/api/?name=Olivia+Rhye&size=40&background=8b5cf6&color=ffffff',
    access: 'Product Designer',
    lastActive: '1 hour ago',
    status: 'online'
  },
  {
    id: '2',
    name: 'Phoenix Baker',
    email: '@phoenix',
    avatar: 'https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff',
    access: 'Product Manager',
    lastActive: '2 hours ago',
    status: 'away'
  },
  {
    id: '3',
    name: 'Lana Steiner',
    email: '@lana',
    avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff',
    access: 'Frontend Developer',
    lastActive: '5 minutes ago',
    status: 'online'
  },
  {
    id: '4',
    name: 'Demi Wilkinson',
    email: '@demi',
    avatar: 'https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff',
    access: 'Frontend Developer',
    lastActive: '1 day ago',
    status: 'busy'
  },
  {
    id: '5',
    name: 'Candice Wu',
    email: '@candice',
    avatar: 'https://ui-avatars.com/api/?name=Candice+Wu&size=40&background=ef4444&color=ffffff',
    access: 'Backend Developer',
    lastActive: '3 hours ago',
    status: 'online'
  },
  {
    id: '6',
    name: 'Natali Craig',
    email: '@natali',
    avatar: 'https://ui-avatars.com/api/?name=Natali+Craig&size=40&background=06b6d4&color=ffffff',
    access: 'Product Designer',
    lastActive: '30 minutes ago',
    status: 'away'
  },
  {
    id: '7',
    name: 'Drew Cano',
    email: '@drew',
    avatar: 'https://ui-avatars.com/api/?name=Drew+Cano&size=40&background=8b5cf6&color=ffffff',
    access: 'UX Researcher',
    lastActive: '2 days ago',
    status: 'offline'
  },
  {
    id: '8',
    name: 'Orlando Diggs',
    email: '@orlando',
    avatar: 'https://ui-avatars.com/api/?name=Orlando+Diggs&size=40&background=3b82f6&color=ffffff',
    access: 'Backend Developer',
    lastActive: '45 minutes ago',
    status: 'online'
  },
  {
    id: '9',
    name: 'Andi Lane',
    email: '@andi',
    avatar: 'https://ui-avatars.com/api/?name=Andi+Lane&size=40&background=ec4899&color=ffffff',
    access: 'Frontend Developer',
    lastActive: '1 hour ago',
    status: 'busy'
  },
  {
    id: '10',
    name: 'Kate Morrison',
    email: '@kate',
    avatar: 'https://ui-avatars.com/api/?name=Kate+Morrison&size=40&background=14b8a6&color=ffffff',
    access: 'Product Manager',
    lastActive: '15 minutes ago',
    status: 'online'
  }
];

// Sample data for customers/companies
const customersData = [
  {
    id: '1',
    company: 'Catalog',
    license: 'Enterprise plan',
    logo: 'https://ui-avatars.com/api/?name=Catalog&size=40&background=6366f1&color=ffffff&bold=true',
    users: [
      'https://ui-avatars.com/api/?name=User+1&size=32&background=8b5cf6&color=ffffff',
      'https://ui-avatars.com/api/?name=User+2&size=32&background=4f46e5&color=ffffff',
      'https://ui-avatars.com/api/?name=User+3&size=32&background=10b981&color=ffffff'
    ],
    usage: 95,
    status: 'active'
  },
  {
    id: '2',
    company: 'Circooles',
    license: 'Starter plan',
    logo: 'https://ui-avatars.com/api/?name=Circooles&size=40&background=f59e0b&color=ffffff&bold=true',
    users: [
      'https://ui-avatars.com/api/?name=User+4&size=32&background=ef4444&color=ffffff',
      'https://ui-avatars.com/api/?name=User+5&size=32&background=06b6d4&color=ffffff'
    ],
    usage: 34,
    status: 'trial'
  },
  {
    id: '3',
    company: 'Command+R',
    license: 'Enterprise plan',
    logo: 'https://ui-avatars.com/api/?name=Command+R&size=40&background=10b981&color=ffffff&bold=true',
    users: [
      'https://ui-avatars.com/api/?name=User+6&size=32&background=8b5cf6&color=ffffff',
      'https://ui-avatars.com/api/?name=User+7&size=32&background=3b82f6&color=ffffff',
      'https://ui-avatars.com/api/?name=User+8&size=32&background=ec4899&color=ffffff',
      'https://ui-avatars.com/api/?name=User+9&size=32&background=14b8a6&color=ffffff'
    ],
    usage: 78,
    status: 'active'
  },
  {
    id: '4',
    company: 'Hourglass',
    license: 'Professional plan',
    logo: 'https://ui-avatars.com/api/?name=Hourglass&size=40&background=ef4444&color=ffffff&bold=true',
    users: [
      'https://ui-avatars.com/api/?name=User+10&size=32&background=f59e0b&color=ffffff'
    ],
    usage: 12,
    status: 'inactive'
  },
  {
    id: '5',
    company: 'Layers',
    license: 'Enterprise plan',
    logo: 'https://ui-avatars.com/api/?name=Layers&size=40&background=06b6d4&color=ffffff&bold=true',
    users: [
      'https://ui-avatars.com/api/?name=User+11&size=32&background=8b5cf6&color=ffffff',
      'https://ui-avatars.com/api/?name=User+12&size=32&background=4f46e5&color=ffffff'
    ],
    usage: 89,
    status: 'active'
  },
  {
    id: '6',
    company: 'Quotient',
    license: 'Starter plan',
    logo: 'https://ui-avatars.com/api/?name=Quotient&size=40&background=8b5cf6&color=ffffff&bold=true',
    users: [
      'https://ui-avatars.com/api/?name=User+13&size=32&background=10b981&color=ffffff',
      'https://ui-avatars.com/api/?name=User+14&size=32&background=ef4444&color=ffffff',
      'https://ui-avatars.com/api/?name=User+15&size=32&background=06b6d4&color=ffffff'
    ],
    usage: 67,
    status: 'trial'
  }
];

// Render functions for different cell types
const renderUser = (value: any, row: any) => (
  <div className="nexus-table__user">
    <img src={row.avatar} alt={row.name} className="nexus-table__avatar" />
    <div className="nexus-table__user-info">
      <div className="nexus-table__user-name">{row.name}</div>
      <div className="nexus-table__user-email">{row.email}</div>
    </div>
  </div>
);

const renderStatus = (value: string) => (
  <div className={`nexus-table__status nexus-table__status--${value}`}>
    <div className="nexus-table__status-dot"></div>
    {value.charAt(0).toUpperCase() + value.slice(1)}
  </div>
);

const renderCompany = (value: any, row: any) => (
  <div className="nexus-table__company">
    <img src={row.logo} alt={row.company} className="nexus-table__company-logo" />
    <div className="nexus-table__company-info">
      <div className="nexus-table__company-name">{row.company}</div>
      <div className="nexus-table__company-license">{row.license}</div>
    </div>
  </div>
);

const renderUsers = (users: string[]) => (
  <div className="nexus-table__avatar-group">
    {users.slice(0, 4).map((user, index) => (
      <img key={index} src={user} alt={`User ${index + 1}`} className="nexus-table__avatar" />
    ))}
    {users.length > 4 && (
      <div className="nexus-table__avatar" style={{ backgroundColor: '#f3f4f6', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '500' }}>
        +{users.length - 4}
      </div>
    )}
  </div>
);

const renderProgress = (usage: number) => (
  <div className="nexus-table__progress">
    <div className="nexus-table__progress-bar">
      <div className="nexus-table__progress-fill" style={{ width: `${usage}%` }}></div>
    </div>
    <div className="nexus-table__progress-text">{usage}%</div>
  </div>
);

// Column configurations
const teamColumns: TableColumn[] = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
    render: renderUser
  },
  {
    key: 'access',
    header: 'Access',
    sortable: true
  },
  {
    key: 'lastActive',
    header: 'Last active',
    sortable: true
  },
  {
    key: 'status',
    header: 'Status',
    render: (value) => renderStatus(value)
  }
];

const customerColumns: TableColumn[] = [
  {
    key: 'company',
    header: 'Company',
    sortable: true,
    render: renderCompany
  },
  {
    key: 'license',
    header: 'License use',
    sortable: true
  },
  {
    key: 'users',
    header: 'Users',
    render: (users) => renderUsers(users)
  },
  {
    key: 'usage',
    header: 'Usage',
    render: renderProgress
  }
];

// Action configurations
const teamActions: TableAction[] = [
  {
    key: 'edit',
    label: 'Edit user',
    icon: <EditIcon />,
    onClick: (row) => alert(`Edit ${row.name}`)
  },
  {
    key: 'delete',
    label: 'Delete user',
    icon: <DeleteIcon />,
    onClick: (row) => alert(`Delete ${row.name}`),
    destructive: true
  }
];

const customerActions: TableAction[] = [
  {
    key: 'edit',
    label: 'Edit company',
    icon: <EditIcon />,
    onClick: (row) => alert(`Edit ${row.company}`)
  },
  {
    key: 'delete',
    label: 'Delete company',
    icon: <DeleteIcon />,
    onClick: (row) => alert(`Delete ${row.company}`),
    destructive: true
  }
];

export const Default: Story = {
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    variant: 'default',
    size: 'md',
    hoverable: true,
    selectable: false
  }
};

export const TeamMembers: Story = {
  args: {
    data: teamMembersData,
    columns: teamColumns,
    actions: teamActions,
    variant: 'default',
    size: 'md',
    hoverable: true,
    selectable: true,
    caption: 'Team members'
  },
  parameters: {
    docs: {
      description: {
        story: 'A complete team members table with avatars, status indicators, and row actions.'
      }
    }
  }
};

export const Customers: Story = {
  args: {
    data: customersData,
    columns: customerColumns,
    actions: customerActions,
    variant: 'default',
    size: 'md',
    hoverable: true,
    selectable: false,
    caption: 'Customers'
  },
  parameters: {
    docs: {
      description: {
        story: 'A customers table showing company information, user avatars, and usage metrics.'
      }
    }
  }
};

export const WithSelection: Story = {
  args: {
    data: teamMembersData.slice(0, 6),
    columns: teamColumns,
    actions: teamActions,
    selectable: true,
    selectedRows: ['1', '3']
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with row selection enabled and some rows pre-selected.'
      }
    }
  }
};

export const WithSorting: Story = {
  args: {
    data: teamMembersData.slice(0, 6),
    columns: teamColumns,
    actions: teamActions,
    sortConfig: {
      key: 'name',
      direction: 'asc'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sorting functionality enabled and active sort indicator.'
      }
    }
  }
};

export const SmallSize: Story = {
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    size: 'sm',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact table with smaller padding and spacing.'
      }
    }
  }
};

export const LargeSize: Story = {
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    size: 'lg',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large table with increased padding and spacing for better readability.'
      }
    }
  }
};

export const MinimalVariant: Story = {
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    variant: 'minimal',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table variant with reduced visual elements and borders.'
      }
    }
  }
};

export const StickyHeader: Story = {
  args: {
    data: teamMembersData,
    columns: teamColumns,
    actions: teamActions,
    stickyHeader: true,
    caption: 'Scrollable table with sticky header'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a sticky header that remains visible when scrolling through large datasets.'
      }
    }
  }
};

export const Loading: Story = {
  args: {
    data: [],
    columns: teamColumns,
    actions: teamActions,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with spinner and overlay.'
      }
    }
  }
};

export const Empty: Story = {
  args: {
    data: [],
    columns: teamColumns,
    actions: teamActions,
    emptyMessage: 'No team members found'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table empty state with custom message.'
      }
    }
  }
};

export const NoActions: Story = {
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: [],
    variant: 'default',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table without action buttons for read-only data display.'
      }
    }
  }
};

export const CustomAlignment: Story = {
  args: {
    data: customersData.slice(0, 4),
    columns: [
      ...customerColumns.slice(0, 2),
      {
        ...customerColumns[2],
        align: 'center'
      },
      {
        ...customerColumns[3],
        align: 'right'
      }
    ],
    actions: customerActions
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom column alignments: left, center, and right.'
      }
    }
  }
};

// Interactive example with state management
export const Interactive: Story = {
  render: (args) => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
    const [sortConfig, setSortConfig] = React.useState<{key: string, direction: 'asc' | 'desc'} | undefined>();
    
    return (
      <Table
        {...args}
        data={teamMembersData}
        columns={teamColumns}
        actions={teamActions}
        selectable={true}
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        sortConfig={sortConfig}
        onSort={(key, direction) => setSortConfig({ key, direction })}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive table with selection and sorting state management.'
      }
    }
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }}>Team Members Table</h3>
        <Table
          data={teamMembersData.slice(0, 6)}
          columns={teamColumns}
          actions={teamActions}
          selectable={true}
          hoverable={true}
          caption="Team members overview"
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }}>Customers Table</h3>
        <Table
          data={customersData}
          columns={customerColumns}
          actions={customerActions}
          hoverable={true}
          caption="Customer accounts and usage"
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }}>Minimal Variant</h3>
        <Table
          data={teamMembersData.slice(0, 4)}
          columns={teamColumns}
          variant="minimal"
          hoverable={true}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }}>Small Size</h3>
        <Table
          data={teamMembersData.slice(0, 4)}
          columns={teamColumns}
          actions={teamActions}
          size="sm"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all table variants and configurations.'
      }
    }
  }
};
