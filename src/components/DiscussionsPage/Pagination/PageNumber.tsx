import React from "react";
import styled from 'styled-components';

interface IPageNumberProps {
    children: React.ReactNode;
    onClick: () => void;
    isActive:boolean;
}
interface INumberContainerProps{
    isActive:boolean;
}

const NumberContainer=styled.div<INumberContainerProps>`
    text-align: center;
    font-size: 24px;
    min-width: 20px;
    font-weight: 700;
    border: 3px solid;
    border-color: transparent;
    color: ${({isActive})=>isActive?"#000":"#9CA3AF"};

    &:hover{
        border-bottom: 3px solid #000;
        color:#000;
        cursor:pointer;
    }
`


const PageNumber=({children, onClick,isActive}:IPageNumberProps)=>{
    return (<NumberContainer onClick={onClick} isActive={isActive}>
        {children}
    </NumberContainer>)
}

export default PageNumber;
