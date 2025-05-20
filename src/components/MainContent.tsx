import React, { useState } from 'react';
import styled from 'styled-components';
import TodoListCard from './TodoListCard';
import HabitTrackerCard from './HabitTrackerCard';
import TopBar from './TopBar';

const MainContainer = styled.main`
  margin-left: 260px;
  padding: 2.5rem 2.5rem 2.5rem 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: none;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  gap: 32px;
  width: 100%;
  margin-top: 2.5rem;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const GlassCard = styled.div`
  background: rgba(255,255,255,0.85);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  backdrop-filter: blur(12px);
  padding: 32px 28px 28px 28px;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;

const BlackCard = styled(GlassCard)`
  background: #18181b;
  color: #fff;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 18px;
`;

const Placeholder = styled.div`
  color: #888;
  font-size: 1rem;
`;

const MainContent: React.FC = () => {
  const [view, setView] = useState('Dashboard');
  const handleSearch = (query: string) => {
    // Implement search logic for the current view
    if (view === 'To-Do List') {
      // handle To-Do search
    } else if (view === 'Habit Tracker') {
      // handle Habit search
    } else {
      // handle Dashboard search
    }
  };

  return (
    <MainContainer>
      <TopBar onSearch={handleSearch} />
      {view === 'Dashboard' && (
        <DashboardGrid>
          {/* Row 1 */}
          <BlackCard style={{ gridColumn: 'span 1' }}>
            <SectionTitle>Overall Information</SectionTitle>
            <Placeholder>Tasks, Projects, Stats (placeholder)</Placeholder>
          </BlackCard>
          <GlassCard style={{ gridColumn: 'span 1' }}>
            <SectionTitle>Weekly Progress</SectionTitle>
            <Placeholder>Chart (placeholder)</Placeholder>
          </GlassCard>
          <GlassCard style={{ gridColumn: 'span 1' }}>
            <SectionTitle>Month Progress</SectionTitle>
            <Placeholder>Progress Circle (placeholder)</Placeholder>
          </GlassCard>
          {/* Row 2 */}
          <GlassCard style={{ gridColumn: 'span 1' }}>
            <SectionTitle>Month Goals</SectionTitle>
            <Placeholder>Goals List (placeholder)</Placeholder>
          </GlassCard>
          <GlassCard style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            <div>
              <SectionTitle>Task In Process</SectionTitle>
              <Placeholder>Task Cards (placeholder)</Placeholder>
            </div>
            <div>
              <SectionTitle>Add Task</SectionTitle>
              <Placeholder>+ Add Task Card (placeholder)</Placeholder>
            </div>
            <div>
              <SectionTitle>Archive</SectionTitle>
              <Placeholder>Open Archive (placeholder)</Placeholder>
            </div>
          </GlassCard>
          {/* Row 3 */}
          <BlackCard style={{ gridColumn: 'span 1' }}>
            <SectionTitle>Last Projects</SectionTitle>
            <Placeholder>Project Cards (placeholder)</Placeholder>
          </BlackCard>
          <GlassCard style={{ gridColumn: 'span 2' }}>
            <SectionTitle>Other Widgets</SectionTitle>
            <Placeholder>More Cards/Widgets (placeholder)</Placeholder>
          </GlassCard>
        </DashboardGrid>
      )}
      {view === 'To-Do List' && <TodoListCard />}
      {view === 'Habit Tracker' && <HabitTrackerCard />}
    </MainContainer>
  );
};

export default MainContent; 