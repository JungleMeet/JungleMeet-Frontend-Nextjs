import { Text } from "@chakra-ui/react";
import React from "react";

const MovieDetailsText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text color="#000" fontSize="20px" lineHeight="28px" fontWeight="500px">
            {children}
        </Text>
    );
};

export default MovieDetailsText;
