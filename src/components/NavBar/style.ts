import Container from '@mui/material/Container';
import styled from 'styled-components';

export const Nav =  styled.div`
    width: 100%;
    height: 80px;

    margin: 0 0 30px 0;

    display: flex;

    background-color: transparent;
`

export const DropdownContainer = styled.div`
    margin-top: 50px;
    position: absolute;

    z-index: 2;

    border-radius: 5px;
    padding: 0px 15px;
    background-color: #282F37;
`

export const Content = styled(Container)`
    display: flex !important;
    width: 100%;
    
    justify-content: space-between !important;
    align-items: center;
`

export const ContentButton = styled.div`
`

interface ButtonProps {
    active: boolean
}

export const Button = styled.a<ButtonProps>`
    color: #FFFFFF;
    
    margin: 15px 0;
    display: flex;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;

    cursor: pointer;
    transition: all 0.1s linear;

    pointer-events: ${({active}) => active ? 'auto' : 'none'};
    opacity: ${({active}) => active ? '1' : '0.4'};

    &:hover {
        opacity: 0.6;
    }

    span {
        margin-left: 6px;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;

    border-radius: 5px;

    background-color: #22272E; 
`