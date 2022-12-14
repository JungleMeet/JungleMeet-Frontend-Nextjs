import PageWrapper from "@/components/PageWrapper";
import Review from "@/components/ReviewPage/Review";
// import ReviewPageTest from "@/components/ReviewPage/ReviewPageTest";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";

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
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], // indicates that no page needs be created at build time
        fallback: "blocking", // indicates the type of fallback
    };
};

const Reviews = () => {
    return (
        <PageWrapper>
            <Review />
        </PageWrapper>
    );
};

export default Reviews;
