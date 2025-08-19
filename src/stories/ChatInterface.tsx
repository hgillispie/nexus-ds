import React, { useState, useRef, useEffect } from 'react';
import { Message, MessageProps } from './Message';
import './chatinterface.css';

export interface ChatInterfaceProps {
  /** Chat title */
  title?: string;
  /** List of messages */
  messages: MessageProps[];
  /** Current user info for sent messages */
  currentUser?: {
    name: string;
    avatar?: string;
  };
  /** Show participants count */
  participantCount?: number;
  /** Active tab */
  activeTab?: 'messages' | 'participants';
  /** Placeholder text for message input */
  placeholder?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Event handlers */
  onSendMessage?: (message: string) => void;
  onTabChange?: (tab: 'messages' | 'participants') => void;
  onClose?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Show as slide-out panel */
  variant?: 'inline' | 'panel';
}

interface ChatTabsProps {
  activeTab: 'messages' | 'participants';
  participantCount?: number;
  onTabChange: (tab: 'messages' | 'participants') => void;
}

interface MessageInputProps {
  placeholder: string;
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

interface DateDividerProps {
  date: string;
}

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_send)">
      <path 
        d="M18.3332 1.66663L9.1665 10.8333M18.3332 1.66663L12.4998 18.3333L9.1665 10.8333M18.3332 1.66663L1.6665 7.49996L9.1665 10.8333" 
        stroke="currentColor" 
        strokeWidth="1.67" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_send">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M15 5L5 15M5 5L15 15" 
      stroke="currentColor" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ChatTabs: React.FC<ChatTabsProps> = ({ activeTab, participantCount, onTabChange }) => {
  return (
    <div className="chat-tabs">
      <div className="chat-tabs__container">
        <button
          className={`chat-tabs__tab ${activeTab === 'messages' ? 'chat-tabs__tab--active' : ''}`}
          onClick={() => onTabChange('messages')}
        >
          Messages
        </button>
        <button
          className={`chat-tabs__tab ${activeTab === 'participants' ? 'chat-tabs__tab--active' : ''}`}
          onClick={() => onTabChange('participants')}
        >
          Participants
          {participantCount && (
            <span className="chat-tabs__badge">{participantCount}</span>
          )}
        </button>
      </div>
    </div>
  );
};

const MessageInput: React.FC<MessageInputProps> = ({ placeholder, onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <div className="message-input__field">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className="message-input__input"
        />
      </div>
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="message-input__send"
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </form>
  );
};

const DateDivider: React.FC<DateDividerProps> = ({ date }) => {
  return (
    <div className="date-divider">
      <div className="date-divider__line"></div>
      <div className="date-divider__text">{date}</div>
      <div className="date-divider__line"></div>
    </div>
  );
};

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  title = 'Group chat',
  messages = [],
  currentUser,
  participantCount,
  activeTab = 'messages',
  placeholder = 'Message',
  isLoading = false,
  onSendMessage,
  onTabChange,
  onClose,
  className = '',
  variant = 'inline',
  ...props
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    if (onSendMessage) {
      onSendMessage(message);
    }
  };

  const handleTabChange = (tab: 'messages' | 'participants') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const containerClasses = [
    'chat-interface',
    `chat-interface--${variant}`,
    className
  ].filter(Boolean).join(' ');

  // Group messages by date for dividers
  const groupedMessages = messages.reduce((groups: { date: string; messages: MessageProps[] }[], message) => {
    const messageDate = new Date(message.timestamp).toDateString();
    const lastGroup = groups[groups.length - 1];
    
    if (lastGroup && lastGroup.date === messageDate) {
      lastGroup.messages.push(message);
    } else {
      groups.push({ date: messageDate, messages: [message] });
    }
    
    return groups;
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  return (
    <div className={containerClasses} {...props}>
      {variant === 'panel' && (
        <div className="chat-interface__panel">
          <div className="chat-interface__header">
            <div className="chat-interface__title-section">
              <h2 className="chat-interface__title">{title}</h2>
              {onClose && (
                <button 
                  className="chat-interface__close"
                  onClick={onClose}
                  aria-label="Close chat"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
            
            <ChatTabs
              activeTab={activeTab}
              participantCount={participantCount}
              onTabChange={handleTabChange}
            />
          </div>

          <div className="chat-interface__content">
            {activeTab === 'messages' ? (
              <>
                <div className="chat-interface__messages" ref={messagesContainerRef}>
                  {groupedMessages.map((group, groupIndex) => (
                    <div key={groupIndex} className="chat-interface__message-group">
                      {groupIndex > 0 && <DateDivider date={formatDate(group.date)} />}
                      
                      {group.messages.map((message, messageIndex) => (
                        <Message
                          key={`${groupIndex}-${messageIndex}`}
                          {...message}
                        />
                      ))}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <Message
                      content=""
                      type="received"
                      variant="typing"
                      sender={{ name: 'Someone', isOnline: true }}
                      timestamp=""
                    />
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                <div className="chat-interface__footer">
                  <MessageInput
                    placeholder={placeholder}
                    onSendMessage={handleSendMessage}
                    disabled={isLoading}
                  />
                </div>
              </>
            ) : (
              <div className="chat-interface__participants">
                <p>Participants view would go here</p>
              </div>
            )}
          </div>
        </div>
      )}

      {variant === 'inline' && (
        <div className="chat-interface__inline">
          <div className="chat-interface__messages" ref={messagesContainerRef}>
            {groupedMessages.map((group, groupIndex) => (
              <div key={groupIndex} className="chat-interface__message-group">
                {groupIndex > 0 && <DateDivider date={formatDate(group.date)} />}
                
                {group.messages.map((message, messageIndex) => (
                  <Message
                    key={`${groupIndex}-${messageIndex}`}
                    {...message}
                  />
                ))}
              </div>
            ))}
            
            {isLoading && (
              <Message
                content=""
                type="received"
                variant="typing"
                sender={{ name: 'Someone', isOnline: true }}
                timestamp=""
              />
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-interface__footer">
            <MessageInput
              placeholder={placeholder}
              onSendMessage={handleSendMessage}
              disabled={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};
