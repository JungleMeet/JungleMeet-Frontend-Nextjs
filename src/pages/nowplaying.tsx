import PageWrapper from "@/components/PageWrapper";
import MoviePageHeader from "@/components/NowPlayingPage/MoviePageHeader";
import NowPlayingMovieFilter from "@/components/NowPlayingPage/NowPlayingMovieFilter";
import NowPlayingMovies from "@/components/NowPlayingPage/NowPlayingMovies";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

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
