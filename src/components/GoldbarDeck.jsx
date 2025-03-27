import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo
import styled from 'styled-components';
import GoldbarSlide from './GoldbarSlide.jsx';
import CategoryNav from './CategoryNav.jsx'; // Import CategoryNav
// import SVGBackground from './SVGBackground.jsx';

/**
 * Slide Deck Component - Manages all slides and navigation
 */
const GoldbarDeck = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  // Extract unique categories using useMemo for performance
  const categories = useMemo(() => {
    const uniqueCategories = new Set();
    slides.forEach(slide => {
      if (slide.category) {
        uniqueCategories.add(slide.category);
      }
    });
    return Array.from(uniqueCategories);
  }, [slides]); // Recalculate only if slides change

  // Navigation functions
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  // Category navigation handler
  const handleCategoryClick = (category) => {
    const firstSlideIndex = slides.findIndex(slide => slide.category === category);
    if (firstSlideIndex !== -1) {
      goToSlide(firstSlideIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]); // Dependency array ensures effect updates with currentSlide

  return (
    <DeckContainer>
      {/* Render Category Navigation */}
      <CategoryNav categories={categories} onCategoryClick={handleCategoryClick} />

      {/* Render Slides */}
      {slides.map((slide, index) => (
        <GoldbarSlide
          key={slide.id || `slide-${index}`} // Use id if available, fallback to index
          data={slide}
          isActive={index === currentSlide}
          totalSlides={totalSlides.toString().padStart(2, '0')}
        />
      ))}

      <NavigationControls>
        <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
          Prev
        </NavButton>
        <SlideCounter>
          {(currentSlide + 1).toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
        </SlideCounter>
        <NavButton onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
          Next
        </NavButton>
      </NavigationControls>

      <SlideThumbnails>
        {slides.map((slide, index) => (
          <Thumbnail
            key={`thumb-${slide.id || `slide-${index}`}`}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </Thumbnail>
        ))}
      </SlideThumbnails>
    </DeckContainer>
  );
};

// Styled Components for the deck (using theme from ThemeProvider)
const DeckContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Changed from min-height to ensure it fills viewport */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.blackPrimary};
  color: ${({ theme }) => theme.colors.goldHighlight}; /* Default text color */
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

// Commented out GlobalBackground as it might be handled differently or within SVGBackground
// const GlobalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   pointer-events: none;
//   opacity: 0.7;
// `;

// Navigation Components
const NavigationControls = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  z-index: 10;
  gap: 20px;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.goldPrimary};
  color: ${({ theme }) => theme.colors.goldPrimary};
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px; // Added for consistency

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.goldPrimary};
    color: ${({ theme }) => theme.colors.blackPrimary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SlideCounter = styled.div`
  color: ${({ theme }) => theme.colors.goldPrimary};
  font-size: 14px; // Added for consistency
  min-width: 60px; // Ensure space for "XX / XX"
  text-align: center;
`;

const SlideThumbnails = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
  max-height: calc(100vh - 100px); // Adjusted max-height
  overflow-y: auto;
  padding-right: 5px; // Add padding for scrollbar

  /* Simple scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.goldPrimary};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.blackPrimary};
  }
`;

const Thumbnail = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme, isActive }) =>
    isActive ? theme.colors.goldPrimary : 'rgba(212, 175, 55, 0.3)'};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.goldPrimary : 'transparent'};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blackPrimary : theme.colors.goldPrimary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 12px; // Added font size
  flex-shrink: 0; // Prevent shrinking

  &:hover {
    border-color: ${({ theme }) => theme.colors.goldPrimary};
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.goldPrimary : 'rgba(212, 175, 55, 0.1)'};
  }
`;

export default GoldbarDeck;
