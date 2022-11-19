import PageWrapper from "@/components/PageWrapper";
import NowPlayingMovies from "@/components/NowPlayingPage/NowPlayingMovies";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NowPlayingPageHeader from "@/components/NowPlayingPage/NowPlayingPageHeader";

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
            <NowPlayingPageHeader />
            <NowPlayingMovies />
        </PageWrapper>
    );
};

export default nowplaying;
