import usePostIdForMovieId from "@/hooks/usePostIdForMovieId";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import TMDBRanking from "../MainPage/TMDBRanking";
import { PreviewItemContainer } from "./styles";

export interface PreviewItemProps {
    resourceId: number;
    title: string;
    poster: string;
    year: string;
    voteAverage: number;
    isActive: boolean;
    clearQuery: () => void;
}

const PreviewItem = ({
    title,
    poster,
    year,
    voteAverage,
    resourceId,
    clearQuery,
    isActive,
}: PreviewItemProps): JSX.Element => {
    const createMoviePostByResourceId = usePostIdForMovieId();
    const previewItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        isActive && previewItemRef.current && previewItemRef.current.scrollIntoView({ block: "end" });
    }, [isActive]);

    return (
        <PreviewItemContainer
            onClick={() => {
                createMoviePostByResourceId(resourceId);
                clearQuery();
            }}
            isActive={isActive}
            ref={previewItemRef}
        >
            <Flex justifyContent={"space-around"}>
                <Box height={"100px"}>
                    <img src={poster} width="66px" />
                </Box>
                <Box width={"60%"} pl={"15px"}>
                    <Box fontSize={"20px"} fontWeight={"500"} pt={"10px"}>
                        {title}
                    </Box>
                    <Box fontSize={"16px"} pt={"10px"}>
                        {year}
                    </Box>
                </Box>
                <Flex alignItems={"center"} justifyContent={"flex-end"} width={"80px"}>
                    <TMDBRanking gap="20px" tmdb={voteAverage} color="black" />
                </Flex>
            </Flex>
        </PreviewItemContainer>
    );
};

export default PreviewItem;
