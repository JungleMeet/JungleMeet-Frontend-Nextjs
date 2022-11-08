import ArrowLeftSVG from "@/assets/ArrowLeftSVG";
import ArrowRightSVG from "@/assets/ArrowRightSVG";
import { Flex, Text, Input, HStack } from "@chakra-ui/react";
import React from "react";
import PageButton from "./PageButton";
import PageNumber from "./PageNumber";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/app/reducer/pageSlice";
import { useTranslation } from "next-i18next";

interface IPaginationProps {
    postsPerPage: number;
    totalPosts: number;
}

const Pagination = ({ postsPerPage, totalPosts }: IPaginationProps) => {
    const pageNumbers = [];
    const dispatch = useDispatch();
    const currentPage = useSelector((state: any) => state.page.currentPage);
    const { t } = useTranslation("home");

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const jumpToHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            parseInt(e.currentTarget.value) >= 1 &&
        parseInt(e.currentTarget.value) <= Math.ceil(totalPosts / postsPerPage) &&
        dispatch(setCurrentPage(parseInt(e.currentTarget.value)));
        }
    };

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
                <PageNumber key={number} onClick={() => dispatch(setCurrentPage(number))}>
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
                    {t("home:jumpTo")}
                </Text>
                <Input type="number" width="45px" marginLeft="16px" onKeyDown={jumpToHandler} />
            </Flex>
        </Flex>
    );
};

export default Pagination;
