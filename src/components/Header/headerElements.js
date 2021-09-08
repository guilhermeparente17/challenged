import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #7A57FD;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 500px){
        justify-content: center;
    }
`
export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    
`
export const HeaderLogo = styled.img`
    width: 90px;
    height: auto;
    cursor: pointer;

    @media screen and (max-width: 500px){
        width: 80px;

    }
`
export const HeaderLink = styled.a`
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 500px){
        display: none;
    }
`

export const HeaderIcon = styled.img`
    display: none;

    @media screen and (max-width: 500px){
        display: block;
        color: white;
        margin: 0 30px 0;
        cursor: pointer;
    }
`

export const HeaderButtonWrap = styled.div`
    
    @media screen and (max-width: 500px){
        display: none;
    }
`