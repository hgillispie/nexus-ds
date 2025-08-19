import React from 'react';
import './message.css';

export interface MessageProps {
  /** Message content */
  content: string;
  /** Message type */
  type: 'sent' | 'received';
  /** Message variant */
  variant?: 'text' | 'attachment' | 'typing';
  /** Sender information */
  sender: {
    name: string;
    avatar?: string;
    isOnline?: boolean;
  };
  /** Timestamp */
  timestamp: string;
  /** Attachment information (for attachment variant) */
  attachment?: {
    name: string;
    size: string;
    type: 'image' | 'document';
    url?: string;
  };
  /** Reactions on the message */
  reactions?: MessageReaction[];
  /** Show reactions */
  showReactions?: boolean;
  /** Event handlers */
  onReactionClick?: (emoji: string) => void;
  onAttachmentClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

export interface MessageReaction {
  emoji: string;
  count?: number;
  reacted?: boolean;
}

interface MessageReactionProps {
  emoji: string;
  count?: number;
  reacted?: boolean;
  onClick?: () => void;
}

interface TypingIndicatorProps {
  sender: {
    name: string;
    avatar?: string;
  };
}

interface FileIconProps {
  type: 'image' | 'document';
}

const FileIcon: React.FC<FileIconProps> = ({ type }) => {
  if (type === 'image') {
    return (
      <div className="message-file-icon message-file-icon--image">
        <div className="message-file-icon__background">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14ZM3.33333 14L10.6667 6.66667L14 10M6.66667 5.66667C6.66667 6.21895 6.21895 6.66667 5.66667 6.66667C5.11438 6.66667 4.66667 6.21895 4.66667 5.66667C4.66667 5.11438 5.11438 4.66667 5.66667 4.66667C6.21895 4.66667 6.66667 5.11438 6.66667 5.66667Z" 
              stroke="#0F172A" 
              strokeWidth="1.33333" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="message-file-icon message-file-icon--document">
      <div className="message-file-icon__background">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M8.66675 1.33337H4.00008C3.64646 1.33337 3.30732 1.47385 3.05727 1.7239C2.80722 1.97395 2.66675 2.31309 2.66675 2.66671V13.3334C2.66675 13.687 2.80722 14.0261 3.05727 14.2762C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2762C13.1929 14.0261 13.3334 13.687 13.3334 13.3334V6.00004M8.66675 1.33337L13.3334 6.00004M8.66675 1.33337V6.00004H13.3334" 
            stroke="#0F172A" 
            strokeWidth="1.33333" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const MessageReactionComponent: React.FC<MessageReactionProps> = ({
  emoji,
  count,
  reacted = false,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`message-reaction ${reacted ? 'message-reaction--reacted' : ''}`}
      onClick={handleClick}
      aria-label={`React with ${emoji}${count ? ` (${count} reactions)` : ''}`}
    >
      <span className="message-reaction__emoji">{emoji}</span>
      {count && <span className="message-reaction__count">{count}</span>}
    </button>
  );
};

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ sender }) => {
  return (
    <div className="message message--received message--typing">
      <div className="message__avatar">
        {sender.avatar ? (
          <img src={sender.avatar} alt={sender.name} className="message__avatar-image" />
        ) : (
          <div className="message__avatar-placeholder">
            {sender.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="message__content">
        <div className="message__sender">{sender.name}</div>
        <div className="message__bubble message__bubble--typing">
          <div className="typing-indicator">
            <div className="typing-indicator__dot"></div>
            <div className="typing-indicator__dot"></div>
            <div className="typing-indicator__dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Message: React.FC<MessageProps> = ({
  content,
  type,
  variant = 'text',
  sender,
  timestamp,
  attachment,
  reactions = [],
  showReactions = false,
  onReactionClick,
  onAttachmentClick,
  className = '',
  ...props
}) => {
  if (variant === 'typing') {
    return <TypingIndicator sender={sender} />;
  }

  const messageClasses = [
    'message',
    `message--${type}`,
    `message--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const handleAttachmentClick = () => {
    if (onAttachmentClick) {
      onAttachmentClick();
    }
  };

  const handleReactionClick = (emoji: string) => {
    if (onReactionClick) {
      onReactionClick(emoji);
    }
  };

  const renderMessageContent = () => {
    if (variant === 'attachment' && attachment) {
      return (
        <div className="message__attachment" onClick={handleAttachmentClick}>
          <FileIcon type={attachment.type} />
          <div className="message__attachment-info">
            <div className="message__attachment-name">{attachment.name}</div>
            <div className="message__attachment-size">{attachment.size}</div>
          </div>
        </div>
      );
    }

    return <div className="message__text">{content}</div>;
  };

  return (
    <div className={messageClasses} {...props}>
      {type === 'received' && (
        <div className="message__avatar">
          {sender.avatar ? (
            <img src={sender.avatar} alt={sender.name} className="message__avatar-image" />
          ) : (
            <div className="message__avatar-placeholder">
              {sender.name.charAt(0).toUpperCase()}
            </div>
          )}
          {sender.isOnline && <div className="message__avatar-status"></div>}
        </div>
      )}
      
      <div className="message__content">
        <div className="message__header">
          <div className="message__sender">{type === 'sent' ? 'You' : sender.name}</div>
          <div className="message__timestamp">{timestamp}</div>
        </div>
        
        <div className={`message__bubble message__bubble--${type} message__bubble--${variant}`}>
          {renderMessageContent()}
        </div>
        
        {showReactions && reactions.length > 0 && (
          <div className="message__reactions">
            {reactions.map((reaction, index) => (
              <MessageReactionComponent
                key={index}
                emoji={reaction.emoji}
                count={reaction.count}
                reacted={reaction.reacted}
                onClick={() => handleReactionClick(reaction.emoji)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { MessageReactionComponent as MessageReaction, TypingIndicator };
