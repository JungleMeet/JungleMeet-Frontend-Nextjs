import { Box, Flex } from "@chakra-ui/react";
import TMDBRanking from "../MainPage/TMDBRanking";
import { useRouter } from "next/router";
import { createMoviePost } from "@/utils/axiosPostApi";

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
    const router = useRouter();

    const createMoviePostByResourceId = async (resourceId: number): Promise<void> => {
        try {
            const res = await createMoviePost(resourceId);
            const { _id } = res.data;
            router.push(`/movies/${_id}`);
        } catch (e: any) {
            return e;
        }
    };

    const { title, poster, year, voteAverage, resourceId, overview } = props;
    return (
        <Flex justifyContent={"space-between"} pl={"15px"} pr={"38px"} pt={"25px"}>
            <Box width={"77px"} cursor="pointer" onClick={() => createMoviePostByResourceId(resourceId)}>
                <img width="77px" src={poster} alt="poster" />
            </Box>
            <Box width={"80%"} pl="10px">
                <Box
                    fontSize={"18px"}
                    color="blue.600"
                    cursor="pointer"
                    onClick={() => createMoviePostByResourceId(resourceId)}
                >
                    {`${title}(${year})`}
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
