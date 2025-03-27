import React from 'react';
import styled from 'styled-components';

const CategoryNavContainer = styled.nav`
  position: fixed;
  top: 25px; /* Keep vertical alignment */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for centering */
  z-index: 1001; /* Above slides and logo */
  display: flex;
  gap: 15px;
  align-items: center;
  background: rgba(10, 10, 10, 0.6); /* Subtle background */
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (max-width: 1000px) { /* Adjust breakpoint as needed */
    /* Maybe hide or change layout on smaller screens */
    display: none; /* Simple hiding for now */
  }
`;

const CategoryLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.goldSecondary};
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 3px;
  transition: background-color 0.2s ease, color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: rgba(212, 175, 55, 0.2);
    color: ${({ theme }) => theme.colors.goldPrimary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.5);
  }
`;

const CategoryNav = ({ categories, onCategoryClick }) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <CategoryNavContainer>
      {categories.map((category) => (
        <CategoryLink key={category} onClick={() => onCategoryClick(category)}>
          {category}
        </CategoryLink>
      ))}
    </CategoryNavContainer>
  );
};

export default CategoryNav;
