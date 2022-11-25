import React from "react";
import PageWrapper from "@/components/PageWrapper";
import UserProfilePage from "@/components/UserProfilePage/UserProfilePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next/types";

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
const UserProfile = () => {
    const router = useRouter();
    const { id, active }: any = router.query;

    return (
        <PageWrapper>
            <UserProfilePage key={id} queryUserId={id} active={active} />
        </PageWrapper>
    );
};

export default UserProfile;
