import React,{useState} from 'react';
import styled from 'styled-components';
import { 
    HomeIcon, 
    ChartBarIcon, 
    CalendarIcon, 
    ChartPieIcon, 
    BellIcon, 
    Cog6ToothIcon 
} from '@heroicons/react/24/outline';

interface NavItemProps{
    active?:boolean;
}

const SidebarContainer = styled.div`
position : fixed;
left:20px;
top: 20px;
bottom:20px;
width: 200px;
background-color: #18181b;
display: flex;
flex-direction: column;
padding: 24px 0;
border-radius:20px;
z-index:100;
`;

const Logo = styled.div`
font-size: 24px;
font-weight: 700;
margin-bottom: 40px;
text-align: center;
letter-spacing: 1px;
font-family: 'Inter', sans-serif;
background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const NavSection = styled.div`
margin-bottom: 32px;
`;

const NavItem = styled.div<NavItemProps>`
padding: 12px 24px;
cursor: pointer;
margin: 4px 12px;
color: ${({active}) => active ? '#fff' : '#71717a'};
font-weight: ${({active}) => active ? '600' : '500'};
font-size: 0.95rem;
letter-spacing: 0.2px;
transition: all 0.2s ease;
display: flex;
align-items: center;
gap: 12px;
border-left: 2px solid ${({active}) => active ? '#fff' : 'transparent'};
border-radius: 0 8px 8px 0;
font-family: 'Inter', sans-serif;

&:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
}

svg {
    width: 20px;
    height: 20px;
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
    background: rgba(248, 113, 113, 0.1);
}
`;


const Sidebar = () => {
    const [active, setActive] = React.useState('Dashboard');
    return (
        <SidebarContainer>
            <Logo>RYTHM</Logo>
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
            </NavSection>
            <Spacer />
            <Logout onClick={() => setActive('Logout')}>Logout</Logout>
        </SidebarContainer>
    )
}
export default Sidebar;