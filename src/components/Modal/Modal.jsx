import React, { useContext } from 'react'
import { AppContext } from '../../Context/ContextApp'

import {
    ModalContainer,
    ModalCard,
    ModalTitle,
    ModalSubtitle,
    ModalForm,
    ModalUsername,
    ModalInput,
    ModalPassword,
    ModalSubmit,
    ModalCloseBtn,
    ModalBtnWrap,
    ModalPassowrd,
    ModelIconPass
} from './modalElements'

import Botao from '../../assets/btn--close.svg'
import IconEye from '../../assets/icon-eye.svg'
import IconEyeShow from '../../assets/icon-eye-show.svg'

const Modal = () => {
    const { 
        isOpenModal, 
        setIsOpenModal, 
        togglePassword,
        isOpenPassword,
        setIsOpenPassword
    } = useContext(AppContext)
    

    const toggle = () => {
        setIsOpenPassword(!isOpenPassword)
    }
    
    return (
        <ModalContainer isOpen={isOpenModal}>
            <ModalCard >

            <ModalCloseBtn onClick={() => setIsOpenModal(false)} src={Botao} />

                <ModalTitle>Get Started</ModalTitle>
                <ModalSubtitle>JUST LOGIN</ModalSubtitle>

                <ModalForm onClick={togglePassword}>
                    <ModalUsername>Username</ModalUsername><br />
                    <ModalInput />
                    <ModalPassword>Password</ModalPassword><br />

                    <ModalPassowrd >
                        <ModalInput type={isOpenPassword ? "text" : "password"} name="password" />
                        <ModelIconPass onClick={toggle}
                         src={isOpenPassword ? IconEye : IconEyeShow } 
                        
                        />
                    </ModalPassowrd>
                    

                    <ModalBtnWrap>
                        <ModalSubmit type="submit">login</ModalSubmit>
                    </ModalBtnWrap>
                </ModalForm>
            </ModalCard>
        </ModalContainer>
    )
}

export default Modal
