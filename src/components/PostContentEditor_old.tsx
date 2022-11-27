import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./NewPostEditor/MenuBar";
import Underline from "@tiptap/extension-underline";
import { Wrapper } from "./NewPostEditor/NewPostPage.style";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

interface IPostContentEditorProps {
    setPostContent: (value: string) => void;
    postTitle?: string;
    hashtag?: string;
}

const PostContentEditor = ({ setPostContent, postTitle, hashtag }: IPostContentEditorProps) => {
    const editor = useEditor({
        extensions: [StarterKit, Underline, TextStyle, Color],
        autofocus: true,
        content: "",
        onUpdate: ({ editor }) => {
            const data = editor.getHTML();
            setPostContent(data);
        },
    });

    useEffect(() => {
        if (!postTitle && !hashtag) {
            editor?.commands.clearContent();
        }
    }, [postTitle, hashtag]);

    return (
        <Wrapper height="350px">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </Wrapper>
    );
};

export default PostContentEditor;
