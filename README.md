# Taskbox Design System

A comprehensive React design system built with TypeScript and custom components. This system provides a complete set of components, patterns, and guidelines for building modern web applications with Builder Fusion.

## 🚀 Quick Start

### Installation

```bash
npm install nexus-ds
# or
yarn add nexus-ds
```

### Basic Setup

```tsx
import { designSystemTheme } from 'nexus-ds';
// Import global styles
import 'nexus-ds/styles.css';

function App() {
  return (
    <div>
      {/* Your app content with design system components */}
    </div>
  );
}
```

### Using Components

```tsx
import { 
  Button, 
  Card, 
  Navigation, 
  PageLayout, 
  Typography 
} from 'nexus-ds';

function MyPage() {
  return (
    <PageLayout
      header={{
        title: "Dashboard",
        subtitle: "Welcome to your application",
        actions: <Button>New Project</Button>
      }}
    >
      <Card title="Welcome">
        <Typography variant="text-lg">
          Get started with your new application using our design system.
        </Typography>
      </Card>
    </PageLayout>
  );
}
```

## 📚 Documentation

### Storybook (Interactive Documentation)
- **Local Development**: Run `npm run storybook` and visit `http://localhost:6006`
- **Component Library**: All components with live examples, props, and usage guidelines
- **Design Tokens**: Color palettes, typography scales, and spacing systems

## 📖 Component Documentation

### 🎨 Core Design System Components

#### [`Button`](src/stories/Button.stories.tsx)
**Purpose**: Primary user actions and interactions
**When to use**: For any clickable action like submit, save, delete, navigate
**Variants**:
- `primary` - Main actions (submit forms, primary CTAs)
- `secondary-color` - Secondary actions with brand emphasis
- `secondary-gray` - Neutral secondary actions
- `destructive` - Dangerous actions (delete, remove)

```tsx
// Primary action
<Button variant="primary" size="lg">Create Project</Button>

// Destructive action
<Button variant="destructive" size="md">Delete Account</Button>

// With icons
<Button variant="primary" iconPosition="trailing" icon={<ArrowIcon />}>
  Continue
</Button>
```

#### [`Input`](src/stories/Input.stories.tsx)
**Purpose**: Text data collection and form fields
**When to use**: For any text input including emails, passwords, URLs, search
**Types**:
- `default` - Standard text inputs
- `payment` - Credit card and payment fields
- `leading-dropdown` - With country codes or prefixes
- `trailing-dropdown` - With units or suffixes
- `leading-text` - URL inputs with protocol prefix

```tsx
// Basic input
<Input label="Email Address" type="email" placeholder="Enter email" />

// Payment input
<Input type="payment" label="Card Number" />

// With validation
<Input label="Password" type="password" error={true} helperText="Password too weak" />
```

#### [`Select`](src/stories/Select.stories.tsx)
**Purpose**: Single or multiple option selection from predefined lists
**When to use**: For dropdowns, country selection, categories, user assignment
**Features**: Search functionality, icon support, grouping

```tsx
// Basic select
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ]}
/>

// With search
<Select type="search" label="Assign User" options={users} />

// With icons
<Select type="icon-leading" label="Status" options={statusOptions} />
```

#### [`Checkbox`](src/stories/Checkbox.stories.tsx)
**Purpose**: Binary selection and agreement confirmation
**When to use**: For terms agreement, feature toggles, multi-select lists
**Types**: `checkbox` for multiple selections, `radio` for single selection

```tsx
// Simple checkbox
<Checkbox label="Remember me" />

// Radio buttons
<Checkbox type="radio" name="plan" label="Basic Plan" />
<Checkbox type="radio" name="plan" label="Pro Plan" />

// With supporting text
<Checkbox
  label="Email notifications"
  showSupportingText={true}
  supportingText="Receive updates about your account"
/>
```

#### [`Toggle`](src/stories/Toggle.stories.tsx)
**Purpose**: On/off states and preference settings
**When to use**: For feature enable/disable, privacy settings, notifications

```tsx
// Settings toggle
<Toggle label="Enable notifications" showText={true} />

// With supporting text
<Toggle
  label="Two-factor authentication"
  showSupportingText={true}
  supportingText="Add extra security to your account"
/>
```

#### [`Badge`](src/stories/Badge.stories.tsx)
**Purpose**: Status indicators, labels, and count displays
**When to use**: For status labels, notification counts, category tags
**Colors**: `primary`, `gray`, `error`, `warning`, `success`

```tsx
// Status badge
<Badge color="success">Active</Badge>

// Count badge
<Badge color="primary">12</Badge>

// With icon
<Badge color="error" icon="trailing">Failed</Badge>
```

#### [`Typography`](src/stories/Typography.stories.tsx)
**Purpose**: Consistent text styling across the application
**When to use**: For all text content instead of custom styles
**Scales**:
- `display-*` - Large headings and hero text
- `text-*` - Body text and descriptions

```tsx
// Page headings
<Typography variant="display-xl" weight="semibold">Dashboard</Typography>

// Body text
<Typography variant="text-lg" color="secondary">
  Manage your projects and team members
</Typography>

// Helper components
<Heading level={2}>Section Title</Heading>
<Text size="md">Body content</Text>
<Caption>Helper text</Caption>
```

### 🧩 Complex Components

#### [`Card`](src/stories/Card.stories.tsx)
**Purpose**: Content containers with structured information
**When to use**: For displaying grouped information, dashboard widgets, product cards
**Features**: Headers, actions, badges, images, interactive states

```tsx
// Basic card
<Card title="Project Overview" subtitle="Current status and metrics">
  <Text>Your project content here</Text>
</Card>

// With actions
<Card
  title="Team Members"
  badge={{ label: "5 members", color: "primary" }}
  actions={[
    { label: "Edit", icon: <EditIcon />, onClick: handleEdit },
    { label: "Delete", icon: <DeleteIcon />, variant: "subtle" }
  ]}
>
  {membersList}
</Card>

// Interactive card
<Card
  title="Analytics Dashboard"
  interactive={true}
  onClick={() => navigate('/analytics')}
>
  {chartComponent}
</Card>
```

#### [`Table`](src/stories/Table.stories.tsx)
**Purpose**: Displaying and managing tabular data
**When to use**: For user lists, data grids, admin panels, reports
**Features**: Sorting, selection, row actions, pagination

```tsx
<Table
  data={users}
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status', sortable: true }
  ]}
  actions={[
    { label: 'Edit', icon: <EditIcon />, onClick: (row) => editUser(row.id) },
    { label: 'Delete', icon: <DeleteIcon />, variant: 'destructive' }
  ]}
  selectable={true}
  onSelectionChange={handleSelection}
/>
```

#### [`Navigation`](src/stories/Navigation.stories.tsx)
**Purpose**: Primary app navigation and user account access
**When to use**: As the main header for web applications
**Features**: Responsive design, user menu, notifications, search integration

```tsx
<Navigation
  brand="Your App Name"
  items={[
    { label: "Dashboard", href: "/dashboard", active: true, icon: <HomeIcon /> },
    { label: "Projects", href: "/projects", badge: "3", icon: <ProjectsIcon /> },
    { label: "Team", href: "/team", icon: <UsersIcon /> }
  ]}
  user={{
    name: "John Doe",
    email: "john@company.com",
    avatar: "/user-avatar.jpg",
    onProfile: () => navigate('/profile'),
    onSettings: () => navigate('/settings'),
    onLogout: handleLogout
  }}
  search={<SearchInput />}
  notificationsCount={5}
  onNotificationsClick={() => setNotificationsOpen(true)}
/>
```

#### [`Sidebar`](src/stories/Sidebar.stories.tsx)
**Purpose**: Secondary navigation and app section organization
**When to use**: For admin panels, dashboards with multiple sections, settings pages
**Features**: Collapsible, nested items, user profile, sections

```tsx
<Sidebar
  sections={[
    {
      label: "Main",
      items: [
        { label: "Dashboard", icon: <DashboardIcon />, active: true },
        { label: "Analytics", icon: <ChartIcon /> }
      ]
    },
    {
      label: "Management",
      items: [
        {
          label: "Users",
          icon: <UsersIcon />,
          children: [
            { label: "All Users", badge: "245" },
            { label: "Pending", badge: "12" }
          ]
        }
      ]
    }
  ]}
  user={{
    name: "Admin User",
    email: "admin@company.com",
    role: "Administrator"
  }}
  collapsible={true}
/>
```

#### [`PageLayout`](src/stories/PageLayout.stories.tsx)
**Purpose**: Page structure and consistent spacing
**When to use**: As the foundation for all application pages
**Features**: Headers, breadcrumbs, containers, responsive design

```tsx
// Full page layout
<PageLayout
  header={{
    title: "User Management",
    subtitle: "Manage user accounts and permissions",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Admin", href: "/admin" },
      { label: "Users" }
    ],
    actions: (
      <Group>
        <Button variant="secondary-gray">Export</Button>
        <Button variant="primary">Add User</Button>
      </Group>
    )
  }}
  containerSize="lg"
>
  {pageContent}
</PageLayout>

// Simple page wrapper
<PageContainer size="md" padding="lg">
  <Typography variant="display-lg" mb="lg">Settings</Typography>
  {settingsForm}
</PageContainer>
```

#### [`Modal`](src/stories/Modal.stories.tsx)
**Purpose**: Focused user interactions and confirmations
**When to use**: For forms, confirmations, detailed views, image galleries
**Features**: Various sizes, close handling, action buttons

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  size="md"
  title="Confirm Deletion"
  description="This action cannot be undone"
  actions={[
    { label: "Cancel", variant: "secondary", onClick: handleClose },
    { label: "Delete", variant: "destructive", onClick: handleDelete }
  ]}
>
  <Text>Are you sure you want to delete this item?</Text>
</Modal>
```

### 📊 Data Visualization Components

#### [`Chart`](src/stories/Chart.stories.tsx)
**Purpose**: Line and area charts for trends over time
**When to use**: For analytics dashboards, performance metrics, time series data

```tsx
<Chart
  data={analyticsData}
  series={[
    { name: "Users", color: "#0a0e1b", type: "line" },
    { name: "Revenue", color: "#059669", type: "area" }
  ]}
  height={400}
  showLegend={true}
/>
```

#### [`Table`](src/stories/Table.stories.tsx)
**Purpose**: Data tables with sorting and actions
**When to use**: For displaying structured data with user interactions

#### [`PieChart`](src/stories/PieChart.stories.tsx)
**Purpose**: Part-to-whole relationships and proportions
**When to use**: For market share, budget allocation, category breakdowns

```tsx
<PieChart
  data={[
    { label: "Desktop", value: 45, color: "#0a0e1b" },
    { label: "Mobile", value: 35, color: "#059669" },
    { label: "Tablet", value: 20, color: "#e8b4a2" }
  ]}
  size="lg"
  showLabels={true}
/>
```

### 📐 Layout Utilities

#### [`Layout`](src/stories/Layout.stories.tsx)
**Purpose**: Responsive grid systems and containers
**When to use**: For organizing content in rows and columns

```tsx
// Grid layout
<Container size="lg">
  <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
    <Card>Content 1</Card>
    <Card>Content 2</Card>
    <Card>Content 3</Card>
  </SimpleGrid>
</Container>

// Flex layout
<Group justify="space-between" align="center">
  <Typography variant="text-xl">Page Title</Typography>
  <Button>Action</Button>
</Group>
```

## 🎨 Design Tokens

All design tokens are defined in [`DESIGN-TOKENS.md`](DESIGN-TOKENS.md) and include:

### Colors
```json
{
  "colorprimary": "#0a0e1b",
  "colorprimarytext": "#0a0e1b", 
  "colorsuccess": "#059669",
  "colorwarning": "#e8b4a2",
  "colorerror": "#fa5252",
  "colorinfo": "#00d9ff",
  "colortext": "#171717",
  "colortextsecondary": "#525252",
  "colorbgcontainer": "#ffffff",
  "colorbgbase": "#fafafa"
}
```

### Typography Scale
Built on **Inter font family** with semantic scaling:

- **Display**: `display-2xl` (36px) to `display-xs` (24px)
- **Text**: `text-xl` (20px) to `text-xs` (12px)
- Proper line heights and letter spacing included

### Spacing & Layout
- Consistent 8px grid system
- Responsive breakpoints: `sm: 768px`, `md: 1024px`, `lg: 1280px`, `xl: 1440px`

## 🛠 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd design-system

# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Run tests
npm test

# Build the library
npm run build
```

### File Structure

```
src/
├── stories/           # Component implementations and stories
│   ├── *.tsx         # Component source files
│   ├── *.css         # Component styles
│   ├── *.stories.tsx # Storybook stories
│   └── theme.ts      # Design system theme configuration
├── index.ts          # Main export file
└── index.css         # Global styles

.storybook/           # Storybook configuration
DESIGN-TOKENS.md                     # Design tokens configuration
```

## 🔧 Implementation Patterns

### Common Page Structures

#### **Dashboard Layout**
```tsx
import { PageLayout, Navigation, Card, Chart, Table } from 'nexus-ds';

function Dashboard() {
  return (
    <>
      <Navigation brand="Dashboard" items={navItems} user={currentUser} />
      <PageLayout containerSize="lg">
        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
          <Card title="Total Users" badge={{ label: "↗ 12%", color: "success" }}>
            <Typography variant="display-lg">2,543</Typography>
          </Card>
          <Card title="Revenue" badge={{ label: "↘ 3%", color: "error" }}>
            <Typography variant="display-lg">$12,340</Typography>
          </Card>
        </SimpleGrid>
        <Card title="Analytics Overview">
          <Chart data={chartData} series={chartSeries} />
        </Card>
      </PageLayout>
    </>
  );
}
```

#### **Data Management Page**
```tsx
import { PageLayout, Table, Button, Modal, Input } from 'nexus-ds';

function UserManagement() {
  return (
    <PageLayout
      header={{
        title: "User Management",
        subtitle: "Manage user accounts and permissions",
        actions: <Button variant="primary">Add User</Button>
      }}
    >
      <Card>
        <Table
          data={users}
          columns={userColumns}
          actions={tableActions}
          selectable={true}
        />
      </Card>

      <Modal isOpen={showModal} title="Add New User">
        <Stack spacing="md">
          <Input label="Full Name" />
          <Input label="Email" type="email" />
          <Select label="Role" options={roleOptions} />
          <Group justify="flex-end">
            <Button variant="secondary-gray">Cancel</Button>
            <Button variant="primary">Create User</Button>
          </Group>
        </Stack>
      </Modal>
    </PageLayout>
  );
}
```

#### **Settings/Form Page**
```tsx
import { PageLayout, Card, Input, Select, Toggle, Button } from 'nexus-ds';

function Settings() {
  return (
    <PageLayout
      header={{
        title: "Account Settings",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Settings" }
        ]
      }}
      containerSize="md"
    >
      <Stack spacing="lg">
        <Card title="Profile Information">
          <Stack spacing="md">
            <Input label="Display Name" defaultValue="John Doe" />
            <Input label="Email" type="email" defaultValue="john@company.com" />
            <Select label="Timezone" options={timezoneOptions} />
          </Stack>
        </Card>

        <Card title="Preferences">
          <Stack spacing="md">
            <Toggle label="Email Notifications" defaultChecked={true} />
            <Toggle label="Two-Factor Authentication" />
            <Toggle label="Marketing Communications" />
          </Stack>
        </Card>

        <Group justify="flex-end">
          <Button variant="secondary-gray">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </Group>
      </Stack>
    </PageLayout>
  );
}
```

#### **Application with Sidebar**
```tsx
import { Sidebar, PageLayout, Card } from 'nexus-ds';

function AdminPanel() {
  return (
    <AppShell navbar={{ width: 280, breakpoint: 'sm' }}>
      <AppShell.Navbar>
        <Sidebar
          sections={adminSections}
          user={adminUser}
          collapsible={true}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <PageLayout containerSize="lg">
          {/* Page content */}
        </PageLayout>
      </AppShell.Main>
    </AppShell>
  );
}
```


## 📖 External References

### Design Inspiration
- **[Untitled UI](https://untitledui.com/)** - Original Figma design system
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Typography foundation

### Technical Documentation
- **[Storybook](https://storybook.js.org/)** - Component documentation
- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Accessibility
- **[WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)** - All components follow AA standards
- **[ARIA Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)** - Proper semantic markup

## 🎯 Best Practices

### Component Usage
1. **Import components from the design system** with proper TypeScript types
2. **Import design tokens** instead of hardcoding colors
3. **Use semantic component variants** (primary, secondary, etc.)
4. **Follow the typography scale** instead of custom font sizes
5. **Test responsive behavior** on mobile and desktop

### Builder Fusion Optimization
1. **Combine layout components** for complex page structures
2. **Use consistent spacing** with our 8px grid system
3. **Leverage component variants** for different UI states
4. **Include proper labels** for accessibility
5. **Test with real data** to ensure components scale properly

## 🔄 Updates & Versioning

- **Major version**: Breaking API changes
- **Minor version**: New components or features
- **Patch version**: Bug fixes and improvements

### Changelog
See [CHANGELOG.md](CHANGELOG.md) for detailed release notes.

## 🤝 Contributing

### Installation

```bash
# Clone the repository
git clone https://github.com/hgillispie/nexus-ds.git
cd nexus-ds

# Install dependencies
yarn install
# or
npm install
```

### Development Commands

```bash
# Start Storybook for component development and documentation
yarn storybook
# or
npm run storybook

# Build Storybook for production
yarn build-storybook
# or
npm run build-storybook

# Start the main React app (if needed)
yarn dev
# or
npm run dev

# Build the main app
yarn build
# or
npm run build

# Preview the built app
yarn preview
# or
npm run preview
```

### Builder.io Fusion Integration

This project is configured to work with Builder.io Fusion for AI-powered development:

```bash
# Start Builder.io Fusion (requires proper configuration)
npx builder.io@latest fusion

# Launch Builder.io visual editor
npx builder.io@latest launch --serverUrl http://localhost:6006
```

**Note**: Make sure Storybook is running on port 6006 before launching Builder.io.

## 📚 Documentation

### Storybook (Interactive Documentation)
- **Local Development**: Run `yarn storybook` and visit `http://localhost:6006`
- **Component Library**: All components with live examples, props, and usage guidelines
- **Design Tokens**: Color palettes, typography scales, and spacing systems

### Design System Documentation
- **[Design Tokens](DESIGN-TOKENS.md)** - Color, typography, and spacing guidelines
- **[Font Standards](FONT_STANDARDS.md)** - Typography and font usage
- **[Layout Components](LAYOUT_COMPONENTS.md)** - Layout patterns and components
- **[Agent Guidelines](AGENTS.md)** - AI agent development guidelines



### Development Workflow

1. **Start Storybook**: `yarn storybook`
2. **Create/Edit Components**: Add components in `src/stories/`
3. **Add Stories**: Create Storybook stories for each component
4. **Test Components**: Use Storybook's interactive features
5. **Build**: `yarn build-storybook` for production

## 🔧 Builder.io Fusion Configuration

This project includes Builder.io Fusion configuration for AI-powered development:

- **`builder.config.json`**: Main configuration file
- **`.builderrules`**: AI agent development rules
- **`.builderignore`**: Files to ignore during AI processing

### Fusion Setup

1. Ensure you're logged into Builder.io: `npx builder.io@latest login`
2. Start Storybook: `yarn storybook`
3. Run Fusion: `npx builder.io@latest fusion`

## 📖 External References

### Design Inspiration
- **[Untitled UI](https://untitledui.com/)** - Original Figma design system


### Technical Documentation
- **[Storybook](https://storybook.js.org/)** - Component documentation
- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool

### Accessibility
- **[WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)** - All components follow AA standards
- **[ARIA Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)** - Proper semantic markup

## 🎯 Best Practices

### Component Development
1. **Use TypeScript** for all components
2. **Create Storybook stories** for all variants
3. **Follow design tokens** for colors, typography, and spacing
4. **Test accessibility** with keyboard navigation and screen readers
5. **Ensure responsive design** works on all screen sizes

### Builder Fusion Optimization
1. **Use consistent naming** for components and props
2. **Include comprehensive documentation** in stories
3. **Follow the established patterns** in existing components
4. **Test with real data** to ensure components scale properly

## 🤝 Contributing

>>>>>>> 71aee1c9cdbed24993052e6d39c7b491cf38ccba
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Add your component with tests and stories
4. Submit a pull request

### Component Checklist
- [ ] TypeScript interfaces exported
- [ ] Comprehensive Storybook stories
- [ ] Accessibility testing completed
- [ ] Responsive design verified
- [ ] Design tokens used consistently

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🆘 Support

- **Documentation**: Run `npm run storybook` or `yarn storybook` for local docs
- **Issues**: [GitHub Issues](https://github.com/hgillispie/nexus-ds/issues)
- **Builder.io**: [Builder.io Documentation](https://www.builder.io/c/docs)

---

**Built with ❤️ for Builder Fusion AI-powered development**
