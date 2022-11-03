import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Underline from "@tiptap/extension-underline";
import PostTitleInput from "./PostTitleInput";
import { Flex } from "@chakra-ui/react";
import ButtonPost from "./ButtonPost";
import ButtonCancel from "./ButtonCancel";
import { Wrapper } from "./NewPostPage.style";

const PostContentEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: "",
        onUpdate: ({ editor }) => {
            const data = editor.getHTML();
            setPostContent(data);
        },
    });

    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [cancelContent, setCancelContent] = useState(false);

    const handleSumble = (e: any) => {
        e.preventDefault();
        console.log(`{title: ${postTitle}, content: ${postContent}}`);
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
            <PostTitleInput value={postTitle} onChange={(event) => setPostTitle(event.target.value)} />
            <Wrapper>
                <MenuBar editor={editor} />
                <EditorContent editor={editor} />
            </Wrapper>
            <Flex justifyContent="space-between">
                <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
                <ButtonPost>Post</ButtonPost>
            </Flex>
        </form>
    );
};

export default PostContentEditor;
