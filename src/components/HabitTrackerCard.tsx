import React, { useState } from 'react';
import styled from 'styled-components';
import { FireIcon, PlusIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Card = styled.div`
  background: rgba(255,255,255,0.85);
  border-radius: 24px;
  padding: 32px 28px 28px 28px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  min-height: 260px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(12px);
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;
const Title = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  color: #18181b;
`;
const Habits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
`;
const Habit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  background: #f7f7fa;
  border-radius: 14px;
  padding: 10px 16px;
  box-shadow: 0 1px 4px #0001;
  color: #222;
`;
const AccentDot = styled.span`
  width: 10px;
  height: 10px;
  background: #e26ee5;
  border-radius: 50%;
  margin-right: 10px;
`;
const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: #e26ee5;
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
const AddHabitRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 8px;
`;
const AddInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  background: #f7f7fa;
  font-size: 1.05rem;
  outline: none;
`;
const AddBtn = styled.button`
  background: #18181b;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;
const TimerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 18px;
`;
const TimerLabel = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: #18181b;
`;

function CircularTimer({ value, max, size = 54, stroke = 6, color = '#e26ee5' }: { value: number; max: number; size?: number; stroke?: number; color?: string }) {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const pct = value / max;
  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#f3e6f9"
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - pct)}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s' }}
      />
    </svg>
  );
}

const HabitTrackerCard: React.FC = () => {
  const [habits, setHabits] = useState([
    'Drink Water',
    'Read 10 pages',
    'Exercise',
  ]);
  const [newHabit, setNewHabit] = useState('');
  const [timer, setTimer] = useState(25 * 60); // 25 min
  const [running, setRunning] = useState(false);
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (running && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (!running && timer !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [running, timer]);
  const format = (s: number) => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, newHabit.trim()]);
      setNewHabit('');
    }
  };
  return (
    <Card>
      <CardHeader>
        <FireIcon style={{ color: '#e26ee5', width: 28 }} />
        <Title>Habit Tracker</Title>
      </CardHeader>
      <Habits>
        {habits.map((habit, idx) => (
          <Habit key={idx}>
            <AccentDot />
            <CustomCheckbox />
            <CheckCircleIcon style={{ color: '#e26ee5', width: 18, marginRight: 6 }} />
            {habit}
          </Habit>
        ))}
      </Habits>
      <AddHabitRow>
        <AddInput
          value={newHabit}
          onChange={e => setNewHabit(e.target.value)}
          placeholder='Add new habit...'
          onKeyDown={e => { if (e.key === 'Enter') addHabit(); }}
        />
        <AddBtn onClick={addHabit}>
          <PlusIcon style={{ width: 18 }} /> Add
        </AddBtn>
      </AddHabitRow>
      <TimerSection>
        <CircularTimer value={timer} max={25*60} />
        <TimerLabel>Focus Timer: {format(timer)}</TimerLabel>
        <AddBtn style={{ background: running ? '#f87171' : '#e26ee5' }} onClick={() => setRunning(r => !r)}>
          {running ? 'Pause' : 'Start'}
        </AddBtn>
        <AddBtn style={{ background: '#ede6d2', color: '#e26ee5' }} onClick={() => { setTimer(25*60); setRunning(false); }}>
          Reset
        </AddBtn>
      </TimerSection>
    </Card>
  );
};

export default HabitTrackerCard; 