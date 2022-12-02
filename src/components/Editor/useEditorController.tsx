import { useEffect } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";

const useEditorController = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextStyle,
            Color,
            CharacterCount,
            Placeholder.configure({
                placeholder: "start writing nice words...",
            }),
        ],
        autofocus: false,
        content: "",
    });

    const content = editor?.getHTML();

    useEffect(() => {
        const savedContents = localStorage.getItem("draft");
        const isEditorEmpty = editor?.getText() === "";
        if (isEditorEmpty && savedContents) {
            editor?.commands.setContent(`(recovered:) ${savedContents}`);
        }
    }, [editor]);

    const clearContent = () => {
        localStorage.removeItem("draft");
        editor?.commands.clearContent();
    };

    return { editor, clearContent, content };
};

export default useEditorController;
