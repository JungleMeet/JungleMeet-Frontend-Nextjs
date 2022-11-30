import { Button } from "@chakra-ui/react";
import React from "react";
interface IPageButton {
    children: React.ReactChild;
    onBtnClick: () => void;
}
const PageButton = ({ children, onBtnClick }: IPageButton) => {
    return (
        <Button
            bg="transparent"
            _hover={{
                background: "transparent",
                border: "none",
            }}
            _focus={{ border: "none" }}
            onClick={onBtnClick}
        >
            {children}
        </Button>
    );
};

export default PageButton;
