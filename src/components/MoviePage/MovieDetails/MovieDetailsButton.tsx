import { Button } from "@chakra-ui/react";
import React from "react";

const MovieDetailsButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button
            bg="#D9D9D9"
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

export default MovieDetailsButton;
