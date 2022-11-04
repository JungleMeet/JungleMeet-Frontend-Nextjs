import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Underline from "@tiptap/extension-underline";
import PostTitleInput from "./PostTitleInput";
import { Box, Flex, useToast } from "@chakra-ui/react";
import ButtonPost from "./ButtonPost";
import ButtonCancel from "./ButtonCancel";
import { Wrapper } from "./NewPostPage.style";
import { addNewPost } from "@/utils/axiosPostApi";
// const reverse = require("buffer-reverse");

const PostContentEditor = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [token, setToken] = useState<string | null>("");
    const [cancelContent, setCancelContent] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        const localStorageToken = localStorage.getItem("token");
        setToken(localStorageToken);
    }, []);

    console.log(token);

    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: "",
        onUpdate: ({ editor }) => {
            const data = editor.getHTML();
            setPostContent(data);
        },
    });

    const handleSumble = async (e: any) => {
        e.preventDefault();
        if (!postTitle || !postContent) {
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
            // const revereToken = reverse(token).toString("hex")
            // console.log(revereToken)
            const res = await addNewPost(postTitle, postContent, token);
            console.log(res);
            toast({
                position: "top",
                title: "Post Success!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setPostTitle("");
        editor?.commands.clearContent();
        setCancelContent(true);
    };

    useEffect(() => {
        setPostContent("");
        setCancelContent(false);
    }, [cancelContent]);

    return (
        <form onSubmit={handleSumble}>
            <Box background="gray.200" padding="32px" paddingBottom="50px" borderRadius="5px">
                <PostTitleInput value={postTitle} onChange={(event) => setPostTitle(event.target.value)} />
                <Wrapper>
                    <MenuBar editor={editor} />
                    <EditorContent editor={editor} />
                </Wrapper>
            </Box>
            <Flex justifyContent="space-between" marginTop="50px" marginBottom="50px">
                <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
                <ButtonPost>Post</ButtonPost>
            </Flex>
        </form>
    );
};

export default PostContentEditor;
