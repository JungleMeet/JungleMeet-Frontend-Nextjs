import React, { useState, useEffect } from "react";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { addNewPost } from "@/utils/axiosPostApi";
import Router from "next/router";
import PostSingleLineInput from "./PostSingleLineInput";
import ButtonCancel from "./ButtonCancel";
import ButtonPost from "./ButtonPost";
import useEditorController from "../Editor/useEditorController";
import ContentEditor from "../Editor/ContentEditor";
import Hashtag from "./Hashtag";
import { IHashtagsProps } from "./HashtagPreview";

interface INewEditorProps {
    bgImg: string | undefined;
}

const NewPostEditor = ({ bgImg }: INewEditorProps) => {
    const [postTitle, setPostTitle] = useState("");
    // const [hashtags, setHashtags] = useState("");
    const [hashtagsArray, setHashtagsArray] = useState<IHashtagsProps[]>([]);
    const [token, setToken] = useState<any | null>("");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        const localtoken = localStorage.getItem("token");
        setToken(localtoken);
    }, []);

    const { editor, clearContent, content } = useEditorController();

    const hashtags = hashtagsArray.map(({ _id }) => _id);
    console.log(hashtags);

    const handleSumble = async (e: React.SyntheticEvent) => {
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
            await addNewPost(postTitle, content, hashtags, token, bgImg);
            clearContent();
            Router.push("/discussions");
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
        setHashtagsArray([]);
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
                <Hashtag setHashtagsArray={setHashtagsArray} hashtagsArray={hashtagsArray} />
            </Box>
            <Flex justifyContent="space-between" marginTop="50px" marginBottom="50px">
                <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
                <ButtonPost isLoading={isLoading} disabled={isLoading && true}>
          Post
                </ButtonPost>
            </Flex>
        </form>
    );
};

export default NewPostEditor;
