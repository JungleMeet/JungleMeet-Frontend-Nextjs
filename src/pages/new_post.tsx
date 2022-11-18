import NewPostEditor from "@/components/NewPostEditor/NewPostEditor";
import PageWrapper from "@/components/PageWrapper";
import { Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CloudinaryUploader from "@/components/NewPostEditor/CloudinaryUploader";

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
    const [bgImg, setBgImg] = useState<string | undefined>(undefined);

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
            <CloudinaryUploader setBgImg={setBgImg} bgImg={bgImg} />
            <NewPostEditor bgImg={bgImg} />
        </PageWrapper>
    );
};

export default newpost;
