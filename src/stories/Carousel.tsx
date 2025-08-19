import React, { useState, useRef, useEffect } from 'react';
import './carousel.css';

export interface CarouselProps {
  /** Array of image URLs or slide content */
  slides: (string | React.ReactNode)[];
  /** Size of the carousel */
  size?: 'md' | 'lg';
  /** Theme variant */
  theme?: 'primary' | 'dark' | 'light';
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show pagination dots */
  showDots?: boolean;
  /** Custom alt text for images */
  altTexts?: string[];
  /** Event handlers */
  onSlideChange?: (index: number) => void;
  /** Additional CSS class */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

interface CarouselArrowProps {
  direction: 'left' | 'right';
  size?: 'md' | 'lg';
  theme?: 'primary' | 'dark' | 'light';
  onClick?: () => void;
  disabled?: boolean;
}

const ChevronLeftIcon: React.FC<{ size?: 'md' | 'lg' }> = ({ size = 'md' }) => {
  const iconSize = size === 'lg' ? 24 : 20;
  const strokeWidth = size === 'lg' ? 2 : 1.67;

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={size === 'lg' ? "M15 18L9 12L15 6" : "M12.5 15L7.5 10L12.5 5"}
        stroke="currentColor" 
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ChevronRightIcon: React.FC<{ size?: 'md' | 'lg' }> = ({ size = 'md' }) => {
  const iconSize = size === 'lg' ? 24 : 20;
  const strokeWidth = size === 'lg' ? 2 : 1.67;

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={size === 'lg' ? "M9 18L15 12L9 6" : "M7.5 15L12.5 10L7.5 5"}
        stroke="currentColor" 
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CarouselArrow: React.FC<CarouselArrowProps> = ({
  direction,
  size = 'md',
  theme = 'primary',
  onClick,
  disabled = false
}) => {
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;
  
  return (
    <button
      className={`carousel-arrow carousel-arrow--${direction} carousel-arrow--${size} carousel-arrow--${theme}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
    >
      <Icon size={size} />
    </button>
  );
};

interface CarouselDotsProps {
  currentSlide: number;
  totalSlides: number;
  size?: 'md' | 'lg';
  theme?: 'primary' | 'dark' | 'light';
  onDotClick?: (index: number) => void;
  disabled?: boolean;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  currentSlide,
  totalSlides,
  size = 'md',
  theme = 'primary',
  onDotClick,
  disabled = false
}) => {
  const handleDotClick = (index: number) => {
    if (!disabled && onDotClick && index !== currentSlide) {
      onDotClick(index);
    }
  };

  const containerClasses = [
    'carousel-dots',
    `carousel-dots--${size}`,
    `carousel-dots--${theme}`
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} role="tablist" aria-label="Slide navigation">
      {Array.from({ length: totalSlides }, (_, index) => {
        const isActive = index === currentSlide;
        
        return (
          <button
            key={index}
            className={`carousel-dot ${isActive ? 'carousel-dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
            disabled={disabled}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  size = 'md',
  theme = 'primary',
  autoPlay = 0,
  showArrows = true,
  showDots = true,
  altTexts = [],
  onSlideChange,
  className = '',
  disabled = false,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    if (disabled || isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    if (onSlideChange) {
      onSlideChange(index);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrevious = () => {
    const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    goToSlide(prevIndex);
  };

  const goToNext = () => {
    const nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    goToSlide(nextIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (disabled) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (disabled || touchStartX.current === null || touchEndX.current === null) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay > 0 && !disabled) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, autoPlay);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoPlay, currentSlide, disabled, totalSlides]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const containerClasses = [
    'carousel',
    `carousel--${size}`,
    `carousel--${theme}`,
    className
  ].filter(Boolean).join(' ');

  const renderSlide = (slide: string | React.ReactNode, index: number) => {
    if (typeof slide === 'string') {
      return (
        <img
          src={slide}
          alt={altTexts[index] || `Slide ${index + 1}`}
          className="carousel-image"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      );
    }
    return slide;
  };

  return (
    <div 
      className={containerClasses} 
      {...props}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'carousel-slide--active' : ''}`}
              aria-hidden={index !== currentSlide}
            >
              {renderSlide(slide, index)}
            </div>
          ))}
        </div>

        {showArrows && totalSlides > 1 && (
          <>
            <CarouselArrow
              direction="left"
              size={size}
              theme={theme}
              onClick={goToPrevious}
              disabled={disabled}
            />
            <CarouselArrow
              direction="right"
              size={size}
              theme={theme}
              onClick={goToNext}
              disabled={disabled}
            />
          </>
        )}
      </div>

      {showDots && totalSlides > 1 && (
        <CarouselDots
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          size={size}
          theme={theme}
          onDotClick={goToSlide}
          disabled={disabled}
        />
      )}
    </div>
  );
};
