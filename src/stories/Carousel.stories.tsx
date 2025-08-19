import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { useState } from 'react';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive carousel component with navigation arrows, pagination dots, auto-play functionality, and touch support.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    slides: {
      description: 'Array of image URLs or slide content',
      control: 'object',
    },
    size: {
      description: 'Size of the carousel',
      control: 'select',
      options: ['md', 'lg'],
    },
    theme: {
      description: 'Theme variant for controls',
      control: 'select',
      options: ['primary', 'dark', 'light'],
    },
    autoPlay: {
      description: 'Auto-play interval in milliseconds (0 to disable)',
      control: { type: 'number', min: 0, step: 1000 },
    },
    showArrows: {
      description: 'Show navigation arrows',
      control: 'boolean',
    },
    showDots: {
      description: 'Show pagination dots',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample images for the carousel
const sampleImages = [
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=400&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center'
];

const placeholderImages = [
  'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 1%3C/text%3E%3C/g%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 2%3C/text%3E%3C/g%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23d0d0d0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 3%3C/text%3E%3C/g%3E%3C/svg%3E'
];

// Interactive wrapper for stories
const InteractiveCarousel = (args: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <div style={{ width: '640px', maxWidth: '100%' }}>
      <Carousel 
        {...args} 
        onSlideChange={(index) => {
          setCurrentSlide(index);
          console.log('Slide changed to:', index + 1);
        }}
      />
      <p style={{ marginTop: '16px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        Current slide: {currentSlide + 1} of {args.slides.length}
      </p>
    </div>
  );
};

// Basic Stories
export const Default: Story = {
  render: InteractiveCarousel,
  args: {
    slides: placeholderImages,
    size: 'md',
    theme: 'primary',
    autoPlay: 0,
    showArrows: true,
    showDots: true,
    disabled: false,
  },
};

export const Large: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    size: 'lg',
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size carousel with bigger navigation arrows and dots.'
      }
    }
  }
};

export const DarkTheme: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    theme: 'dark',
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark theme with semi-transparent dark backgrounds for controls.'
      }
    }
  }
};

export const LightTheme: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    theme: 'light',
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Light theme with semi-transparent light backgrounds for controls.'
      }
    }
  }
};

export const AutoPlay: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    autoPlay: 3000,
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-play carousel that advances every 3 seconds.'
      }
    }
  }
};

export const WithoutArrows: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    showArrows: false,
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without navigation arrows, controlled only by dots.'
      }
    }
  }
};

export const WithoutDots: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    showDots: false,
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without pagination dots, controlled only by arrows.'
      }
    }
  }
};

export const SingleSlide: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    slides: [placeholderImages[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with single slide - navigation controls are automatically hidden.'
      }
    }
  }
};

export const ManySlides: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    slides: [
      ...placeholderImages,
      'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23c0c0c0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 4%3C/text%3E%3C/g%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23b0b0b0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 5%3C/text%3E%3C/g%3E%3C/svg%3E',
      'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23a0a0a0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 6%3C/text%3E%3C/g%3E%3C/svg%3E'
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with many slides showing pagination dots behavior.'
      }
    }
  }
};

export const Disabled: Story = {
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    disabled: true,
    slides: placeholderImages,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled carousel - all interactions are prevented.'
      }
    }
  }
};

// All Variants Story
export const AllVariants: Story = {
  render: () => {
    const variants = [
      { name: 'Medium + Primary Theme', size: 'md' as const, theme: 'primary' as const },
      { name: 'Large + Primary Theme', size: 'lg' as const, theme: 'primary' as const },
      { name: 'Medium + Dark Theme', size: 'md' as const, theme: 'dark' as const },
      { name: 'Large + Dark Theme', size: 'lg' as const, theme: 'dark' as const },
      { name: 'Medium + Light Theme', size: 'md' as const, theme: 'light' as const },
      { name: 'Large + Light Theme', size: 'lg' as const, theme: 'light' as const }
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', padding: '20px' }}>
        {variants.map((variant, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <h4 style={{ margin: '0', fontSize: '16px', fontWeight: '600', textAlign: 'center' }}>
              {variant.name}
            </h4>
            <div style={{ width: '640px', maxWidth: '100%' }}>
              <Carousel
                slides={placeholderImages}
                size={variant.size}
                theme={variant.theme}
                showArrows={true}
                showDots={true}
                autoPlay={0}
              />
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all carousel variants matching the Figma design specifications.'
      }
    }
  }
};

// Custom Content Story
export const CustomContent: Story = {
  render: () => {
    const customSlides = [
      <div key="slide1" style={{ 
        width: '100%', 
        height: '100%', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Custom Slide 1
      </div>,
      <div key="slide2" style={{ 
        width: '100%', 
        height: '100%', 
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Custom Slide 2
      </div>,
      <div key="slide3" style={{ 
        width: '100%', 
        height: '100%', 
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Custom Slide 3
      </div>
    ];

    return (
      <div style={{ width: '640px', maxWidth: '100%' }}>
        <Carousel
          slides={customSlides}
          size="lg"
          theme="light"
          showArrows={true}
          showDots={true}
          autoPlay={0}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with custom React components as slide content instead of images.'
      }
    }
  }
};
