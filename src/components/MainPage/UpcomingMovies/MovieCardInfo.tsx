import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import TMDBRanking from "../TMDBRanking";
import CategoryButton from './CategoryButton';

export interface MovieCardInfoProps {
    title: string;
    tmdb: number;
    type: {
        id: number;
        name: string
    }[];
}

const MovieTitle = styled.div`
  width: 100%;
  height: 46px;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.44px;
  font-family: "DM Sans";
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 11.5px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const MovieCardInfo = ({ title, tmdb, type }: MovieCardInfoProps): JSX.Element => {
    return (
        <Box mt="21px" ml="12px" mr="16px">
            <MovieTitle>{title} </MovieTitle>
            <TMDBRanking gap={"30px"} tmdb={tmdb} color={"#FFFFFF"} />
            <CategoryButton type={type}/>
        </Box>
    );
};

export default MovieCardInfo;
