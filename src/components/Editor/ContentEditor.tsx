import { EditorContent, Editor } from "@tiptap/react";
import MenuBar from "../NewPostEditor/MenuBar";
import { Wrapper } from "../NewPostEditor/NewPostPage.style";


interface IContentEditorProps {
    editor:Editor | null;
}

// use contentEditor togher with useEditorControler hook
// const {editor, clearContent, content}=useEditorController()
// pass the editor to the <ContentEditor/> as props, and get contents from content 

const ContentEditor = ({ editor }:IContentEditorProps) => {
// could add more features here, such as character count and word count\

    return (
        <Wrapper height="350px">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </Wrapper>
    );
};

export default ContentEditor;
