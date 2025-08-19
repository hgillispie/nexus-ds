import React from 'react';
import './pagination.css';

export interface PaginationProps {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Type of pagination layout */
  type?: 'page-default' | 'page-minimal' | 'card-default' | 'card-minimal' | 'card-button-group' | 'dots' | 'lines';
  /** Shape of page number buttons */
  shape?: 'square' | 'circle';
  /** Responsive breakpoint */
  breakpoint?: 'desktop' | 'mobile';
  /** Alignment for certain types */
  alignment?: 'left' | 'center' | 'right';
  /** Show Previous/Next buttons */
  showNavigation?: boolean;
  /** Show page numbers */
  showPageNumbers?: boolean;
  /** Show page info text (e.g., "Page 1 of 10") */
  showPageInfo?: boolean;
  /** Maximum number of page buttons to show */
  maxPageButtons?: number;
  /** Custom labels */
  labels?: {
    previous?: string;
    next?: string;
    pageInfo?: string; // Template: "Page {current} of {total}"
  };
  /** Event handlers */
  onPageChange?: (page: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Pagination dots configuration */
  dotsConfig?: {
    size?: 'md' | 'lg';
    color?: 'primary-light' | 'primary-dark' | 'gray-light' | 'gray-dark';
    framed?: boolean;
  };
}

interface PaginationButtonProps {
  page: number;
  isActive?: boolean;
  isEllipsis?: boolean;
  shape?: 'square' | 'circle';
  onClick?: (page: number) => void;
  disabled?: boolean;
}

interface NavigationButtonProps {
  direction: 'previous' | 'next';
  type?: 'link' | 'secondary' | 'tertiary' | 'icon-only';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M15.8333 10H4.16663M4.16663 10L9.99996 15.8334M4.16663 10L9.99996 4.16669" 
      stroke="currentColor" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PaginationDotsProps {
  currentPage: number;
  totalPages: number;
  size?: 'md' | 'lg';
  color?: 'primary-light' | 'primary-dark' | 'gray-light' | 'gray-dark';
  framed?: boolean;
  style?: 'dot' | 'line';
  onPageChange?: (page: number) => void;
  disabled?: boolean;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  currentPage,
  totalPages,
  size = 'md',
  color = 'primary-light',
  framed = false,
  style = 'dot',
  onPageChange,
  disabled = false
}) => {
  const handleDotClick = (page: number) => {
    if (!disabled && onPageChange && page !== currentPage) {
      onPageChange(page);
    }
  };

  const containerClasses = [
    'pagination-dots',
    `pagination-dots--${size}`,
    `pagination-dots--${color}`,
    `pagination-dots--${style}`,
    framed ? 'pagination-dots--framed' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} role="tablist" aria-label="Pagination dots">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            className={`pagination-dot ${isActive ? 'pagination-dot--active' : ''}`}
            onClick={() => handleDotClick(page)}
            disabled={disabled}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to page ${page}`}
          />
        );
      })}
    </div>
  );
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  isActive = false,
  isEllipsis = false,
  shape = 'square',
  onClick,
  disabled = false
}) => {
  const handleClick = () => {
    if (!disabled && !isEllipsis && onClick) {
      onClick(page);
    }
  };

  return (
    <button
      className={`pagination-number ${shape === 'circle' ? 'pagination-number--circle' : 'pagination-number--square'} ${
        isActive ? 'pagination-number--active' : ''
      } ${isEllipsis ? 'pagination-number--ellipsis' : ''}`}
      onClick={handleClick}
      disabled={disabled || isEllipsis}
      aria-current={isActive ? 'page' : undefined}
      aria-label={isEllipsis ? 'More pages' : `Page ${page}`}
    >
      {isEllipsis ? '...' : page}
    </button>
  );
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  type = 'link',
  disabled = false,
  onClick,
  children
}) => {
  const icon = direction === 'previous' ? <ArrowLeftIcon /> : <ArrowRightIcon />;
  const label = direction === 'previous' ? 'Previous' : 'Next';

  return (
    <button
      className={`pagination-nav pagination-nav--${direction} pagination-nav--${type}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Go to ${direction} page`}
    >
      {type === 'icon-only' ? (
        icon
      ) : direction === 'previous' ? (
        <>
          {icon}
          <span>{children || label}</span>
        </>
      ) : (
        <>
          <span>{children || label}</span>
          {icon}
        </>
      )}
    </button>
  );
};

const ButtonGroup: React.FC<{
  currentPage: number;
  totalPages: number;
  maxPageButtons: number;
  onPageChange?: (page: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  disabled?: boolean;
}> = ({ currentPage, totalPages, maxPageButtons, onPageChange, onPrevious, onNext, disabled }) => {
  const pages = generatePageNumbers(currentPage, totalPages, maxPageButtons);

  return (
    <div className="pagination-button-group">
      <button
        className="pagination-button-group__button pagination-button-group__button--previous"
        onClick={onPrevious}
        disabled={disabled || currentPage <= 1}
        aria-label="Go to previous page"
      >
        <ArrowLeftIcon />
        <span>Previous</span>
      </button>
      
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="pagination-button-group__divider" />}
          <button
            className={`pagination-button-group__button pagination-button-group__button--page ${
              page === currentPage ? 'pagination-button-group__button--active' : ''
            }`}
            onClick={() => onPageChange && onPageChange(page)}
            disabled={disabled || typeof page !== 'number'}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={typeof page === 'number' ? `Page ${page}` : 'More pages'}
          >
            {typeof page === 'number' ? page : '...'}
          </button>
        </React.Fragment>
      ))}
      
      <div className="pagination-button-group__divider" />
      <button
        className="pagination-button-group__button pagination-button-group__button--next"
        onClick={onNext}
        disabled={disabled || currentPage >= totalPages}
        aria-label="Go to next page"
      >
        <span>Next</span>
        <ArrowRightIcon />
      </button>
    </div>
  );
};

const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxButtons: number
): (number | string)[] => {
  if (totalPages <= maxButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];
  const halfMax = Math.floor(maxButtons / 2);

  // Always show first page
  pages.push(1);

  if (currentPage <= halfMax + 2) {
    // Show pages from start
    for (let i = 2; i <= Math.min(maxButtons - 1, totalPages - 1); i++) {
      pages.push(i);
    }
    if (totalPages > maxButtons) {
      pages.push('...');
    }
  } else if (currentPage >= totalPages - halfMax - 1) {
    // Show pages from end
    if (totalPages > maxButtons) {
      pages.push('...');
    }
    for (let i = Math.max(totalPages - maxButtons + 2, 2); i <= totalPages - 1; i++) {
      pages.push(i);
    }
  } else {
    // Show pages around current
    pages.push('...');
    for (let i = currentPage - halfMax + 1; i <= currentPage + halfMax - 1; i++) {
      pages.push(i);
    }
    pages.push('...');
  }

  // Always show last page (if not already included)
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  type = 'page-default',
  shape = 'square',
  breakpoint = 'desktop',
  alignment = 'center',
  showNavigation = true,
  showPageNumbers = true,
  showPageInfo = false,
  maxPageButtons = 7,
  labels = {},
  onPageChange,
  onPrevious,
  onNext,
  className = '',
  disabled = false,
  dotsConfig = {
    size: 'md',
    color: 'primary-light',
    framed: false
  },
  ...props
}) => {
  const {
    previous = 'Previous',
    next = 'Next',
    pageInfo = `Page ${currentPage} of ${totalPages}`
  } = labels;

  const handlePageChange = (page: number) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      if (onPrevious) {
        onPrevious();
      } else if (onPageChange) {
        onPageChange(currentPage - 1);
      }
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      if (onNext) {
        onNext();
      } else if (onPageChange) {
        onPageChange(currentPage + 1);
      }
    }
  };

  const pages = generatePageNumbers(currentPage, totalPages, maxPageButtons);

  const containerClasses = [
    'pagination',
    `pagination--${type}`,
    `pagination--${breakpoint}`,
    `pagination--${alignment}`,
    className
  ].filter(Boolean).join(' ');

  // Handle dots and lines pagination types
  if (type === 'dots' || type === 'lines') {
    const style = type === 'dots' ? 'dot' : 'line';

    return (
      <nav className={containerClasses} aria-label="Pagination" {...props}>
        <PaginationDots
          currentPage={currentPage}
          totalPages={totalPages}
          size={dotsConfig.size}
          color={dotsConfig.color}
          framed={dotsConfig.framed}
          style={style}
          onPageChange={handlePageChange}
          disabled={disabled}
        />
      </nav>
    );
  }

  // Mobile simplified layout
  if (breakpoint === 'mobile') {
    if (type.includes('button-group')) {
      return (
        <nav className={containerClasses} aria-label="Pagination" {...props}>
          <ButtonGroup
            currentPage={currentPage}
            totalPages={totalPages}
            maxPageButtons={5} // Fewer buttons on mobile
            onPageChange={handlePageChange}
            onPrevious={handlePrevious}
            onNext={handleNext}
            disabled={disabled}
          />
        </nav>
      );
    }

    return (
      <nav className={containerClasses} aria-label="Pagination" {...props}>
        {showNavigation && (
          <NavigationButton
            direction="previous"
            type="icon-only"
            disabled={disabled || currentPage <= 1}
            onClick={handlePrevious}
          />
        )}
        
        {showPageInfo && (
          <div className="pagination-info">
            {pageInfo}
          </div>
        )}
        
        {showNavigation && (
          <NavigationButton
            direction="next"
            type="icon-only"
            disabled={disabled || currentPage >= totalPages}
            onClick={handleNext}
          />
        )}
      </nav>
    );
  }

  // Desktop layouts
  if (type.includes('button-group')) {
    return (
      <nav className={containerClasses} aria-label="Pagination" {...props}>
        <ButtonGroup
          currentPage={currentPage}
          totalPages={totalPages}
          maxPageButtons={maxPageButtons}
          onPageChange={handlePageChange}
          onPrevious={handlePrevious}
          onNext={handleNext}
          disabled={disabled}
        />
      </nav>
    );
  }

  if (type.includes('minimal')) {
    const navType = type.includes('card') ? 'secondary' : 'link';
    
    return (
      <nav className={containerClasses} aria-label="Pagination" {...props}>
        {alignment === 'left' && showPageInfo && (
          <div className="pagination-info">
            {pageInfo}
          </div>
        )}
        
        {showNavigation && (
          <div className="pagination-actions">
            <NavigationButton
              direction="previous"
              type={navType}
              disabled={disabled || currentPage <= 1}
              onClick={handlePrevious}
            >
              {previous}
            </NavigationButton>
            
            <NavigationButton
              direction="next"
              type={navType}
              disabled={disabled || currentPage >= totalPages}
              onClick={handleNext}
            >
              {next}
            </NavigationButton>
          </div>
        )}
        
        {(alignment === 'center' || alignment === 'right') && showPageInfo && (
          <div className="pagination-info">
            {pageInfo}
          </div>
        )}
      </nav>
    );
  }

  // Default page layout with page numbers
  const navType = type.includes('card') ? 'secondary' : 'link';

  return (
    <nav className={containerClasses} aria-label="Pagination" {...props}>
      {showNavigation && (
        <NavigationButton
          direction="previous"
          type={navType}
          disabled={disabled || currentPage <= 1}
          onClick={handlePrevious}
        >
          {previous}
        </NavigationButton>
      )}
      
      {showPageNumbers && (
        <div className="pagination-numbers">
          {pages.map((page, index) => (
            <PaginationButton
              key={index}
              page={typeof page === 'number' ? page : 0}
              isActive={page === currentPage}
              isEllipsis={typeof page === 'string'}
              shape={shape}
              onClick={handlePageChange}
              disabled={disabled}
            />
          ))}
        </div>
      )}
      
      {showNavigation && (
        <NavigationButton
          direction="next"
          type={navType}
          disabled={disabled || currentPage >= totalPages}
          onClick={handleNext}
        >
          {next}
        </NavigationButton>
      )}
    </nav>
  );
};
