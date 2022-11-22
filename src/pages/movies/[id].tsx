import { FaPen } from "react-icons/fa";
import { Button, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReviewPosts from "@/components/MoviePage/PopularReview/ReviewPosts";
import {
    SectionContainer,
    SectionHeaderContainer,
    SectionTitle,
} from "@/components/MainPage/Containers";
import PageWrapper from "@/components/PageWrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticPaths } from "next/types";
import AddReview from "@/components/MoviePage/PopularReview/AddReview";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "@/app/reducer/loginModalSlice";
import { useToast } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import MovieDetails from "@components/MoviePage/MovieDetails/MovieDetails";

interface IgetStaticProps {
    locale: string;
}
export async function getStaticProps({ locale }: IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], // indicates that no page needs be created at build time
        fallback: "blocking", // indicates the type of fallback
    };
};

const PopularReview = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const toast = useToast();
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const [isEditorVisible, setIsEditorVisible] = useState(false);

    useEffect(() => {
        setIsEditorVisible(isLogged);
    }, [isLogged]);

    const toggleShowEditor = () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only registered users can make comments",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        }
        setIsEditorVisible((state) => !state);
    };

    return (
        <PageWrapper>
            <MovieDetails />
            <SectionContainer>
                <SectionHeaderContainer>
                    <Link href={`/movies/reviews/${id}`}>
                        <SectionTitle>Popular Review</SectionTitle>
                    </Link>
                    <div>
                        <Text
                            fontWeight="400"
                            fontSize="18px"
                            color="rose.700"
                            marginRight="800px"
                            lineHeight="24px"
                        ></Text>
                    </div>
                    {/* write a new review part using chakra-ui component */}
                    <div>
                        <Stack direction="row" spacing={4}>
                            {isEditorVisible ? (
                                <Button
                                    leftIcon={isEditorVisible ? <FaPen /> : <FaPen />}
                                    colorScheme="gray"
                                    variant="solid"
                                    onClick={toggleShowEditor}
                                >
                  Review
                                </Button>
                            ) : (
                                <Button
                                    leftIcon={isEditorVisible ? <TriangleUpIcon /> : <FaPen />}
                                    colorScheme="blue"
                                    variant="solid"
                                    onClick={toggleShowEditor}
                                >
                  Review
                                </Button>
                            )}
                        </Stack>
                    </div>
                    {/* write a new review part END */}
                </SectionHeaderContainer>
                <AddReview isEditorVisible={isLogged} postId={`${id}`} />
                <ReviewPosts />
                <Link href={`/movies/reviews/${id}`}>
                    <Text
                        fontWeight="400"
                        fontSize="18px"
                        color="rose.700"
                        lineHeight="24px"
                        cursor={"pointer"}
                    ></Text>
                </Link>
            </SectionContainer>
        </PageWrapper>
    );
};

export default PopularReview;
