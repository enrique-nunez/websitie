import React from 'react'
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink, SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='skill' onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
