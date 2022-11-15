import ContentEditor from "@/components/Editor/ContentEditor";
import useEditorController from "@/components/Editor/useEditorController";
import { createComment } from "@/utils/axiosCommentApi";
import { Box, Button, ButtonGroup, useToast } from "@chakra-ui/react";
import { useState } from "react";

interface IAddCommentProps{
    isEditorVisible:boolean;
    postId:string;
}


const AddComment = ({ isEditorVisible, postId }:IAddCommentProps) => {
    const { editor, clearContent, content } = useEditorController();
    const [loading, setLoading] = useState(false);
    const toast=useToast()

    const submitComment = () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        setLoading(true);
        createComment({ content, postId, token }).then(() => {
            setLoading(false);
            clearContent();
            toast({
                title: 'SUCCESS',
                description: "Your comment has been created to this post.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        });
    };

    return (
        <Box position={"relative"} transitionTimingFunction="ease">
            {isEditorVisible && (
                <>
                    <ContentEditor editor={editor} height="150px" />
                    <ButtonGroup pt={"15px"}>
                        <Button onClick={clearContent}>Clear</Button>
                        <Button
                            isLoading={loading}
                            onClick={submitComment}
                            colorScheme="red"
                            disabled={content?.length < 8}
                        >
              Comment
                        </Button>
                    </ButtonGroup>
                </>
            )}
        </Box>
    );
};

export default AddComment;
