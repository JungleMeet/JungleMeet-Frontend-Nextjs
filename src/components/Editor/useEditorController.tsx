import { useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";

const useEditorController = () => {
    const [content, setContent] = useState<string>("");

    const editor = useEditor({
        extensions: [
            StarterKit, 
            Underline, 
            TextStyle, 
            Color, 
            Placeholder.configure({
                placeholder:'start writing nice words...',
            }),
        ],
        autofocus: true,
        content: "",
        onUpdate: ({ editor }) => {
            const data = editor.getHTML();
            setContent(data);
        },
    });
    const clearContent = () => {
        editor?.commands.clearContent();
        setContent("");
    };

    return { editor, clearContent, content };
};

export default useEditorController;
