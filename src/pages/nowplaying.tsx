import PageWrapper from "@/components/PageWrapper";
import MoviePageHeader from "@/components/NowPlayingPage/MoviePageHeader";
import NowPlayingMovieFilter from "@/components/NowPlayingPage/NowPlayingMovieFilter";
import NowPlayingMovies from "@/components/NowPlayingPage/NowPlayingMovies";

const nowplaying = () => {
    return (
        <PageWrapper>
            <MoviePageHeader header="Now Playing">
                <NowPlayingMovieFilter />
            </MoviePageHeader>
            <NowPlayingMovies />
        </PageWrapper>
    );
};

export default nowplaying;
