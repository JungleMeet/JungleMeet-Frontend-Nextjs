import { Text, Image } from "@chakra-ui/react";
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
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

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
                    {/* write a new review part  */}
                    <div>
                        <Image
                            src="/Review.svg"
                            width="145px"
                            height="37px"
                            color="blue.200"
                            position="absolute"
                            marginLeft="-47.5px"
                            borderRadius="5px"
                            margin-top="-5px"
                        ></Image>
                        <Image
                            src="/writeReview.svg"
                            width="15px"
                            height="16px"
                            color="blue.400"
                            position="absolute"
                            marginLeft="-25px"
                            marginTop="6px"
                        ></Image>
                        <Text fontWeight="700" fontSize="18px" color="blue.500">
              Review
                        </Text>
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
                    >
            See more Reviews&nbsp; &gt; (109 reviews)
                    </Text>
                </Link>
            </SectionContainer>
        </PageWrapper>
    );
};

export default PopularReview;
