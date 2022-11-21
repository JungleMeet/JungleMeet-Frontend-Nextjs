import React, { useState, useEffect } from "react";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { addNewPost } from "@/utils/axiosPostApi";
import Router from "next/router";
import PostSingleLineInput from "./PostSingleLineInput";
import ButtonCancel from "./ButtonCancel";
import ButtonPost from "./ButtonPost";
import useEditorController from "../Editor/useEditorController";
import ContentEditor from "../Editor/ContentEditor";

interface INewEditorProps {
    bgImg: string | undefined;
}

const NewPostEditor = ({ bgImg }: INewEditorProps) => {
    const [postTitle, setPostTitle] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [token, setToken] = useState<any | null>("");
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        const localtoken = localStorage.getItem("token");
        setToken(localtoken);
    }, []);

    const { editor, clearContent, content } = useEditorController();

    const handleSumble = async (e: any) => {
        e.preventDefault();
        if (!postTitle || !content) {
            toast({
                position: "top",
                title: "Post title and content can't be empty",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        try {
            await addNewPost(postTitle, content, hashtag, token, bgImg);
            clearContent();
            Router.push("/discussions");
            setIsLoading(false);
            toast({
                position: "top",
                title: "Post Success!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setPostTitle("");
        setHashtag("");
        clearContent();
    };

    const detectEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            editor?.commands.focus();
        }
    };

    return (
        <form onSubmit={handleSumble}>
            <Box background="gray.200" padding="32px" borderRadius="5px">
                <Text as="h2" fontSize="text3" lineHeight="lh28" paddingBottom="25px" fontWeight="700">
          Your Post Details
                </Text>
                <PostSingleLineInput
                    placeholder="Post Title"
                    value={postTitle}
                    onKeyDown={detectEnterKey}
                    onChange={(event) => setPostTitle(event.target.value)}
                />
                <ContentEditor editor={editor} height="350px" />
                <Flex paddingTop="20px" marginLeft="8px" gap="25px" alignItems="center">
                    <Text fontSize="text3" fontWeight="700" lineHeight="lh28">
            #Hashtag
                    </Text>
                    <PostSingleLineInput
                        placeholder="Add your Hashtag here with #..."
                        value={hashtag}
                        onChange={(event) => setHashtag(event.target.value)}
                    />
                </Flex>
            </Box>
            <Flex justifyContent="space-between" marginTop="50px" marginBottom="50px">
                <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
                <ButtonPost>Post</ButtonPost>
            </Flex>
        </form>
    );
};

export default NewPostEditor;
