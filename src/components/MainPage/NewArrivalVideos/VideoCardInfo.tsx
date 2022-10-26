import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import IMDBRanking from "../TMDBRanking";

export interface VideoCardInfoProps {
    title: string;
    country: string;
    year: number;
    tmdb: string;
    likes: string;
    type: string;
}

const MovieTitle = styled.div`
  width: 210px;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  color: #111827;
  /*Truncate String with Ellipsis*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VideoCardInfo = (info: VideoCardInfoProps): JSX.Element => {
    return (
        <Box>
            <MovieTitle>{info.title} </MovieTitle>
            <div>
                {info.country} {info.year}
            </div>
            <IMDBRanking gap={"30px"} tmdb={info.tmdb} thumbsUp={info.likes} color={"black"} />
            <div>{info.type}</div>
        </Box>
    );
};

export default VideoCardInfo;
