import PostContentEditor from "@/components/NewPostPage/PostContentEditor";
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
            <PostContentEditor />
        </PageWrapper>
    );
};

export default newpost;
