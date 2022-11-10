import PageWrapper from "@/components/PageWrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutPage from "@/components/AboutPage/AboutPage";

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
const aboutJungleMeet = () => {
    return (
        <PageWrapper>
            <AboutPage />
        </PageWrapper>
    );
};

export default aboutJungleMeet;
