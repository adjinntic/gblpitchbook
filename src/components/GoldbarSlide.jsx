import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HighlightBox from './HighlightBox.jsx';
import VisualPlaceholder from './VisualPlaceholder.jsx';

/**
 * Helper function to render standard column content (paragraphs, boxes, sections, visuals)
 */
const renderStandardColumnContent = (columnData) => {
  if (!columnData) return null;

  return (
    <>
      {columnData.paragraphs?.map((paragraph, index) => (
        <Paragraph key={`p-${index}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}

      {columnData.highlightBoxes?.map((box, index) => (
        <HighlightBox key={`hb-${index}`} boxData={box} />
      ))}

      {columnData.sections?.map((section, index) => (
        <div key={`section-${index}`}>
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          {section.text && <Paragraph dangerouslySetInnerHTML={{ __html: section.text }} />}
          {section.highlightBox && <HighlightBox boxData={section.highlightBox} />}
          {section.items && (
            <BoxList>
              {section.items.map((item, i) => (
                <BoxListItem key={`li-${i}`} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </BoxList>
          )}
        </div>
      ))}

      {columnData.visual && <VisualPlaceholder visualData={columnData.visual} />}
      {columnData.text && <Paragraph dangerouslySetInnerHTML={{ __html: columnData.text }} />}
      {columnData.caption && <Caption dangerouslySetInnerHTML={{ __html: columnData.caption }} />}
    </>
  );
};

/**
 * Main Slide Component - Renders a single slide with dynamic content based on layoutType
 */
const GoldbarSlide = ({ data, isActive, totalSlides }) => {
  const {
    id,
    slideNumber,
    title,
    stat,
    statDescription,
    introText,
    content,
    backgroundEffects = { glow1: true, glow2: false },
    layoutType = 'TYPE_DEFAULT',
  } = data;

  const isVisible = isActive;
  // Use defaultHeroImage from data if available, otherwise null
  const [hoveredImage, setHoveredImage] = useState(data.content?.defaultHeroImage || null);

  // Set the image source when hovering over a box
  const handleMouseEnter = (boxData) => {
    if (boxData?.associatedImage) {
      setHoveredImage(boxData.associatedImage);
    }
  };

  // Reset to default image when not hovering
  const handleMouseLeave = () => {
    setHoveredImage(data.content?.defaultHeroImage || null);
  };


  const renderSlideLayout = () => {
    switch (layoutType) {
      case 'TYPE_TESTIMONIAL_HERO': {
        const heroImageData = hoveredImage ? { imageSrc: hoveredImage, placeholder: 'Testimonial Image', height: '450px' } : null;
        return (
          <>
            {title && <Title alignToTop={true}>{title}</Title>}
            <TestimonialHeroLayout>
              <HeroImageContainer>
                {heroImageData && <VisualPlaceholder visualData={heroImageData} />}
              </HeroImageContainer>
              <TestimonialBoxesContainer>
                {content?.testimonialBoxes?.map((box, index) => (
                  <HighlightBox
                    key={`hb-${index}`}
                    boxData={box}
                    onMouseEnter={() => handleMouseEnter(box)} // Pass box data
                    onMouseLeave={handleMouseLeave}           // Reset on leave
                  />
                ))}
              </TestimonialBoxesContainer>
            </TestimonialHeroLayout>
            {content?.bottomText && <BottomText dangerouslySetInnerHTML={{ __html: content.bottomText }} />}
            {content?.bottomVisual && <VisualPlaceholder visualData={content.bottomVisual} />}
          </>
        );
      }
      case 'TYPE_TWO_COLUMN_OVERLAP':
        return (
          <>
            {title && <Title>{title}</Title>}
            <TwoColumnLayoutOverlap>
              <ColumnOverlapLeft style={{ flex: content?.leftColumn?.flex || 1 }}>
                {content?.leftColumn?.paragraphs?.map((paragraph, index) => (
                  <GlassPaneParagraph key={`gp-${index}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </ColumnOverlapLeft>
              <ColumnOverlapRight style={{ flex: content?.rightColumn?.flex || 1 }}>
                {content?.rightColumn?.visual && <VisualPlaceholder visualData={content.rightColumn.visual} />}
              </ColumnOverlapRight>
            </TwoColumnLayoutOverlap>
            {content?.bottomText && <BottomText dangerouslySetInnerHTML={{ __html: content.bottomText }} />}
            {content?.bottomVisual && <VisualPlaceholder visualData={content.bottomVisual} />}
          </>
        );
      case 'TYPE_STAT_FOCUS':
        return (
          <>
            {title && <Title>{title}</Title>}
            {stat && <StatNumber>{stat}</StatNumber>}
            {statDescription && <StatDescription dangerouslySetInnerHTML={{ __html: statDescription }} />}
            {content && (
              <TwoColumnLayout>
                <Column style={{ flex: content.leftColumn?.flex || 1 }}>
                  {renderStandardColumnContent(content.leftColumn)}
                </Column>
                <Column style={{ flex: content.rightColumn?.flex || 1 }}>
                  {renderStandardColumnContent(content.rightColumn)}
                </Column>
              </TwoColumnLayout>
            )}
            {content?.bottomText && <BottomText dangerouslySetInnerHTML={{ __html: content.bottomText }} />}
            {content?.bottomVisual && <VisualPlaceholder visualData={content.bottomVisual} />}
          </>
        );
      case 'TYPE_QUOTE_FOCUS':
        return (
          <>
            {title && <Title>{title}</Title>}
            {content?.fullWidth?.highlightBoxes && (
              <FullWidthSection>
                {content.fullWidth.highlightBoxes.map((box, index) => (
                  <HighlightBox key={`hb-${index}`} boxData={box} />
                ))}
              </FullWidthSection>
            )}
            {content?.bottomText && <BottomText dangerouslySetInnerHTML={{ __html: content.bottomText }} />}
            {content?.bottomVisual && <VisualPlaceholder visualData={content.bottomVisual} />}
          </>
        );
        default:
          return (
            <>
              {title && <Title>{title}</Title>}
              {stat && <StatNumber>{stat}</StatNumber>}
              {statDescription && (
                <StatDescription dangerouslySetInnerHTML={{ __html: statDescription }} />
              )}
              {introText && (
                <IntroText dangerouslySetInnerHTML={{ __html: introText }} />
              )}
              {content?.fullWidth ? (
                <FullWidthSection>
                  {content.fullWidth.visual && (
                    <VisualPlaceholder visualData={content.fullWidth.visual} />
                  )}
                  {content.fullWidth.highlightBoxes?.map((box, index) => (
                    <HighlightBox key={`hb-${index}`} boxData={box} />
                  ))}
                </FullWidthSection>
              ) : content ? (
                <TwoColumnLayout>
  <Column style={{ flex: content.leftColumn?.flex || 1 }}>
    <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}> {/* Added maxHeight and overflowY */}
      {renderStandardColumnContent(content.leftColumn)}
    </div>
  </Column>
  <Column style={{ flex: content.rightColumn?.flex || 1 }}>
    <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}> {/* Added maxHeight and overflowY */}
      {renderStandardColumnContent(content.rightColumn)}
    </div>
  </Column>
</TwoColumnLayout>

              ) : null}
              {content?.bottomText && (
                <BottomText dangerouslySetInnerHTML={{ __html: content.bottomText }} />
              )}
              {content?.bottomVisual && (
                <VisualPlaceholder visualData={content.bottomVisual} />
              )}
            </>
          );
      }
    };

  return (
    <SlideContainer id={id} className={isVisible ? 'active' : ''} isVisible={isVisible}>
      {backgroundEffects.glow1 && <GlowElement className="glow-1" />}
      {backgroundEffects.glow2 && <GlowElement className="glow-2" />}
      <SlideIndicator>{slideNumber} / {totalSlides}</SlideIndicator>
      <SlideContent>{renderSlideLayout()}</SlideContent>
    </SlideContainer>
  );
};

// Animations (using keyframes helper)
const subtleShift = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100px 100px; }
`;

const pulsateGlow = keyframes`
  0% { opacity: 0.2; transform: scale(0.95); }
  50% { opacity: 0.5; transform: scale(1.05); }
  100% { opacity: 0.2; transform: scale(0.95); }
`;


// Styled Components for the Slide
const SlideContainer = styled.section`
  /* Positioning for stacking */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Use height instead of min-height for absolute positioning */
  padding: 60px 50px; /* Adjusted padding */
  overflow-y: auto; /* Allow scrolling within a slide if content overflows */
  display: flex; /* Use flex to center content vertically */
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);

  /* Visibility & Transition */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.6s ease-in-out, visibility 0.6s ease-in-out;
  z-index: ${({ isVisible }) => (isVisible ? 2 : 1)}; /* Active slide on top */

  /* Background Grid Pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0; /* Cover entire slide */
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Behind content */
    background-image:
      repeating-linear-gradient(45deg,
        transparent,
        transparent 35px,
        rgba(255, 255, 255, 0.012) 35px,
        rgba(255, 255, 255, 0.012) 36px
      ),
      repeating-linear-gradient(90deg,
        transparent,
        transparent 49px,
        rgba(212, 175, 55, 0.018) 49px,
        rgba(212, 175, 55, 0.018) 50px
      ),
      repeating-linear-gradient(0deg,
        transparent,
        transparent 49px,
        rgba(212, 175, 55, 0.018) 49px,
        rgba(212, 175, 55, 0.018) 50px
      );
    opacity: 0.6;
    pointer-events: none;
    animation: ${subtleShift} 30s linear infinite;
    background-size: 50px 50px, 50px 50px, 50px 50px;
  }
`;

const GlowElement = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0) 70%);
  z-index: 1; /* Above grid, below content */
  filter: blur(30px);
  opacity: 0; /* Controlled by animation */
  animation: ${pulsateGlow} ${({ theme }) => theme.animations.glowPulsateDuration} infinite alternate;
  pointer-events: none; /* Don't interfere with clicks */

  &.glow-1 {
    top: 15%;
    left: 8%;
    animation-delay: -3s;
  }

  &.glow-2 {
    bottom: 8%;
    right: 12%;
    animation-delay: -7s;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2; /* Above grid and glow */
  max-width: 1200px;
  width: 100%;
  margin: 0 auto; /* Centering within the flex container */
  padding: 80px 20px 100px 20px; /* Increased top/bottom padding to avoid nav/controls */
  /* backdrop-filter: blur(2px); // Optional: subtle blur for content background */
  /* -webkit-backdrop-filter: blur(2px); */
`;

const SlideIndicator = styled.div`
  position: absolute;
  top: 30px; /* Adjusted position */
  right: 40px;
  color: rgba(212, 175, 55, 0.5);
  font-size: 14px;
  z-index: 3; /* Above content */
`;

// Typography components
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.goldPrimary};
  margin-bottom: 30px;
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
  font-size: 40px;
  line-height: 1.2;
  font-weight: 300;
`;

const StatNumber = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.goldPrimary};
  margin-bottom: 10px;
  font-weight: 300;
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
`;

const StatDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 750px;
  color: rgba(255, 255, 255, 0.9); /* Slightly less bright than highlight */
`;

const IntroText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 750px;
  color: rgba(255, 255, 255, 0.9);
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 750px;
  color: rgba(255, 255, 255, 0.9);
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.goldSecondary};
  font-weight: 400; /* Slightly bolder */
`;

const Caption = styled.p`
  color: rgba(255,255,255,0.6);
  font-style: italic;
  font-size: 14px;
  margin-top: 5px;
`;

const BottomText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0;
  max-width: 100%;
  color: rgba(255, 255, 255, 0.9);
`;


// New Glass Pane Paragraph for TYPE_TWO_COLUMN_OVERLAP
const GlassPaneParagraph = styled(Paragraph)`
  background: ${({ theme }) => theme.colors.glassBackground};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 25px; /* Increased padding */
  border-radius: 5px;
  position: relative;
  z-index: 3; /* Ensure it's above the visual in the next column */
  margin-right: -40px; /* Negative margin for overlap */
  max-width: calc(100% + 40px); /* Adjust max-width to compensate for margin */

  @media (max-width: 900px) {
    margin-right: 0; /* Remove overlap on smaller screens */
    max-width: 100%;
  }
`;


// Layout Components
// --- Base Layouts ---
const BaseColumnLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin: 30px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

// Standard two-column layout inherits base
const TwoColumnLayout = styled(BaseColumnLayout)``;

// Specific layout for TYPE_TWO_COLUMN_OVERLAP inherits base
const TwoColumnLayoutOverlap = styled(BaseColumnLayout)`
  align-items: center; /* Vertically align items better for overlap */
  position: relative; /* Needed for z-index context */
`;

const BaseColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 300px;

  @media (max-width: 900px) {
    min-width: 100%;
  }
`;

// --- Standard Layout Components ---
// Standard column inherits base
const Column = styled(BaseColumn)`
  overflow-y: auto; 
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 300px;

  @media (max-width: 900px) {
    min-width: 100%;
  }`;

// Columns for overlap layout inherit base
const ColumnOverlapLeft = styled(BaseColumn)`
  z-index: 2; /* Ensure left column content can overlap */
`;

const ColumnOverlapRight = styled(BaseColumn)`
  z-index: 1; /* Ensure right column visual is behind */
  /* Potentially add margin-left if needed, but negative margin on GlassPaneParagraph handles it */
`;

const FullWidthSection = styled.div`
  width: 100%;
  margin: 30px 0;
`;

// List needed for sections/highlight boxes
const BoxList = styled.ul`
  list-style-position: outside;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const BoxListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

// --- TYPE_TESTIMONIAL_HERO Layout Components ---
const TestimonialHeroLayout = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start; /* Align items to the top */
  margin-top: 20px; /* Add some space below the title */

  @media (max-width: 1000px) { /* Adjust breakpoint as needed */
    flex-direction: column;
    align-items: center; /* Center items when stacked */
  }
`;

const HeroImageContainer = styled.div`
  flex: 2; /* Takes up more space */
  min-width: 400px; /* Ensure it has a minimum width */
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add styles for the container, maybe a subtle border or background */
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 5px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.02); /* Very subtle background */
  min-height: 470px; /* Match image height + padding */

  img { /* Style the image within */
    max-width: 100%;
    max-height: 450px; /* Ensure image fits */
    height: auto;
    object-fit: contain; /* Or 'cover' depending on desired effect */
    border-radius: 3px;
  }

  @media (max-width: 1000px) {
    min-width: 80%;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const TestimonialBoxesContainer = styled.div`
  flex: 1; /* Takes up less space */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between testimonial boxes */
  min-width: 300px;

  @media (max-width: 1000px) {
     width: 80%; /* Take up most width when stacked */
     max-width: 500px; /* But not too wide */
  }
`;


export default GoldbarSlide;
