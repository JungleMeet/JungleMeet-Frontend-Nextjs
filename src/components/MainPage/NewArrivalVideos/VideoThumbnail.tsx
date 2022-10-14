import { Box } from "@chakra-ui/react";

export interface IVideoThumbnailProps {
    src: string;
    title: string;
}

const VideoThumbnail = ({ src, title }: IVideoThumbnailProps): JSX.Element => {
    return (
        <Box>
            <Box
                position="absolute"
                margin="12.76px 163.8px "
                borderRadius="8px"
                rounded="md"
                bg="rgba(156, 163, 175, 0.5)"
                filter="grayscale(80%)"
            >
                <img src="/heart.svg" width="16px" height="13.3px" color="gray.100" />
            </Box>
            <img src={src} title={title} width="210" height="310"></img>
        </Box>
    );
};

export default VideoThumbnail;
