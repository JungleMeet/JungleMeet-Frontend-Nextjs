import { Box, Image, Text } from "@chakra-ui/react";
import TMDBRanking from "../TMDBRanking";
// import Link from "next/link";
import { useRouter } from "next/router";
import { createMoviePost } from "@/utils/axiosPostApi";
import WatchVideoButton from "./WatchVideoButton";

interface IMovieThumbnailProps {
    src: string;
    title: string;
    tmdb: number;
    youtubeLink?: string;
    id: number;
}

const MovieThumbnail = ({
    id,
    src,
    title,
    tmdb,
    youtubeLink,
}: IMovieThumbnailProps): JSX.Element => {
    const router = useRouter();

    return (
        <Box pos="relative" height="436px" width="194px" bg="rgba(0, 0, 0, 0.9)" borderRadius="5px">
            {/* <Link href={`/movies/${id}`}> */}
            <Image
                src={src}
                width="194px"
                height="277px"
                objectFit="fill"
                cursor="pointer"
                onClick={() => {
                    const createMoviePostByResourceId = async () => {
                        try {
                            const res = await createMoviePost(id);
                            const { _id } = res.data;
                            router.push(`/movies/${_id}`);
                        } catch (e) {
                            return e;
                        }
                    };
                    createMoviePostByResourceId();
                }}
            />

            <Box width="194px" height="40px">
                <Text
                    fontWeight="700"
                    fontSize="text5"
                    lineHeight="20px"
                    fontFamily="secondary"
                    color="#FFF"
                    marginTop="19px"
                    marginLeft="12px"
                >
                    {title}
                </Text>
            </Box>
            <Box marginTop="11.5px" marginLeft="12px">
                <TMDBRanking gap={"55px"} tmdb={tmdb} color="white" />
            </Box>
            <Box marginTop="31.5px" display="flex" alignItems="center" justifyContent="center">
                <WatchVideoButton movieId={id} src={youtubeLink} />
                {/* <PlayingMovieTrailerModel onClose={()=>setIsModalOpen(false)} isOpen={isModalOpen} src={youtubeLink} /> */}
            </Box>
        </Box>
    );
};

export default MovieThumbnail;
