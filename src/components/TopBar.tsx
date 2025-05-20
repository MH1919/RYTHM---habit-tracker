import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;
const IconBtn = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  &:hover {
    background: #f0f0f5;
  }
`;
const ProfilePic = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: #222;
  overflow: hidden;
`;

const TopBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Bar>
      {showSearch && <SearchBar onSearch={onSearch} />}
      <IconBtn onClick={() => setShowSearch(s => !s)} title="Search">
        <MagnifyingGlassIcon style={{ width: 24, height: 24 }} />
      </IconBtn>
      <IconBtn title="Settings">
        <Cog6ToothIcon style={{ width: 24, height: 24 }} />
      </IconBtn>
      <ProfilePic>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
      </ProfilePic>
    </Bar>
  );
};

export default TopBar; 