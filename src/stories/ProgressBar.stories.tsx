import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The ProgressBar component provides a visual representation of task completion or loading progress. It supports multiple label positions, floating tooltips, and customizable styling.

## Features

- **Multiple label positions**: Right, bottom, top floating, bottom floating, or hidden
- **Floating tooltips**: Interactive tooltips that follow progress position
- **Responsive design**: Adapts to different screen sizes
- **Accessibility**: Full ARIA support and keyboard navigation
- **Customizable**: Colors, sizes, and animation timing
- **Animation**: Smooth progress transitions with configurable duration

## Usage

The ProgressBar is ideal for:
- File upload progress
- Task completion tracking
- Loading states
- Multi-step form progress
- Data processing status
- Installation or download progress

## Label Positions

### Static Labels
- **Right**: Label positioned to the right of the progress bar
- **Bottom**: Label positioned below the progress bar

### Floating Labels
- **Top Floating**: Tooltip above the progress bar that follows the current progress
- **Bottom Floating**: Tooltip below the progress bar that follows the current progress
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
    label: {
      control: { type: 'radio' },
      options: ['right', 'bottom', 'top-floating', 'bottom-floating', false],
      description: 'Label position or hide labels'
    },
    showPercentage: {
      control: { type: 'boolean' },
      description: 'Show percentage text'
    },
    labelText: {
      control: { type: 'text' },
      description: 'Custom label text (overrides percentage)'
    },
    width: {
      control: { type: 'number' },
      description: 'Progress bar width in pixels'
    },
    height: {
      control: { type: 'range', min: 4, max: 20, step: 2 },
      description: 'Progress bar height in pixels'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state'
    },
    animationDuration: {
      control: { type: 'range', min: 0, max: 2000, step: 100 },
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

// Basic examples
export const Default: Story = {
  args: {
    value: 40,
    label: 'right',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Default progress bar with right-positioned label showing 40% completion.'
      }
    }
  }
};

export const NoLabel: Story = {
  args: {
    value: 60,
    label: false,
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar without any label - clean and minimal design.'
      }
    }
  }
};

export const BottomLabel: Story = {
  args: {
    value: 75,
    label: 'bottom',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with label positioned below the bar.'
      }
    }
  }
};

// Floating tooltip examples
export const TopFloating: Story = {
  args: {
    value: 65,
    label: 'top-floating',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with floating tooltip above that follows the current progress position.'
      }
    }
  }
};

export const BottomFloating: Story = {
  args: {
    value: 45,
    label: 'bottom-floating',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with floating tooltip below that follows the current progress position.'
      }
    }
  }
};

// Progress states
export const Empty: Story = {
  args: {
    value: 0,
    label: 'right',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar showing 0% completion - initial state.'
      }
    }
  }
};

export const Complete: Story = {
  args: {
    value: 100,
    label: 'right',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar showing 100% completion - finished state.'
      }
    }
  }
};

export const PartialProgress: Story = {
  args: {
    value: 33,
    label: 'top-floating',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar showing partial completion with floating tooltip.'
      }
    }
  }
};

// Size variations
export const SmallHeight: Story = {
  args: {
    value: 50,
    label: 'right',
    width: 320,
    height: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Thin progress bar with 4px height - subtle and minimal.'
      }
    }
  }
};

export const LargeHeight: Story = {
  args: {
    value: 70,
    label: 'right',
    width: 320,
    height: 16
  },
  parameters: {
    docs: {
      description: {
        story: 'Thick progress bar with 16px height - prominent and bold.'
      }
    }
  }
};

export const Wide: Story = {
  args: {
    value: 85,
    label: 'right',
    width: 500
  },
  parameters: {
    docs: {
      description: {
        story: 'Wide progress bar for dashboard layouts or desktop applications.'
      }
    }
  }
};

export const Narrow: Story = {
  args: {
    value: 25,
    label: 'bottom',
    width: 200
  },
  parameters: {
    docs: {
      description: {
        story: 'Narrow progress bar suitable for compact interfaces or mobile layouts.'
      }
    }
  }
};

// Custom styling
export const CustomColors: Story = {
  args: {
    value: 60,
    label: 'right',
    width: 320,
    progressColor: '#10B981',
    backgroundColor: '#F3F4F6'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with custom green progress color and light gray background.'
      }
    }
  }
};

export const CustomText: Story = {
  args: {
    value: 7,
    max: 10,
    label: 'right',
    labelText: '7 of 10 files',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with custom label text instead of percentage display.'
      }
    }
  }
};

// Interactive examples
export const SlowAnimation: Story = {
  args: {
    value: 80,
    label: 'top-floating',
    width: 320,
    animationDuration: 1500
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with slower animation for dramatic effect or loading states.'
      }
    }
  }
};

export const FastAnimation: Story = {
  args: {
    value: 90,
    label: 'bottom-floating',
    width: 320,
    animationDuration: 100
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with fast animation for quick updates or real-time data.'
      }
    }
  }
};

// States
export const Disabled: Story = {
  args: {
    value: 55,
    label: 'right',
    width: 320,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled progress bar with reduced opacity and muted colors.'
      }
    }
  }
};

// Use cases
export const FileUpload: Story = {
  args: {
    value: 42,
    label: 'top-floating',
    labelText: 'Uploading...',
    width: 400,
    height: 8
  },
  parameters: {
    docs: {
      description: {
        story: 'File upload progress indicator with custom "Uploading..." text and floating tooltip.'
      }
    }
  }
};

export const TaskCompletion: Story = {
  args: {
    value: 6,
    max: 8,
    label: 'right',
    labelText: '6/8 tasks complete',
    width: 350
  },
  parameters: {
    docs: {
      description: {
        story: 'Task completion tracker showing progress through a series of steps.'
      }
    }
  }
};

export const LoadingProgress: Story = {
  args: {
    value: 23,
    label: 'bottom',
    labelText: 'Loading assets...',
    width: 300,
    height: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading progress indicator with descriptive text for asset loading.'
      }
    }
  }
};

export const InstallationProgress: Story = {
  args: {
    value: 78,
    label: 'bottom-floating',
    width: 380,
    height: 10
  },
  parameters: {
    docs: {
      description: {
        story: 'Installation progress with floating percentage indicator.'
      }
    }
  }
};

// Multiple progress bars
export const MultipleProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Overall Progress</h4>
        <ProgressBar value={85} label="right" width={350} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Current Task</h4>
        <ProgressBar value={45} label="right" width={350} height={6} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Subtask</h4>
        <ProgressBar value={90} label="right" width={350} height={4} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple progress bars showing hierarchical progress - overall, current task, and subtask.'
      }
    }
  }
};
