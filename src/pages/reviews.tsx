import PageWrapper from "@/components/PageWrapper";
import ReviewPage from "@/components/ReviewPage/ReviewPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const Reviews = () => {
    return (
        <PageWrapper>
            <ReviewPage/>
        </PageWrapper>
    );
};

export default Reviews;
