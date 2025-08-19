import type { Meta, StoryObj } from '@storybook/react';
import { ChatInterface } from './ChatInterface';
import { MessageProps } from './Message';
import { useState } from 'react';

const meta = {
  title: 'Components/ChatInterface',
  component: ChatInterface,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A complete chat interface component with message history, tabs, and message composition. Supports both inline and panel variants.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Chat title displayed in header',
      control: 'text',
    },
    variant: {
      description: 'Display variant',
      control: 'select',
      options: ['inline', 'panel'],
    },
    activeTab: {
      description: 'Currently active tab',
      control: 'select',
      options: ['messages', 'participants'],
    },
    participantCount: {
      description: 'Number of participants',
      control: 'number',
    },
    placeholder: {
      description: 'Message input placeholder text',
      control: 'text',
    },
    isLoading: {
      description: 'Show typing indicator',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ChatInterface>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleMessages: MessageProps[] = [
  {
    content: 'Thanks everyone! Almost there.',
    type: 'received',
    sender: {
      name: 'Orlando Diggs',
      avatar: 'https://ui-avatars.com/api/?name=Orlando+Diggs&size=40&background=3b82f6&color=ffffff',
      isOnline: true
    },
    timestamp: 'Thursday 10:16am'
  },
  {
    content: 'Hey team, I\'ve finished with the requirements doc!',
    type: 'received',
    sender: {
      name: 'Lana Steiner',
      avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff',
      isOnline: true
    },
    timestamp: 'Thursday 11:40am'
  },
  {
    content: '',
    type: 'received',
    variant: 'attachment',
    sender: {
      name: 'Lana Steiner',
      avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff',
      isOnline: true
    },
    timestamp: 'Thursday 11:40am',
    attachment: {
      name: 'Tech requirements.pdf',
      size: '1.2 MB',
      type: 'document'
    }
  },
  {
    content: 'Awesome! Thanks.',
    type: 'sent',
    sender: { name: 'You' },
    timestamp: 'Thursday 11:41am'
  },
  {
    content: 'Good timing — was just looking at this.',
    type: 'received',
    sender: {
      name: 'Demi Wilkinson',
      avatar: 'https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff',
      isOnline: true 
    },
    timestamp: 'Thursday 11:44am'
  },
  {
    content: 'Hey Olivia, can you please review the latest design when you can?',
    type: 'received',
    sender: {
      name: 'Phoenix Baker',
      avatar: 'https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff',
      isOnline: true
    },
    timestamp: 'Friday 2:20pm'
  },
  {
    content: 'Sure thing, I\'ll have a look today.',
    type: 'sent',
    sender: { name: 'You' },
    timestamp: 'Friday 2:20pm'
  }
];

const sampleMessagesWithReactions: MessageProps[] = [
  {
    content: 'Hey Olivia, can you please review the latest design when you can?',
    type: 'received',
    sender: {
      name: 'Phoenix Baker',
      avatar: 'https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff',
      isOnline: true
    },
    timestamp: 'Friday 2:20pm',
    showReactions: true,
    reactions: [
      { emoji: '❤️', count: 1, reacted: false },
      { emoji: '👍', count: 2, reacted: true }
    ]
  },
  {
    content: '',
    type: 'received',
    variant: 'attachment',
    sender: {
      name: 'Phoenix Baker',
      avatar: 'https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff',
      isOnline: true
    },
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Latest design screenshot.jpg',
      size: '1.2 MB',
      type: 'image'
    },
    showReactions: true,
    reactions: [
      { emoji: '❤️', count: 1, reacted: false },
      { emoji: '👍', count: 2, reacted: true }
    ]
  },
  {
    content: 'Sure thing, I\'ll have a look today.',
    type: 'sent',
    sender: { name: 'You' },
    timestamp: 'Friday 2:20pm',
    showReactions: true,
    reactions: [
      { emoji: '❤️', count: 1, reacted: false },
      { emoji: '👍', count: 2, reacted: true }
    ]
  },
  {
    content: '',
    type: 'sent',
    variant: 'attachment',
    sender: { name: 'You' },
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Tech design requirements.pdf',
      size: '200 KB',
      type: 'document'
    },
    showReactions: true,
    reactions: [
      { emoji: '❤️', count: 1, reacted: false },
      { emoji: '👍', count: 2, reacted: true }
    ]
  }
];

// Interactive wrapper for stories
const InteractiveChatInterface = (args: any) => {
  const [messages, setMessages] = useState<MessageProps[]>(args.messages || []);
  const [activeTab, setActiveTab] = useState(args.activeTab || 'messages');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message);
    
    const newMessage: MessageProps = {
      content: message,
      type: 'sent',
      sender: { name: 'You' },
      timestamp: new Date().toLocaleString('en-US', { 
        weekday: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate typing response
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const responses = [
        'Thanks for the message!',
        'Got it, will take a look.',
        'Sounds good to me.',
        'Perfect, thanks for sharing.'
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      
      const responseMessage: MessageProps = {
        content: response,
        type: 'received',
        sender: { 
          name: 'Phoenix Baker',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
          isOnline: true 
        },
        timestamp: new Date().toLocaleString('en-US', { 
          weekday: 'short',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 2000);
  };

  const handleTabChange = (tab: 'messages' | 'participants') => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
  };

  const handleClose = () => {
    console.log('Chat closed');
  };

  return (
    <ChatInterface
      {...args}
      messages={messages}
      activeTab={activeTab}
      isLoading={isLoading}
      onSendMessage={handleSendMessage}
      onTabChange={handleTabChange}
      onClose={handleClose}
    />
  );
};

// Basic Stories
export const InlineChat: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'Team Chat',
    messages: sampleMessages,
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 4,
    placeholder: 'Type a message...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline chat interface suitable for embedding in pages.'
      }
    }
  }
};

export const PanelChat: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'Group chat',
    messages: sampleMessages,
    variant: 'panel',
    activeTab: 'messages',
    participantCount: 2,
    placeholder: 'Message',
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel chat interface designed as a slide-out sidebar.'
      }
    }
  }
};

export const WithReactions: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'Design Team',
    messages: sampleMessagesWithReactions,
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 3,
    placeholder: 'Type a message...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface showing messages with emoji reactions.'
      }
    }
  }
};

export const ParticipantsTab: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'Project Discussion',
    messages: sampleMessages,
    variant: 'panel',
    activeTab: 'participants',
    participantCount: 5,
    placeholder: 'Message',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with participants tab active.'
      }
    }
  }
};

export const EmptyChat: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'New Chat',
    messages: [],
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 2,
    placeholder: 'Start the conversation...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty chat interface ready for the first message.'
      }
    }
  }
};

export const LoadingChat: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'Support Chat',
    messages: [
      {
        content: 'Hello, I need help with my account.',
        type: 'sent',
        sender: { name: 'You' },
        timestamp: '2:15pm'
      }
    ],
    variant: 'inline',
    activeTab: 'messages',
    isLoading: true,
    placeholder: 'Type a message...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface showing typing indicator while someone is responding.'
      }
    }
  }
};

export const LongConversation: Story = {
  render: InteractiveChatInterface,
  args: {
    title: 'Team Standup',
    messages: [
      ...sampleMessages,
      {
        content: 'How are we doing on the timeline?',
        type: 'received',
        sender: {
          name: 'Sarah Johnson',
          avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=40&background=ec4899&color=ffffff',
          isOnline: true
        },
        timestamp: 'Friday 3:15pm'
      },
      {
        content: 'We\'re on track. Should have everything ready by Monday.',
        type: 'sent',
        sender: { name: 'You' },
        timestamp: 'Friday 3:16pm'
      },
      {
        content: 'Excellent! Let me know if you need any help.',
        type: 'received',
        sender: {
          name: 'Sarah Johnson',
          avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=40&background=ec4899&color=ffffff',
          isOnline: true
        },
        timestamp: 'Friday 3:17pm'
      },
      {
        content: 'Will do, thanks!',
        type: 'sent',
        sender: { name: 'You' },
        timestamp: 'Friday 3:17pm'
      }
    ],
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 6,
    placeholder: 'Type a message...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with a longer conversation showing scrolling behavior.'
      }
    }
  }
};

// Comparison Story
export const VariantComparison: Story = {
  render: () => {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '20px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Inline Variant</h3>
          <InteractiveChatInterface
            title="Team Chat"
            messages={sampleMessages.slice(0, 4)}
            variant="inline"
            activeTab="messages"
            participantCount={4}
            placeholder="Type a message..."
          />
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Panel Variant</h3>
          <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
            <InteractiveChatInterface
              title="Group chat"
              messages={sampleMessages.slice(0, 4)}
              variant="panel"
              activeTab="messages"
              participantCount={2}
              placeholder="Message"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of inline and panel chat variants.'
      }
    }
  }
};

// Feature Showcase
export const FeatureShowcase: Story = {
  render: () => {
    const showcaseMessages: MessageProps[] = [
      {
        content: 'Welcome to our chat! 👋',
        type: 'received',
        sender: { 
          name: 'Bot Assistant', 
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          isOnline: true 
        },
        timestamp: 'Today 10:00am'
      },
      {
        content: 'Here are some features you can try:',
        type: 'received',
        sender: { 
          name: 'Bot Assistant', 
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          isOnline: true 
        },
        timestamp: 'Today 10:00am'
      },
      {
        content: '',
        type: 'received',
        variant: 'attachment',
        sender: { 
          name: 'Bot Assistant', 
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          isOnline: true 
        },
        timestamp: 'Today 10:01am',
        attachment: {
          name: 'Feature_Guide.pdf',
          size: '500 KB',
          type: 'document'
        },
        showReactions: true,
        reactions: [
          { emoji: '📖', count: 3, reacted: true },
          { emoji: '👍', count: 5, reacted: false }
        ]
      },
      {
        content: 'Thanks! This looks comprehensive.',
        type: 'sent',
        sender: { name: 'You' },
        timestamp: 'Today 10:02am',
        showReactions: true,
        reactions: [
          { emoji: '❤️', count: 1, reacted: false }
        ]
      }
    ];

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Feature Showcase</h3>
        <InteractiveChatInterface
          title="Feature Demo"
          messages={showcaseMessages}
          variant="inline"
          activeTab="messages"
          participantCount={2}
          placeholder="Try sending a message..."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all chat features including attachments, reactions, and interactive messaging.'
      }
    }
  }
};
