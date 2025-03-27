import React, { useState } from 'react';
import styled from 'styled-components';

// Updated to handle 'items' array in addition to 'text'
const HighlightBox = ({ boxData, onMouseEnter, onMouseLeave }) => {
  const { title, text, items } = boxData; // Check for items array

  return (
    <StyledHighlightBox
      onMouseEnter={() => {
        onMouseEnter && onMouseEnter(); // Call prop directly
      }}
      onMouseLeave={() => {
        onMouseLeave && onMouseLeave(); // Call prop directly
      }}
    >
      {title && <BoxTitle>{title}</BoxTitle>}
      {/* Render text if it exists */}
      {text && <BoxText dangerouslySetInnerHTML={{ __html: text }} />}
      {/* Render list if items exist */}
      {items && (
        <BoxList>
          {items.map((item, index) => (
            <BoxListItem key={`item-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </BoxList>
      )}
      {/* Image rendering is handled in GoldbarSlide for TYPE_TESTIMONIAL_HERO */}
    </StyledHighlightBox>
  );
};
// Styled Components for HighlightBox
const StyledHighlightBox = styled.div`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.glassBackground}, rgba(25,25,25,0.5));
  border-left: 3px solid ${({ theme }) => theme.colors.goldPrimary};
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: 25px; /* Increased padding */
  margin: 25px 0; /* Increased margin */
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.goldPrimary}, transparent);
    opacity: 0.3;
  }

  &:hover {
    box-shadow: 0 10px 25px rgba(0,0,0,0.6), inset 0 1px 2px ${({ theme }) => theme.colors.glassHighlight};
    transform: translateY(-3px); /* Slightly more lift */
    border-left-color: ${({ theme }) => theme.colors.goldSecondary};
  }
`;

const BoxTitle = styled.h3`
  font-size: 22px; /* Adjusted size */
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.goldSecondary};
  font-weight: 400;
`;

const BoxText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.85); /* Slightly adjusted color */
`;

const BoxList = styled.ul`
  list-style-position: outside;
  margin-left: 20px;
  margin-bottom: 15px; /* Adjusted margin */
`;

const BoxListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

export default HighlightBox;
