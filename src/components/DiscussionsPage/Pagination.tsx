import ArrowLeftSVG from "@/assets/ArrowLeftSVG";
import ArrowRightSVG from "@/assets/ArrowRightSVG";
import { Flex, Text, Input, HStack } from "@chakra-ui/react";
import React from "react";
import PageButton from "./PageButton";
import PageNumber from "./PageNumber";
// import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/app/reducer/pageSlice";

interface IPaginationProps {
    postsPerPage: number;
    totalPosts: number;
    // paginate: (number: number) => void;
}

const Pagination = ({ postsPerPage, totalPosts }: IPaginationProps) => {

    const pageNumbers = [];
    const dispatch = useDispatch();
    const currentPage = useSelector((state: any) => state.page.currentPage);
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Flex justifyContent="center" gap="30px" marginTop="55px">
            <Flex alignItems="center">
                <PageButton
                    onBtnClick={() => {
                        currentPage > 1 && dispatch(setCurrentPage(currentPage - 1));
                    }}
                >
                    <ArrowLeftSVG fill="#000" />
                </PageButton>
                <HStack spacing="14px">
                    {pageNumbers.length > 0 &&
            pageNumbers.map((number) => (
                <PageNumber
                    key={number}
                    onClick={() => dispatch(setCurrentPage(number))}
                >
                    {number}
                </PageNumber>
            ))}
                </HStack>
                <PageButton
                    onBtnClick={() => {
                        currentPage < Math.ceil(totalPosts / postsPerPage) &&
              dispatch(setCurrentPage(currentPage + 1));
                    }}
                >
                    <ArrowRightSVG fill="#000" />
                </PageButton>
            </Flex>
            <Flex alignItems="center">
                <Text fontSize="text2" lineHeight="lh32">
          Jump To
                </Text>
                <Input
                    type="number"
                    width="45px"
                    marginLeft="16px"
                    onBlur={(e) => {
                        parseInt(e.target.value) >= 1 ||
              (parseInt(e.target.value) <= Math.ceil(totalPosts / postsPerPage) &&
                dispatch(setCurrentPage(parseInt(e.target.value))));
                    }}
                    // value={currentPage}
                    // type='submit'
                />
            </Flex>
        </Flex>
    );
};

export default Pagination;
