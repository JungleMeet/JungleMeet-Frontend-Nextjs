import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Movie from "./Movie";
import { SectionContainer, SectionHeaderContainer } from "../MainPage/Containers";
import PopularReview from "@/pages/movies/[id]";

const MovieSection = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <Flex alignItems="center" justifyContent="space-between" pt="100px">
                    <Heading fontSize={"h1"} fontFamily="heading">
            Movie name
                    </Heading>
                </Flex>
            </SectionHeaderContainer>
            <Movie />
            <PopularReview />
        </SectionContainer>
    );
};

export default MovieSection;
