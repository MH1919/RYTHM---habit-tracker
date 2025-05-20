import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

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
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
`;
const AccentDot = styled.span`
  width: 10px;
  height: 10px;
  background: #4a90e2;
  border-radius: 50%;
  margin-right: 10px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 1.05rem;
  background: #f7f7fa;
  border-radius: 14px;
  padding: 10px 16px;
  box-shadow: 0 1px 4px #0001;
  transition: box-shadow 0.2s;
  color: #222;
  &:hover {
    box-shadow: 0 2px 8px #0002;
    background: #f0f0f5;
  }
`;
const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: #4a90e2;
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
const AddTaskRow = styled.div`
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

function TodoListCard() {
  const [tasks, setTasks] = useState([
    'Review patient reports',
    'Call pharmacy',
    'Update schedule',
  ]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };
  return (
    <Card>
      <CardHeader>
        <CheckCircleIcon style={{ color: '#4a90e2', width: 28 }} />
        <Title>To-Do List</Title>
      </CardHeader>
      <List>
        {tasks.map((task, idx) => (
          <ListItem key={idx}>
            <AccentDot />
            <CustomCheckbox />
            {task}
          </ListItem>
        ))}
      </List>
      <AddTaskRow>
        <AddInput
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder='Add new task...'
          onKeyDown={e => { if (e.key === 'Enter') addTask(); }}
        />
        <AddBtn onClick={addTask}>
          <PlusIcon style={{ width: 18 }} /> Add
        </AddBtn>
      </AddTaskRow>
    </Card>
  );
}

export default TodoListCard; 