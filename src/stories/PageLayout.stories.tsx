import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout, PageHeader, PageContainer, PageContent } from './PageLayout';
import { Button } from './Button';
import { Badge } from './Badge';
import { Group } from './Flex';
import { CustomCard as Card } from './CustomCard';
import { Text } from './Text';
import { tokens } from '../tokens/design-tokens';

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Page layout wrapper components for building consistent page structures with headers, containers, and content areas.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <PageContent spacing="xl">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: tokens.spacing[10] }}>
      <Card shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
        <div style={{ marginBottom: tokens.spacing[4] }}>
          <Text fw={600}>Welcome</Text>
        </div>
        <div style={{ marginBottom: tokens.spacing[5] }}>
          <Text size="sm" c="dimmed">Get started with your dashboard</Text>
        </div>
        <div style={{ marginBottom: tokens.spacing[5] }}>
          <Badge color="blue" variant="filled">New</Badge>
        </div>
        <div style={{ marginBottom: tokens.spacing[6] }}>
          <Text>
            This is your main dashboard where you can manage all your projects and tasks.
          </Text>
        </div>
        <Button size="sm">Get Started</Button>
      </Card>

      <Card shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
        <div style={{ marginBottom: tokens.spacing[4] }}>
          <Text fw={600}>Recent Activity</Text>
        </div>
        <div style={{ marginBottom: tokens.spacing[6] }}>
          <Text size="sm" c="dimmed">Your latest updates</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing[3] }}>
          <Text size="sm">• Project Alpha updated</Text>
          <Text size="sm">• New team member added</Text>
          <Text size="sm">• Report generated</Text>
        </div>
      </Card>

      <Card shadow="sm" padding={tokens.spacing[8]} radius={tokens.borderRadius.md} withBorder>
        <div style={{ marginBottom: tokens.spacing[4] }}>
          <Text fw={600}>Quick Actions</Text>
        </div>
        <div style={{ marginBottom: tokens.spacing[6] }}>
          <Text size="sm" c="dimmed">Common tasks</Text>
        </div>
        <Group gap="md">
          <Button variant="outline" size="sm">Create Project</Button>
          <Button variant="outline" size="sm">Add User</Button>
        </Group>
      </Card>
    </div>
  </PageContent>
);

export const Default: Story = {
  args: {
    header: {
      title: 'Dashboard',
      subtitle: 'Welcome back! Here\'s what\'s happening with your projects.',
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Dashboard' },
      ],
      actions: (
        <Group gap="lg">
          <Button variant="outline" size="sm">Export</Button>
          <Button size="sm">New Project</Button>
        </Group>
      ),
    },
    children: <SampleContent />,
  },
};

export const WithoutHeader: Story = {
  args: {
    children: (
      <PageContent spacing="lg">
        <Text size="xl" fw={600} mb="md">Simple Page Layout</Text>
        <Text mb="xl">
          This page doesn't use a header component, just content with proper spacing and container.
        </Text>
        <SampleContent />
      </PageContent>
    ),
    containerSize: 'lg',
    padding: 'lg',
  },
};

export const FluidLayout: Story = {
  args: {
    header: {
      title: 'Full Width Dashboard',
      subtitle: 'This layout uses the full width of the viewport',
      actions: <Button>Action</Button>,
    },
    fluid: true,
    padding: 'lg',
    children: (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: tokens.spacing[8],
        marginBottom: tokens.spacing[10]
      }}>
        {Array.from({ length: 8 }, (_, i) => (
          <Card key={i} title={`Card ${i + 1}`} padding="md">
            <Text>This card is part of a fluid layout that spans the full width.</Text>
          </Card>
        ))}
      </div>
    ),
  },
};

export const DifferentBackgrounds: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <PageLayout
        bg="default"
        header={{
          title: 'Default Background',
          subtitle: 'Uses the default background color (#fafafa)',
        }}
        padding="md"
      >
        <Card title="Content Card" padding="md">
          <Text>Content on default background</Text>
        </Card>
      </PageLayout>

      <PageLayout
        bg="alt"
        header={{
          title: 'Alternative Background',
          subtitle: 'Uses the alternative background color (#f5f5f5)',
        }}
        padding="md"
      >
        <Card title="Content Card" padding="md">
          <Text>Content on alternative background</Text>
        </Card>
      </PageLayout>

      <PageLayout
        bg="container"
        header={{
          title: 'Container Background',
          subtitle: 'Uses the container background color (#ffffff)',
        }}
        padding="md"
      >
        <Card title="Content Card" padding="md">
          <Text>Content on container background</Text>
        </Card>
      </PageLayout>
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    header: {
      title: 'Page with Footer',
      subtitle: 'This page includes a footer section',
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Team' },
      ],
    },
    children: (
      <PageContent spacing="xl">
        <div style={{ marginBottom: tokens.spacing[6] }}>
          <Text size="xl" fw={600}>About Our Team</Text>
        </div>
        <div style={{ marginBottom: tokens.spacing[10] }}>
          <Text>
            Learn more about the people behind our company and what drives us to build amazing products.
          </Text>
        </div>
        <SampleContent />
      </PageContent>
    ),
    footer: (
      <div style={{ textAlign: 'center', padding: `${tokens.spacing[8]} 0` }}>
        <div style={{ marginBottom: tokens.spacing[5] }}>
          <Text size="sm" c="dimmed">
            © 2024 Nexus. All rights reserved.
          </Text>
        </div>
        <Group justify="center" gap="lg">
          <Text size="sm" component="a" href="#" style={{ textDecoration: 'none', color: '#525252' }}>
            Privacy Policy
          </Text>
          <Text size="sm" component="a" href="#" style={{ textDecoration: 'none', color: '#525252' }}>
            Terms of Service
          </Text>
          <Text size="sm" component="a" href="#" style={{ textDecoration: 'none', color: '#525252' }}>
            Contact Us
          </Text>
        </Group>
      </div>
    ),
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <PageLayout
        containerSize="sm"
        header={{
          title: 'Small Container',
          subtitle: 'This page uses a small container size',
        }}
        padding="md"
      >
        <Card title="Small Container Content" padding="md">
          <Text>This content is constrained to a small container width for better readability.</Text>
        </Card>
      </PageLayout>

      <PageLayout
        containerSize="lg"
        header={{
          title: 'Large Container',
          subtitle: 'This page uses a large container size',
        }}
        padding="md"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <Card title="Card 1" padding="md">
            <Text>Large container allows for more content.</Text>
          </Card>
          <Card title="Card 2" padding="md">
            <Text>Multiple columns work well here.</Text>
          </Card>
          <Card title="Card 3" padding="md">
            <Text>Great for dashboards and data displays.</Text>
          </Card>
        </div>
      </PageLayout>
    </div>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <div>
      <PageHeader
        title="Standalone Page Header"
        subtitle="This header can be used independently of the PageLayout component"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/components' },
          { label: 'Headers' },
        ]}
        actions={
          <Group gap="sm">
            <Badge>v2.0</Badge>
            <Button variant="outline" size="sm">Documentation</Button>
            <Button size="sm">Get Started</Button>
          </Group>
        }
      />
      <div style={{ padding: '2rem', backgroundColor: '#fafafa' }}>
        <Text>Content below the header...</Text>
      </div>
    </div>
  ),
};

export const ContainerOnly: Story = {
  render: () => (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', padding: '2rem 0' }}>
      <PageContainer size="md" padding="lg">
        <div style={{ marginBottom: tokens.spacing[6] }}>
          <Text size="xl" fw={600}>Standalone Container</Text>
        </div>
        <div style={{ marginBottom: tokens.spacing[8] }}>
          <Text>
            The PageContainer component can be used independently to wrap content with consistent sizing and padding.
          </Text>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: tokens.spacing[6] }}>
          <Card title="Contained Card 1" padding="md">
            <Text>This card is inside a page container.</Text>
          </Card>
          <Card title="Contained Card 2" padding="md">
            <Text>Container provides consistent max-width and centering.</Text>
          </Card>
        </div>
      </PageContainer>
    </div>
  ),
};

export const ResponsiveDemo: Story = {
  args: {
    header: {
      title: 'Responsive Layout',
      subtitle: 'This layout adapts to different screen sizes',
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Examples', href: '/examples' },
        { label: 'Responsive' },
      ],
      actions: (
        <Group gap="lg">
          <Button variant="outline" size="sm" visibleFrom="sm">Export Data</Button>
          <Button size="sm">New Item</Button>
        </Group>
      ),
    },
    children: (
      <PageContent spacing="xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: tokens.spacing[8]
        }}>
          <Card title="Mobile Friendly" subtitle="Stacks on small screens" padding="md">
            <Text>This card layout automatically stacks on mobile devices for better usability.</Text>
          </Card>
          <Card title="Tablet Optimized" subtitle="Two columns on medium screens" padding="md">
            <Text>On tablets, you'll see two columns of cards for efficient use of space.</Text>
          </Card>
          <Card title="Desktop Enhanced" subtitle="Multiple columns on large screens" padding="md">
            <Text>Desktop users get the full multi-column experience with optimal information density.</Text>
          </Card>
        </div>
      </PageContent>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows how the layout adapts to different screen sizes. Try resizing your browser or viewing on different devices.',
      },
    },
  },
};
