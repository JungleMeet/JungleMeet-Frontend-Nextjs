import PageWrapper from "@/components/PageWrapper";
import DiscussionsPage from "@/components/DiscussionsPage/DiscussionsPage";
import DiscussionFilter from "@/components/DiscussionsPage/DiscussionFilter";
import DiscussionHeader from "@/components/DiscussionsPage/DiscussionHeader";

const Discussions = () => {
    return (
        <PageWrapper>
            <DiscussionHeader />
            <DiscussionFilter />
            <DiscussionsPage />
        </PageWrapper>
    );
};

export default Discussions;
