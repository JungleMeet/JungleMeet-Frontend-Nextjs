import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
export interface IMovieCardThumbnailProps {
    src: string;
    title: string;
    id: number;
}

const MovieCardThumbnail = ({ src, title, id }: IMovieCardThumbnailProps): JSX.Element => {
    return (
        <Box w="100%">
            <Link href={`/movies/${id}`}>
                <Image src={src} title={title} width="100%" height="321"></Image>
            </Link>
            {/* <Box
                bg="rgba(156, 163, 175, 0.5)"
                width="30px"
                height="29.21px"
                borderRadius="50%"
                backdropFilter="blur(10px)"
                pos="absolute"
                top="16px"
                right="63.5px"
                max-width="100%"
                display="block"
            >
                <Image
                    src="/heart.svg"
                    width="16px"
                    height="13.3px"
                    color="gray.100"
                    margin="8.76px 7px 7.15px"
                />
            </Box> */}
        </Box>
    );
};

export default MovieCardThumbnail;
