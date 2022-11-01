import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageWrapper from "@/components/PageWrapper";
import { Box, Spinner } from "@chakra-ui/react";
import MovieResultItem from "@/components/Search/MovieResultItem";
import { IMovieResultItemProps } from "@/components/Search/MovieResultItem";
import PostResultItem, { IPostResultItemProps } from "@/components/Search/PostResultItem";
import ResultContainer from "@/components/Search/ResultContainer";

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

const movieData = [
    {
        resourceId: 12345,
        title: "finding nemo",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/53P8oHo9cfOsgb1cLxBi4pFY0ja.jpg",
        year: "2005",
        voteAverage: 3.4,
        genreNames: [
            {
                id: 18,
                name: "comedy",
            },
        ],
        overview:
      "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    },
];

const Search = () => {
    const router = useRouter();
    const { name } = router.query;
    const [movieResult, setMovieResult] = useState<IMovieResultItemProps[]>([]);
    const [postResult, setPostResult] = useState<IPostResultItemProps[]>([]);
    const [loadingMovie, setLoadingMovie] = useState(false);
    const [loadingPost, setLoadingPost] = useState(false);

    useEffect(() => {
        setMovieResult(movieData);
        setLoadingMovie(true);
    }, []);

    useEffect(() => {
        setPostResult(postData);
        setLoadingPost(true);
    }, []);

    const viewMoreMovies = () => {};
    const viewMorePosts = () => {};

    const movieResults = movieResult.map((result) => (
        <MovieResultItem key={result.resourceId} {...result} />
    ));

    const postResults = postResult.map((result) => <PostResultItem key={result._id} {...result} />);

    return (
        <PageWrapper>
            {/* <PageTitle>Search Results for: {name}</PageTitle>

      <SectionTitle>Movies</SectionTitle> */}

            {/* <Box fontSize="h3" fontWeight={700} lineHeight="h4">
        Search Results for: {name}
      </Box> */}

            <PageTitle>Search Results for: {name}</PageTitle>

            <Box fontSize="h4" fontWeight={700} lineHeight="1h32" color={"#B91C1C"}>
        Movies
            </Box>

            <ResultContainer viewMoreResult={viewMoreMovies}>
                {loadingMovie ? <Spinner /> : movieResults}
            </ResultContainer>

            <Box fontSize="h4" fontWeight={700} lineHeight="1h32" color={"#B91C1C"}>
        Posts
                {loadingPost}
            </Box>

            <ResultContainer viewMoreResult={viewMorePosts}>{postResults}</ResultContainer>
        </PageWrapper>
    );
};

export default Search;
