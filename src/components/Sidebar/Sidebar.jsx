import React, {useContext} from 'react'
import Botao from '../Botao/Botao'
import { AppContext } from '../../Context/ContextApp'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink
} from './sidebarElements'


const Sidebar = () => {
    const {isOpen, toggle} = useContext(AppContext)
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>How it works</SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>About Us</SidebarLink>
                </SidebarMenu>
                <Botao />
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
