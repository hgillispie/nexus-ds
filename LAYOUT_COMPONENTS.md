# Layout Components Guide

This design system uses **Mantine Core** layout components for building responsive page structures. These components provide a solid foundation that works seamlessly with your custom design system components.

## Available Layout Components

### Container
Responsive container with predefined max-widths for different screen sizes.

```tsx
import { Container } from '@mantine/core';

<Container size="lg">
  <YourContent />
</Container>
```

**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`

### Grid
12-column responsive grid system.

```tsx
import { Grid } from '@mantine/core';

<Grid>
  <Grid.Col span={6}>Half width</Grid.Col>
  <Grid.Col span={6}>Half width</Grid.Col>
  <Grid.Col span={{ base: 12, md: 4 }}>Responsive</Grid.Col>
</Grid>
```

### SimpleGrid
Auto-fitting grid with equal-width columns.

```tsx
import { SimpleGrid } from '@mantine/core';

<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</SimpleGrid>
```

### Card
Content container with border, shadow, and sections.

```tsx
import { Card } from '@mantine/core';

<Card shadow="sm" padding="lg" radius="md" withBorder>
  <Card.Section>
    <Image src="..." />
  </Card.Section>
  <Text>Content</Text>
</Card>
```

### Flex Layouts
Modern flexbox utilities for alignment and distribution.

```tsx
import { Flex, Group, Stack } from '@mantine/core';

// Generic flex container
<Flex direction="row" justify="center" align="center" gap="md">
  <Item />
  <Item />
</Flex>

// Horizontal layout with common patterns
<Group justify="space-between">
  <Item />
  <Item />
</Group>

// Vertical layout
<Stack gap="sm">
  <Item />
  <Item />
</Stack>
```

## Theme Integration

The layout components are configured to use your Inter font family:

```tsx
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  // ... other theme settings
});

<MantineProvider theme={theme}>
  <App />
</MantineProvider>
```

## Usage with Your Design System

Layout components work seamlessly with your custom components:

```tsx
import { Container, Grid, Card } from '@mantine/core';
import { Typography, Button } from './your-design-system';

<Container size="lg">
  <Grid>
    <Grid.Col span={8}>
      <Card shadow="sm" padding="lg">
        <Typography variant="display-lg" weight="semibold">
          Page Title
        </Typography>
        <Typography variant="text-lg" color="secondary">
          Page description using your typography system
        </Typography>
        <Button hierarchy="primary" size="lg">
          Your Custom Button
        </Button>
      </Card>
    </Grid.Col>
    <Grid.Col span={4}>
      <Card shadow="sm" padding="lg">
        Sidebar content
      </Card>
    </Grid.Col>
  </Grid>
</Container>
```

## Benefits

✅ **Production-ready** - Battle-tested by thousands of projects  
✅ **Accessible** - Built with accessibility in mind  
✅ **Responsive** - Mobile-first responsive design  
✅ **TypeScript** - Full TypeScript support  
✅ **Customizable** - Theme system for brand consistency  
✅ **Documentation** - Extensive docs at [mantine.dev](https://mantine.dev)  

## Next Steps

For more advanced usage and complete component documentation, visit:
- [Mantine Layout Components](https://mantine.dev/core/container/)
- [Mantine Grid System](https://mantine.dev/core/grid/)
- [Mantine Card Component](https://mantine.dev/core/card/)

This approach gives you robust layout components while maintaining your custom design system for UI elements like buttons, forms, and typography.
