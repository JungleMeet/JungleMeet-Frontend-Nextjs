import { Box, Text } from "@chakra-ui/react";
import React, { memo } from "react";

export interface IVideoThumbnailProps {
    title: string;
    youtubeLink: string;
}

const VideoThumbnail = ({ youtubeLink, title }: IVideoThumbnailProps): JSX.Element => {
    return (
        <Box width="450px">
            <iframe src={youtubeLink} title={title} width="450" height="253" allow="fullscreen"></iframe>
            <Text fontSize="text3" fontWeight="700" lineHeight="lh24" color="gray.900" pt="12px">{title}</Text>
        </Box>
    );
};

export default memo(VideoThumbnail);
