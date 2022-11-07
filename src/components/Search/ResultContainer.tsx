import { Box, Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ViewIcon } from "@chakra-ui/icons";

interface ISearchResultContainer {
    children: ReactNode;
    viewMoreResult: () => void;
}

const ResultContainer = ({ children, viewMoreResult }: ISearchResultContainer):JSX.Element => {
    return (
        <Box bg="gray.200" borderRadius={"5px"} pt={"13px"} pl={"25px"} pr="25px">
            {children}
            <Box mt={0}>
                <Button
                    leftIcon={<ViewIcon color="blue.500" />}
                    color="blue.500"
                    fontSize="h6"
                    fontWeight="700"
                    background={"transparent"}
                    _hover={{ background: "gray.300" }}
                    onClick={viewMoreResult}
                >
          More results...
                </Button>
            </Box>
        </Box>
    );
};

export default ResultContainer;
