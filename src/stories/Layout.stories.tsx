import type { Meta, StoryObj } from '@storybook/react';
import { Container, Grid, Flex, Group, Stack, SimpleGrid, Text, Title, Badge, Button } from '@mantine/core';
import { MantineProvider, createTheme } from '@mantine/core';
import React from 'react';

// Create a theme that matches your design system
const theme = createTheme({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  primaryColor: 'dark',
  colors: {
    // Use colors from DESIGN-TOKENS.md
    dark: [
      '#f5f5f5', // neutral.2
      '#e5e5e5', // colorbordersecondary
      '#d4d4d4', // colorborder
      '#a3a3a3', // colortextquaternary
      '#737373', // colortexttertiary
      '#525252', // colortextsecondary
      '#404040', // neutral.7
      '#262626', // neutral.8
      '#171717', // colortext
      '#0a0e1b', // colorprimary
    ],
    gray: [
      '#fafafa', // neutral.1
      '#f5f5f5', // neutral.2
      '#f0f0f0', // neutral.4
      '#e5e5e5', // colorbordersecondary
      '#d4d4d4', // colorborder
      '#a3a3a3', // colortextquaternary
      '#737373', // colortexttertiary
      '#525252', // colortextsecondary
      '#171717', // colortext
      '#0a0e1b', // colorprimary
    ],
  },
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    sizes: {
      h1: { fontSize: '2.25rem', lineHeight: '2.5rem' }, // 36px
      h2: { fontSize: '1.875rem', lineHeight: '2.25rem' }, // 30px  
      h3: { fontSize: '1.5rem', lineHeight: '2rem' }, // 24px
      h4: { fontSize: '1.25rem', lineHeight: '1.75rem' }, // 20px
      h5: { fontSize: '1.125rem', lineHeight: '1.75rem' }, // 18px
      h6: { fontSize: '1rem', lineHeight: '1.5rem' }, // 16px
    },
  },
  other: {
    // Design system colors from tokens
    colorPrimary: '#0a0e1b',
    colorPrimaryBg: '#f3f4f6',
    colorPrimaryBgHover: '#e5e7eb',
    colorPrimaryBorder: '#d1d5db',
    colorText: '#171717',
    colorTextSecondary: '#525252',
    colorTextTertiary: '#737373',
    colorBgContainer: '#ffffff',
    colorBgBase: '#fafafa',
    colorBgLayout: '#f5f5f5',
    colorBorder: '#d4d4d4',
    colorSuccess: '#059669',
    colorWarning: '#e8b4a2',
    colorError: '#fa5252',
    colorInfo: '#00d9ff',
  },
});

const meta: Meta = {
  title: 'Components/Layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Layout components using Mantine Core with our design system tokens for consistent page structures. These provide a solid foundation for building responsive layouts.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

export const ContainerExamples: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={{ marginBottom: '32px' }}>
        <Title order={3} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>Container Sizes</Title>
        <Stack gap="md">
          <Container size="xs" p="md" style={{ backgroundColor: '#ffffff', border: '1px solid #d4d4d4', borderRadius: '8px' }}>
            <Text style={{ color: '#525252' }}>Container XS (max-width: 540px)</Text>
          </Container>
          <Container size="sm" p="md" style={{ backgroundColor: '#ffffff', border: '1px solid #d4d4d4', borderRadius: '8px' }}>
            <Text style={{ color: '#525252' }}>Container SM (max-width: 720px)</Text>
          </Container>
          <Container size="md" p="md" style={{ backgroundColor: '#ffffff', border: '1px solid #d4d4d4', borderRadius: '8px' }}>
            <Text style={{ color: '#525252' }}>Container MD (max-width: 960px)</Text>
          </Container>
          <Container size="lg" p="md" style={{ backgroundColor: '#ffffff', border: '1px solid #d4d4d4', borderRadius: '8px' }}>
            <Text style={{ color: '#525252' }}>Container LG (max-width: 1140px)</Text>
          </Container>
          <Container size="xl" p="md" style={{ backgroundColor: '#ffffff', border: '1px solid #d4d4d4', borderRadius: '8px' }}>
            <Text style={{ color: '#525252' }}>Container XL (max-width: 1320px)</Text>
          </Container>
        </Stack>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container component with different size variants for consistent page width management.',
      }
    }
  }
};

export const GridExamples: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', padding: '20px' }}>
      <Container size="lg" p="md">
        <Title order={3} mb="lg" style={{ color: '#171717', fontFamily: 'Inter' }}>Grid Layouts</Title>
      
      <div style={{ marginBottom: '32px' }}>
        <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>2 Column Grid</Title>
        <Grid>
          <Grid.Col span={6}>
            <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #d4d4d4' }}>
              <Text style={{ color: '#525252' }}>Column 1</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #d4d4d4' }}>
              <Text style={{ color: '#525252' }}>Column 2</Text>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>3 Column Grid</Title>
        <Grid>
          <Grid.Col span={4}>
            <div style={{ backgroundColor: '#ecfdf5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #6ee7b7' }}>
              <Text style={{ color: '#059669' }}>Column 1</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div style={{ backgroundColor: '#ecfdf5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #6ee7b7' }}>
              <Text style={{ color: '#059669' }}>Column 2</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div style={{ backgroundColor: '#ecfdf5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #6ee7b7' }}>
              <Text style={{ color: '#059669' }}>Column 3</Text>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>Responsive Grid</Title>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <div style={{ backgroundColor: '#fff8f5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffc4a3' }}>
              <Text style={{ color: '#e8b4a2' }}>Responsive 1</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <div style={{ backgroundColor: '#fff8f5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffc4a3' }}>
              <Text style={{ color: '#e8b4a2' }}>Responsive 2</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <div style={{ backgroundColor: '#fff8f5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffc4a3' }}>
              <Text style={{ color: '#e8b4a2' }}>Responsive 3</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <div style={{ backgroundColor: '#fff8f5', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ffc4a3' }}>
              <Text style={{ color: '#e8b4a2' }}>Responsive 4</Text>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div>
        <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>SimpleGrid (Auto-fit)</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          <div style={{ backgroundColor: '#ecfeff', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #67e8f9' }}>
            <Text style={{ color: '#00d9ff' }}>Auto Item 1</Text>
          </div>
          <div style={{ backgroundColor: '#ecfeff', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #67e8f9' }}>
            <Text style={{ color: '#00d9ff' }}>Auto Item 2</Text>
          </div>
          <div style={{ backgroundColor: '#ecfeff', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #67e8f9' }}>
            <Text style={{ color: '#00d9ff' }}>Auto Item 3</Text>
          </div>
        </SimpleGrid>
      </div>
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid and SimpleGrid components with responsive configurations using design system colors.',
      }
    }
  }
};

export const FlexExamples: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', padding: '20px' }}>
      <Container size="lg" p="md">
        <Title order={3} mb="lg" style={{ color: '#171717', fontFamily: 'Inter' }}>Flex Layouts</Title>
      
      <Stack gap="xl">
        <div>
          <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>Flex with Center Alignment</Title>
          <Flex
            direction="row"
            justify="center"
            align="center"
            gap="md"
            p="md"
            style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', minHeight: '80px', border: '1px solid #d4d4d4' }}
          >
            <div style={{ backgroundColor: '#0a0e1b', color: 'white', padding: '12px', borderRadius: '6px' }}>
              <Text c="white">Item 1</Text>
            </div>
            <div style={{ backgroundColor: '#0a0e1b', color: 'white', padding: '12px', borderRadius: '6px' }}>
              <Text c="white">Item 2</Text>
            </div>
            <div style={{ backgroundColor: '#0a0e1b', color: 'white', padding: '12px', borderRadius: '6px' }}>
              <Text c="white">Item 3</Text>
            </div>
          </Flex>
        </div>

        <div>
          <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>Group with Space Between</Title>
          <Group justify="space-between" p="md" style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', border: '1px solid #d4d4d4' }}>
            <div style={{ backgroundColor: '#059669', color: 'white', padding: '12px', borderRadius: '6px' }}>
              <Text c="white">Start</Text>
            </div>
            <div style={{ backgroundColor: '#059669', color: 'white', padding: '12px', borderRadius: '6px' }}>
              <Text c="white">Middle</Text>
            </div>
            <div style={{ backgroundColor: '#059669', color: 'white', padding: '12px', borderRadius: '6px' }}>
              <Text c="white">End</Text>
            </div>
          </Group>
        </div>

        <div>
          <Title order={4} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>Stack (Column Layout)</Title>
          <Stack gap="sm" style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', maxWidth: '200px', border: '1px solid #d4d4d4' }}>
            <div style={{ backgroundColor: '#e8b4a2', color: 'white', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <Text c="white">Item 1</Text>
            </div>
            <div style={{ backgroundColor: '#e8b4a2', color: 'white', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <Text c="white">Item 2</Text>
            </div>
            <div style={{ backgroundColor: '#e8b4a2', color: 'white', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <Text c="white">Item 3</Text>
            </div>
          </Stack>
        </div>
      </Stack>
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Flex, Group, and Stack components for flexible layouts using design system colors.',
      }
    }
  }
};

export const CombinedExample: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <Container size="lg" p="xl">
        <Stack gap="xl">
          <div style={{ textAlign: 'center' }}>
            <Title order={1} mb="md" style={{ color: '#171717', fontFamily: 'Inter' }}>
              Layout Demo
            </Title>
            <Text size="lg" style={{ color: '#525252' }}>
              A complete layout built with Mantine's Container, Grid, and Flex components using our design system
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <div style={{ 
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #d4d4d4',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <Stack gap="md">
                <div style={{ width: '48px', height: '48px', backgroundColor: '#0a0e1b', borderRadius: '8px' }}></div>
                <div>
                  <Title order={3} mb="xs" style={{ color: '#171717', fontFamily: 'Inter' }}>Feature 1</Title>
                  <Text size="sm" style={{ color: '#525252' }}>
                    Description of the first feature with some details about its functionality.
                  </Text>
                </div>
              </Stack>
            </div>

            <div style={{ 
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #d4d4d4',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <Stack gap="md">
                <div style={{ width: '48px', height: '48px', backgroundColor: '#059669', borderRadius: '8px' }}></div>
                <div>
                  <Title order={3} mb="xs" style={{ color: '#171717', fontFamily: 'Inter' }}>Feature 2</Title>
                  <Text size="sm" style={{ color: '#525252' }}>
                    Description of the second feature with some details about its functionality.
                  </Text>
                </div>
              </Stack>
            </div>

            <div style={{ 
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #d4d4d4',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <Stack gap="md">
                <div style={{ width: '48px', height: '48px', backgroundColor: '#e8b4a2', borderRadius: '8px' }}></div>
                <div>
                  <Title order={3} mb="xs" style={{ color: '#171717', fontFamily: 'Inter' }}>Feature 3</Title>
                  <Text size="sm" style={{ color: '#525252' }}>
                    Description of the third feature with some details about its functionality.
                  </Text>
                </div>
              </Stack>
            </div>
          </SimpleGrid>

          <Grid>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <div style={{ 
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '8px',
                border: '1px solid #d4d4d4',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <Stack gap="md">
                  <Title order={2} style={{ color: '#171717', fontFamily: 'Inter' }}>Main Content</Title>
                  <Text style={{ color: '#525252' }}>
                    This is the main content area built using a combination of Mantine's Grid components with our design system. 
                    The layout is responsive and adapts to different screen sizes automatically.
                  </Text>
                  <Group justify="space-between" align="center">
                    <Text size="sm" style={{ color: '#737373' }}>Updated 2 hours ago</Text>
                    <Button style={{ backgroundColor: '#0a0e1b', color: 'white' }}>
                      Read More
                    </Button>
                  </Group>
                </Stack>
              </div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }}>
              <div style={{ 
                backgroundColor: '#ffffff',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid #d4d4d4',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <Stack gap="md">
                  <Title order={3} style={{ color: '#171717', fontFamily: 'Inter' }}>Sidebar</Title>
                  
                  <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '6px', border: '1px solid #d4d4d4' }}>
                    <Text size="sm" fw={500} mb="xs" style={{ color: '#171717' }}>Quick Stat</Text>
                    <Text size="xl" fw={700} style={{ color: '#0a0e1b' }}>1,234</Text>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '6px', border: '1px solid #d4d4d4' }}>
                    <Text size="sm" fw={500} mb="xs" style={{ color: '#171717' }}>Another Stat</Text>
                    <Text size="xl" fw={700} style={{ color: '#059669' }}>5,678</Text>
                  </div>
                </Stack>
              </div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing how Mantine layout components work together to build complete page layouts using our design system tokens.',
      }
    }
  }
};
