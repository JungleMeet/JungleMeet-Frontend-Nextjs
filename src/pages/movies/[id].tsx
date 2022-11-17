import { FaPen } from "react-icons/fa";
import { Button, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import ReviewPosts from "@/components/MoviePage/PopularReview/ReviewPosts";
import {
    SectionContainer,
    SectionHeaderContainer,
    SectionTitle,
} from "@/components/MainPage/Containers";
import PageWrapper from "@/components/PageWrapper";
import MovieSection from "@/components/MoviePage/MovieDetails/MovieSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticPaths } from "next/types";

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
const PopularReview = (): JSX.Element => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <PageWrapper>
            <MovieSection />
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
                            <Button leftIcon={<FaPen />} colorScheme="twitter" variant="solid">
                Review
                            </Button>
                        </Stack>
                    </div>
                    {/* write a new review part END */}
                </SectionHeaderContainer>
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
