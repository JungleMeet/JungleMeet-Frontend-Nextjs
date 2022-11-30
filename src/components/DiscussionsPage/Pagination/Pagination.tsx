import ArrowLeftSVG from "@/assets/ArrowLeftSVG";
import ArrowRightSVG from "@/assets/ArrowRightSVG";
import { Flex, Text, Input, HStack } from "@chakra-ui/react";
import React from "react";
import PageButton from "./PageButton";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/app/reducer/pageSlice";
import { useTranslation } from "next-i18next";
import NumberContainer from "./NumberContainer";
import usePaginationArrayGenerator from "@/hooks/usePaginationArrayGenerator";

interface IPaginationProps {
    postsPerPage: number;
    totalPosts: number;
}

type HandleClickOnPageElementArg = string | number;

const Pagination = ({ postsPerPage, totalPosts }: IPaginationProps):JSX.Element => {
    // const pageNumbers = [];
    const dispatch = useDispatch();
    const currentPage = useSelector((state: any) => state.page.currentPage);
    const { t } = useTranslation("home");
    const totalPage = Math.ceil(totalPosts / postsPerPage);
    const { paginationArray, handleClickOnLeftDot, handleClickOnRightDot, setCentrePage } =
    usePaginationArrayGenerator({ totalPage });

    const handleClickOnPageElement = (element: HandleClickOnPageElementArg) => {
        if (typeof element === "number")
            return () => {
                dispatch(setCurrentPage(element));
                setCentrePage(element);
            };
        if (element === "leftDot") return handleClickOnLeftDot;
        if (element === "rightDot") return handleClickOnRightDot;
    };

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
                    {paginationArray.length > 0 &&
            paginationArray.map((element) => {
                return (
                    <NumberContainer
                        key={element}
                        onClick={handleClickOnPageElement(element)}
                        isActive={currentPage === element}
                    >
                        {typeof element === "string" ? "..." : element}
                    </NumberContainer>
                );
            })}
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
                <Input type="number" width="4rem" marginLeft="16px" onKeyDown={jumpToHandler} />
            </Flex>
        </Flex>
    );
};

export default Pagination;
