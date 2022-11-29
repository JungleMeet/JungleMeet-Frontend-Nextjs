import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RequireAuth from "@/components/RequireAuth";
import PostEditor from "@/components/NewPostEditor/PostEditor";

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

const newpost = () => {
    return (
        <PageWrapper>
            <RequireAuth>
                <PostEditor type="newPost" />
            </RequireAuth>
        </PageWrapper>
    );
};

export default newpost;
