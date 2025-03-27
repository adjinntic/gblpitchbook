import React from 'react';
import styled from 'styled-components';
import GoldbarLogo from './GoldbarLogo.svg'; // Path to your logo

const Header = () => {
  return (
    <HeaderContainer>
      <GoldbarLogoContainer>
        <img src={GoldbarLogo} alt="Goldbar Logo" />
      </GoldbarLogoContainer>
      <Navigation>
        {/* Your navigation elements here */}
      </Navigation>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Ensure it's above the slide content */
  background-color: ${({ theme }) => theme.colors.blackPrimary}; /* Match background */
`;

const GoldbarLogoContainer = styled.div`
  /* Style your logo container */
`;

const Navigation = styled.nav`
  /* Style your navigation */
`;

export default Header;
