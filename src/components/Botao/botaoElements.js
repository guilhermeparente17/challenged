import styled from 'styled-components';

export const HeaderButtom = styled.button`
    cursor: pointer;
    width: 165px;
    height: 40px;
    background-color: #FFD74F;
    color: #6F48EC;
    font-family: 'Open Sans',sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    outline: 0;
    border: none;
    border-radius: 5px;

    @media screen and (max-width: 600px){
        width: 145px;
    }
    @media screen and (max-width: 500px){
        width: 272px;
    }
`