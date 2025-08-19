import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Slider component provides an intuitive way for users to select a value from a range. It supports both single value selection and range selection with two handles.

## Features

- **Single & Range modes**: Select a single value or define a range with two handles
- **Keyboard accessible**: Full keyboard navigation support with arrow keys, home, end, page up/down
- **Touch-friendly**: Optimized for mobile and touch devices with larger touch targets
- **Customizable**: Adjustable dimensions, colors, and formatting options
- **Responsive design**: Adapts to different screen sizes with appropriate touch targets
- **ARIA compliant**: Full accessibility support with proper roles and values
- **Step control**: Configurable step increments for precise value selection

## Usage

The Slider is ideal for:
- Volume controls and audio settings
- Price range filters in e-commerce
- Date and time range selection
- Image brightness/contrast adjustment
- Progress indication with user control
- Numerical input with visual feedback

## Single Mode
Pass only the \`value\` prop to create a single-handle slider for selecting one value.

## Range Mode
Pass both \`value\` and \`endValue\` props to create a range slider with two handles for selecting a range of values.

## Keyboard Navigation
- **Arrow keys**: Increment/decrement by step amount
- **Home/End**: Jump to minimum/maximum values
- **Page Up/Down**: Large increments (10x step)
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value for single slider or start value for range slider'
    },
    endValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'End value for range slider (enables range mode when provided)'
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value (default: 0)'
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value (default: 100)'
    },
    step: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Step increment (default: 1)'
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Show value labels below the slider'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state'
    },
    width: {
      control: { type: 'text' },
      description: 'Track width (CSS value or number of pixels)'
    },
    height: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Track height in pixels'
    },
    handleSize: {
      control: { type: 'range', min: 16, max: 32, step: 2 },
      description: 'Handle size in pixels'
    },
    onChange: {
      action: 'value-changed',
      description: 'Callback when value changes'
    },
    onSlideStart: {
      action: 'slide-started',
      description: 'Callback when sliding starts'
    },
    onSlideEnd: {
      action: 'slide-ended',
      description: 'Callback when sliding ends'
    }
  },
  args: {
    onChange: fn(),
    onSlideStart: fn(),
    onSlideEnd: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Single slider examples matching Figma design states
export const Empty: Story = {
  args: {
    value: 0,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty slider at 0% - initial state.'
      }
    }
  }
};

export const Quarter: Story = {
  args: {
    value: 25,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Quarter progress (25%) - early stage selection.'
      }
    }
  }
};

export const Half: Story = {
  args: {
    value: 50,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Half progress (50%) - midpoint selection.'
      }
    }
  }
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Three quarters progress (75%) - near maximum selection.'
      }
    }
  }
};

export const Full: Story = {
  args: {
    value: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Full progress (100%) - maximum value selected.'
      }
    }
  }
};

// Range slider examples
export const RangeQuarterHalf: Story = {
  args: {
    value: 25,
    endValue: 50,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 25% to 50% - mid-range selection.'
      }
    }
  }
};

export const RangeQuarterThreeQuarters: Story = {
  args: {
    value: 25,
    endValue: 75,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 25% to 75% - wide range selection.'
      }
    }
  }
};

export const RangeHalfThreeQuarters: Story = {
  args: {
    value: 50,
    endValue: 75,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 50% to 75% - upper range selection.'
      }
    }
  }
};

export const RangeQuarterFull: Story = {
  args: {
    value: 25,
    endValue: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 25% to 100% - maximum range selection.'
      }
    }
  }
};

export const RangeHalfFull: Story = {
  args: {
    value: 50,
    endValue: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 50% to 100% - upper half selection.'
      }
    }
  }
};

export const RangeThreeQuartersFull: Story = {
  args: {
    value: 75,
    endValue: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 75% to 100% - final quarter selection.'
      }
    }
  }
};

// Label variations
export const WithoutLabels: Story = {
  args: {
    value: 60,
    showLabels: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider without value labels - clean minimal design.'
      }
    }
  }
};

export const CustomLabelFormat: Story = {
  args: {
    value: 42,
    showLabels: true,
    labelFormat: (value) => `$${value}`
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with custom label formatting - displays values as currency.'
      }
    }
  }
};

export const TemperatureRange: Story = {
  args: {
    value: 18,
    endValue: 24,
    min: 0,
    max: 40,
    showLabels: true,
    labelFormat: (value) => `${value}°C`
  },
  parameters: {
    docs: {
      description: {
        story: 'Temperature range selector with custom formatting and min/max values.'
      }
    }
  }
};

// Size variations
export const SmallSlider: Story = {
  args: {
    value: 65,
    height: 2,
    handleSize: 16,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Small slider with thinner track and smaller handles.'
      }
    }
  }
};

export const LargeSlider: Story = {
  args: {
    value: 65,
    height: 8,
    handleSize: 28,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Large slider with thicker track and bigger handles for easy interaction.'
      }
    }
  }
};

// Step variations
export const StepByFive: Story = {
  args: {
    value: 45,
    step: 5,
    showLabels: true,
    labelFormat: (value) => `${value}%`
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with step size of 5 - values snap to increments of 5.'
      }
    }
  }
};

export const StepByTen: Story = {
  args: {
    value: 70,
    step: 10,
    showLabels: true,
    labelFormat: (value) => `${value}%`
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with step size of 10 - values snap to increments of 10.'
      }
    }
  }
};

// Disabled state
export const Disabled: Story = {
  args: {
    value: 40,
    disabled: true,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled slider with muted colors and no interaction.'
      }
    }
  }
};

export const DisabledRange: Story = {
  args: {
    value: 30,
    endValue: 70,
    disabled: true,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled range slider showing selected range but preventing interaction.'
      }
    }
  }
};

// Use case examples
export const VolumeControl: Story = {
  args: {
    value: 65,
    showLabels: true,
    labelFormat: (value) => `${value}%`,
    'aria-label': 'Volume level'
  },
  parameters: {
    docs: {
      description: {
        story: 'Volume control slider for audio applications.'
      }
    }
  }
};

export const PriceRange: Story = {
  args: {
    value: 200,
    endValue: 800,
    min: 0,
    max: 1000,
    step: 50,
    showLabels: true,
    labelFormat: (value) => `$${value}`,
    'aria-label': 'Price range filter'
  },
  parameters: {
    docs: {
      description: {
        story: 'Price range filter for e-commerce applications with currency formatting.'
      }
    }
  }
};

export const BrightnessControl: Story = {
  args: {
    value: 80,
    showLabels: true,
    labelFormat: (value) => `${value}%`,
    'aria-label': 'Screen brightness'
  },
  parameters: {
    docs: {
      description: {
        story: 'Brightness control slider for display settings.'
      }
    }
  }
};

export const AgeRange: Story = {
  args: {
    value: 25,
    endValue: 65,
    min: 18,
    max: 100,
    showLabels: true,
    labelFormat: (value) => `${value} years`,
    'aria-label': 'Age range selector'
  },
  parameters: {
    docs: {
      description: {
        story: 'Age range selector for demographic filtering with custom min/max values.'
      }
    }
  }
};

// Layout examples matching Figma design
export const MultipleSliders: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <Slider value={0} showLabels={true} />
      <Slider value={25} showLabels={true} />
      <Slider value={50} showLabels={true} />
      <Slider value={75} showLabels={true} />
      <Slider value={100} showLabels={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple sliders showing different progress states in a vertical layout.'
      }
    }
  }
};

export const MixedRangeSliders: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <Slider value={25} endValue={50} showLabels={true} />
      <Slider value={25} endValue={75} showLabels={true} />
      <Slider value={25} endValue={100} showLabels={true} />
      <Slider value={50} endValue={75} showLabels={true} />
      <Slider value={50} endValue={100} showLabels={true} />
      <Slider value={75} endValue={100} showLabels={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple range sliders showing different range selections in a vertical layout.'
      }
    }
  }
};

export const GridLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '24px', 
      maxWidth: '600px' 
    }}>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}>Single Sliders</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Slider value={25} showLabels={true} />
          <Slider value={50} showLabels={true} />
          <Slider value={75} showLabels={true} />
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}>Range Sliders</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Slider value={25} endValue={50} showLabels={true} />
          <Slider value={25} endValue={75} showLabels={true} />
          <Slider value={50} endValue={100} showLabels={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid layout comparing single sliders and range sliders side by side.'
      }
    }
  }
};

export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      width: '100%',
      maxWidth: '800px'
    }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}>Desktop Width</h4>
        <Slider value={65} width="100%" showLabels={true} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}>Tablet Width</h4>
        <Slider value={45} width="400px" showLabels={true} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}>Mobile Width</h4>
        <Slider value={80} width="250px" showLabels={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive slider examples showing different widths for various device sizes.'
      }
    }
  }
};
