import React from 'react';
import styled, { keyframes } from 'styled-components';

// Reusable Visual Placeholder Component
const VisualPlaceholder = ({ visualData }) => {
  if (!visualData) return null;

  const { placeholder = '[Visual Content]', imageSrc } = visualData;

  if (imageSrc) {
    return (
      <StyledVisualPlaceholder>
        <img src={imageSrc} alt={placeholder} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </StyledVisualPlaceholder>
    );
  } else {
    return (
      <StyledVisualPlaceholder>
        <PlaceholderText>{placeholder}</PlaceholderText>
      </StyledVisualPlaceholder>
    );
  }
};

// Animations (unchanged)
const shimmer = keyframes`
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
`;

// Styled Components (unchanged)
const StyledVisualPlaceholder = styled.div`
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(10, 10, 10, 0.3));
  border-radius: 5px;
  margin: 20px 0;
  min-height: 300px; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  width: 100%;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      transparent,
      transparent 40%,
      rgba(212, 175, 55, 0.08) 50%,
      transparent 60%,
      transparent
    );
    transform: rotate(45deg);
    animation: ${shimmer} ${({ theme }) => theme.animations.shimmerDuration} infinite linear;
    opacity: 0.7;
  }

  &:hover {
     box-shadow: 0 8px 20px rgba(0,0,0,0.3);
     border-color: rgba(212, 175, 55, 0.4);
  }
`;

const PlaceholderText = styled.span`
  color: rgba(212, 175, 55, 0.6);
  font-size: 16px;
  font-style: italic;
  padding: 10px;
  z-index: 1;
`;

export default VisualPlaceholder;
