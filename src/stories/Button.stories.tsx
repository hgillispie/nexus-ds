import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * The Button component provides a comprehensive set of button variants for user interactions.
 * It supports multiple sizes, modern variant props, and maintains consistent spacing patterns.
 *
 * ## Features
 * - **Size variants**: Small (sm), Medium (md), and Large (lg)
 * - **Modern variants**: Primary, Outline, Subtle, Filled
 * - **Legacy hierarchy**: Primary, Secondary color, Secondary gray (for backwards compatibility)
 * - **Icon support**: Text only, Trailing icon, Icon only
 * - **Destructive actions**: For dangerous operations
 * - **Interactive states**: Default, Hover, Focused, Disabled
 * - **Layout options**: Full width support, custom styling
 *
 * ## Variant Guidelines
 * - **Primary**: Main call-to-action buttons (solid background)
 * - **Outline**: Secondary actions with border emphasis
 * - **Subtle**: Tertiary actions with minimal visual weight
 * - **Filled**: Alternative solid variant for specific contexts
 *
 * ## Spacing in Button Groups
 * When using multiple buttons together, follow these spacing patterns:
 * - **Button gaps**: Use `gap="md"` (16px) for related actions
 * - **Button gaps (large)**: Use `gap="lg"` (24px) for separated action groups
 * - **Vertical spacing**: Use `tokens.spacing[6]` (24px) above button groups
 * - **Card buttons**: Place buttons with `tokens.spacing[6]` (24px) from content
 *
 * ## Size Usage
 * - **sm**: Use in cards, compact layouts, secondary actions
 * - **md**: Default size for most interfaces
 * - **lg**: Use in hero sections, prominent calls-to-action
 */
const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile button component with comprehensive variant support for all design system needs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button - sm for compact layouts, md for standard use, lg for prominent actions',
    },
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'subtle', 'filled'],
      description: 'Modern variant system - primary for main actions, outline for secondary, subtle for tertiary',
    },
    hierarchy: {
      control: 'select',
      options: ['primary', 'secondary-color', 'secondary-gray'],
      description: 'Visual hierarchy and styling approach',
    },
    icon: {
      control: 'select',
      options: ['none', 'trailing', 'only'],
      description: 'Icon configuration for the button',
    },
    destructive: {
      control: 'boolean',
      description: 'Whether this represents a destructive action',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Visual state of the button (for demonstration)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
  args: {
    size: 'md',
    hierarchy: 'primary',
    icon: 'none',
    destructive: false,
    state: 'default',
    disabled: false,
    children: 'Button CTA',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default button configuration with primary styling.
 */
export const Default: Story = {};

/**
 * Primary buttons for main actions with different sizes and configurations.
 */
export const Primary: Story = {
  args: {
    hierarchy: 'primary',
  },
};

export const PrimaryLarge: Story = {
  args: {
    hierarchy: 'primary',
    size: 'lg',
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    hierarchy: 'primary',
    icon: 'trailing',
  },
};

export const PrimaryIconOnly: Story = {
  args: {
    hierarchy: 'primary',
    icon: 'only',
  },
};

/**
 * Secondary color buttons for secondary actions with brand emphasis.
 */
export const SecondaryColor: Story = {
  args: {
    hierarchy: 'secondary-color',
  },
};

export const SecondaryColorLarge: Story = {
  args: {
    hierarchy: 'secondary-color',
    size: 'lg',
  },
};

export const SecondaryColorWithIcon: Story = {
  args: {
    hierarchy: 'secondary-color',
    icon: 'trailing',
  },
};

export const SecondaryColorIconOnly: Story = {
  args: {
    hierarchy: 'secondary-color',
    icon: 'only',
  },
};

/**
 * Secondary gray buttons for neutral secondary actions.
 */
export const SecondaryGray: Story = {
  args: {
    hierarchy: 'secondary-gray',
  },
};

export const SecondaryGrayLarge: Story = {
  args: {
    hierarchy: 'secondary-gray',
    size: 'lg',
  },
};

export const SecondaryGrayWithIcon: Story = {
  args: {
    hierarchy: 'secondary-gray',
    icon: 'trailing',
  },
};

export const SecondaryGrayIconOnly: Story = {
  args: {
    hierarchy: 'secondary-gray',
    icon: 'only',
  },
};

/**
 * Destructive button variants for dangerous actions like delete.
 */
export const DestructivePrimary: Story = {
  args: {
    hierarchy: 'primary',
    destructive: true,
    children: 'Delete',
  },
};

export const DestructiveSecondaryColor: Story = {
  args: {
    hierarchy: 'secondary-color',
    destructive: true,
    children: 'Delete',
  },
};

export const DestructiveSecondaryGray: Story = {
  args: {
    hierarchy: 'secondary-gray',
    destructive: true,
    children: 'Delete',
  },
};

/**
 * Interactive state demonstrations.
 */
export const States: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      alignItems: 'center',
      padding: '20px',
    };

    return (
      <div style={containerStyle}>
        <Button state="default">Default</Button>
        <Button state="hover">Hover</Button>
        <Button state="focused">Focused</Button>
        <Button disabled>Disabled</Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows all interactive states of the button component.',
      },
    },
  },
};

/**
 * Disabled state examples across all hierarchies.
 */
export const DisabledStates: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      alignItems: 'center',
      padding: '20px',
    };

    return (
      <div style={containerStyle}>
        <Button hierarchy="primary" disabled>Primary Disabled</Button>
        <Button hierarchy="secondary-color" disabled>Secondary Disabled</Button>
        <Button hierarchy="secondary-gray" disabled>Gray Disabled</Button>
      </div>
    );
  },
};

/**
 * Size comparison across all hierarchies.
 */
export const SizeComparison: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      alignItems: 'center',
      padding: '20px',
    };

    return (
      <div style={containerStyle}>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    );
  },
};

/**
 * All button variants in a comprehensive grid layout.
 */
export const AllVariants: Story = {
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '12px',
      padding: '20px',
      maxWidth: '1200px',
    };

    const sizes = ['md', 'lg'] as const;
    const hierarchies = ['primary', 'secondary-color', 'secondary-gray'] as const;
    const icons = ['none', 'trailing', 'only'] as const;
    const destructiveStates = [false, true] as const;

    const buttons = [];
    let key = 0;

    // Generate representative samples to avoid overwhelming display
    hierarchies.forEach(hierarchy => {
      destructiveStates.forEach(destructive => {
        icons.forEach(icon => {
          buttons.push(
            <Button
              key={key++}
              hierarchy={hierarchy}
              icon={icon}
              destructive={destructive}
              size="md"
            >
              {icon === 'only' ? undefined : 'Button'}
            </Button>
          );
        });
      });
    });

    return <div style={containerStyle}>{buttons}</div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive display of all major button variants in the design system.',
      },
    },
  },
};
