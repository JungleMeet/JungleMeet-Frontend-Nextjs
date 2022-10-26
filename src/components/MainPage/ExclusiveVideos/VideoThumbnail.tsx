import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export interface IVideoThumbnailProps {
    id?: string;
    src: string;
    title: string;
}

const MovieTitle = styled.div`
  width: 450px;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  color: #111827;
`;

const VideoThumbnail = ({ src, title }: IVideoThumbnailProps): JSX.Element => {
    return (
        <Box>
            <iframe src={src} title={title} width="450" height="253" allow="fullscreen"></iframe>
            <MovieTitle>{title}</MovieTitle>
        </Box>
    );
};

export default VideoThumbnail;
