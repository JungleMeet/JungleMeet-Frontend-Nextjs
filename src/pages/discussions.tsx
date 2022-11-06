import PageWrapper from "@/components/PageWrapper";
import DiscussionsPage from "@/components/DiscussionsPage/DiscussionsPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
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
