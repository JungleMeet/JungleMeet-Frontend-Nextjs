import PageWrapper from "@/components/PageWrapper";
import MoviePageHeader from "@/components/NowPlayingPage/MoviePageHeader";
import AllMoviesFilter from "@/components/AllMoviesPage/AllMoviesFilter";
import AllMovies from "@/components/AllMoviesPage/AllMovies";

const allmovies = () => {
    return (
        <PageWrapper>
            <MoviePageHeader header="All Movies">
                <AllMoviesFilter />
            </MoviePageHeader>
            <AllMovies />
        </PageWrapper>
    );
};

export default allmovies;
