import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

// Close icon SVG component
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Modal component interface
export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback to close the modal */
  onClose: () => void;
  /** Modal size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Modal title */
  title?: string;
  /** Modal description/subtitle */
  description?: string;
  /** Modal content */
  children?: React.ReactNode;
  /** Show close button in header */
  showCloseButton?: boolean;
  /** Close modal when clicking backdrop */
  closeOnBackdropClick?: boolean;
  /** Close modal when pressing Escape key */
  closeOnEscape?: boolean;
  /** Footer content (typically buttons) */
  footer?: React.ReactNode;
  /** Custom header content (overrides title/description) */
  headerContent?: React.ReactNode;
  /** Disable modal animations */
  disableAnimation?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** ARIA label for the modal */
  'aria-label'?: string;
  /** ARIA labelledby for the modal */
  'aria-labelledby'?: string;
  /** ARIA describedby for the modal */
  'aria-describedby'?: string;
  /** Callback when modal opens */
  onOpen?: () => void;
  /** Callback after modal animation completes */
  onAnimationComplete?: () => void;
  /** Z-index for the modal */
  zIndex?: number;
  /** Portal target for modal rendering */
  portalTarget?: HTMLElement | null;
  /** Prevent body scroll when modal is open */
  preventBodyScroll?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = 'md',
  title,
  description,
  children,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  footer,
  headerContent,
  disableAnimation = false,
  className = '',
  style,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  onOpen,
  onAnimationComplete,
  zIndex = 1000,
  portalTarget,
  preventBodyScroll = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Handle escape key press
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape' && isOpen) {
      onClose();
    }
  }, [closeOnEscape, isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((event: React.MouseEvent) => {
    if (closeOnBackdropClick && event.target === backdropRef.current) {
      onClose();
    }
  }, [closeOnBackdropClick, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Store previous focus
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus modal
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 100);

      // Call onOpen callback
      onOpen?.();
    } else {
      // Restore previous focus
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen, onOpen]);

  // Keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen, handleEscapeKey]);

  // Body scroll management
  useEffect(() => {
    if (preventBodyScroll && isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [preventBodyScroll, isOpen]);

  // Focus trap
  const handleTabKey = useCallback((event: React.KeyboardEvent) => {
    if (event.key !== 'Tab' || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }, []);

  // Don't render if not open
  if (!isOpen) return null;

  const modalClasses = [
    'modal',
    `modal--${size}`,
    disableAnimation && 'modal--no-animation',
    className
  ].filter(Boolean).join(' ');

  const modalContent = (
    <div 
      className="modal-backdrop"
      ref={backdropRef}
      onClick={handleBackdropClick}
      style={{ zIndex }}
    >
      <div
        className={modalClasses}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
        style={style}
        onKeyDown={handleTabKey}
        onAnimationEnd={onAnimationComplete}
      >
        {/* Header */}
        {(title || description || headerContent || showCloseButton) && (
          <div className="modal__header">
            {headerContent || (
              <div className="modal__header-content">
                {title && (
                  <h2 
                    className="modal__title" 
                    id={ariaLabelledBy || 'modal-title'}
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p 
                    className="modal__description"
                    id={ariaDescribedBy || 'modal-description'}
                  >
                    {description}
                  </p>
                )}
              </div>
            )}
            
            {showCloseButton && (
              <button
                className="modal__close-button"
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        {children && (
          <div className="modal__content">
            {children}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Portal rendering
  if (portalTarget) {
    return ReactDOM.createPortal(modalContent, portalTarget);
  }

  return modalContent;
};

// Export additional components for common use cases
export const ModalHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`modal__header-content ${className}`}>
    {children}
  </div>
);

export const ModalTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <h2 className={`modal__title ${className}`} id={id}>
    {children}
  </h2>
);

export const ModalDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <p className={`modal__description ${className}`} id={id}>
    {children}
  </p>
);

export const ModalContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`modal__content ${className}`}>
    {children}
  </div>
);

export const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'space-between';
}> = ({ children, className = '', align = 'right' }) => (
  <div className={`modal__footer modal__footer--${align} ${className}`}>
    {children}
  </div>
);

export default Modal;
