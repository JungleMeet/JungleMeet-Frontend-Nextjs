import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

interface ILoadingSpinner {
    id?: string;
}
const LoadingSpinner = ({id}:ILoadingSpinner) =>{
    return (
        <Box
            id={id}
            width="450px"
            height="253px"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Spinner size="xl" color="black" thickness="4px" emptyColor="gray.200" />
        </Box>

    );
}

export default LoadingSpinner;