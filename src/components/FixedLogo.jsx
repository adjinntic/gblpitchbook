import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the shine animation
const shine = keyframes`
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
`;

const FixedLogo = () => {
  return (
    // Using "GOLDBAR" text as per the example HTML
    <LogoContainer>
      GOLDBAR
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  position: fixed;
  top: 30px; /* Adjust as needed */
  left: 40px; /* Adjust as needed */
  z-index: 15; /* Ensure it's above slides */

  display: inline-block; /* Match example, though fixed positioning takes precedence */
  padding: 5px 20px; /* Use padding to size */

  color: ${({ theme }) => theme.colors.goldPrimary};
  background-color: rgba(0, 0, 0, 0); /* Transparent background */
  border: 2px solid ${({ theme }) => theme.colors.goldPrimary};
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3); /* Gold glow */

  font-size: 24px; /* Updated font size */
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  overflow: hidden; /* Required for shine animation */
  transition: all 0.3s ease; /* Smooth transition for hover effects */

  /* Shine animation pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: skewX(-25deg);
    animation: ${shine} 5s infinite;
  }

  /* Keep the hover effect */
  &:hover {
    cursor: pointer; /* Indicate it might be clickable */
    border-color: ${({ theme }) => theme.colors.goldSecondary}; /* Brighter gold on hover */
    box-shadow: 0px 0px 20px 2px rgba(255, 215, 0, 0.4); /* Enhanced glow on hover */
    color: ${({ theme }) => theme.colors.goldSecondary};
  }
`;

export default FixedLogo;
