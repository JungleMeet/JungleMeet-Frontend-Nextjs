import React from "react";
import ButtonWatchTrailer from "./ButtonWatchTrailer";
import {
    Heading,
    Text,
    Flex,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { Carousel } from "@mantine/carousel";
// import PlayingMovieTrailerModel from "@/components/PlayingMovieTrailerModel/PlayingMovieTrailerModel";
import TMDBRanking from "../TMDBRanking";

interface ICarouselSlideProps {
    title: string;
    voteAverage: number;
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Carousel.Slide key={title}>
            <Flex
                flexDir="column"
                gap="16px"
                pos="absolute"
                bottom="50px"
                left="80px"
                width="40%"
                padding="30px 50px"
                backgroundColor="rgba(0,0,0,0.4)"
                borderRadius="20px"
            >
                <Heading as="h1" fontSize="h1" fontWeight="800" color="white" display="inline-block">
                    {title}
                </Heading>
                <TMDBRanking gap="72.25px" tmdb={voteAverage} color="white" />
                <Text color="white" textStyle="myText">
                    {overview}
                </Text>
                <ButtonWatchTrailer value={id} onClick={onOpen} />

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
                    <ModalContent mt="30px" mb="10px" maxW="583px" minH="583px">
                        <ModalCloseButton />
                        <ModalBody>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/PdEKecHDhG4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
            <Image src={heroBanner} boxSize="100%" objectFit="cover" alt="hero image" />
        </Carousel.Slide>
    );
};

export default CarouselSlide;
