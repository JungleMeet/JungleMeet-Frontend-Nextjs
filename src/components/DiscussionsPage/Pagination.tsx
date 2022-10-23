import ArrowLeftSVG from "@/assets/ArrowLeftSVG";
import ArrowRightSVG from "@/assets/ArrowRightSVG";
import { Flex, Text, Input, HStack } from "@chakra-ui/react";
import React from "react";
import PageButton from "./PageButton";
import PageNumber from "./PageNumber";

const Pagination = () => {
    return (
        <Flex justifyContent="center" gap="30px" marginTop="55px">
            <Flex alignItems="center">
                <PageButton>
                    <ArrowLeftSVG fill="#000" />
                </PageButton>
                <HStack spacing="14px">
                    <PageNumber>1</PageNumber>
                    <PageNumber>2</PageNumber>
                    <PageNumber>3</PageNumber>
                </HStack>
                <PageButton>
                    <ArrowRightSVG fill="#000" />
                </PageButton>
            </Flex>
            <Flex alignItems="center">
                <Text fontSize="text2" lineHeight="lh32">
          Jump To
                </Text>
                <Input width="45px" marginLeft="16px" />
            </Flex>
        </Flex>
    );
};

export default Pagination;
