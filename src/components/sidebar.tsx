import React,{useState} from 'react';
import styled from 'styled-components';

interface NavItemProps{
    active?:boolean;
}

const SidebarContainer = styled.div`
position : fixed;
left:20px;
top: 20px;
bottom:20px;
width: 250px;
background-color: #18181b;
display: flex;
flex-direction: column;
padding: 24px 0;
border-radius:20px;
z-index:100;
`;

const Logo =styled.div`
font-size: 24px;
font-weight: bold;
margin-bottom:40px;
text-align:center;
letter-spacing:2px;

`;
const NavSection = styled.div`
margin-bottom: 32px;
`;

const NavItem = styled.div<NavItemProps>`
padding:14px 32px;
cursor:pointer;
border-radius:12px;
margin:4px 0;
background: ${({active}) => active ? '#fff' : 'transparent'};
color:${({active}) => active ? '#18181b' : '#fff'};
font-weight: ${({active}) => active ? 'bold' : 'normal'};
transition: background 0.2s, color 0.2s;
&:hover{
    background: #27272a;
}

`;
const Spacer = styled.div`
flex: 1;
`;
const Logout = styled(NavItem)`
color: #f87171;
background: none;
&:hover{
    background: #27272a;
}
`;


const Sidebar = () => {
    const [active, setActive] = React.useState('Dashboard');
    return (
        <SidebarContainer>
            <Logo>RYTHM</Logo>
            <NavSection>
                <NavItem active={active === 'Dashboard'} onClick={() => setActive('Dashboard')}>Dashboard</NavItem>
                <NavItem active={active === 'My Habits'} onClick={() => setActive('My Habits')}>Analytics</NavItem>
                <NavItem active={active === 'Calendar'} onClick={() => setActive('Calendar')}>Calendar</NavItem>
                <NavItem active={active === 'Statistics'} onClick={() => setActive('Statistics')}>Statistics</NavItem>
                <NavItem active={active === 'Reminders'} onClick={() => setActive('Reminders')}>Reminders</NavItem>
                    {/* maybe Community????? */}
                {/* <NavItem active={active === 'Community'} onClick={() => setActive('Community')}>Community</NavItem> */}
                <NavItem active={active === 'Settings'} onClick={() => setActive('Settings')}>Settings</NavItem>

            </NavSection>
            <Spacer />
            <Logout onClick={() => setActive('Logout')}>Logout</Logout>



        </SidebarContainer>
    )
}
export default Sidebar;