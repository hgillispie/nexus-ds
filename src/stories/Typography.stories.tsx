import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Heading, Text, Caption } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography component providing consistent text styling across the design system using the Inter font family.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-2xl',
        'display-xl', 
        'display-lg',
        'display-md',
        'display-sm',
        'display-xs',
        'text-xl',
        'text-lg',
        'text-md',
        'text-sm',
        'text-xs'
      ],
      description: 'Typography variant/size'
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight'
    },
    color: {
      control: 'select',
      options: ['default', 'secondary', 'muted'],
      description: 'Text color'
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment'
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: 'HTML element to render'
    },
    children: {
      control: 'text',
      description: 'Text content'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'text-md',
    weight: 'regular',
    color: 'default'
  }
};

export const DisplayScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="text-sm" weight="semibold" color="secondary" style={{ marginBottom: '16px' }}>
          DISPLAY SCALE
        </Typography>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Display 2xl · 72px / 90px · -2% letter spacing
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="display-2xl" weight="regular">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-2xl" weight="medium">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-2xl" weight="semibold">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-2xl" weight="bold">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Display xl · 60px / 72px · -2% letter spacing
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="display-xl" weight="regular">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-xl" weight="medium">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-xl" weight="semibold">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-xl" weight="bold">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Display lg · 48px / 60px · -2% letter spacing
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="display-lg" weight="regular">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-lg" weight="medium">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-lg" weight="semibold">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-lg" weight="bold">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Display md · 36px / 44px · -2% letter spacing
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="display-md" weight="regular">Display md</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-md" weight="medium">Display md</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-md" weight="semibold">Display md</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-md" weight="bold">Display md</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Display sm · 30px / 38px
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="display-sm" weight="regular">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-sm" weight="medium">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-sm" weight="semibold">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-sm" weight="bold">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Display xs · 24px / 32px
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="display-xs" weight="regular">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-xs" weight="medium">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-xs" weight="semibold">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-xs" weight="bold">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete display typography scale showing all sizes from 2xl to xs with different font weights.',
      }
    }
  }
};

export const TextScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="text-sm" weight="semibold" color="secondary" style={{ marginBottom: '16px' }}>
          TEXT SCALE
        </Typography>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Text xl · 20px / 30px
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="text-xl" weight="regular">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-xl" weight="medium">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-xl" weight="semibold">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-xl" weight="bold">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Text lg · 18px / 28px
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="text-lg" weight="regular">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-lg" weight="medium">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-lg" weight="semibold">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-lg" weight="bold">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Text md · 16px / 24px (Base font size)
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="text-md" weight="regular">Text md</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-md" weight="medium">Text md</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-md" weight="semibold">Text md</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-md" weight="bold">Text md</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Text sm · 14px / 20px
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="text-sm" weight="regular">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-sm" weight="medium">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-sm" weight="semibold">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-sm" weight="bold">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{ marginBottom: '8px' }}>
              Text xs · 12px / 18px
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <Typography variant="text-xs" weight="regular">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-xs" weight="medium">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-xs" weight="semibold">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-xs" weight="bold">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete text typography scale showing all sizes from xl to xs with different font weights.',
      }
    }
  }
};

export const FontSpecimen: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="display-lg" weight="regular" style={{ marginBottom: '16px' }}>
          Inter
        </Typography>
        <Typography variant="display-2xl" weight="regular" style={{ marginBottom: '32px', fontSize: '112px', lineHeight: 'normal' }}>
          Ag
        </Typography>
        <Typography variant="display-lg" weight="regular" style={{ marginBottom: '32px' }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789 !@#$%^&*()
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography specimen showing the Inter font family with alphabet, numbers, and special characters.',
      }
    }
  }
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="text-lg" weight="semibold" style={{ marginBottom: '16px' }}>
        Typography Colors
      </Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Typography variant="text-lg" color="default">
            Default text color - Primary content and headings
          </Typography>
          <Typography variant="text-sm" color="muted">#181D27</Typography>
        </div>
        
        <div>
          <Typography variant="text-lg" color="secondary">
            Secondary text color - Supporting content and descriptions
          </Typography>
          <Typography variant="text-sm" color="muted">#535862</Typography>
        </div>
        
        <div>
          <Typography variant="text-lg" color="muted">
            Muted text color - Captions, labels, and meta information
          </Typography>
          <Typography variant="text-sm" color="muted">#9CA3AF</Typography>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography color variants for different content hierarchy and semantic meaning.',
      }
    }
  }
};

export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="text-lg" weight="semibold" style={{ marginBottom: '16px' }}>
        Text Alignment
      </Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #E5E7EB', padding: '24px', borderRadius: '8px' }}>
        <Typography variant="text-md" align="left">
          Left-aligned text (default) - Most common for body text and reading content
        </Typography>
        
        <Typography variant="text-md" align="center">
          Center-aligned text - Used for headings, hero content, and emphasis
        </Typography>
        
        <Typography variant="text-md" align="right">
          Right-aligned text - Used for numerical data, timestamps, and special layouts
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography alignment options for different layout requirements.',
      }
    }
  }
};

export const HelperComponents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="text-lg" weight="semibold" style={{ marginBottom: '16px' }}>
          Heading Helper Component
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Heading level={1}>Heading 1 - Main page title</Heading>
          <Heading level={2}>Heading 2 - Section title</Heading>
          <Heading level={3}>Heading 3 - Subsection title</Heading>
          <Heading level={4}>Heading 4 - Content group title</Heading>
          <Heading level={5}>Heading 5 - Sub-content title</Heading>
          <Heading level={6}>Heading 6 - Minor title</Heading>
        </div>
      </div>

      <div>
        <Typography variant="text-lg" weight="semibold" style={{ marginBottom: '16px' }}>
          Text Helper Component
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Text size="xl">Extra large text for emphasis and standout content</Text>
          <Text size="lg">Large text for important information and introductions</Text>
          <Text size="md">Medium text for body content and primary information</Text>
          <Text size="sm">Small text for secondary information and descriptions</Text>
          <Text size="xs">Extra small text for captions and fine print</Text>
        </div>
      </div>

      <div>
        <Typography variant="text-lg" weight="semibold" style={{ marginBottom: '16px' }}>
          Caption Helper Component
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="text-md">Main content with associated caption</Typography>
          <Caption>This is a caption providing additional context</Caption>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Helper components (Heading, Text, Caption) providing semantic shortcuts for common typography patterns.',
      }
    }
  }
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', padding: '40px', border: '1px solid #E5E7EB', borderRadius: '12px', backgroundColor: '#FAFAFA' }}>
      <Heading level={1} style={{ marginBottom: '20px' }}>
        The Outermost House by Henry Beston
      </Heading>
      
      <Text size="xl" color="secondary" style={{ marginBottom: '24px' }}>
        In a world older and more complete than ours they move finished and complete, 
        gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.
      </Text>
      
      <Text size="lg" style={{ marginBottom: '24px' }}>
        They are not brethren; they are not underlings; they are other nations, caught with ourselves 
        in the net of life and time, fellow prisoners of the splendor and travail of the earth.
      </Text>
      
      <Text size="md" style={{ marginBottom: '16px' }}>
        For the animal shall not be measured by man. In a world older and more complete than ours, 
        they move finished and complete, gifted with the extensions of the senses we have lost or never attained.
      </Text>
      
      <Caption>
        Excerpt from "The Outermost House" by Henry Beston, 1928
      </Caption>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing typography hierarchy in action with proper spacing and content flow.',
      }
    }
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <Typography variant="display-md" weight="semibold" style={{ marginBottom: '24px' }}>
          Typography Scale Overview
        </Typography>
        <Typography variant="text-lg" color="secondary" style={{ marginBottom: '32px' }}>
          Complete typography system based on the Inter font family with carefully calculated sizes, 
          line heights, and letter spacing optimized for both display and text usage.
        </Typography>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
        <div>
          <Typography variant="text-sm" weight="semibold" color="secondary" style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Display Variants
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography variant="display-2xl" weight="semibold">Display 2xl</Typography>
            <Typography variant="display-xl" weight="semibold">Display xl</Typography>
            <Typography variant="display-lg" weight="semibold">Display lg</Typography>
            <Typography variant="display-md" weight="semibold">Display md</Typography>
            <Typography variant="display-sm" weight="semibold">Display sm</Typography>
            <Typography variant="display-xs" weight="semibold">Display xs</Typography>
          </div>
        </div>

        <div>
          <Typography variant="text-sm" weight="semibold" color="secondary" style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Text Variants
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography variant="text-xl" weight="medium">Text xl</Typography>
            <Typography variant="text-lg" weight="medium">Text lg</Typography>
            <Typography variant="text-md" weight="medium">Text md (Base)</Typography>
            <Typography variant="text-sm" weight="medium">Text sm</Typography>
            <Typography variant="text-xs" weight="medium">Text xs</Typography>
          </div>
        </div>
      </div>

      <div>
        <Typography variant="text-sm" weight="semibold" color="secondary" style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Font Weights
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          <Typography variant="text-lg" weight="regular">Regular (400)</Typography>
          <Typography variant="text-lg" weight="medium">Medium (500)</Typography>
          <Typography variant="text-lg" weight="semibold">Semibold (600)</Typography>
          <Typography variant="text-lg" weight="bold">Bold (700)</Typography>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of the typography system showing all variants, sizes, and weights.',
      }
    }
  }
};
