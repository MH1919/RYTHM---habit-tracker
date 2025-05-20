import React,{useState} from 'react';
import styled from 'styled-components';
import { 
    HomeIcon, 
    ChartBarIcon, 
    CalendarIcon, 
    ChartPieIcon, 
    BellIcon, 
    Cog6ToothIcon,
    ClipboardDocumentListIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

interface NavItemProps{
    active?:boolean;
}

const SidebarContainer = styled.div`
position : fixed;
left: 32px;
top: 32px;
bottom: 32px;
width: 220px;
background: rgba(255,255,255,0.85);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
backdrop-filter: blur(12px);
display: flex;
flex-direction: column;
padding: 32px 0 24px 0;
border-radius: 24px;
z-index:100;
`;

const Logo = styled.div`
font-size: 26px;
font-weight: 700;
margin-bottom: 48px;
text-align: center;
letter-spacing: 1px;
font-family: 'Inter', 'Fredoka', sans-serif;
color: #222;
background: none;
text-shadow: none;
`;
const NavSection = styled.div`
margin-bottom: 40px;
`;

const NavItem = styled.div<NavItemProps>`
padding: 14px 32px;
cursor: pointer;
margin: 6px 16px;
color: ${({active}) => active ? '#18181b' : '#b0b0b0'};
font-weight: ${({active}) => active ? '800' : '500'};
font-size: 1.05rem;
letter-spacing: 0.2px;
transition: all 0.2s ease;
display: flex;
align-items: center;
gap: 14px;
border-left: 3px solid ${({active}) => active ? '#222' : 'transparent'};
border-radius: 0 12px 12px 0;
font-family: 'Inter', 'Fredoka', sans-serif;
background: ${({active}) => active ? '#fff' : 'none'};
box-shadow: ${({active}) => active ? '0 2px 8px 0 rgba(31,38,135,0.06)' : 'none'};

&:hover {
    color: #18181b;
    background: ${({active}) => active ? '#fff' : 'rgba(0,0,0,0.04)'};
}

svg {
    width: 22px;
    height: 22px;
}
`;
const Spacer = styled.div`
flex: 1;
`;
const Logout = styled(NavItem)`
color: #f87171;
border-left: none;
font-weight: 500;
&:hover {
    background: rgba(248, 113, 113, 0.08);
}
`;


const Sidebar = () => {
    const [active, setActive] = React.useState('Dashboard');
    return (
        <SidebarContainer>
           <Logo>Rythm</Logo>
            <NavSection>
                <NavItem active={active === 'Dashboard'} onClick={() => setActive('Dashboard')}>
                    <HomeIcon />
                    Dashboard
                </NavItem>
                <NavItem active={active === 'My Habits'} onClick={() => setActive('My Habits')}>
                    <ChartBarIcon />
                    Analytics
                </NavItem>
                <NavItem active={active === 'Calendar'} onClick={() => setActive('Calendar')}>
                    <CalendarIcon />
                    Calendar
                </NavItem>
                <NavItem active={active === 'Statistics'} onClick={() => setActive('Statistics')}>
                    <ChartPieIcon />
                    Statistics
                </NavItem>
                <NavItem active={active === 'Reminders'} onClick={() => setActive('Reminders')}>
                    <BellIcon />
                    Reminders
                </NavItem>
                <NavItem active={active === 'Settings'} onClick={() => setActive('Settings')}>
                    <Cog6ToothIcon />
                    Settings
                </NavItem>
                <NavItem active={active === 'To-Do List'} onClick={() => setActive('To-Do List')}>
                    <ClipboardDocumentListIcon />
                    To-Do List
                </NavItem>
                <NavItem active={active === 'Habit Tracker'} onClick={() => setActive('Habit Tracker')}>
                    <ClockIcon />
                    Habit Tracker
                </NavItem>
            </NavSection>
            <Spacer />
            <Logout onClick={() => setActive('Logout')}>Logout</Logout>
        </SidebarContainer>
    )
}
export default Sidebar;