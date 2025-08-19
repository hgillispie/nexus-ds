import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive pagination component with multiple layout types, responsive design, and accessibility features.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      description: 'Current active page number (1-based)',
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      description: 'Total number of pages',
      control: { type: 'number', min: 1 },
    },
    type: {
      description: 'Type of pagination layout',
      control: 'select',
      options: ['page-default', 'page-minimal', 'card-default', 'card-minimal', 'card-button-group', 'dots', 'lines'],
    },
    shape: {
      description: 'Shape of page number buttons',
      control: 'select',
      options: ['square', 'circle'],
    },
    breakpoint: {
      description: 'Responsive breakpoint',
      control: 'select',
      options: ['desktop', 'mobile'],
    },
    alignment: {
      description: 'Alignment for certain types',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    showNavigation: {
      description: 'Show Previous/Next buttons',
      control: 'boolean',
    },
    showPageNumbers: {
      description: 'Show page numbers',
      control: 'boolean',
    },
    showPageInfo: {
      description: 'Show page info text',
      control: 'boolean',
    },
    maxPageButtons: {
      description: 'Maximum number of page buttons to show',
      control: { type: 'number', min: 3, max: 10 },
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories
const InteractivePagination = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  
  return (
    <Pagination 
      {...args} 
      currentPage={currentPage} 
      onPageChange={setCurrentPage}
      onPrevious={() => setCurrentPage(Math.max(1, currentPage - 1))}
      onNext={() => setCurrentPage(Math.min(args.totalPages, currentPage + 1))}
    />
  );
};

// Basic Stories
export const Default: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 10,
    type: 'page-default',
    shape: 'square',
    breakpoint: 'desktop',
    alignment: 'center',
    showNavigation: true,
    showPageNumbers: true,
    showPageInfo: false,
    maxPageButtons: 7,
    disabled: false,
  },
};

export const PageMinimal: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'page-minimal',
    showPageNumbers: false,
    showPageInfo: true,
  },
};

export const CardDefault: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-default',
  },
};

export const CardMinimal: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    showPageNumbers: false,
    showPageInfo: true,
  },
};

export const CardButtonGroup: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-button-group',
    showNavigation: true,
    showPageNumbers: true,
  },
};

// Shape Variations
export const CircleShape: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    shape: 'circle',
  },
};

// Mobile Versions
export const MobileDefault: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    breakpoint: 'mobile',
    showPageNumbers: false,
    showPageInfo: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileCardMinimal: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    breakpoint: 'mobile',
    showPageNumbers: false,
    showPageInfo: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileButtonGroup: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-button-group',
    breakpoint: 'mobile',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Alignment Variations
export const LeftAligned: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    alignment: 'left',
    showPageNumbers: false,
    showPageInfo: true,
  },
};

export const RightAligned: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    alignment: 'right',
    showPageNumbers: false,
    showPageInfo: true,
  },
};

// Edge Cases
export const SinglePage: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    totalPages: 1,
  },
};

export const TwoPages: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    totalPages: 2,
  },
};

export const ManyPages: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    currentPage: 15,
    totalPages: 50,
    maxPageButtons: 7,
  },
};

export const CurrentPageAtEnd: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    currentPage: 10,
    totalPages: 10,
  },
};

export const DisabledState: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

// Comprehensive Figma Variants
export const FigmaVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr', 
      gap: '48px',
      padding: '32px',
      maxWidth: '1200px'
    }}>
      {/* Page Default Desktop */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Page Default - Desktop</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Square Shape</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="page-default"
              shape="square"
              breakpoint="desktop"
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Circle Shape</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="page-default"
              shape="circle"
              breakpoint="desktop"
            />
          </div>
        </div>
      </div>

      {/* Page Minimal Desktop */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Page Minimal - Desktop</h3>
        <Pagination
          currentPage={1}
          totalPages={10}
          type="page-minimal"
          shape="square"
          breakpoint="desktop"
          showPageNumbers={false}
          showPageInfo={true}
        />
      </div>

      {/* Card Default Desktop */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Card Default - Desktop</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Square Shape</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-default"
              shape="square"
              breakpoint="desktop"
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Circle Shape</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-default"
              shape="circle"
              breakpoint="desktop"
            />
          </div>
        </div>
      </div>

      {/* Card Minimal Desktop */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Card Minimal - Desktop</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Left Aligned</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-minimal"
              alignment="left"
              breakpoint="desktop"
              showPageNumbers={false}
              showPageInfo={true}
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Center Aligned</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-minimal"
              alignment="center"
              breakpoint="desktop"
              showPageNumbers={false}
              showPageInfo={true}
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Right Aligned</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-minimal"
              alignment="right"
              breakpoint="desktop"
              showPageNumbers={false}
              showPageInfo={true}
            />
          </div>
        </div>
      </div>

      {/* Card Button Group Desktop */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Card Button Group - Desktop</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Left Aligned</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-button-group"
              alignment="left"
              breakpoint="desktop"
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Center Aligned</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-button-group"
              alignment="center"
              breakpoint="desktop"
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Right Aligned</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-button-group"
              alignment="right"
              breakpoint="desktop"
            />
          </div>
        </div>
      </div>

      {/* Mobile Versions */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Mobile Versions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '375px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Page Default Mobile</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="page-default"
              breakpoint="mobile"
              showPageNumbers={false}
              showPageInfo={true}
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Card Minimal Mobile</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-minimal"
              breakpoint="mobile"
              showPageNumbers={false}
              showPageInfo={true}
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Card Default Mobile</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-default"
              breakpoint="mobile"
              showPageNumbers={false}
              showPageInfo={true}
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Button Group Mobile</h4>
            <Pagination
              currentPage={1}
              totalPages={10}
              type="card-button-group"
              breakpoint="mobile"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All pagination variants from the Figma design showing different types, shapes, alignments, and responsive behaviors.'
      }
    },
    layout: 'fullscreen',
  }
};

// Interactive Playground
export const Playground: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 5,
    totalPages: 20,
    type: 'page-default',
    shape: 'square',
    breakpoint: 'desktop',
    alignment: 'center',
    showNavigation: true,
    showPageNumbers: true,
    showPageInfo: false,
    maxPageButtons: 7,
    disabled: false,
  },
};

// Custom Labels
export const CustomLabels: Story = {
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    showPageNumbers: false,
    showPageInfo: true,
    labels: {
      previous: 'Anterior',
      next: 'Siguiente',
      pageInfo: 'Página 1 de 10',
    },
  },
};

// With Event Handlers
export const WithEventHandlers: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (message: string) => {
      setLogs(prev => [`${new Date().toLocaleTimeString()}: ${message}`, ...prev.slice(0, 4)]);
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <Pagination 
          {...args}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            addLog(`Page changed to ${page}`);
          }}
          onPrevious={() => {
            const newPage = Math.max(1, currentPage - 1);
            setCurrentPage(newPage);
            addLog(`Previous clicked, now on page ${newPage}`);
          }}
          onNext={() => {
            const newPage = Math.min(args.totalPages, currentPage + 1);
            setCurrentPage(newPage);
            addLog(`Next clicked, now on page ${newPage}`);
          }}
        />
        
        {logs.length > 0 && (
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            maxWidth: '400px',
            width: '100%'
          }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Event Log:</h4>
            <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
              {logs.map((log, index) => (
                <div key={index} style={{ margin: '2px 0' }}>{log}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
  args: {
    ...Default.args,
    totalPages: 10,
  },
};

// Pagination Dots Stories
export const PaginationDots: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 5,
    type: 'dots',
    dotsConfig: {
      size: 'md',
      color: 'primary-light',
      framed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination dots for carousel-style navigation with medium size, primary color scheme, and framed background.'
      }
    }
  }
};

export const PaginationDotsLarge: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 2,
    totalPages: 4,
    type: 'dots',
    dotsConfig: {
      size: 'lg',
      color: 'primary-dark',
      framed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large pagination dots with dark primary color scheme and framed background.'
      }
    }
  }
};

export const PaginationDotsUnframed: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 6,
    type: 'dots',
    dotsConfig: {
      size: 'md',
      color: 'gray-light',
      framed: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination dots without frame background using gray color scheme.'
      }
    }
  }
};

export const PaginationLines: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 2,
    totalPages: 4,
    type: 'lines',
    dotsConfig: {
      size: 'md',
      color: 'primary-light',
      framed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Line-style pagination indicators with equal width segments.'
      }
    }
  }
};

export const PaginationLinesLarge: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 3,
    type: 'lines',
    dotsConfig: {
      size: 'lg',
      color: 'gray-dark',
      framed: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large line-style pagination with gray dark color scheme and no frame.'
      }
    }
  }
};

// All Dots Variants Story
export const AllDotsVariants: Story = {
  render: () => {
    const [activePage, setActivePage] = useState<{[key: string]: number}>({});

    const handlePageChange = (variant: string, page: number) => {
      setActivePage(prev => ({ ...prev, [variant]: page }));
    };

    const variants = [
      { name: 'MD Dots - Primary Light (Framed)', type: 'dots' as const, config: { size: 'md' as const, color: 'primary-light' as const, framed: true } },
      { name: 'MD Dots - Primary Dark (Framed)', type: 'dots' as const, config: { size: 'md' as const, color: 'primary-dark' as const, framed: true } },
      { name: 'MD Lines - Primary Light (Framed)', type: 'lines' as const, config: { size: 'md' as const, color: 'primary-light' as const, framed: true } },
      { name: 'MD Lines - Primary Dark (Framed)', type: 'lines' as const, config: { size: 'md' as const, color: 'primary-dark' as const, framed: true } },
      { name: 'MD Dots - Primary Light (Unframed)', type: 'dots' as const, config: { size: 'md' as const, color: 'primary-light' as const, framed: false } },
      { name: 'MD Dots - Primary Dark (Unframed)', type: 'dots' as const, config: { size: 'md' as const, color: 'primary-dark' as const, framed: false } },
      { name: 'MD Lines - Primary Light (Unframed)', type: 'lines' as const, config: { size: 'md' as const, color: 'primary-light' as const, framed: false } },
      { name: 'MD Lines - Primary Dark (Unframed)', type: 'lines' as const, config: { size: 'md' as const, color: 'primary-dark' as const, framed: false } },
      { name: 'LG Dots - Primary Light (Framed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'primary-light' as const, framed: true } },
      { name: 'LG Dots - Primary Dark (Framed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'primary-dark' as const, framed: true } },
      { name: 'LG Lines - Primary Light (Framed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'primary-light' as const, framed: true } },
      { name: 'LG Lines - Primary Dark (Framed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'primary-dark' as const, framed: true } },
      { name: 'LG Dots - Primary Light (Unframed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'primary-light' as const, framed: false } },
      { name: 'LG Dots - Primary Dark (Unframed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'primary-dark' as const, framed: false } },
      { name: 'LG Lines - Primary Light (Unframed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'primary-light' as const, framed: false } },
      { name: 'LG Lines - Primary Dark (Unframed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'primary-dark' as const, framed: false } },
      { name: 'MD Dots - Gray Dark (Framed)', type: 'dots' as const, config: { size: 'md' as const, color: 'gray-dark' as const, framed: true } },
      { name: 'MD Lines - Gray Dark (Framed)', type: 'lines' as const, config: { size: 'md' as const, color: 'gray-dark' as const, framed: true } },
      { name: 'MD Dots - Gray Dark (Unframed)', type: 'dots' as const, config: { size: 'md' as const, color: 'gray-dark' as const, framed: false } },
      { name: 'MD Lines - Gray Dark (Unframed)', type: 'lines' as const, config: { size: 'md' as const, color: 'gray-dark' as const, framed: false } },
      { name: 'LG Dots - Gray Dark (Framed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'gray-dark' as const, framed: true } },
      { name: 'LG Lines - Gray Dark (Framed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'gray-dark' as const, framed: true } },
      { name: 'LG Dots - Gray Dark (Unframed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'gray-dark' as const, framed: false } },
      { name: 'LG Lines - Gray Dark (Unframed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'gray-dark' as const, framed: false } },
      { name: 'MD Dots - Gray Light (Framed)', type: 'dots' as const, config: { size: 'md' as const, color: 'gray-light' as const, framed: true } },
      { name: 'MD Lines - Gray Light (Framed)', type: 'lines' as const, config: { size: 'md' as const, color: 'gray-light' as const, framed: true } },
      { name: 'MD Dots - Gray Light (Unframed)', type: 'dots' as const, config: { size: 'md' as const, color: 'gray-light' as const, framed: false } },
      { name: 'MD Lines - Gray Light (Unframed)', type: 'lines' as const, config: { size: 'md' as const, color: 'gray-light' as const, framed: false } },
      { name: 'LG Dots - Gray Light (Framed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'gray-light' as const, framed: true } },
      { name: 'LG Lines - Gray Light (Framed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'gray-light' as const, framed: true } },
      { name: 'LG Dots - Gray Light (Unframed)', type: 'dots' as const, config: { size: 'lg' as const, color: 'gray-light' as const, framed: false } },
      { name: 'LG Lines - Gray Light (Unframed)', type: 'lines' as const, config: { size: 'lg' as const, color: 'gray-light' as const, framed: false } }
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', padding: '20px' }}>
        {variants.map((variant, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <h4 style={{ margin: '0', fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>
              {variant.name}
            </h4>
            <Pagination
              currentPage={activePage[variant.name] || 1}
              totalPages={3}
              type={variant.type}
              dotsConfig={variant.config}
              onPageChange={(page) => handlePageChange(variant.name, page)}
            />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all pagination dots and lines variants matching the Figma design specifications.'
      }
    }
  }
};
