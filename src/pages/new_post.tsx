import NewPostEditor from "@/components/NowPostPage/NewPostEditor";
import PageWrapper from "@/components/PageWrapper";
import { Heading } from "@chakra-ui/react";
import React from "react";
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

const newpost = () => {
    return (
        <PageWrapper>
            <Heading
                as="h3"
                fontSize="h3"
                lineHeight="lh36"
                fontWeight="700"
                marginTop="100px"
                marginBottom="50px"
            >
        Create Your Post in Discussion
            </Heading>
            <NewPostEditor />
        </PageWrapper>
    );
};

export default newpost;
