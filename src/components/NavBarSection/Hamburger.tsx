import {Image} from "@chakra-ui/react";
import styled from "styled-components";

const HamburgerContainer = styled.div`
    border-radius: 50%;
    background-color: #BE123C;
    padding: 13.2px 9.6px;
`;

const Hamburger = () => {
    return (
        <HamburgerContainer>
            <Image src='./hamburger.svg'/>
        </HamburgerContainer>    
    )
};

export default Hamburger;
