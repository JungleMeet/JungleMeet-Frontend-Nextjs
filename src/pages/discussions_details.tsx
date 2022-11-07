import PageWrapper from "@/components/PageWrapper";

import DiscussionDetailContent from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailContent";
import DiscussionsDetailHeader from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailHeader";
import DiscussionsDetailComments from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailComments";
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
            <DiscussionsDetailHeader />
            <DiscussionDetailContent />
            <DiscussionsDetailComments />
        </PageWrapper>
    );
};

export default Discussions;
