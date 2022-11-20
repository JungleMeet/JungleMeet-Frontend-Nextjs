import ContentEditor from "@/components/Editor/ContentEditor";
import useEditorController from "@/components/Editor/useEditorController";
import { createComment } from "@/utils/axiosCommentApi";
import { Box, Button, ButtonGroup, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface IAddCommentProps {
    postId: string;
    parentCommentId: string;
    setNewComment: React.Dispatch<React.SetStateAction<any>>;
    setIsEditorVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyCommentEditor = ({
    postId,
    parentCommentId,
    setNewComment,
    setIsEditorVisible,
}: IAddCommentProps) => {
    const { editor, clearContent, content } = useEditorController();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const { userId, userName, avatar } = useSelector((state: any) => state.login.userInfo);

    const submitComment = () => {
        const token = localStorage.getItem("token");
        if (!token || !content) return;
        setLoading(true);
        createComment({ content, postId, parentCommentId, token }).then(({ data }) => {
            setLoading(false);
            clearContent();
            toast({
                title: "SUCCESS",
                description: "Your comment has been created.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            delete data.likeCount;
            delete data.isRootComment;
            delete data.id;
            const authorInfo = {
                _id: userId,
                name: userName,
                avatar: avatar,
            };
            data.author = authorInfo;
            data.children = [];
            setIsEditorVisible(false);
            setNewComment(data);
        });
    };

    return (
        <Box position={"relative"} transitionTimingFunction="ease" pr={"3rem"}>
            <ContentEditor editor={editor} height="150px" />
            <ButtonGroup pt={"15px"}>
                <Button onClick={clearContent}>Clear</Button>
                <Button
                    isLoading={loading}
                    onClick={submitComment}
                    colorScheme="blue"
                    disabled={content ? content?.length < 8 : true}
                >
          Comment
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default ReplyCommentEditor;
