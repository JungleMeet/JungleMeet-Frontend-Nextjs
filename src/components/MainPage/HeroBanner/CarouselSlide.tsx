import React, { memo } from "react";
import ButtonWatchTrailer from "./ButtonWatchTrailer";
import { Heading, Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { Carousel } from "@mantine/carousel";
import TMDBRanking from "../TMDBRanking";
import PlayingMovieTrailerModel from "@/components/PlayingMovieTrailerModel";

export interface ICarouselSlideProps {
    title: string;
    voteAverage: number;
    overview: string;
    heroBanner: string;
    id: number;
    youtubeLink: string;
    loading: boolean;
}

const CarouselSlide = ({
    title,
    voteAverage,
    overview,
    heroBanner,
    id,
    youtubeLink,
    loading,
}: ICarouselSlideProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Carousel.Slide key={title}>
            <Flex
                flexDir="column"
                gap={["10px", "10px", "16px"]}
                pos="absolute"
                bottom={["40px", "60px", "120px"]}
                left={["5%", "5%", "80px"]}
                width={["90%", "90%", "40%"]}
                padding={["15px 20px", "15px 20px", "30px 50px"]}
                backgroundColor="rgba(0,0,0,0.4)"
                borderRadius="20px"
                minW="500px"
            >
                <Heading
                    as="h1"
                    fontSize={["h3", "h2", "h1"]}
                    fontWeight="800"
                    color="white"
                    display="inline-block"
                >
                    {title}
                </Heading>
                <TMDBRanking gap="72.25px" tmdb={voteAverage} color="white" />
                <Box color="white" textStyle="myText" noOfLines={[2, 2, 5]}>
                    {overview}
                </Box>
                <ButtonWatchTrailer value={id} onClick={onOpen} loading={loading} />
                <PlayingMovieTrailerModel isOpen={isOpen} onClose={onClose} src={youtubeLink} />
            </Flex>
            <Image src={heroBanner} boxSize="100%" objectFit="cover" alt="hero image" />
        </Carousel.Slide>
    );
};

export default memo(CarouselSlide);
