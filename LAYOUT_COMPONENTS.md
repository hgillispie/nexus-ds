# Layout Components Guide

This design system includes **custom layout components** built specifically for responsive page structures. These components provide a solid foundation that works seamlessly with your custom design system components.

## Available Layout Components

### Container
Responsive container with predefined max-widths for different screen sizes.

```tsx
import { Container } from '@your-org/design-system';

<Container size="lg">
  <YourContent />
</Container>
```

**Sizes:** `xs`, `sm`, `md`, `lg`, `xl` or custom number values

### Grid
12-column responsive grid system with flexible column spans.

```tsx
import { Grid, GridCol } from '@your-org/design-system';

<Grid gap="24px">
  <GridCol span={6}>Half width</GridCol>
  <GridCol span={6}>Half width</GridCol>
  <GridCol span={{ base: 12, md: 4 }}>Responsive</GridCol>
</Grid>
```

### SimpleGrid
Auto-fitting grid with equal-width columns that adapts to screen size.

```tsx
import { SimpleGrid } from '@your-org/design-system';

<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="24px">
  <CustomCard>Item 1</CustomCard>
  <CustomCard>Item 2</CustomCard>
  <CustomCard>Item 3</CustomCard>
</SimpleGrid>
```

### Card
Content container with border, shadow, and customizable styling.

```tsx
import { CustomCard, CardSection } from '@your-org/design-system';

<CustomCard shadow="sm" padding="24px" radius="8px" withBorder>
  <CardSection>
    <img src="..." alt="Example" />
  </CardSection>
  <Text>Content</Text>
</CustomCard>
```

### Flex Layouts
Modern flexbox utilities for alignment and distribution.

```tsx
import { Flex, Group, Stack } from '@your-org/design-system';

// Generic flex container
<Flex direction="row" justify="center" align="center" gap="16px">
  <Item />
  <Item />
</Flex>

// Horizontal layout with common patterns
<Group justify="space-between">
  <Item />
  <Item />
</Group>

// Vertical layout
<Stack gap="16px">
  <Item />
  <Item />
</Stack>
```

## Theme Integration

The layout components are configured to use your design system theme:

```tsx
import { designSystemTheme } from '@your-org/design-system';

// Theme includes:
// - Inter font family
// - Consistent color palette
// - Responsive breakpoints
// - Spacing scale
// - Border radius values
// - Shadow system
```

## Usage with Your Design System

Layout components work seamlessly with your custom components:

```tsx
import { Container, Grid, GridCol, CustomCard } from '@your-org/design-system';
import { Text, Button } from '@your-org/design-system';

<Container size="lg">
  <Grid gap="24px">
    <GridCol span={8}>
      <CustomCard shadow="sm" padding="24px">
        <Text fw={600} size="xl" mb="sm">
          Page Title
        </Text>
        <Text size="lg" c="dimmed" mb="md">
          Page description using your typography system
        </Text>
        <Button variant="primary" size="lg">
          Your Custom Button
        </Button>
      </CustomCard>
    </GridCol>
    <GridCol span={4}>
      <CustomCard shadow="sm" padding="24px">
        <Text>Sidebar content</Text>
      </CustomCard>
    </GridCol>
  </Grid>
</Container>
```

## Benefits

✅ **Custom-built** - Tailored specifically for your design system  
✅ **Accessible** - Built with accessibility best practices  
✅ **Responsive** - Mobile-first responsive design  
✅ **TypeScript** - Full TypeScript support with proper types  
✅ **Consistent** - Uses your design tokens for spacing, colors, and typography  
✅ **Lightweight** - No external dependencies, optimized bundle size  

## Page Layout Components

For complete page structures, use our specialized layout components:

### PageLayout
Complete page wrapper with header, container, and footer support.

```tsx
import { PageLayout } from '@your-org/design-system';

<PageLayout
  header={{
    title: "Dashboard",
    subtitle: "Welcome to your application",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Dashboard" }
    ],
    actions: <Button variant="primary">New Project</Button>
  }}
  containerSize="lg"
>
  <YourPageContent />
</PageLayout>
```

### PageHeader
Standalone header component for consistent page titles.

```tsx
import { PageHeader } from '@your-org/design-system';

<PageHeader
  title="User Management"
  subtitle="Manage user accounts and permissions"
  breadcrumbs={breadcrumbItems}
  actions={<Button variant="primary">Add User</Button>}
/>
```

### PageContainer
Simple container wrapper for consistent page content.

```tsx
import { PageContainer } from '@your-org/design-system';

<PageContainer size="md" padding="lg">
  <YourContent />
</PageContainer>
```

## Next Steps

For complete documentation and interactive examples:
- **Start Storybook**: Run `npm run storybook` and visit `http://localhost:6006`
- **Layout Stories**: View `Layout.stories.tsx` for comprehensive examples
- **Component Documentation**: Each component has detailed props and usage examples

This approach gives you robust, custom layout components that are perfectly aligned with your design system and brand requirements.