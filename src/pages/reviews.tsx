import PageWrapper from "@/components/PageWrapper";
import ReviewHeader from "@/components/ReviewPage/ReviewHeader";
import ReviewFilter from "@/components/ReviewPage/ReviewFilter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IgetStaticProps {
    locale: string;
}
export async function getStaticProps({ locale }:IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const Discussions = () => {
    return (
        <PageWrapper>
            <ReviewHeader />
            <ReviewFilter />
        </PageWrapper>
    );
};

export default Discussions;
