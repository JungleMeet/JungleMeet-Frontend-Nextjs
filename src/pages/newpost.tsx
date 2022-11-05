import NewPostEditor from "@/components/NewPostPage/NewPostEditor";
import PageWrapper from "@/components/PageWrapper";
import { Heading } from "@chakra-ui/react";
import React from "react";

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
