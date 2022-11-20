import AllMovies from "@/components/AllMoviesPage/AllMovies";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageWrapper from "@/components/PageWrapper";

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
            <AllMovies />
        </PageWrapper>
    );
};

export default allmovies;
