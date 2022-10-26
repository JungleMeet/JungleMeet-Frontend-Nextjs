import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

export interface IVideoThumbnailProps {
    src: string;
    title: string;
    id: number;
}

const VideoThumbnail = ({ src, title, id }: IVideoThumbnailProps): JSX.Element => {
    return (
        <Box pos="relative">
            <Link href={`/movies/${id}`}>
                <img src={src} title={title} width="160" height="310"></img>
            </Link>
            <Box
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
            </Box>
        </Box>
    );
};

export default VideoThumbnail;
