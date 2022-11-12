import PlayingMovieTrailerModel from "@/components/PlayingMovieTrailerModel";
import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import TMDBRanking from "../TMDBRanking";
// import Link from "next/link";
import { useRouter } from "next/router";
import { createMoviePost } from "@/utils/axiosPostApi";

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
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                            // console.log(_id);
                            router.push(`/movies/${_id}`);
                        } catch (e) {
                            return e;
                        }
                    };
                    createMoviePostByResourceId();
                }}
            />
            {/* </Link> */}
            {/* <Box
                bg="rgba(156, 163, 175, 0.5)"
                width="30px"
                height="29.21px"
                borderRadius="50%"
                backdropFilter="blur(10px)"
                pos="absolute"
                top="17px"
                right="13px"
            >
                <Image
                    src="/heart.svg"
                    width="16px"
                    height="13.3px"
                    color="gray.100"
                    margin="8.76px 7px 7.15px"
                />
            </Box> */}
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
                <Button
                    bg="rgba(229, 231, 235, 0.5)"
                    color="#FFF"
                    fontSize="12px"
                    fontWeight="700"
                    lineHeight="24px"
                    fontFamily="secondary"
                    width="168px"
                    height="32px"
                    backdropFilter="blur(5px)"
                    borderRadius="5px"
                    _hover={{
                        backgroundColor: "gray.600",
                    }}
                    onClick={onOpen}
                >
                    <Image src="/watchoptions.svg" marginRight="8.84px"></Image>
          Watch options
                </Button>
                <PlayingMovieTrailerModel onClose={onClose} isOpen={isOpen} src={youtubeLink} />
            </Box>
        </Box>
    );
};

export default MovieThumbnail;
