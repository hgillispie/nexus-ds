import type { Meta, StoryObj } from '@storybook/react';
import Icons, { IconName } from './Icons';
import { iconPaths } from './iconPaths';
import './icons.css';

const meta = {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Icons component provides a comprehensive library of SVG icons for the Nexus Design System.

## Features
- **300+ Icons**: Comprehensive icon library covering common UI needs
- **Customizable**: Adjust size, color, and stroke width
- **Accessible**: Built-in ARIA labels for screen readers
- **Consistent**: All icons follow the same visual style
- **Performant**: SVG-based with React.memo optimization

## Usage

\`\`\`jsx
import { Icons } from '@nexus/design-system';

// Basic usage
<Icons name="heart" />

// Custom size and color
<Icons name="star" size="large" color="#FFD700" />

// With custom stroke width
<Icons name="check-circle" strokeWidth={3} />
\`\`\`

## Icon Categories

The icon library is organized into the following categories:

- **Navigation**: arrow, chevron, menu icons
- **Actions**: edit, delete, save, download, upload
- **Media**: play, pause, volume, video, camera
- **Communication**: mail, message, phone, share
- **Interface**: search, filter, settings, info
- **Status**: check, alert, warning, loading
- **Social**: facebook, twitter, github, linkedin
- **Files**: file, folder, document, archive
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconPaths).sort(),
      description: 'The name of the icon to display',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Predefined size of the icon',
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
    },
    strokeWidth: {
      control: { type: 'range', min: 0.5, max: 4, step: 0.5 },
      description: 'Width of the icon stroke',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'heart',
    size: 'medium',
    color: '#181D27',
    strokeWidth: 2,
  },
};

export const Small: Story = {
  args: {
    name: 'star',
    size: 'small',
    color: '#181D27',
    strokeWidth: 2,
  },
};

export const Large: Story = {
  args: {
    name: 'check-circle',
    size: 'large',
    color: '#22C55E',
    strokeWidth: 2,
  },
};

export const CustomColor: Story = {
  args: {
    name: 'alert-triangle',
    size: 'medium',
    color: '#EF4444',
    strokeWidth: 2,
  },
};

export const ThickStroke: Story = {
  args: {
    name: 'settings',
    size: 'medium',
    color: '#181D27',
    strokeWidth: 3,
  },
};

export const ThinStroke: Story = {
  args: {
    name: 'search',
    size: 'medium',
    color: '#181D27',
    strokeWidth: 1,
  },
};

// Story showing all icons
export const AllIcons: Story = {
  render: () => {
    const iconNames = Object.keys(iconPaths).sort() as IconName[];
    const categories = {
      arrows: iconNames.filter(name => name.includes('arrow') || name.includes('chevron')),
      alerts: iconNames.filter(name => name.includes('alert') || name.includes('warning')),
      media: iconNames.filter(name => 
        ['play', 'pause', 'video', 'camera', 'music', 'volume', 'mic', 'speaker'].some(term => name.includes(term))
      ),
      files: iconNames.filter(name => name.includes('file') || name.includes('folder')),
      communication: iconNames.filter(name => 
        ['mail', 'message', 'phone', 'send', 'share'].some(term => name.includes(term))
      ),
      interface: iconNames.filter(name => 
        ['search', 'filter', 'settings', 'menu', 'grid', 'layout'].some(term => name.includes(term))
      ),
      social: iconNames.filter(name => 
        ['facebook', 'twitter', 'github', 'linkedin', 'youtube', 'instagram'].some(term => name.includes(term))
      ),
      other: iconNames.filter(name => 
        !name.includes('arrow') && !name.includes('chevron') &&
        !name.includes('alert') && !name.includes('warning') &&
        !['play', 'pause', 'video', 'camera', 'music', 'volume', 'mic', 'speaker'].some(term => name.includes(term)) &&
        !name.includes('file') && !name.includes('folder') &&
        !['mail', 'message', 'phone', 'send', 'share'].some(term => name.includes(term)) &&
        !['search', 'filter', 'settings', 'menu', 'grid', 'layout'].some(term => name.includes(term)) &&
        !['facebook', 'twitter', 'github', 'linkedin', 'youtube', 'instagram'].some(term => name.includes(term))
      ),
    };

    return (
      <div className="icon-showcase">
        {Object.entries(categories).map(([category, icons]) => (
          icons.length > 0 && (
            <div key={category} className="icon-category">
              <h3 className="icon-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="icon-grid">
                {icons.map((iconName) => (
                  <div key={iconName} className="icon-item">
                    <Icons name={iconName} size="medium" />
                    <span className="icon-label">{iconName}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    );
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Story showing different sizes
export const Sizes: Story = {
  render: () => (
    <div className="icon-sizes">
      <div className="icon-size-group">
        <Icons name="home" size="small" />
        <span>Small (16px)</span>
      </div>
      <div className="icon-size-group">
        <Icons name="home" size="medium" />
        <span>Medium (24px)</span>
      </div>
      <div className="icon-size-group">
        <Icons name="home" size="large" />
        <span>Large (32px)</span>
      </div>
      <div className="icon-size-group">
        <Icons name="home" size={48} />
        <span>Custom (48px)</span>
      </div>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Story showing different colors
export const Colors: Story = {
  render: () => (
    <div className="icon-colors">
      <Icons name="heart" size="large" color="#EF4444" />
      <Icons name="star" size="large" color="#FFD700" />
      <Icons name="check-circle" size="large" color="#22C55E" />
      <Icons name="info" size="large" color="#3B82F6" />
      <Icons name="alert-triangle" size="large" color="#F59E0B" />
      <Icons name="x-circle" size="large" color="#6B7280" />
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Story showing different stroke widths
export const StrokeWidths: Story = {
  render: () => (
    <div className="icon-strokes">
      <div className="icon-stroke-group">
        <Icons name="settings" size="large" strokeWidth={0.5} />
        <span>0.5px</span>
      </div>
      <div className="icon-stroke-group">
        <Icons name="settings" size="large" strokeWidth={1} />
        <span>1px</span>
      </div>
      <div className="icon-stroke-group">
        <Icons name="settings" size="large" strokeWidth={2} />
        <span>2px (default)</span>
      </div>
      <div className="icon-stroke-group">
        <Icons name="settings" size="large" strokeWidth={3} />
        <span>3px</span>
      </div>
      <div className="icon-stroke-group">
        <Icons name="settings" size="large" strokeWidth={4} />
        <span>4px</span>
      </div>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    name: 'heart',
    size: 'large',
    color: '#E11D48',
    strokeWidth: 2,
  },
};
