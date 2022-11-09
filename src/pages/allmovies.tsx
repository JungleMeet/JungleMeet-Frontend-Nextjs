import PageWrapper from "@/components/PageWrapper";
import MoviePageHeader from "@/components/NowPlayingPage/MoviePageHeader";
import AllMoviesFilter from "@/components/AllMoviesPage/AllMoviesFilter";
import AllMovies from "@/components/AllMoviesPage/AllMovies";
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
