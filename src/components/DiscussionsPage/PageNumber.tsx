import { Link } from "@chakra-ui/react";
import React from "react";
// import styled, { css } from 'styled-components';

// const activeStyles = css`
//     color: #000;
//     border-bottom: 3px solid #000;

// `;

// const NumberWrapper = styled.div`
//     color:#9CA3AF;
//     font-size: 24px;
//     line-height: 32px;
//     text-align: center;
//     width: 20px;
//     font-weight: 700;
//     cursor: pointer;
//     border: 3px solid;
//     border-color: transparent;

//     :hover {
//         ${activeStyles}
//     }
/* 
    ${({active}) => active && activeStyles} */

// `
interface IPageNumberProps {
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
}

const PageNumber = React.forwardRef<HTMLAnchorElement, IPageNumberProps>(
    ({ children, onClick }, ref) => {
        return (
            <Link
                color="gray.400"
                textAlign="center"
                fontSize="text1"
                lineHeight="lh32"
                width="20px"
                fontWeight="700"
                _visited={{
                    borderBottom: "3px solid #000",
                    color: "#000",
                    cursor: "pointer",
                }}
                _focus={{
                    borderBottom: "3px solid #000",
                    color: "#000",
                    cursor: "pointer",
                }}
                _active={{
                    borderBottom: "3px solid #000",
                    color: "#000",
                    cursor: "pointer",
                }}
                _hover={{
                    borderBottom: "3px solid #000",
                    color: "#000",
                    cursor: "pointer",
                }}
                onClick={onClick}
                ref={ref}
            >
                {children}
            </Link>
        );
    }
);

PageNumber.displayName = "PageNumber";

export default PageNumber;
