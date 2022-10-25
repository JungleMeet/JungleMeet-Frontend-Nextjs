import ArrowLeftSVG from "@/assets/ArrowLeftSVG";
import ArrowRightSVG from "@/assets/ArrowRightSVG";
import { Flex, Text, Input, HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PageButton from "./PageButton";
import PageNumber from "./PageNumber";
import Link from "next/link";

interface IPaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (number: number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: IPaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const element = React.useRef<HTMLDivElement>(null);

    // console.log("+++++",element.current);

    useEffect(() => {
        if (element.current) {
            element.current.focus();
        }
    }, []);

    return (
        <Flex justifyContent="center" gap="30px" marginTop="55px">
            <Flex alignItems="center">
                <PageButton>
                    <ArrowLeftSVG fill="#000" />
                </PageButton>
                <HStack spacing="14px">
                    {pageNumbers.length > 0 &&
            pageNumbers.map((number) => (
                <Link href="#" key={number}>
                    {/* <PageNumber onClick={() => paginate(number)} ref={element}> */}
                    <PageNumber onClick={() => paginate(number)}>{number}</PageNumber>
                </Link>
            ))}
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
