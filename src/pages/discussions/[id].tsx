import PageWrapper from "@/components/PageWrapper";

import DiscussionDetailContent from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailContent";
import DiscussionsDetailHeader from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailHeader";
import DiscussionsDetailComments from "@/components/DiscussionsPage/DiscussionsDetailPage/DiscussionsDetailComments";

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
