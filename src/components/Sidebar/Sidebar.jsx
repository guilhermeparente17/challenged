import React, {useContext} from 'react'
import Botao from '../Botao/Botao'
import { AppContext } from '../../Context/ContextApp'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink,
    SidebarBtnWrap
} from './sidebarElements'


const Sidebar = () => {
    const {isOpen, toggle, toggleModal} = useContext(AppContext)
    return (
        <SidebarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
            <SidebarWrapper  onClick={toggle}>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>How it works</SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>About Us</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap onClick={toggleModal}>
                    <Botao onClick={toggleModal} />
                </SidebarBtnWrap>                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
