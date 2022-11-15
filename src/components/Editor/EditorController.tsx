import { useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";



const useEditorController=()=>{
    const [content,setContent]=useState<string>()

    const editor = useEditor({
        extensions: [StarterKit, Underline, TextStyle, Color],
        autofocus: true,
        content: "",
        onUpdate: ({ editor }) => {
            const data = editor.getHTML();
            setContent(data);
        },
    });
    const clearContent=()=>editor?.commands.clearContent()
    
    return {editor, clearContent, content}
}

export default useEditorController

