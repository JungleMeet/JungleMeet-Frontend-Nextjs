import PageWrapper from "@/components/PageWrapper";
import MoviePageHeader from "@/components/NowPlayingPage/MoviePageHeader";
import NowPlayingMovieFilter from "@/components/NowPlayingPage/NowPlayingMovieFilter";
import NowPlayingMovies from "@/components/NowPlayingPage/NowPlayingMovies";
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
