import { Box } from "@chakra-ui/react";
import React from "react";

interface IPageNumberProps {
    children: React.ReactNode;
    onClick: () => void;
}

const PageNumber = React.forwardRef<HTMLDivElement, IPageNumberProps>(
    ({ children, onClick }, ref) => {
        return (
            <Box
                color="gray.400"
                textAlign="center"
                fontSize="text1"
                lineHeight="lh32"
                width="20px"
                fontWeight="700"
                border="3px solid"
                borderColor="transparent"
                borderRadius="3px"
                _active={{
                    borderBottom: "3px solid #000",
                    color: "#000",
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
            </Box>
        );
    }
);

PageNumber.displayName = "PageNumber"

export default PageNumber;
