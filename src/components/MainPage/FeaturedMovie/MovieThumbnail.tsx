import { Box, Button, Image, Text } from "@chakra-ui/react";
import IMDBRanking from "../IMDBRanking";

interface IMovieThumbnailProps {
    src: string;
    title: string;
    imdb: string;
    thumbsUp: string;
    watch: string;
}

const MovieThumbnail = ({
    src,
    title,
    imdb,
    thumbsUp,
    watch,
}: IMovieThumbnailProps): JSX.Element => {
    return (
        <Box marginTop="44px" pos="relative">
            <Image src={src} width="190px" height="250px" />
            <Box
                bg="rgba(156, 163, 175, 0.5)"
                width="30px"
                height="29.21px"
                borderRadius="50%"
                backdropFilter="blur(10px)"
                pos="absolute"
                top="16px"
                right="16px"
            >
                <Image
                    src="/heart.svg"
                    width="16px"
                    height="13.3px"
                    color="gray.100"
                    margin="8.76px 7px 7.15px"
                />
            </Box>
            <Box width="190px" height="40px">
                <Text
                    fontWeight="700"
                    fontSize="text6"
                    lineHeight="20px"
                    fontFamily="secondary"
                    color="gray.900"
                    marginTop="16px"
                >
                    {title}
                </Text>
            </Box>
            <Box marginTop="9px">
                <IMDBRanking gap={"55px"} imdb={imdb} thumbsUp={thumbsUp} color="gray.900" />
            </Box>
            <Box marginTop="29px" display="flex" alignItems="center" justifyContent="center">
                <Button
                    padding="4px 30px"
                    bg="gray.200"
                    color="blue.500"
                    fontSize="12px"
                    fontWeight="700"
                    lineHeight="24px"
                    fontFamily="secondary"
                >
                    {watch}
                </Button>
            </Box>
        </Box>
    );
};

export default MovieThumbnail;
