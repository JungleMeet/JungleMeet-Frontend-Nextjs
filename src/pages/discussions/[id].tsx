import PageWrapper from "@/components/PageWrapper";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DiscussionsDetailPage from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailPage";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], // indicates that no page needs be created at build time
        fallback: "blocking", // indicates the type of fallback
    };
};

const DiscussionsDetail = () => {
    return (
        <PageWrapper>
            <DiscussionsDetailPage />
        </PageWrapper>
    );
};

export default DiscussionsDetail;
