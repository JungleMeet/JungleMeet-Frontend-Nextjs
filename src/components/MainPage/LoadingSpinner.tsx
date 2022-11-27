import React, { memo } from "react";
import { Spinner, Box } from "@chakra-ui/react";

interface ILoadingSpinner {
    id?: string;
    size: string;
    width: string;
    height: string;
}
const LoadingSpinner = ({ id, size, width, height }: ILoadingSpinner) => {
    return (
        <Box
            id={id}
            width={width}
            height={height}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Spinner size={size} color="black" thickness="4px" emptyColor="gray.200" />
        </Box>
    );
};

export default memo(LoadingSpinner);
