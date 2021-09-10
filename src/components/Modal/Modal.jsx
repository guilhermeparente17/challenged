import React, { useContext, useState } from 'react'
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
    ModelIconPass,
    DivInput
} from './modalElements'

import Botao from '../../assets/btn--close.svg'
import IconEye from '../../assets/icon-eye.svg'
import IconEyeShow from '../../assets/icon-eye-show.svg'
import CloseBig from '../../assets/close_big.svg'

const Modal = () => {
    const [image, setImage] = useState(Botao);

  function changeImage() {
    if (window.innerWidth <= 600) {
      setImage(
        CloseBig
      );
    } else {
      setImage(Botao);
    }
  }

  window.addEventListener("resize", changeImage);
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

            <ModalCloseBtn 
            onClick={() => setIsOpenModal(false)} 
            src={image}  
            />

                <ModalTitle>Get Started</ModalTitle>
                <ModalSubtitle>JUST LOGIN</ModalSubtitle>

                <ModalForm onClick={togglePassword}>
                    <DivInput>
                    <ModalUsername>Username</ModalUsername><br />
                    <ModalInput />
                    </DivInput>

                    <DivInput>
                    <ModalPassword>Password</ModalPassword><br />
                    <ModalPassowrd >
                        <ModalInput type={isOpenPassword ? "text" : "password"} />
                        <ModelIconPass onClick={toggle}
                         src={isOpenPassword ? IconEye : IconEyeShow } 
                        
                        />
                    </ModalPassowrd>
                    </DivInput>
                    <ModalBtnWrap >
                        <ModalSubmit type="submit">login</ModalSubmit>
                    </ModalBtnWrap>
                </ModalForm>
            </ModalCard>
        </ModalContainer>
    )
}

export default Modal
