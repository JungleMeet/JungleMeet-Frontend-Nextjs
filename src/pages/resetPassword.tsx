import ResetPassword from "@/components/Login/ResetPassword";
import PageWrapper from "@/components/PageWrapper";
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

const resetPassword = () => {
    return (
        <PageWrapper>
            <ResetPassword />
        </PageWrapper>
    );
};

export default resetPassword;
