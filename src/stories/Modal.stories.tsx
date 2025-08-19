import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter } from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Modal component provides a flexible overlay interface for displaying content above the main application. It supports various sizes, responsive layouts, and accessibility features.

## Features

- **Multiple sizes**: Small to full-screen variants for different content types
- **Responsive design**: Adapts to mobile, tablet, and desktop screens
- **Accessibility**: Full ARIA support, focus management, and keyboard navigation
- **Flexible content**: Header, content, and footer sections with customizable layouts
- **Animation support**: Smooth enter/exit animations with optional disable
- **Portal rendering**: Optional portal target for advanced use cases
- **Focus management**: Automatic focus trapping and restoration
- **Backdrop control**: Configurable backdrop click and escape key handling

## Usage

The Modal is ideal for:
- Confirmation dialogs and alerts
- Forms and data entry workflows
- Image galleries and media viewers
- Settings and configuration panels
- User profile and account management
- Multi-step wizards and onboarding

## Accessibility

- Automatic focus management with focus trapping
- Escape key support for closing
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus restoration when closed

## Mobile Responsive

The Modal automatically adapts to smaller screens with:
- Full-width layout on mobile devices
- Adjusted padding and spacing
- Stacked button layouts in footer
- Optimized touch targets for mobile interaction
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open'
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal size variant'
    },
    title: {
      control: { type: 'text' },
      description: 'Modal title'
    },
    description: {
      control: { type: 'text' },
      description: 'Modal description/subtitle'
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show close button in header'
    },
    closeOnBackdropClick: {
      control: { type: 'boolean' },
      description: 'Close modal when clicking backdrop'
    },
    closeOnEscape: {
      control: { type: 'boolean' },
      description: 'Close modal when pressing Escape key'
    },
    disableAnimation: {
      control: { type: 'boolean' },
      description: 'Disable modal animations'
    },
    preventBodyScroll: {
      control: { type: 'boolean' },
      description: 'Prevent body scroll when modal is open'
    },
    onClose: {
      action: 'modal-closed',
      description: 'Callback to close the modal'
    },
    onOpen: {
      action: 'modal-opened',
      description: 'Callback when modal opens'
    }
  },
  args: {
    onClose: fn(),
    onOpen: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Modal wrapper component for stories
const ModalWrapper = ({ 
  children, 
  buttonText = 'Open Modal',
  ...modalProps 
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {buttonText}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalProps}
      >
        {children}
      </Modal>
    </>
  );
};

// Basic modal examples
export const Default: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a default modal with basic content. It demonstrates the standard modal layout with a title, content area, and action buttons.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Modal Title',
    description: 'This is a modal description that provides additional context.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Save Changes</Button>
      </ModalFooter>
    )
  }
};

export const SmallModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a small modal perfect for simple confirmations or alerts. It takes up minimal screen space while still being easily readable.</p>
    </ModalWrapper>
  ),
  args: {
    size: 'sm',
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item?',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary" destructive>Delete</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Small modal (384px max-width) ideal for confirmations and simple dialogs.'
      }
    }
  }
};

export const MediumModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div>
        <p>This is a medium-sized modal that provides a good balance between content space and screen real estate. Perfect for forms and detailed content.</p>
        <div style={{ marginTop: '16px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>Additional Information</h4>
          <p style={{ margin: 0, color: '#6B7280' }}>Medium modals work well for most use cases and provide enough space for detailed content without overwhelming the interface.</p>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    size: 'md',
    title: 'Edit Profile',
    description: 'Update your profile information below.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Save Changes</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium modal (512px max-width) suitable for forms and moderate content.'
      }
    }
  }
};

export const LargeModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div>
        <p>This is a large modal that provides substantial space for complex content, detailed forms, or rich media. It's ideal when you need to display more information without losing readability.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>Left Column</h4>
            <p style={{ margin: 0, color: '#6B7280', fontSize: '14px' }}>Large modals can accommodate multi-column layouts and complex content structures.</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>Right Column</h4>
            <p style={{ margin: 0, color: '#6B7280', fontSize: '14px' }}>This extra space is perfect for detailed forms, data tables, or rich content.</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    size: 'lg',
    title: 'Advanced Settings',
    description: 'Configure advanced options and preferences.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Reset to Defaults</Button>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button hierarchy="secondary-gray">Cancel</Button>
          <Button hierarchy="primary">Apply Settings</Button>
        </div>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Large modal (768px max-width) for complex content and multi-column layouts.'
      }
    }
  }
};

export const ExtraLargeModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div>
        <p>This is an extra large modal that maximizes available space for the most complex interfaces. Perfect for dashboards, data visualization, or comprehensive forms.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Analytics</h4>
            <div style={{ padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
              <p style={{ margin: 0, fontSize: '14px', color: '#6B7280' }}>View detailed analytics and metrics for your data.</p>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Reports</h4>
            <div style={{ padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
              <p style={{ margin: 0, fontSize: '14px', color: '#6B7280' }}>Generate and customize detailed reports.</p>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif' }}>Export</h4>
            <div style={{ padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
              <p style={{ margin: 0, fontSize: '14px', color: '#6B7280' }}>Export data in various formats.</p>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    size: 'xl',
    title: 'Data Dashboard',
    description: 'Comprehensive view of your data and analytics.',
    footer: (
      <ModalFooter align="space-between">
        <Button hierarchy="secondary-gray">Help</Button>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button hierarchy="secondary-gray">Export All</Button>
          <Button hierarchy="primary">Save Dashboard</Button>
        </div>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large modal (1024px max-width) for complex dashboards and comprehensive interfaces.'
      }
    }
  }
};

export const FullScreenModal: Story = {
  render: (args) => (
    <ModalWrapper {...args} buttonText="Open Full Screen">
      <div>
        <p>This is a full-screen modal that takes up almost the entire viewport. Ideal for immersive experiences, image galleries, or complex applications that need maximum screen real estate.</p>
        <div style={{ marginTop: '32px' }}>
          <h3 style={{ margin: '0 0 16px 0', fontFamily: 'Inter, sans-serif' }}>Full Screen Experience</h3>
          <p style={{ marginBottom: '24px', color: '#6B7280' }}>
            Full-screen modals provide an immersive experience while still maintaining the modal context. 
            They're perfect for media viewers, complex forms, or mini-applications within your main application.
          </p>
          <div style={{ 
            height: '200px', 
            backgroundColor: '#F3F4F6', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6B7280',
            fontSize: '14px'
          }}>
            Placeholder for rich content or media
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    size: 'full',
    title: 'Image Gallery',
    description: 'Browse and manage your image collection.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Previous</Button>
        <Button hierarchy="secondary-gray">Next</Button>
        <Button hierarchy="primary">Select Image</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-screen modal that maximizes viewport usage for immersive experiences.'
      }
    }
  }
};

// Content variations
export const HeaderOnly: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
    </ModalWrapper>
  ),
  args: {
    title: 'Quick Message',
    description: 'This modal only has a header section with title and description.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with only header content - useful for simple messages or notifications.'
      }
    }
  }
};

export const ContentOnly: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <h2 style={{ margin: '0 0 16px 0', fontFamily: 'Inter, sans-serif' }}>Custom Content</h2>
        <p style={{ margin: '0 0 24px 0', color: '#6B7280' }}>
          This modal contains only content without a standard header or footer. 
          Perfect for custom layouts and creative designs.
        </p>
        <Button hierarchy="primary">Got it</Button>
      </div>
    </ModalWrapper>
  ),
  args: {
    showCloseButton: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with only content section - useful for custom layouts and designs.'
      }
    }
  }
};

export const WithoutCloseButton: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal doesn't have a close button in the header. Users must use the action buttons or press Escape to close it.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Important Notice',
    description: 'Please read this information carefully.',
    showCloseButton: false,
    footer: (
      <ModalFooter>
        <Button hierarchy="primary">I Understand</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without close button - forces users to interact with action buttons.'
      }
    }
  }
};

// Form example
export const FormModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>
            Name
          </label>
          <input 
            type="text" 
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #D1D5DB', 
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }} 
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>
            Email
          </label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #D1D5DB', 
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }} 
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>
            Message
          </label>
          <textarea 
            rows={4}
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #D1D5DB', 
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              resize: 'vertical'
            }} 
            placeholder="Enter your message"
          />
        </div>
      </form>
    </ModalWrapper>
  ),
  args: {
    title: 'Contact Form',
    description: 'Send us a message and we\'ll get back to you.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Send Message</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal containing a form - demonstrates practical usage for data collection.'
      }
    }
  }
};

// List example  
export const UserListModal: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div>
        <div style={{ marginBottom: '16px' }}>
          <input 
            type="text" 
            placeholder="Search users..." 
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #D1D5DB', 
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Emma Brown'].map((name, index) => (
            <div 
              key={index}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '12px',
                borderRadius: '6px',
                backgroundColor: '#F9FAFB',
                cursor: 'pointer'
              }}
            >
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  backgroundColor: '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>{name}</div>
                <div style={{ fontSize: '12px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>user@example.com</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    size: 'md',
    title: 'Select User',
    description: 'Choose a user from the list below.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Select User</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with a searchable user list - demonstrates practical list selection interface.'
      }
    }
  }
};

// Configuration options
export const NoBackdropClose: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal cannot be closed by clicking the backdrop. You must use the close button or action buttons.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Persistent Modal',
    description: 'This modal requires explicit action to close.',
    closeOnBackdropClick: false,
    footer: (
      <ModalFooter>
        <Button hierarchy="primary">Close Modal</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed by clicking the backdrop - useful for critical actions.'
      }
    }
  }
};

export const NoEscapeClose: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal cannot be closed using the Escape key. You must use the close button or action buttons.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Escape Disabled',
    description: 'The Escape key is disabled for this modal.',
    closeOnEscape: false,
    footer: (
      <ModalFooter>
        <Button hierarchy="primary">Close Modal</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed with Escape key - prevents accidental dismissal.'
      }
    }
  }
};

export const NoAnimation: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal appears instantly without any entrance animations. Useful for accessibility or performance considerations.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'No Animation',
    description: 'This modal has animations disabled.',
    disableAnimation: true,
    footer: (
      <ModalFooter>
        <Button hierarchy="primary">Close</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without entrance animations - respects reduced motion preferences.'
      }
    }
  }
};

// Mobile responsive example
export const MobileResponsive: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div>
        <p>This modal demonstrates responsive behavior across different screen sizes. Resize your browser window to see how it adapts.</p>
        <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif' }}>Responsive Features</h4>
          <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', color: '#6B7280' }}>
            <li>Full width on mobile devices</li>
            <li>Adjusted padding and spacing</li>
            <li>Stacked button layouts on small screens</li>
            <li>Optimized touch targets</li>
          </ul>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    size: 'lg',
    title: 'Responsive Modal',
    description: 'This modal adapts to different screen sizes automatically.',
    footer: (
      <ModalFooter>
        <Button hierarchy="secondary-gray">Secondary Action</Button>
        <Button hierarchy="primary">Primary Action</Button>
      </ModalFooter>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal demonstrating responsive behavior across mobile, tablet, and desktop.'
      }
    }
  }
};
