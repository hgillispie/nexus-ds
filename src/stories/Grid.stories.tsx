import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridCol } from './Grid';
import { Text } from './Text';
import { tokens } from '../tokens/design-tokens';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Grid system provides a flexible 12-column layout with responsive capabilities. Use Grid as container and GridCol for individual columns.',
      },
    },
  },
  argTypes: {
    gap: {
      control: { type: 'text' },
      description: 'Gap between grid items (CSS value)',
    },
    children: {
      control: false,
      description: 'Grid columns (GridCol components)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const ExampleCol = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <div
    style={{
      backgroundColor: tokens.color.accent[100],
      padding: tokens.spacing[4],
      borderRadius: tokens.borderRadius.md,
      border: `1px solid ${tokens.color.accent[300]}`,
      textAlign: 'center',
      fontFamily: tokens.typography.fontFamily.body,
      color: tokens.color.accent[800],
      fontWeight: tokens.typography.fontWeight.medium
    }}
    {...props}
  >
    <Text>{children}</Text>
  </div>
);

export const Basic: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol span={6}>
          <ExampleCol>6 columns</ExampleCol>
        </GridCol>
        <GridCol span={6}>
          <ExampleCol>6 columns</ExampleCol>
        </GridCol>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol span={4}>
          <ExampleCol>4 columns</ExampleCol>
        </GridCol>
        <GridCol span={4}>
          <ExampleCol>4 columns</ExampleCol>
        </GridCol>
        <GridCol span={4}>
          <ExampleCol>4 columns</ExampleCol>
        </GridCol>
      </>
    ),
  },
};

export const MixedSizes: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol span={8}>
          <ExampleCol>8 columns</ExampleCol>
        </GridCol>
        <GridCol span={4}>
          <ExampleCol>4 columns</ExampleCol>
        </GridCol>
        <GridCol span={3}>
          <ExampleCol>3 columns</ExampleCol>
        </GridCol>
        <GridCol span={9}>
          <ExampleCol>9 columns</ExampleCol>
        </GridCol>
      </>
    ),
  },
};

export const WithOffset: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol span={6} offset={3}>
          <ExampleCol>6 columns, offset 3</ExampleCol>
        </GridCol>
        <GridCol span={4} offset={2}>
          <ExampleCol>4 columns, offset 2</ExampleCol>
        </GridCol>
        <GridCol span={4} offset={2}>
          <ExampleCol>4 columns, offset 2</ExampleCol>
        </GridCol>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use offset to push columns to the right, creating space on the left.',
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <ExampleCol>Responsive: 12→6→4</ExampleCol>
        </GridCol>
        <GridCol span={{ base: 12, md: 6, lg: 4 }}>
          <ExampleCol>Responsive: 12→6→4</ExampleCol>
        </GridCol>
        <GridCol span={{ base: 12, md: 12, lg: 4 }}>
          <ExampleCol>Responsive: 12→12→4</ExampleCol>
        </GridCol>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts to different screen sizes. Resize your browser to see the effect.',
      },
    },
  },
};

export const ResponsiveWithOffset: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol 
          span={{ base: 12, md: 8, lg: 6 }} 
          offset={{ base: 0, md: 2, lg: 3 }}
        >
          <ExampleCol>Centered with responsive offset</ExampleCol>
        </GridCol>
        <GridCol 
          span={{ base: 6, md: 4 }} 
          offset={{ base: 3, md: 4 }}
        >
          <ExampleCol>Smaller responsive</ExampleCol>
        </GridCol>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid with both span and offset changing at different breakpoints.',
      },
    },
  },
};

export const LargeGap: Story = {
  args: {
    gap: '32px',
    children: (
      <>
        <GridCol span={4}>
          <ExampleCol>Large gap</ExampleCol>
        </GridCol>
        <GridCol span={4}>
          <ExampleCol>Large gap</ExampleCol>
        </GridCol>
        <GridCol span={4}>
          <ExampleCol>Large gap</ExampleCol>
        </GridCol>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with larger spacing between columns.',
      },
    },
  },
};

export const NoGap: Story = {
  args: {
    gap: '0',
    children: (
      <>
        <GridCol span={3}>
          <ExampleCol>No gap</ExampleCol>
        </GridCol>
        <GridCol span={3}>
          <ExampleCol>No gap</ExampleCol>
        </GridCol>
        <GridCol span={3}>
          <ExampleCol>No gap</ExampleCol>
        </GridCol>
        <GridCol span={3}>
          <ExampleCol>No gap</ExampleCol>
        </GridCol>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with no spacing between columns for seamless layouts.',
      },
    },
  },
};

export const AllTwelveColumns: Story = {
  args: {
    gap: '8px',
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <GridCol key={i} span={1}>
            <ExampleCol>{i + 1}</ExampleCol>
          </GridCol>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'All 12 columns displayed to show the grid structure.',
      },
    },
  },
};

export const NestedGrid: Story = {
  args: {
    gap: '16px',
    children: (
      <>
        <GridCol span={8}>
          <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontFamily: 'Inter, sans-serif' }}>Nested Grid</h3>
            <Grid gap="8px">
              <GridCol span={6}>
                <ExampleCol>Nested 6</ExampleCol>
              </GridCol>
              <GridCol span={6}>
                <ExampleCol>Nested 6</ExampleCol>
              </GridCol>
            </Grid>
          </div>
        </GridCol>
        <GridCol span={4}>
          <ExampleCol>Sidebar</ExampleCol>
        </GridCol>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grids can be nested inside grid columns for complex layouts.',
      },
    },
  },
};
