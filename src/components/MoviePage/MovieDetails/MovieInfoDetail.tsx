import React, { useState } from "react";
import { Flex, Heading, Text, Image, Divider, Button, Stack, Link } from "@chakra-ui/react";
import { FaPen, FaLink } from "react-icons/fa";

interface MovieInfoDetailProps {
    genresName: [];
    resourceId: number;
    poster: string;
    releaseDateRightFormat: string;
    title: string;
    voteAverage: number;
    voteCount: number;
    length: string;
    languages: [];
    overview: string;
    country: [];
    majorCasts: [];
    director: [];
    writer: [];
}

const MovieInfoDetail = ({
    genresName,
    resourceId,
    poster,
    releaseDateRightFormat,
    title,
    voteAverage,
    voteCount,
    length,
    languages,
    overview,
    country,
    majorCasts,
    director,
    writer,
}: MovieInfoDetailProps) => {
    const [shareCount, setShareCount] = useState(0);

    function countShare() {
        return setShareCount(shareCount + 1);
    }

    return (
        <Stack key={resourceId}>
            <Heading pt="100px">{title}</Heading>
            <Flex justify="space-between" pt="39px">
                <Flex>
                    {poster ? <Image src={poster} alt="movie poster" width="299px" /> : null}
                    <Flex
                        direction="column"
                        ml="18px"
                        width="500px"
                        fontSize="text2"
                        fontWeight="500"
                        lineHeight="lh28"
                    >
                        <Text>
              Director:{" "}
                            <Text as="b">
                                {director.length > 0 ? director?.map((item) => item) : `Not available`}
                            </Text>
                        </Text>
                        <Text>
              Writer:{" "}
                            <Text as="b">
                                {writer.length > 0 ? writer?.map((item) => ` ${item} /`) : `Not available`}
                            </Text>
                        </Text>
                        <Text>
              Stars: <Text as="b">{majorCasts.map((item: any) => ` ${item.name} / `)}</Text>
                        </Text>
                        <Text>
              Country: {country.length > 0 ? country.map((item) => ` ${item} `) : `Not available`}
                        </Text>
                        <Text>Date: {releaseDateRightFormat}</Text>
                        <Text>Length: {length}</Text>
                        <Text>
              Language: {languages.length > 0 ? languages.map((item) => item) : `Not available`}
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction="column">
                    <Flex justifyContent="space-between" gap="26px" pb="30px">
                        <Flex direction="column">
                            <Text fontWeight="600" fontSize="h5">
                TMDB Rating
                            </Text>
                            <Flex alignItems="center" pt="12px">
                                <Image width="39px" src="/TMDB.svg" />
                                <Text pl="10px" fontSize="text1">{`${voteAverage.toFixed(1)}/10`}</Text>
                            </Flex>
                            <Text pt="6px" fontSize="text4" fontWeight="500">{`${voteCount} votes`}</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center">
                            <Text pb="23px" fontWeight="600" fontSize="h5">
                Trailors Option
                            </Text>
                            <Image width="40px" height="40px" src="/redPlayIcon.svg" alt="trailors play button" />
                        </Flex>
                    </Flex>
                    <Divider m="0px" colorScheme="gray.200" />
                    <Divider m="0px" colorScheme="gray.200" />
                    <Flex justifyContent="space-between" pt="30px">
                        <Button p="7px 27px" leftIcon={<FaPen />} bgColor="blue.200" color="blue.500">
              Review
                        </Button>
                        <Button leftIcon={<FaLink />} bgColor="white" onClick={countShare}>
              Share{shareCount}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap="10px" pt="20px">
                {genresName?.map((item: any) => {
                    return (
                        <Link
                            key={resourceId}
                            padding="5px"
                            bgColor="#D9D9D9"
                            borderRadius="5px"
                            fontSize={"text2"}
                            fontWeight="500"
                            p="8px 12px"
                        >
                            {item}
                        </Link>
                    );
                })}
            </Flex>
            <Stack pt="73px" pb="35px">
                <Heading>Movie Description </Heading>
                <Text fontSize="text1">{overview}</Text>
            </Stack>
            <Stack pt="73px">
                <Heading>Featured Casts</Heading>
                <Image src="/Dune.jpg" alt="movie poster" width="194px" />
            </Stack>
        </Stack>
    );
};

export default MovieInfoDetail;
