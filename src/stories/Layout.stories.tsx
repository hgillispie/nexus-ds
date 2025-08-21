import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Grid, GridCol } from './Grid';
import { SimpleGrid } from './SimpleGrid';
import { Flex, Group, Stack } from './Flex';
import { CustomCard } from './CustomCard';
import { Button } from './Button';
import { Text } from './Text';

import { tokens } from '../tokens/design-tokens';
import React from 'react';

const meta: Meta = {
  title: 'Layout/Examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Layout examples showing how to combine our custom layout components with proper spacing principles.

## Layout Spacing Standards

These examples demonstrate the Nexus Design System's spacing guidelines in action:

### Core Principles Applied
- **Design tokens only**: All spacing uses \`tokens.spacing\` values
- **Generous padding**: Minimum 24px, recommended 32px for cards
- **Clear hierarchy**: Consistent spacing ratios (16px → 20px → 24px → 32px)
- **Explicit wrappers**: Div containers for precise spacing control
- **Component composition**: Proper use of Container, Grid, SimpleGrid, and Flex

### Spacing Scale in Layouts
- **Page sections**: \`tokens.spacing[10-12]\` (40-48px) between major areas
- **Card grids**: \`tokens.spacing[8]\` (32px) gaps for comfortable separation
- **Content blocks**: \`tokens.spacing[6]\` (24px) between related content
- **Element groups**: \`tokens.spacing[4]\` (16px) for closely related items

### Professional Layout Standards
Every layout example follows these quality standards:
- Sufficient whitespace prevents cramped appearance
- Consistent spacing ratios create visual harmony
- Design token usage ensures maintainability
- Responsive behavior works across all screen sizes

See the examples below for implementation patterns that maintain these professional standards.`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Remove SampleText - use Text component directly

const SampleCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <CustomCard shadow="sm" padding={tokens.spacing[5]} radius={tokens.borderRadius.md} withBorder>
    <Heading level={3} mb="xs">{title}</Heading>
    <Text size="sm" c="dimmed">{children}</Text>
  </CustomCard>
);

export const BasicLayout: Story = {
  render: () => (
    <Container size="lg" style={{ padding: '40px 0' }}>
      <Heading level={1} mb="xl" ta="center">
        Basic Layout Example
      </Heading>
      
      <Grid gap="24px">
        <GridCol span={8}>
          <SampleCard title="Main Content">
            This is the main content area taking up 8 columns
          </SampleCard>
        </GridCol>
        <GridCol span={4}>
          <SampleCard title="Sidebar">
            This is a sidebar taking up 4 columns
          </SampleCard>
        </GridCol>
      </Grid>
    </Container>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Container size="xl" style={{ padding: '40px 0' }}>
      <Heading level={1} mb="xl" ta="center">
        Responsive Grid Layout
      </Heading>
      
      <Grid gap="20px">
        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <SampleCard title="Card 1">
            Responsive: 12 → 6 → 4 columns
          </SampleCard>
        </GridCol>
        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <SampleCard title="Card 2">
            Responsive: 12 → 6 → 4 columns
          </SampleCard>
        </GridCol>
        <GridCol span={{ base: 12, md: 12, lg: 4 }}>
          <SampleCard title="Card 3">
            Responsive: 12 → 12 → 4 columns
          </SampleCard>
        </GridCol>
      </Grid>
    </Container>
  ),
};

export const SimpleGridLayout: Story = {
  render: () => (
    <Container size="lg" style={{ padding: '40px 0' }}>
      <Heading level={1} mb="xl" ta="center">
        SimpleGrid Layout
      </Heading>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="24px">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SampleCard key={num} title={`Feature ${num}`}>
            Auto-fitting grid that adapts to screen size
          </SampleCard>
        ))}
      </SimpleGrid>
    </Container>
  ),
};

export const FlexLayout: Story = {
  render: () => (
    <Container size="lg" style={{ padding: '40px 0' }}>
      <Heading level={1} mb="xl" ta="center">
        Flex Layout Examples
      </Heading>
      
      <Stack gap="32px">
        {/* Header */}
        <Group 
          justify="space-between" 
          style={{ 
            padding: '16px 24px', 
            backgroundColor: '#f9fafb', 
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}
        >
          <Text fw={600}>My Application</Text>
          <Group gap="sm">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </Group>
        </Group>

        {/* Content with Flex */}
        <Flex gap="24px">
          <Stack gap="16px" style={{ minWidth: '200px' }}>
            <Text fw={600} mb="sm">Navigation</Text>
            {['Dashboard', 'Projects', 'Settings'].map((item) => (
              <div
                key={item}
                style={{
                  padding: `${tokens.spacing[3]} ${tokens.spacing[4]}`,
                  backgroundColor: tokens.semantic.background.secondary,
                  borderRadius: tokens.borderRadius.sm,
                  border: `1px solid ${tokens.semantic.border.secondary}`,
                  fontSize: tokens.typography.fontSize.sm,
                  fontFamily: tokens.typography.fontFamily.body,
                  cursor: 'pointer'
                }}
              >
                <Text size="sm">{item}</Text>
              </div>
            ))}
          </Stack>

          <div style={{ flex: 1 }}>
            <SampleCard title="Main Content Area">
              This content area flexes to fill remaining space
            </SampleCard>
          </div>
        </Flex>
      </Stack>
    </Container>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Container size="xl" style={{ padding: '40px 0' }}>
        <Stack gap="32px">
          {/* Header */}
          <Group 
            justify="space-between"
            style={{ 
              padding: '20px 32px', 
              backgroundColor: 'white', 
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <Heading level={2}>
              Dashboard
            </Heading>
            <Group gap="md">
              <Button variant="outline">
                Export
              </Button>
              <Button>
                New Project
              </Button>
            </Group>
          </Group>

          {/* Stats Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="20px">
            {[
              { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%' },
              { title: 'Active Users', value: '2,350', change: '+15.3%' },
              { title: 'Sales', value: '12,234', change: '+19%' },
              { title: 'Active Now', value: '573', change: '+5.2%' },
            ].map((stat) => (
              <CustomCard key={stat.title} shadow="sm" padding="24px" radius="8px">
                <Text size="sm" fw={500} c="dimmed" mb="xs">
                  {stat.title}
                </Text>
                <Text size="2xl" fw="bold" mb="xs">
                  {stat.value}
                </Text>
                <Text size="sm" style={{ color: tokens.color.success[600] }}>
                  {stat.change} from last month
                </Text>
              </CustomCard>
            ))}
          </SimpleGrid>

          {/* Main Content Grid */}
          <Grid gap="24px">
            <GridCol span={{ base: 12, lg: 8 }}>
              <CustomCard shadow="sm" padding="24px" radius="8px">
                <Heading level={3} mb="md">
                  Recent Activity
                </Heading>
                <div style={{ height: '300px', backgroundColor: tokens.semantic.background.secondary, borderRadius: tokens.borderRadius.md, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text size="sm" c="dimmed">Chart placeholder</Text>
                </div>
              </CustomCard>
            </GridCol>
            
            <GridCol span={{ base: 12, lg: 4 }}>
              <Stack gap="20px">
                <CustomCard shadow="sm" padding="20px" radius="8px">
                  <Heading level={4} mb="sm">
                    Quick Actions
                  </Heading>
                  <Stack gap="xs">
                    {['Create Project', 'Invite User', 'View Reports'].map((action) => (
                      <Button
                        key={action}
                        variant="outline"
                        size="sm"
                        style={{ justifyContent: 'flex-start' }}
                        fullWidth
                      >
                        {action}
                      </Button>
                    ))}
                  </Stack>
                </CustomCard>

                <CustomCard shadow="sm" padding="20px" radius="8px">
                  <Heading level={4} mb="sm">
                    Team Members
                  </Heading>
                  <Stack gap="sm">
                    {['Alice Johnson', 'Bob Smith', 'Carol Davis'].map((name, i) => {
                      const colors = [tokens.color.accent[100], tokens.color.success[100], tokens.color.warning[100]];
                      return (
                        <Group key={name} gap="sm">
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: colors[i],
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Text size="sm" fw={600}>
                              {name.split(' ').map(n => n[0]).join('')}
                            </Text>
                          </div>
                          <Text size="sm">{name}</Text>
                        </Group>
                      );
                    })}
                  </Stack>
                </CustomCard>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
};
