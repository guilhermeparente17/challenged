import React, {useContext} from 'react'
import {
    HeaderContainer,
    HeaderMenu,
    HeaderLogo,
    HeaderLink,
    HeaderIcon,
    HeaderButtonWrap
} from './headerElements'
import { AppContext } from '../../Context/ContextApp'

import Logo from '../../assets/logo.svg'
import Menu from '../../assets/hamburger.png'
import Botao from '../Botao/Botao'

const Header = () => {
    const {isOpen, toggle} = useContext(AppContext)
    console.log(isOpen)
    return (
        <div>
            <HeaderContainer isOpen={isOpen}>
                <HeaderIcon onClick={toggle} src={Menu} />
                <HeaderMenu>
                    <HeaderLogo src={Logo} />
                    <HeaderLink>How it works</HeaderLink>
                    <HeaderLink>About Us</HeaderLink>
                </HeaderMenu>
                <HeaderButtonWrap>
                    <Botao />
                </HeaderButtonWrap>
            </HeaderContainer>
        </div>
    )
}

export default Header
