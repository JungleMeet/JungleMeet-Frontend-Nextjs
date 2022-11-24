import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import React, { memo } from "react";

export interface IVideoThumbnailProps {
    id: number;
    title: string;
    youtubeLink?: string;
}

const MovieTitle = styled.div`
  width: 450px;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  color: #111827;
`;

const VideoThumbnail = ({id, youtubeLink, title }: IVideoThumbnailProps): JSX.Element => {
    return (
        <Box key={id}>
            <iframe src={youtubeLink} title={title} width="450" height="253" allow="fullscreen"></iframe>
            <MovieTitle>{title}</MovieTitle>
        </Box>
    );
};

export default memo(VideoThumbnail);
