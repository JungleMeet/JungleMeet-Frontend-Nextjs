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

const PopularReview = (): JSX.Element => {
    return (
        <PageWrapper>
            <MovieSection />
            <SectionContainer>
                <SectionHeaderContainer>
                    <SectionTitle>Popular Review</SectionTitle>
                    <div>
                        <Text
                            fontWeight="400"
                            fontSize="18px"
                            color="rose.700"
                            marginRight="800px"
                            lineHeight="24px"
                        >
              106 reviews &nbsp; &gt;
                        </Text>
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
                <Text fontWeight="400" fontSize="18px" color="rose.700" lineHeight="24px">
          See more Reviews (106 reviews) &nbsp; &gt;
                </Text>
            </SectionContainer>
        </PageWrapper>
    );
};

export default PopularReview;
