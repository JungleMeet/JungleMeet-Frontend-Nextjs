import { Box, Flex } from "@chakra-ui/react";
import TMDBRanking from "../MainPage/TMDBRanking";
import Link from "next/link";

export interface IMovieResultItemProps {
    resourceId: number;
    title: string;
    poster: string;
    year: string;
    voteAverage: number;
    genreNames: {
        id: number;
        name: string;
    }[];
    overview: string;
}

const MovieResultItem = (props: IMovieResultItemProps) => {
    const { title, poster, year, voteAverage, resourceId, overview } = props;
    return (
        <Flex justifyContent={"space-between"} pl={"15px"} pr={"38px"}>
            <Box width={"77px"}>
                <a href={`/movie/${resourceId}`}>
                    <img width="77px" src={poster} alt="poster" />
                </a>
            </Box>
            {/* pl={"35px"} pr={"15px"}  */}
            <Box width={"80%"} pl="10px">
                <Box fontSize={"18px"} color="blue.600">
                    <Link href={`/movie/${resourceId}`}>{`${title}(${year})`}</Link>
                </Box>
                <Box mt={"22px"} noOfLines={3} fontSize={"16px"}>
                    {overview}
                </Box>
            </Box>
            <Flex alignItems={"center"} justifyContent={"center"} width={"50px"}>
                <TMDBRanking gap="20px" tmdb={voteAverage} color="black" />
            </Flex>
        </Flex>
    );
};

export default MovieResultItem;
