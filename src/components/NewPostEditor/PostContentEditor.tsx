import React, { useState, useEffect, FormEvent } from "react";
import { Box, Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { addNewPost, updatePost } from "@/utils/axiosPostApi";
import { useRouter } from "next/router";
import PostSingleLineInput from "./PostSingleLineInput";
import ButtonCancel from "./ButtonCancel";
import ButtonPost from "./ButtonPost";
import useEditorController from "../Editor/useEditorController";
import ContentEditor from "../Editor/ContentEditor";
import { useDispatch, useSelector } from "react-redux";
import { resetPostData } from "@/app/reducer/postEditingSlice";
import ConfirmDialog from "./ConfirmDialogue";
import { IHashtagsProps } from "./HashtagPreview";
import Hashtag from "./Hashtag";

interface IPostContentEditorProps {
    type: "updatePost" | "newPost";
    bgImg: string | undefined;
}

const PostContentEditor = ({ bgImg, type }: IPostContentEditorProps) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [token, setToken] = useState<any | null>("");
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { editor, clearContent, content } = useEditorController();

    const postId = useSelector((state: any) => state.postEditing.postId);
    const editPostTitle = useSelector((state: any) => state.postEditing.postTitle);
    const editHashtags = useSelector((state: any) => state.postEditing.hashtags);
    const editContent = useSelector((state: any) => state.postEditing.content);

    const initialData =
    type === "newPost"
        ? {
            postTitle: "",
            hashtags: [],
            content: "",
        }
        : { postTitle: editPostTitle, hashtags: editHashtags, content: editContent };

    const [postTitle, setPostTitle] = useState(initialData.postTitle);
    // const [hashtags, setHashtags] = useState(initialData.hashtags);

    const [hashtagsArray, setHashtagsArray] = useState<IHashtagsProps[]>([]);

    const hashtags = hashtagsArray.map(({ _id }) => _id);

    useEffect(() => {
        const localtoken = localStorage.getItem("token");
        setToken(localtoken);
    }, []);

    useEffect(() => {
        editor?.commands.setContent(initialData.content);
    }, [editor]);

    const handleSubmit = async (e: FormEvent) => {
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
            if (type === "newPost") {
                await addNewPost(postTitle, content, hashtags, token, bgImg);
            }
            if (type === "updatePost") {
                await updatePost({ postId, postTitle, content, hashtags, bgImg, token });
            }
            setIsLoading(false);
            clearContent();
            toast({
                position: "top",
                title: "Post Success!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });

            dispatch(resetPostData());
            router.push(type === "newPost" ? "/discussions" : `discussions/${postId}`);
        } catch (error: unknown) {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setPostTitle("");
        setHashtagsArray([]);
        clearContent();
        dispatch(resetPostData());
        window.history.back();
    };

    const detectEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            editor?.commands.focus();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                    <ButtonCancel onClick={onOpen}>Cancel</ButtonCancel>
                    <ButtonPost isLoading={isLoading} disabled={isLoading && true}>
                        {type === "newPost" ? "Post" : "Update"}
                    </ButtonPost>
                </Flex>
            </form>
            <ConfirmDialog isOpen={isOpen} onClose={onClose} handleCancel={handleCancel} />
        </>
    );
};

export default PostContentEditor;
