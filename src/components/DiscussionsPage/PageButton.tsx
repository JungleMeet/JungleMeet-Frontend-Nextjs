import { Button } from "@chakra-ui/react";
import React from "react";

const PageButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button
            bg="transparent"
            _hover={{
                background: "transparent",
                border: "none",
            }}
            _focus={{ border: "none" }}
        >
            {children}
        </Button>
    );
};

export default PageButton;
