import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CheckboxGroup } from './CheckboxGroup';
import type { CheckboxGroupItemData } from './CheckboxGroup';

// Sample pricing plan data
const samplePlans: CheckboxGroupItemData[] = [
  {
    id: 'basic',
    planName: 'Basic plan',
    price: '$10',
    period: 'month',
    description: 'Includes up to 10 users, 20GB individual data and access to all features.',
    icon: 'layers',
    badge: 'Limited time only',
    selected: true
  },
  {
    id: 'business',
    planName: 'Business plan',
    price: '$20',
    period: 'month',
    description: 'Includes up to 20 users, 40GB individual data and access to all features.',
    icon: '3-layers'
  },
  {
    id: 'enterprise',
    planName: 'Enterprise plan',
    price: '$40',
    period: 'month',
    description: 'Unlimited users, unlimited individual data and access to all features.',
    icon: 'zap'
  },
  {
    id: 'ultimate',
    planName: 'Ultimate plan',
    price: '$60',
    period: 'month',
    description: 'Unlimited users, unlimited individual data and access to all features.',
    icon: 'codepen'
  },
  {
    id: 'secret',
    planName: 'Secret plan',
    price: '$80',
    period: 'month',
    description: 'Unlimited users, unlimited individual data and access to all features.',
    icon: 'smile'
  }
];

const simplePlans = samplePlans.slice(0, 3);

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The CheckboxGroup component provides a way to display multiple selectable options in a structured format. It supports both simple and card layouts, making it perfect for pricing plans, feature selections, and option lists.

## Features

- **Multiple layouts**: Simple and card layouts for different use cases
- **Responsive design**: Adapts to mobile and desktop screens
- **Single/Multiple selection**: Configure for radio-button or checkbox behavior
- **Rich content**: Support for icons, badges, pricing, and descriptions
- **Accessibility**: Full keyboard navigation and screen reader support
- **Design system**: Uses consistent design tokens and follows design specifications

## Usage

The CheckboxGroup is ideal for:
- Pricing plan selection
- Feature comparison tables
- Settings panels with multiple options
- Product variant selection
- Service tier selection

## Layouts

### Simple Layout
Best for compact displays with essential information in a horizontal layout.

### Card Layout
Perfect for detailed comparisons with rich content, pricing information, and promotional badges.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
      description: 'Size variant of the checkbox group'
    },
    layout: {
      control: { type: 'radio' },
      options: ['simple', 'card'],
      description: 'Layout variant - simple for compact display, card for detailed information'
    },
    allowMultiple: {
      control: { type: 'boolean' },
      description: 'Allow multiple selections (checkbox behavior) vs single selection (radio behavior)'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the entire checkbox group'
    },
    onSelectionChange: {
      action: 'selection-changed',
      description: 'Callback fired when selection changes'
    }
  },
  args: {
    onSelectionChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// No icon examples
const noIconPlans: CheckboxGroupItemData[] = [
  {
    id: 'free',
    planName: 'Free Plan',
    price: '$0',
    period: 'month',
    description: 'Basic features for personal use. Limited storage and support.',
    selected: true
  },
  {
    id: 'pro',
    planName: 'Pro Plan',
    price: '$15',
    period: 'month',
    description: 'Advanced features for professionals. Unlimited storage and priority support.'
  },
  {
    id: 'team',
    planName: 'Team Plan',
    price: '$45',
    period: 'month',
    description: 'Collaboration features for teams. Shared workspaces and admin controls.'
  }
];

export const NoIconsSimple: Story = {
  args: {
    items: noIconPlans,
    size: 'sm',
    layout: 'simple',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple layout without icons - clean and minimal design focusing on text content.'
      }
    }
  }
};

export const NoIconsCard: Story = {
  args: {
    items: noIconPlans,
    size: 'md',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Card layout without icons - emphasizes text hierarchy and pricing information.'
      }
    }
  }
};

// Simple layout stories
export const SimpleSmall: Story = {
  args: {
    items: simplePlans,
    size: 'sm',
    layout: 'simple',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size simple layout - perfect for compact interfaces and quick selection.'
      }
    }
  }
};

export const SimpleMedium: Story = {
  args: {
    items: simplePlans,
    size: 'md',
    layout: 'simple',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size simple layout - provides more breathing room and better readability.'
      }
    }
  }
};

export const SimpleMultipleSelection: Story = {
  args: {
    items: simplePlans,
    size: 'sm',
    layout: 'simple',
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple layout with multiple selection enabled - users can select multiple options.'
      }
    }
  }
};

// Card layout stories
export const CardSmall: Story = {
  args: {
    items: simplePlans,
    size: 'sm',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size card layout - ideal for pricing plans with detailed information and promotional badges.'
      }
    }
  }
};

export const CardMedium: Story = {
  args: {
    items: simplePlans,
    size: 'md',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size card layout - provides larger text and more prominent pricing display.'
      }
    }
  }
};

export const CardMultipleSelection: Story = {
  args: {
    items: simplePlans,
    size: 'md',
    layout: 'card',
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Card layout with multiple selection - perfect for feature bundles or add-on selections.'
      }
    }
  }
};

// Comprehensive pricing plans
export const CompletePricingPlans: Story = {
  args: {
    items: samplePlans,
    size: 'sm',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete pricing plan showcase with all five tiers, including promotional badge on the basic plan.'
      }
    }
  }
};

export const PricingPlansLarge: Story = {
  args: {
    items: samplePlans,
    size: 'md',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size pricing plans for desktop displays with enhanced typography and spacing.'
      }
    }
  }
};

// Settings and preferences examples
export const FeatureSelection: Story = {
  args: {
    items: [
      {
        id: 'analytics',
        planName: 'Advanced Analytics',
        price: '$5',
        period: 'month',
        description: 'Detailed insights, custom reports, and data export capabilities.',
        icon: 'layers'
      },
      {
        id: 'collaboration',
        planName: 'Team Collaboration',
        price: '$8',
        period: 'month',
        description: 'Real-time editing, comments, and team workspace features.',
        icon: '3-layers'
      },
      {
        id: 'automation',
        planName: 'Workflow Automation',
        price: '$12',
        period: 'month',
        description: 'Automated workflows, integrations, and custom triggers.',
        icon: 'zap'
      }
    ],
    size: 'sm',
    layout: 'simple',
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Feature selection example using simple layout with multiple selection enabled for add-on services.'
      }
    }
  }
};

export const ServiceTiers: Story = {
  args: {
    items: [
      {
        id: 'standard',
        planName: 'Standard Support',
        price: 'Free',
        period: '',
        description: 'Email support within 48 hours, basic documentation access.',
        icon: 'layers',
        selected: true
      },
      {
        id: 'priority',
        planName: 'Priority Support',
        price: '$25',
        period: 'month',
        description: 'Email and chat support within 4 hours, priority queue.',
        icon: 'zap'
      },
      {
        id: 'premium',
        planName: 'Premium Support',
        price: '$50',
        period: 'month',
        description: 'Phone, email, and chat support within 1 hour, dedicated agent.',
        icon: 'smile'
      }
    ],
    size: 'md',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Service tier selection with different support levels, including a free tier option.'
      }
    }
  }
};

// States and variations
export const DisabledState: Story = {
  args: {
    items: simplePlans,
    size: 'sm',
    layout: 'simple',
    allowMultiple: false,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state - the entire checkbox group is non-interactive with reduced opacity.'
      }
    }
  }
};

export const PartiallyDisabled: Story = {
  args: {
    items: [
      {
        id: 'basic',
        planName: 'Basic plan',
        price: '$10',
        period: 'month',
        description: 'Available - includes up to 10 users and 20GB storage.',
        icon: 'layers',
        selected: true
      },
      {
        id: 'business',
        planName: 'Business plan',
        price: '$20',
        period: 'month',
        description: 'Available - includes up to 50 users and 100GB storage.',
        icon: '3-layers'
      },
      {
        id: 'enterprise',
        planName: 'Enterprise plan',
        price: '$40',
        period: 'month',
        description: 'Currently unavailable - contact sales for more information.',
        icon: 'zap',
        disabled: true
      }
    ],
    size: 'sm',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Individual items can be disabled while keeping others interactive - useful for availability states.'
      }
    }
  }
};

export const WithoutBadges: Story = {
  args: {
    items: samplePlans.map(plan => ({ ...plan, badge: undefined })),
    size: 'sm',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Card layout without promotional badges - clean pricing display focused on the essentials.'
      }
    }
  }
};

// Mobile responsive example
export const MobileExample: Story = {
  args: {
    items: simplePlans,
    size: 'sm',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Mobile-optimized layout with adjusted spacing and typography for smaller screens.'
      }
    }
  }
};

// Interactive examples for testing
export const InteractiveDemo: Story = {
  args: {
    items: samplePlans,
    size: 'md',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with all features - try selecting different plans and observe the state changes.'
      }
    }
  }
};

export const ComparisonView: Story = {
  args: {
    items: [
      {
        id: 'starter',
        planName: 'Starter',
        price: '$9',
        period: 'month',
        description: '1 user, 5GB storage, email support, basic features.',
        icon: 'layers'
      },
      {
        id: 'professional',
        planName: 'Professional',
        price: '$29',
        period: 'month',
        description: '5 users, 50GB storage, priority support, advanced features.',
        icon: 'zap',
        badge: 'Most Popular'
      },
      {
        id: 'enterprise',
        planName: 'Enterprise',
        price: '$99',
        period: 'month',
        description: 'Unlimited users, 1TB storage, phone support, all features.',
        icon: 'smile'
      }
    ],
    size: 'md',
    layout: 'card',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison view optimized for decision making with clear feature differentiation and popular option highlighting.'
      }
    }
  }
};

// Text-only examples
export const TextOnlyOptions: Story = {
  args: {
    items: [
      {
        id: 'monthly',
        planName: 'Monthly Subscription',
        price: '$19',
        period: 'month',
        description: 'Flexible monthly billing. Cancel anytime.',
        selected: true
      },
      {
        id: 'quarterly',
        planName: 'Quarterly Subscription',
        price: '$49',
        period: 'quarter',
        description: 'Save 15% with quarterly billing. Billed every 3 months.',
        badge: 'Save 15%'
      },
      {
        id: 'annual',
        planName: 'Annual Subscription',
        price: '$149',
        period: 'year',
        description: 'Best value! Save 35% with annual billing.',
        badge: 'Best Value'
      }
    ],
    size: 'sm',
    layout: 'simple',
    allowMultiple: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Text-only billing options without icons for clean, focused content presentation.'
      }
    }
  }
};

export const SettingsOptions: Story = {
  args: {
    items: [
      {
        id: 'notifications',
        planName: 'Email Notifications',
        price: 'Free',
        period: '',
        description: 'Receive important updates and notifications via email.'
      },
      {
        id: 'sms',
        planName: 'SMS Alerts',
        price: '$2',
        period: 'month',
        description: 'Get instant notifications via SMS for critical updates.'
      },
      {
        id: 'slack',
        planName: 'Slack Integration',
        price: '$5',
        period: 'month',
        description: 'Connect your Slack workspace for team notifications.'
      }
    ],
    size: 'md',
    layout: 'card',
    allowMultiple: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Settings panel example with multiple selection for notification preferences.'
      }
    }
  }
};
