import { EditorContent, Editor } from "@tiptap/react";
import MenuBar from "../NewPostEditor/MenuBar";
import { Wrapper } from "../NewPostEditor/NewPostPage.style";

interface IContentEditorProps {
    editor: Editor | null;
    height: string;
}

// use contentEditor togher with useEditorControler hook
// const {editor, clearContent, content}=useEditorController()
// pass the editor to the <ContentEditor/> as props, and get contents from content

const ContentEditor = ({ editor, height }: IContentEditorProps) => {
    // this component is re-rendered every time something is typed in
    // therefore, i did not use state, but use variable instead, as the variables keep getting updated

    const content = editor?.getHTML();
    const saveFlag = content ? content?.length % 10 === 0 : false;

    if (saveFlag) {
        content && localStorage.setItem("draft", content);
    }

    return (
        <Wrapper height={height}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            <div className="bottom-row">
                {`${editor?.storage.characterCount.characters()} characters, ${editor?.storage.characterCount.words()}`}{" "}
        words
                {saveFlag ? <span> ...saved</span> : null}
            </div>
        </Wrapper>
    );
};

export default ContentEditor;
