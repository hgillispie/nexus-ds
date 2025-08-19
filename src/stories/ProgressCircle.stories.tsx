import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ProgressCircle } from './ProgressCircle';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The ProgressCircle component provides a circular visual representation of progress or completion status. It supports multiple sizes, shapes, and labeling options for various use cases.

## Features

- **Multiple sizes**: Extra extra small (xxs) to large (lg) for different contexts
- **Two shapes**: Full circle and half circle variants
- **Flexible labeling**: Show/hide labels and percentages independently
- **Responsive design**: Adapts to different screen sizes
- **Accessibility**: Full ARIA support with proper roles and values
- **Customizable**: Colors, animations, and text options
- **SVG-based**: Crisp rendering at any scale

## Usage

The ProgressCircle is ideal for:
- Dashboard metrics and KPIs
- User profile completion
- Skill or competency levels
- Battery or storage indicators
- Goal achievement tracking
- Loading states for circular interfaces

## Sizes

### Extra Extra Small (xxs)
Compact 64px circle perfect for inline metrics or small cards.

### Extra Small (xs) 
160px circle suitable for sidebar widgets or mobile interfaces.

### Small (sm)
200px circle ideal for card components or grid layouts.

### Medium (md)
240px circle perfect for dashboard highlights or feature callouts.

### Large (lg)
280px circle designed for hero sections or primary metrics.

## Shapes

### Circle
Complete 360° progress indication showing full completion status.

### Half Circle
180° semicircle format that takes less vertical space while maintaining readability.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value between 0 and 100'
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value (default: 100)'
    },
    size: {
      control: { type: 'radio' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description: 'Size variant of the progress circle'
    },
    shape: {
      control: { type: 'radio' },
      options: ['circle', 'half-circle'],
      description: 'Shape variant - full circle or half circle'
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Show label text'
    },
    label: {
      control: { type: 'text' },
      description: 'Label text content'
    },
    showPercentage: {
      control: { type: 'boolean' },
      description: 'Show percentage text'
    },
    percentageText: {
      control: { type: 'text' },
      description: 'Custom percentage text'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state'
    },
    animationDuration: {
      control: { type: 'range', min: 0, max: 3000, step: 100 },
      description: 'Animation duration in milliseconds'
    },
    onProgressChange: {
      action: 'progress-changed',
      description: 'Callback when progress changes'
    }
  },
  args: {
    onProgressChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Size variations - Circle
export const ExtraExtraSmall: Story = {
  args: {
    value: 40,
    size: 'xxs',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra extra small (64px) circle - perfect for inline metrics or compact displays.'
      }
    }
  }
};

export const ExtraSmall: Story = {
  args: {
    value: 40,
    size: 'xs',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small (160px) circle - ideal for sidebar widgets or mobile interfaces.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    value: 40,
    size: 'sm',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small (200px) circle - perfect for card components or grid layouts.'
      }
    }
  }
};

export const Medium: Story = {
  args: {
    value: 40,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium (240px) circle - ideal for dashboard highlights or feature callouts.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    value: 40,
    size: 'lg',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large (280px) circle - designed for hero sections or primary metrics.'
      }
    }
  }
};

// Shape variations
export const HalfCircleSmall: Story = {
  args: {
    value: 40,
    size: 'sm',
    shape: 'half-circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small half circle - compact design that takes less vertical space.'
      }
    }
  }
};

export const HalfCircleMedium: Story = {
  args: {
    value: 40,
    size: 'md',
    shape: 'half-circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium half circle - space-efficient while maintaining good readability.'
      }
    }
  }
};

export const HalfCircleLarge: Story = {
  args: {
    value: 40,
    size: 'lg',
    shape: 'half-circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large half circle - prominent display with efficient space usage.'
      }
    }
  }
};

// Label variations
export const WithLabel: Story = {
  args: {
    value: 40,
    size: 'md',
    shape: 'circle',
    showLabel: true,
    label: 'Active users'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with descriptive label - perfect for dashboard metrics.'
      }
    }
  }
};

export const WithoutLabel: Story = {
  args: {
    value: 40,
    size: 'md',
    shape: 'circle',
    showLabel: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle without label - clean and minimal design focusing on the percentage.'
      }
    }
  }
};

export const CustomLabel: Story = {
  args: {
    value: 85,
    size: 'md',
    shape: 'circle',
    showLabel: true,
    label: 'Storage used'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with custom label text for specific use cases.'
      }
    }
  }
};

export const ExtraSmallWithExternalLabel: Story = {
  args: {
    value: 40,
    size: 'xxs',
    shape: 'circle',
    showLabel: true,
    label: 'Users'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small circle with external label positioned below the circle.'
      }
    }
  }
};

// Progress states
export const Empty: Story = {
  args: {
    value: 0,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty progress circle showing 0% - initial or reset state.'
      }
    }
  }
};

export const Quarter: Story = {
  args: {
    value: 25,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Quarter progress (25%) - early stage completion.'
      }
    }
  }
};

export const Half: Story = {
  args: {
    value: 50,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Half progress (50%) - midpoint completion.'
      }
    }
  }
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Three quarters progress (75%) - near completion.'
      }
    }
  }
};

export const Complete: Story = {
  args: {
    value: 100,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete progress (100%) - fully finished state.'
      }
    }
  }
};

// Custom styling
export const CustomColors: Story = {
  args: {
    value: 65,
    size: 'md',
    shape: 'circle',
    progressColor: '#10B981',
    backgroundColor: '#F3F4F6',
    textColor: '#059669',
    labelColor: '#6B7280'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with custom green theme colors for success states.'
      }
    }
  }
};

export const CustomText: Story = {
  args: {
    value: 42,
    size: 'md',
    shape: 'circle',
    percentageText: '42 GB',
    label: 'Storage'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with custom text instead of percentage for data visualization.'
      }
    }
  }
};

// Animation examples
export const SlowAnimation: Story = {
  args: {
    value: 80,
    size: 'md',
    shape: 'circle',
    animationDuration: 2500
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with slow animation for dramatic reveal effects.'
      }
    }
  }
};

export const FastAnimation: Story = {
  args: {
    value: 90,
    size: 'md',
    shape: 'circle',
    animationDuration: 500
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with fast animation for quick updates.'
      }
    }
  }
};

// Disabled state
export const Disabled: Story = {
  args: {
    value: 60,
    size: 'md',
    shape: 'circle',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled progress circle with muted colors and reduced opacity.'
      }
    }
  }
};

// Use cases
export const ProfileCompletion: Story = {
  args: {
    value: 78,
    size: 'sm',
    shape: 'circle',
    label: 'Profile completion',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'User profile completion indicator for onboarding flows.'
      }
    }
  }
};

export const SkillLevel: Story = {
  args: {
    value: 85,
    size: 'md',
    shape: 'half-circle',
    label: 'JavaScript',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Skill level indicator using half circle for space efficiency.'
      }
    }
  }
};

export const BatteryLevel: Story = {
  args: {
    value: 23,
    size: 'xs',
    shape: 'circle',
    label: 'Battery',
    progressColor: '#EF4444',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Battery level indicator with red color for low battery warning.'
      }
    }
  }
};

export const GoalAchievement: Story = {
  args: {
    value: 94,
    size: 'lg',
    shape: 'circle',
    label: 'Annual goal',
    progressColor: '#10B981',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Goal achievement tracker with green color indicating near completion.'
      }
    }
  }
};

// Dashboard examples
export const DashboardMetrics: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '800px' }}>
      <ProgressCircle value={85} size="sm" label="Active users" />
      <ProgressCircle value={92} size="sm" label="Conversion rate" progressColor="#10B981" />
      <ProgressCircle value={67} size="sm" label="Server load" progressColor="#F59E0B" />
      <ProgressCircle value={34} size="sm" label="Storage used" progressColor="#EF4444" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard metrics grid showing multiple progress circles with different colors and labels.'
      }
    }
  }
};
