import ContentEditor from "@/components/Editor/ContentEditor";
import useEditorController from "@/components/Editor/useEditorController";
import { createComment } from "@/utils/axiosCommentApi";
import { Box, Button, ButtonGroup, useToast } from "@chakra-ui/react";
import { useState } from "react";

interface IAddReviewProps {
    isEditorVisible: boolean;
    postId: string;
    setRefresh: (value: boolean) => void;
}

const AddReview = ({ isEditorVisible, postId, setRefresh }: IAddReviewProps) => {
    const { editor, clearContent, content } = useEditorController();
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const submitComment = () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        if (!content) return;
        setLoading(true);
        createComment({ content, postId, token }).then(() => {
            setLoading(false);
            clearContent();
            toast({
                title: "SUCCESS",
                description: "Your review has been created.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        });
    };
    return (
        <Box position={"relative"} transitionTimingFunction="ease" mb="30px">
            {isEditorVisible && (
                <>
                    <ContentEditor editor={editor} height="150px" />
                    <ButtonGroup pt={"15px"}>
                        <Button onClick={clearContent}>Clear</Button>
                        <Button
                            isLoading={loading}
                            onClick={() => {
                                submitComment();
                                setRefresh(true);
                            }}
                            colorScheme="blue"
                            disabled={content ? content?.length < 8 : true}
                        >
              Review
                        </Button>
                    </ButtonGroup>
                </>
            )}
        </Box>
    );
};

export default AddReview;
