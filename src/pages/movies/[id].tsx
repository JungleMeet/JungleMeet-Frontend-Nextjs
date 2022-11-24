import PopularReview from "@components/MoviePage/PopularReview/PopularReview"
import MovieDetails from "@components/MoviePage/MovieDetails/MovieDetails";
import PageWrapper from "@/components/PageWrapper";
import { GetStaticPaths } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface IgetStaticProps {
    locale: string;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], // indicates that no page needs be created at build time
        fallback: "blocking", // indicates the type of fallback
    };
};

export async function getStaticProps({ locale }: IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const MovieDetailsPage = () => {

    return (
        <PageWrapper>
            <MovieDetails />
            <PopularReview />
        </PageWrapper>
    );
};

export default MovieDetailsPage;
