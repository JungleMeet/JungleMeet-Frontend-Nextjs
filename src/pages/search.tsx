import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageWrapper from "@/components/PageWrapper";
import { Box, Button, Spinner } from "@chakra-ui/react";
import MovieResultItem from "@/components/Search/MovieResultItem";
import { IMovieResultItemProps } from "@/components/Search/MovieResultItem";
import PostResultItem, { IPostResultItemProps } from "@/components/Search/PostResultItem";
import ResultContainer from "@/components/Search/ResultContainer";
import { searchMovieName } from "@/utils/axiosMovieApi";
import { isEmpty } from "lodash";
import { ViewIcon } from "@chakra-ui/icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IgetStaticProps {
    locale: string;
}
export async function getStaticProps({ locale }: IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

export const PageTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const postData = [
    {
        _id: "123",
        title: "what is the matter",
        author: { _id: "123456", name: "James" },
        createdAt: "2022-09-27T23:44:36.251Z",
        likeCount: 5,
        viewCount: 10,
        commentCount: 25,
    },
];

const INITIAL_DISP_ITEMS = 3;

const Search = () => {
    const router = useRouter();
    const { name } = router.query;
    if (typeof name !== "string" || !name) return <div>must provide a keyword</div>;

    const [movieResult, setMovieResult] = useState<IMovieResultItemProps[]>([]);
    const [loadingMovie, setLoadingMovie] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [moviePage, setMoviePage] = useState(1);
    const [haveMoreMovieResults, setHaveMoreMovieResults] = useState(true);
    const [subsequentMovieLoading, setSubsequentMovieLoading] = useState(false);

    const [loadingPost, setLoadingPost] = useState(true);
    const [postResult, setPostResult] = useState<IPostResultItemProps[]>([]);

    // new search, everytime the name changes
    useEffect(() => {
        setLoadingMovie(true);
        setIsCollapsed(true);
        setMoviePage(1);
        setHaveMoreMovieResults(true);

        searchMovieName(name).then(({ data }) => {
            if (isEmpty(data)) {
                setMovieResult([]);
                setHaveMoreMovieResults(false);
            }
            if (!isEmpty(data)) setMovieResult(data);
            setLoadingMovie(false);
        });
    }, [name]);

    // subsequent search, trigger by page change
    useEffect(() => {
        if (moviePage !== 1) {
            setSubsequentMovieLoading(true);
            searchMovieName(name, moviePage).then(({ data }) => {
                if (isEmpty(data)) setHaveMoreMovieResults(false);

                if (!isEmpty(data)) setMovieResult((currentData) => currentData.concat(data));
                setSubsequentMovieLoading(false);
            });
        }
    }, [moviePage]);

    const viewMoreMovies = () => {
        if (!haveMoreMovieResults) return;
        if (isCollapsed) {
            setIsCollapsed(false);
            if (movieRenderData.length === movieResult.length) {
                setMoviePage((currentPage) => currentPage + 1);
            }
            return;
        }
        setMoviePage((currentPage) => currentPage + 1);
    };

    const movieRenderData = isCollapsed ? movieResult.slice(0, INITIAL_DISP_ITEMS) : movieResult;

    const movieResults = isEmpty(movieResult) ? (
        <div>no result</div>
    ) : (
        movieRenderData?.map((result) => <MovieResultItem key={result.resourceId} {...result} />)
    );

    useEffect(() => {
        setPostResult(postData);
        setLoadingPost(true);
    }, []);
    const viewMorePosts = () => {};

    const postResults = postResult.map((result) => <PostResultItem key={result._id} {...result} />);

    return (
        <PageWrapper>
            <PageTitle>Search Results for: {name}</PageTitle>
            <Box fontSize="h4" fontWeight={700} lineHeight="1h32" color={"#B91C1C"}>
        Movies
            </Box>
            <Box bg="gray.200" borderRadius={"5px"} pt={"13px"} pl={"25px"} pr="25px">
                {loadingMovie ? <Spinner /> : movieResults}

                <Box mt={0}>
                    <Button
                        leftIcon={
                            loadingMovie || subsequentMovieLoading ? <Spinner /> : <ViewIcon color="blue.500" />
                        }
                        color="blue.500"
                        fontSize="h6"
                        fontWeight="700"
                        background={"transparent"}
                        _hover={{ background: "gray.300" }}
                        onClick={viewMoreMovies}
                    >
                        {haveMoreMovieResults ? "More results..." : "No more movies"}
                    </Button>
                </Box>
            </Box>

            <Box fontSize="h4" fontWeight={700} lineHeight="1h32" color={"#B91C1C"}>
        Posts
                {loadingPost}
            </Box>

            <ResultContainer viewMoreResult={viewMorePosts}>{postResults}</ResultContainer>
        </PageWrapper>
    );
};

export default Search;
