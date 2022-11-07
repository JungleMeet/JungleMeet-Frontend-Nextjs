import { Box, Flex, } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import TMDBRanking from '../MainPage/TMDBRanking';

export interface PreviewItemProps{
    resourceId: number;
    title: string;
    poster: string;
    year: string;
    voteAverage: number;
}


const ItemContainer=styled.div`
    padding: 20px 16px 20px 16px;
    border-top:0.5px #6d69697d solid;
    cursor: pointer;
    :hover{
        background-color: #b8b9b87d;
    }
`



const PreviewItem=({ title, poster, year, voteAverage, resourceId }: PreviewItemProps):JSX.Element=>{
    const href = `/movies/${resourceId}`;

    return (
        <Link href={href}>
            <ItemContainer>
                <Flex justifyContent={"space-around"}>
                    <Box height={"100px"}>
                        <img src={poster} width="66px"/>
                    </Box>
                    <Box width={"60%"} pl={"15px"}>
                        <Box fontSize={"20px"} fontWeight={"500"} pt={"10px"}>{title}</Box>
                        <Box fontSize={"16px"} pt={"10px"}>{year}</Box>
                    </Box>
                    <Flex alignItems={"center"} justifyContent={"flex-end"} width={"80px"}>
                        <TMDBRanking gap="20px" tmdb={voteAverage} color="black" />
                    </Flex>
                </Flex>
            </ItemContainer>
        </Link>
    )
}

export default PreviewItem