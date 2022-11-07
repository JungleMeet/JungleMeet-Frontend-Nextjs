import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Underline from "@tiptap/extension-underline";
import { Box, Flex, Text } from "@chakra-ui/react";
import ButtonPost from "./ButtonPost";
import ButtonCancel from "./ButtonCancel";
import { Wrapper } from "./NewPostPage.style";
import PostSingleLineInput from "./PostSingleLineInput";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

interface IPostContentEditorProps {
    children: React.ReactNode;
    setPostContent: (value: string) => void;
    setPostTitle: (value: string) => void;
    setHashtag: (value: string) => void;
    postTitle: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostContentEditor = ({
    children,
    setPostContent,
    postTitle,
    setPostTitle,
    value,
    onChange,
    setHashtag,
}: IPostContentEditorProps) => {
    const [cancelContent, setCancelContent] = useState(false);

    const editor = useEditor({
        extensions: [StarterKit, Underline, TextStyle, Color],
        autofocus: true,
        content: "",
        onUpdate: ({ editor }) => {
            const data = editor.getHTML();
            setPostContent(data);
        },
    });

    const handleCancel = () => {
        postTitle && setPostTitle("");
        editor?.commands.clearContent();
        setCancelContent(true);
    };

    const handleHashtagSymbolCheck = (e: any) => {
        console.log(e.currentTarget.value);
    };

    useEffect(() => {
        setPostContent("");
        setCancelContent(false);
        setHashtag("");
    }, [cancelContent]);

    return (
        <>
            <Box background="gray.200" padding="32px" borderRadius="5px">
                {children}
                <Wrapper>
                    <MenuBar editor={editor} />
                    <EditorContent editor={editor} />
                </Wrapper>
                <Flex paddingTop="20px" marginLeft="8px" gap="25px" alignItems="center">
                    <Text fontSize="text3" fontWeight="700" lineHeight="lh28">
            #Hashtag
                    </Text>
                    <PostSingleLineInput
                        placeholder="Add your Hashtag here with #..."
                        value={value}
                        onChange={onChange}
                        onKeyUp={handleHashtagSymbolCheck}
                    />
                </Flex>
            </Box>
            <Flex justifyContent="space-between" marginTop="50px" marginBottom="50px">
                <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
                <ButtonPost>Post</ButtonPost>
            </Flex>
        </>
    );
};

export default PostContentEditor;
