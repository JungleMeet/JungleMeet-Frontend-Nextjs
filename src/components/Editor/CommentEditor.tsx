import ContentEditor from "@/components/Editor/ContentEditor";
import useEditorController from "@/components/Editor/useEditorController";
import { createComment } from "@/utils/axiosCommentApi";
import { Box, Button, ButtonGroup, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

interface ICommentEditorProps {
    postId?: string;
    setIsNewCommentSubmitted:React.Dispatch<React.SetStateAction<boolean>>
}

const CommentEditor = ({ postId,setIsNewCommentSubmitted }: ICommentEditorProps) => {
    const { editor, clearContent, content } = useEditorController();
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const submitComment = () => {
        const token = localStorage.getItem("token");
        if (!token || !content) return;
        setLoading(true);
        createComment({ content, postId, token }).then(() => {
            setLoading(false);
            clearContent();
            toast({
                title: "SUCCESS",
                description: "Your comment has been created.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setIsNewCommentSubmitted(true)
        });
    };

    return (
        <Box position={"relative"} transitionTimingFunction="ease" pr={"3rem"}>
            <ContentEditor editor={editor} height="150px" />
            <ButtonGroup pt={"15px"}>
                <Button
                    isLoading={loading}
                    onClick={submitComment}
                    colorScheme="blue"
                    disabled={content ? content?.length < 8 : true}
                >
          Comment
                </Button>
                <Button onClick={clearContent}>Clear</Button>
            </ButtonGroup>
        </Box>
    );
};

export default CommentEditor;
