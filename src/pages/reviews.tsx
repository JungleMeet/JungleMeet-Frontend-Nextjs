import PageWrapper from "@/components/PageWrapper";
import ReviewPage from "@/components/ReviewPage/ReviewPage";
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

const Reviews = () => {
    return (
        <PageWrapper>
            <ReviewPage />
        </PageWrapper>
    );
};

export default Reviews;
