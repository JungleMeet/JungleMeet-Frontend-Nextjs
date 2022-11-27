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

interface IPostContentEditorProps {
    type: "updatePost" | "newPost";
    bgImg: string | undefined;
}

const PostContentEditor = ({ bgImg, type }: IPostContentEditorProps) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [token, setToken] = useState<any | null>("");
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { editor, clearContent, content } = useEditorController();
    const postId = useSelector((state: any) => state.postEditing.postId);
    const editPostTitle = useSelector((state: any) => state.postEditing.postTitle);
    const editHashtag = useSelector((state: any) => state.postEditing.hashtag);
    const editContent = useSelector((state: any) => state.postEditing.content);

    const initialData =
    type === "newPost"
        ? {
            postTitle: "",
            hashtag: "",
            content: "",
        }
        : { postTitle: editPostTitle, hashtag: editHashtag, content: editContent };

    const [postTitle, setPostTitle] = useState(initialData.postTitle);
    const [hashtag, setHashtag] = useState(initialData.hashtag);

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
                await addNewPost(postTitle, content, hashtag, token, bgImg);
            }
            if (type === "updatePost") {
                await updatePost({ postId, postTitle, content, hashtag, bgImg, token });
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
        setHashtag("");
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
                    <ButtonCancel onClick={onOpen}>Cancel</ButtonCancel>
                    <ButtonPost>{type === "newPost" ? "Post" : "Update"}</ButtonPost>
                </Flex>
            </form>
            <ConfirmDialog isOpen={isOpen} onClose={onClose} handleCancel={handleCancel} />
        </>
    );
};

export default PostContentEditor;
