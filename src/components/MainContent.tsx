import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const MainContainer = styled.main`
  margin-left: 240px; // 200px sidebar + 20px gap
  padding: 2rem;
  min-height: 100vh;
  background-color: #eae7c3;
`;

const MainContent: React.FC = () => {
  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Search query:', query);
  };

  return (
    <MainContainer>
      <SearchBar onSearch={handleSearch} />
      {/* Add more content here */}
    </MainContainer>
  );
};

export default MainContent; 