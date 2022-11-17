import React from "react";
import PageWrapper from "@/components/PageWrapper";
import UserProfilePage from "@/components/UserProfilePage/UserProfile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const UserProfile = () => {
    return (
        <PageWrapper>
            <UserProfilePage />
        </PageWrapper>
    );
};

export default UserProfile;
