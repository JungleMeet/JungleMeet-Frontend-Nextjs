import styled from "styled-components";
import { useEffect, useState, useReducer } from "react";
import { useRouter } from "next/router";
import PageWrapper from "@/components/PageWrapper";
import { Box, Button, Spinner } from "@chakra-ui/react";
import MovieResultItem from "@/components/Search/MovieResultItem";
import { IMovieResultItemProps } from "@/components/Search/MovieResultItem";
import PostResultItem from "@/components/Search/PostResultItem";
import { searchMovieName } from "@/utils/axiosMovieApi";
import { isEmpty } from "lodash";
import { ViewIcon } from "@chakra-ui/icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initialPostState, postReducer } from "@/app/reducer/postSearch";
import { searchPost } from "@/utils/axiosPostApi";

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

const INITIAL_DISP_ITEMS = 3;

const Search = () => {
    const router = useRouter();
    const name = router.query.name as string;

    const [movieResult, setMovieResult] = useState<IMovieResultItemProps[]>([]);
    const [loadingMovie, setLoadingMovie] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [moviePage, setMoviePage] = useState(1);
    const [haveMoreMovieResults, setHaveMoreMovieResults] = useState(true);
    const [subsequentMovieLoading, setSubsequentMovieLoading] = useState(false);

    const [loadingPost, setLoadingPost] = useState(true);
    const [postState, dispatch] = useReducer(postReducer, initialPostState);
    const {
        postResult,
        isPostCollapsed,
        postPage,
        haveMorePostResults,
        subsequentPostLoading,
        pageLimit,
    } = postState;

    // new search, everytime the name changes
    useEffect(() => {
        setLoadingMovie(true);
        setLoadingPost(true);

        setMovieResult([]);
        setIsCollapsed(true);
        setMoviePage(1);
        setHaveMoreMovieResults(true);
        dispatch({ type: "initialization" });

        searchMovieName(name).then(({ data }) => {
            if (isEmpty(data)) setHaveMoreMovieResults(false);
            if (!isEmpty(data)) setMovieResult(data);
            setLoadingMovie(false);
        });

        searchPost({ keyword: name, page: 1, limit: pageLimit }).then(({ data }) => {
            if (isEmpty(data)) dispatch({ type: "noResult" });
            if (!isEmpty(data)) dispatch({ type: "setinitialPostData", payload: data });
            setLoadingPost(false);
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

    const handleViewMoreMovies = () => {
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

    // subsequent post search, trigger by page change
    useEffect(() => {
        if (postPage !== 1) {
            dispatch({ type: "startSubsequentLoading" });
            searchPost({ keyword: name, page: postPage, limit: pageLimit }).then(({ data }) => {
                if (isEmpty(data)) dispatch({ type: "noResult" });
                if (!isEmpty(data)) dispatch({ type: "setPostData", payload: data });
                dispatch({ type: "completeSubsequentLoading" });
            });
        }
    }, [postPage]);

    const handleViewMorePosts = () => {
        if (!haveMorePostResults) return;
        if (isPostCollapsed) {
            dispatch({ type: "expandSearchResult" });
            if (postRenderData.length === postResult.length) {
                dispatch({ type: "fetchNextPostPage" });
            }
            return;
        }
        dispatch({ type: "fetchNextPostPage" });
    };

    const postRenderData = isPostCollapsed ? postResult.slice(0, INITIAL_DISP_ITEMS) : postResult;

    const postResults = isEmpty(postResult) ? (
        <div>no result</div>
    ) : (
    // work to here
        postRenderData?.map((result) => <PostResultItem key={result._id} {...result} keyword={name} />)
    );

    if (typeof name !== "string" || !name) return <div>must provide a keyword</div>;

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
                        onClick={handleViewMoreMovies}
                    >
                        {haveMoreMovieResults ? "More results..." : "No more movies"}
                    </Button>
                </Box>
            </Box>

            <Box fontSize="h4" fontWeight={700} lineHeight="1h32" color={"#B91C1C"}>
        Posts
            </Box>

            <Box bg="gray.200" borderRadius={"5px"} pt={"13px"} pl={"25px"} pr="25px">
                {loadingPost ? <Spinner /> : postResults}

                <Box mt={0}>
                    <Button
                        leftIcon={
                            loadingPost || subsequentPostLoading ? <Spinner /> : <ViewIcon color="blue.500" />
                        }
                        color="blue.500"
                        fontSize="h6"
                        fontWeight="700"
                        background={"transparent"}
                        _hover={{ background: "gray.300" }}
                        onClick={handleViewMorePosts}
                    >
                        {haveMorePostResults ? "More results..." : "No more posts"}
                    </Button>
                </Box>
            </Box>
        </PageWrapper>
    );
};

export default Search;
