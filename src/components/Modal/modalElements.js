import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(32, 14, 100, 0.8); /* Green background with 30% opacity */
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const ModalCard = styled.div`
    width: 525px;
    height: 479px;
    background: #6A40E4;
    border-radius: 4px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
`



    export const Icon = styled.div`
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
    `
export const ModalTitle = styled.h2`
    color:white;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
`
export const ModalSubtitle = styled.h1`
    color:white;
    font-family: Poppins;
    font-style: regular;
    font-weight: 700;
    font-size: 44px;
    width: 100%;
    margin-top: -15px;
    color: #feeba4;
    margin-bottom: 40px ;
`
export const ModalForm = styled.form`

`
export const ModalUsername = styled.label`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 191.68%;
    color: #FFFFFF;
`
export const ModalInput = styled.input`
    background:#7853e6;
    
    border: 2px solid #8d6aea;
    box-sizing: border-box;
    border-radius: 4px;
    width: 445px;
    height: 56px;
    margin-bottom: 16px;
    padding: 15px;
    color: white;
    color: white;
    z-index: 999;
    outline: 0;
    font-size: 22px;
    color: white;
    
    
`
export const ModalPassword = styled.label`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 191.68%;
    /* identical to box height, or 31px */
    

    color: #FFFFFF;
`
export const ModalSubmit = styled.button`
    width: 100px;
    height: 40px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 191.68%;
    background:#FFD74F;
    border: none;
    outline: 0;
    cursor: pointer;
    /* identical to box height, or 27px */
    text-transform: uppercase;
    color: #744FF4;
    border-radius: 4px;
    margin-top: 7px;
`
export const ModalCloseBtn = styled.img`
    position: absolute;
    width: 51px;
    height: auto;
    top: -20px;
    right:-20px;
    cursor: pointer;
`
export const ModalBtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`
export const ModalPassowrd = styled.div`
    position: relative;
`
export const ModelIconPass = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
`