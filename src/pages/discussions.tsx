import PageWrapper from "@/components/PageWrapper";
import DiscussionsPage from "@/components/DiscussionsPage/DiscussionsPage";
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
const Discussions = () => {
    return (
        <PageWrapper>
            <DiscussionsPage />
        </PageWrapper>
    );
};

export default Discussions;
