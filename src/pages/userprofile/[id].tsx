import React from "react";
import PageWrapper from "@/components/PageWrapper";
import UserProfilePage from "@/components/UserProfilePage/UserProfile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next/types";

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
const UserProfile = () => {
    const router = useRouter();
    const { id }: any = router.query;

    return (
        <PageWrapper>
            <UserProfilePage queryUserId={id} />
        </PageWrapper>
    );
};

export default UserProfile;
