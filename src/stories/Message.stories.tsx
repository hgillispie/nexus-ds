import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';
import { useState } from 'react';

const meta = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive message component for chat interfaces supporting text messages, attachments, reactions, and typing indicators.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'Message content text',
      control: 'text',
    },
    type: {
      description: 'Message type (sent by user or received)',
      control: 'select',
      options: ['sent', 'received'],
    },
    variant: {
      description: 'Message variant',
      control: 'select',
      options: ['text', 'attachment', 'typing'],
    },
    sender: {
      description: 'Sender information',
      control: 'object',
    },
    timestamp: {
      description: 'Message timestamp',
      control: 'text',
    },
    showReactions: {
      description: 'Show message reactions',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleSender = {
  name: 'Phoenix Baker',
  avatar: 'https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff',
  isOnline: true
};

const sampleReactions = [
  { emoji: '❤️', count: 2, reacted: true },
  { emoji: '👍', count: 1, reacted: false }
];

// Interactive wrapper for stories
const InteractiveMessage = (args: any) => {
  const [reactions, setReactions] = useState(args.reactions || []);
  
  const handleReactionClick = (emoji: string) => {
    console.log('Reaction clicked:', emoji);
    // Toggle reaction logic would go here
  };

  return (
    <div style={{ width: '400px', padding: '20px' }}>
      <Message 
        {...args} 
        reactions={reactions}
        onReactionClick={handleReactionClick}
        onAttachmentClick={() => console.log('Attachment clicked')}
      />
    </div>
  );
};

// Basic Stories
export const ReceivedMessage: Story = {
  render: InteractiveMessage,
  args: {
    content: 'Hey Olivia, can you please review the latest design when you can?',
    type: 'received',
    variant: 'text',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    showReactions: false,
  },
};

export const SentMessage: Story = {
  render: InteractiveMessage,
  args: {
    content: 'Sure thing, I\'ll have a look today.',
    type: 'sent',
    variant: 'text',
    sender: { name: 'You' },
    timestamp: 'Friday 2:20pm',
    showReactions: false,
  },
};

export const ReceivedWithReactions: Story = {
  render: InteractiveMessage,
  args: {
    content: 'Hey Olivia, can you please review the latest design when you can?',
    type: 'received',
    variant: 'text',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    showReactions: true,
    reactions: sampleReactions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with emoji reactions and counts.'
      }
    }
  }
};

export const SentWithReactions: Story = {
  render: InteractiveMessage,
  args: {
    content: 'Sure thing, I\'ll have a look today.',
    type: 'sent',
    variant: 'text',
    sender: { name: 'You' },
    timestamp: 'Friday 2:20pm',
    showReactions: true,
    reactions: sampleReactions,
  },
};

export const ReceivedImageAttachment: Story = {
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'received',
    variant: 'attachment',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Latest design screenshot.jpg',
      size: '1.2 MB',
      type: 'image',
      url: '#'
    },
    showReactions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with an image attachment.'
      }
    }
  }
};

export const SentDocumentAttachment: Story = {
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'sent',
    variant: 'attachment',
    sender: { name: 'You' },
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Tech design requirements.pdf',
      size: '200 KB',
      type: 'document',
      url: '#'
    },
    showReactions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with a document attachment.'
      }
    }
  }
};

export const AttachmentWithReactions: Story = {
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'received',
    variant: 'attachment',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Latest design screenshot.jpg',
      size: '1.2 MB',
      type: 'image',
      url: '#'
    },
    showReactions: true,
    reactions: sampleReactions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Attachment message with reactions.'
      }
    }
  }
};

export const TypingIndicator: Story = {
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'received',
    variant: 'typing',
    sender: sampleSender,
    timestamp: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Typing indicator shown when someone is writing a message.'
      }
    }
  }
};

export const LongMessage: Story = {
  render: InteractiveMessage,
  args: {
    content: 'This is a much longer message that demonstrates how the message component handles text wrapping and maintains readability across different lengths. It should wrap nicely within the bubble and maintain proper spacing.',
    type: 'received',
    variant: 'text',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    showReactions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how long messages are handled with text wrapping.'
      }
    }
  }
};

export const WithoutAvatar: Story = {
  render: InteractiveMessage,
  args: {
    content: 'Message from user without avatar image',
    type: 'received',
    variant: 'text',
    sender: { name: 'John Doe', isOnline: true },
    timestamp: 'Friday 2:20pm',
    showReactions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Message from a user without an avatar image, showing placeholder initial.'
      }
    }
  }
};

// All Variants Story
export const AllVariants: Story = {
  render: () => {
    const handleReactionClick = (emoji: string) => {
      console.log('Reaction clicked:', emoji);
    };

    const handleAttachmentClick = () => {
      console.log('Attachment clicked');
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px', maxWidth: '600px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Text Messages</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Message
              content="Hey Olivia, can you please review the latest design when you can?"
              type="received"
              variant="text"
              sender={sampleSender}
              timestamp="Friday 2:20pm"
              showReactions={false}
            />
            <Message
              content="Sure thing, I'll have a look today."
              type="sent"
              variant="text"
              sender={{ name: 'You' }}
              timestamp="Friday 2:20pm"
              showReactions={false}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Messages with Reactions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Message
              content="Hey Olivia, can you please review the latest design when you can?"
              type="received"
              variant="text"
              sender={sampleSender}
              timestamp="Friday 2:20pm"
              showReactions={true}
              reactions={sampleReactions}
              onReactionClick={handleReactionClick}
            />
            <Message
              content="Sure thing, I'll have a look today."
              type="sent"
              variant="text"
              sender={{ name: 'You' }}
              timestamp="Friday 2:20pm"
              showReactions={true}
              reactions={sampleReactions}
              onReactionClick={handleReactionClick}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Attachments</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Message
              content=""
              type="received"
              variant="attachment"
              sender={sampleSender}
              timestamp="Friday 2:20pm"
              attachment={{
                name: 'Latest design screenshot.jpg',
                size: '1.2 MB',
                type: 'image',
                url: '#'
              }}
              showReactions={true}
              reactions={sampleReactions}
              onAttachmentClick={handleAttachmentClick}
              onReactionClick={handleReactionClick}
            />
            <Message
              content=""
              type="sent"
              variant="attachment"
              sender={{ name: 'You' }}
              timestamp="Friday 2:20pm"
              attachment={{
                name: 'Tech design requirements.pdf',
                size: '200 KB',
                type: 'document',
                url: '#'
              }}
              showReactions={true}
              reactions={sampleReactions}
              onAttachmentClick={handleAttachmentClick}
              onReactionClick={handleReactionClick}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Typing Indicator</h3>
          <Message
            content=""
            type="received"
            variant="typing"
            sender={sampleSender}
            timestamp=""
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all message variants and states.'
      }
    }
  }
};

// Conversation Example
export const ConversationExample: Story = {
  render: () => {
    const conversation = [
      {
        content: 'Hey team, I\'ve finished with the requirements doc!',
        type: 'received' as const,
        sender: { name: 'Lana Steiner', avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff', isOnline: true },
        timestamp: 'Thursday 11:40am'
      },
      {
        content: '',
        type: 'received' as const,
        variant: 'attachment' as const,
        sender: { name: 'Lana Steiner', avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff', isOnline: true },
        timestamp: 'Thursday 11:40am',
        attachment: {
          name: 'Tech requirements.pdf',
          size: '1.2 MB',
          type: 'document' as const
        }
      },
      {
        content: 'Awesome! Thanks.',
        type: 'sent' as const,
        sender: { name: 'You' },
        timestamp: 'Thursday 11:41am'
      },
      {
        content: 'Good timing — was just looking at this.',
        type: 'received' as const,
        sender: { name: 'Demi Wilkinson', avatar: 'https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff', isOnline: true },
        timestamp: 'Thursday 11:44am'
      }
    ];

    return (
      <div style={{ maxWidth: '500px', padding: '20px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '16px', fontWeight: '600' }}>Conversation Example</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {conversation.map((message, index) => (
            <Message
              key={index}
              {...message}
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how messages work together in a conversation flow.'
      }
    }
  }
};
