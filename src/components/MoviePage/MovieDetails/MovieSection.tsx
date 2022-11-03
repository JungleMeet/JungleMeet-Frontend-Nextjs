import React from "react";
import { SectionContainer } from "../../MainPage/Containers";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import MovieDetailsButton from "./MovieDetailsButton";
import MovieDetailsText from "./MovieDetailsText";
import TrailorsPlayButton from "./TrailorsPlayButton";

const MovieSection = () => {
    return (
        <SectionContainer>
            <Box display="flex" flexDirection="column">
                <Link>
                    <Heading as="h1" textColor="#000" fontSize="36px" fontWeight="800" lineHeight="40px">
            Dune: Part One
                    </Heading>
                </Link>
                <Flex marginTop="20px" justifyContent="space-between" mt="39px">
                    <Flex>
                        <Flex marginRight="16px">
                            <Image src="/reservoirdogs.jpg" />
                        </Flex>
                        <Flex flexDirection="column">
                            <MovieDetailsText>Director:</MovieDetailsText>
                            <MovieDetailsText>Writers:</MovieDetailsText>
                            <MovieDetailsText>Stars:</MovieDetailsText>
                            <MovieDetailsText>Country:</MovieDetailsText>
                            <MovieDetailsText>Date:</MovieDetailsText>
                            <MovieDetailsText>Length:</MovieDetailsText>
                            <MovieDetailsText>Language:</MovieDetailsText>
                        </Flex>
                    </Flex>
                    <Box>
                        <Flex gap="51px">
                            <Box>
                                <Text fontWeight="600" fontSize="18px" lineHeight="32px" color="#000">
                  TMDB Rating
                                </Text>
                                <Flex mt="22px" mb="16px">
                                    <Image src="/tmdb.svg" mr="10px" width="39px" />
                                    <Text fontWeight="400" fontSize="24px" lineHeight="32px" color="gray.900">
                    8.4/10
                                    </Text>
                                </Flex>
                                <Text fontWeight="500" fontSize="16px" lineHeight="24px" color="gray.900">
                  609,000 Votes
                                </Text>
                            </Box>
                            <Flex alignItems="center" flexDirection="column">
                                <Text fontWeight="600" fontSize="18px" lineHeight="32px" color="#000" mb="24px">
                  Trailors Option
                                </Text>
                                <TrailorsPlayButton value={0} />
                            </Flex>
                        </Flex>
                        <Flex
                            justifyContent="space-between"
                            borderBottom="1px"
                            borderBottomColor="gray.200"
                            width="294px"
                            left="1045px"
                            top="392px"
                            mt="30px"
                            mb="30px"
                        ></Flex>
                        <Box>
                            <Flex justifyContent="space-between">
                                <Flex flexDirection="column" justifyContent="center">
                                    <Image
                                        src="/Review.svg"
                                        width="145px"
                                        height="37px"
                                        color="blue.200"
                                        position="absolute"
                                        borderRadius="5px"
                                        mr="249px"
                                    ></Image>
                                    <Image
                                        src="/writeReview.svg"
                                        width="15px"
                                        height="16px"
                                        color="blue.400"
                                        position="relative"
                                        ml="29.5px"
                                    ></Image>
                                    <Text
                                        position="absolute"
                                        fontWeight="700"
                                        fontSize="18px"
                                        color="blue.500"
                                        ml="50px"
                                    >
                    Review
                                    </Text>
                                </Flex>
                                <Flex gap="10.5px">
                                    <Image src="/Link.svg" color="blue.500" position="absolute" mr="182.5px"></Image>
                                    <Image
                                        src="/Share.svg"
                                        fontFamily="DM Sans"
                                        fontWeight="500"
                                        fontSize="18px"
                                        width="55px"
                                        height="21px"
                                        color="blue.500"
                                        position="relative"
                                        ml="29.5px"
                                    ></Image>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <Flex gap="25px" marginTop="39px" marginBottom="65px">
                    <MovieDetailsButton>Active</MovieDetailsButton>
                    <MovieDetailsButton>Adventure</MovieDetailsButton>
                    <MovieDetailsButton>Drama</MovieDetailsButton>
                    <MovieDetailsButton>Active</MovieDetailsButton>
                </Flex>
                <Heading as="h2" color="#000" fontSize="30px" lineHeight="40px" fontWeight="700" pb="12px">
          Movie Description
                </Heading>
                <Text fontSize="24px" color="#000" fontWeight="400" lineHeight="32px">
          A noble family becomes embroiled in a war for control over the galaxy most valuable asset
          while its heir becomes troubled by visions of a dark future.
                </Text>
            </Box>
        </SectionContainer>
    );
};

export default MovieSection;
