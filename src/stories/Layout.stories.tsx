import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Grid, GridCol } from './Grid';
import { SimpleGrid } from './SimpleGrid';
import { Flex, Group, Stack } from './Flex';
import { CustomCard } from './CustomCard';
import React from 'react';

const meta: Meta = {
  title: 'Layout/Examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Layout examples showing how to combine our custom layout components.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const SampleText = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}>
    {children}
  </div>
);

const SampleCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <CustomCard shadow="sm" padding="20px" radius="8px" withBorder>
    <SampleText>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>{title}</h3>
      <div style={{ fontSize: '14px', color: '#6b7280' }}>{children}</div>
    </SampleText>
  </CustomCard>
);

export const BasicLayout: Story = {
  render: () => (
    <Container size="lg" style={{ padding: '40px 0' }}>
      <SampleText>
        <h1 style={{ margin: '0 0 32px 0', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
          Basic Layout Example
        </h1>
      </SampleText>
      
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
      <SampleText>
        <h1 style={{ margin: '0 0 32px 0', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
          Responsive Grid Layout
        </h1>
      </SampleText>
      
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
      <SampleText>
        <h1 style={{ margin: '0 0 32px 0', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
          SimpleGrid Layout
        </h1>
      </SampleText>
      
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
      <SampleText>
        <h1 style={{ margin: '0 0 32px 0', fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
          Flex Layout Examples
        </h1>
      </SampleText>
      
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
          <SampleText>
            <div style={{ fontWeight: '600' }}>My Application</div>
          </SampleText>
          <Group gap="12px">
            <button style={{ 
              padding: '8px 16px', 
              backgroundColor: 'transparent',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              Login
            </button>
            <button style={{ 
              padding: '8px 16px', 
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              Sign Up
            </button>
          </Group>
        </Group>

        {/* Content with Flex */}
        <Flex gap="24px">
          <Stack gap="16px" style={{ minWidth: '200px' }}>
            <SampleText>
              <div style={{ fontWeight: '600', marginBottom: '12px' }}>Navigation</div>
            </SampleText>
            {['Dashboard', 'Projects', 'Settings'].map((item) => (
              <div 
                key={item}
                style={{ 
                  padding: '12px 16px', 
                  backgroundColor: '#f9fafb',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer'
                }}
              >
                {item}
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
            <SampleText>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
                Dashboard
              </h2>
            </SampleText>
            <Group gap="16px">
              <button style={{ 
                padding: '10px 20px', 
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                Export
              </button>
              <button style={{ 
                padding: '10px 20px', 
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                New Project
              </button>
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
                <SampleText>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>
                    {stat.title}
                  </div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#059669' }}>
                    {stat.change} from last month
                  </div>
                </SampleText>
              </CustomCard>
            ))}
          </SimpleGrid>

          {/* Main Content Grid */}
          <Grid gap="24px">
            <GridCol span={{ base: 12, lg: 8 }}>
              <CustomCard shadow="sm" padding="24px" radius="8px">
                <SampleText>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
                    Recent Activity
                  </h3>
                  <div style={{ height: '300px', backgroundColor: '#f9fafb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#6b7280' }}>
                    Chart placeholder
                  </div>
                </SampleText>
              </CustomCard>
            </GridCol>
            
            <GridCol span={{ base: 12, lg: 4 }}>
              <Stack gap="20px">
                <CustomCard shadow="sm" padding="20px" radius="8px">
                  <SampleText>
                    <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
                      Quick Actions
                    </h4>
                    <Stack gap="8px">
                      {['Create Project', 'Invite User', 'View Reports'].map((action) => (
                        <button 
                          key={action}
                          style={{ 
                            padding: '12px 16px', 
                            backgroundColor: '#f9fafb',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '14px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            width: '100%'
                          }}
                        >
                          {action}
                        </button>
                      ))}
                    </Stack>
                  </SampleText>
                </CustomCard>

                <CustomCard shadow="sm" padding="20px" radius="8px">
                  <SampleText>
                    <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
                      Team Members
                    </h4>
                    <Stack gap="12px">
                      {['Alice Johnson', 'Bob Smith', 'Carol Davis'].map((name, i) => (
                        <Group key={name} gap="12px">
                          <div style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            backgroundColor: ['#dbeafe', '#dcfce7', '#fef3c7'][i],
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: '600'
                          }}>
                            {name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div style={{ fontSize: '14px' }}>{name}</div>
                        </Group>
                      ))}
                    </Stack>
                  </SampleText>
                </CustomCard>
              </Stack>
            </GridCol>
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
};