import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  background: #faf6e8;
  border-radius: 2rem;
  border: 1.5px solid #ede6d2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  padding: 0.25rem 1rem 0.25rem 0.5rem;
`;

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7d6e0;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.75rem;
`;

const StyledIcon = styled(MagnifyingGlassIcon)`
  width: 1.3rem;
  height: 1.3rem;
  color: #18181b;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  font-family: 'Fredoka', sans-serif;
  color: #18181b;
  padding: 0.7rem 0.5rem;
  outline: none;

  &::placeholder {
    color: #b6b6b6;
    opacity: 1;
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  gap: 0.5rem;
`;

const FilterLabel = styled.span`
  font-size: 1rem;
  color: #888;
  margin-right: 0.5rem;
  font-family: 'Fredoka', sans-serif;
`;

const FilterPill = styled.button<{ selected: boolean }>`
  border: none;
  outline: none;
  background: ${({ selected }) => (selected ? '#18181b' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#888')};
  font-family: 'Fredoka', sans-serif;
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.3rem 1.1rem;
  margin-right: 0.2rem;
  border: 1.5px dashed #ede6d2;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${({ selected }) => (selected ? '#18181b' : '#f7d6e0')};
    color: #18181b;
  }
`;

const FILTERS = ['Patients', 'Education', 'Prescriptions', 'Test results'];

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search habits, tasks, or reminders...'
}) => {
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <IconCircle>
        <StyledIcon />
      </IconCircle>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <FilterBar>
        <FilterLabel>In:</FilterLabel>
        {FILTERS.map((filter) => (
          <FilterPill
            key={filter}
            selected={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </FilterPill>
        ))}
      </FilterBar>
    </SearchBarWrapper>
  );
};

export default SearchBar; 