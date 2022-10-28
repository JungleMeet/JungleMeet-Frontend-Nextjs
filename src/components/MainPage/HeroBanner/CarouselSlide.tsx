import React from "react";
import ButtonWatchTrailer from "./ButtonWatchTrailer";
import { Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Carousel } from "@mantine/carousel";
import TMDBRanking from "../TMDBRanking";

interface ICarouselSlideProps {
    title: string;
    voteAverage: string;
    overview: string;
    heroBanner: string;
    id: number;
}

const CarouselSlide = ({
    title,
    voteAverage,
    overview,
    heroBanner,
    id,
}: ICarouselSlideProps): JSX.Element => {
    return (
        <Carousel.Slide key={title}>
            <Flex
                flexDir="column"
                gap="16px"
                pos="absolute"
                bottom="220px"
                left="80px"
                width="40%"
                padding="30px 50px"
                backgroundColor="rgba(0,0,0,0.4)"
                borderRadius="20px"
            >
                <Heading as="h1" fontSize="h1" fontWeight="800" color="white" display="inline-block">
                    {title}
                </Heading>
                <TMDBRanking gap="72.25px" tmdb={+voteAverage} color="white" />
                <Text color="white" textStyle="myText">
                    {overview}
                </Text>
                <ButtonWatchTrailer value={id} />
            </Flex>
            <Image src={heroBanner} boxSize="100%" objectFit="cover" alt="hero image" />
        </Carousel.Slide>
    );
};

export default CarouselSlide;
