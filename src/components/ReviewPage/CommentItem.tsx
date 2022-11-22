import { dateCreatedAt } from "@/utils/dateCreateAt";
import { Stack, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import ReplyCommentEditor from "../Editor/ReplyCommentEditor";
import ReviewAvatar from "./ReviewAvatar";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal } from "@/app/reducer/loginModalSlice";
import parser from "html-react-parser";
import styled from 'styled-components';
import { toggleHideChildrenComment } from "@/app/reducer/commentSlice";

export interface ICommentItemProps {
    _id: string;
    content: string;
    author: {
        _id: string;
        name: string;
        avatar: string;
    };
    postId: string;
    like?: string[];
    createdAt: string;
    parentCommentId?: string;
    mentionedUserId?: string[];
    visible?: boolean;
    updatedAt?: string;
    level?: number;
    __V?: number;
    children?: ICommentItemProps[];
    setNewComment: React.Dispatch<React.SetStateAction<any>>;
    hasChildren:boolean;
}


const CommentThread = styled.button`
display: block;
  position: absolute;
  bottom: 0;
  left: 65px;
  top: 70px;
  border-right: 2px solid #cbcacab3;
  border-right-color: ${({isCollapsed}:{isCollapsed:boolean})=>isCollapsed?"#178005":"#cbcacab3"};
  width: 13px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    border-right: 2px solid #eb351d;
  }
`;

const CommentItem = ({
    _id,
    content,
    postId,
    createdAt,
    author,
    setNewComment,
    hasChildren,
}: ICommentItemProps) => {
    const dispatch = useDispatch();
    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const hiddenIdArray = useSelector((state: any) => state.comments.hiddenIdArray);


    const toggleHide = (id: string) => {
        dispatch(toggleHideChildrenComment(id));
    };
    
    const toggleEditor = () => {
        if (!isLogged) {
            return dispatch(openLoginModal());
        }
        setIsEditorVisible((current) => !current);
    };
    const isThreadSelected=hiddenIdArray.includes(_id)
    return (
        <>
            <CommentThread onClick={()=>toggleHide(_id)} isCollapsed={hasChildren && isThreadSelected}/>
            <ReviewAvatar
                id={author?._id}
                author={`${author?.name}`}
                createdAt={dateCreatedAt(createdAt)}
                avatar={author?.avatar}
            />
            <Stack pl="63px" pb={"10px"}>
                <Text fontSize={"text4"} fontWeight="500" mb="15px" pr={"2rem"}>
                    {parser(content)}
                </Text>
                <Button
                    size="sl"
                    color="blue.500"
                    fontSize={"text5"}
                    width="45px"
                    variant="unstyled"
                    onClick={toggleEditor}
                >
                    {isEditorVisible ? "CLOSE" : "REPLY"}
                </Button>
            
                {isEditorVisible ? (
                    <ReplyCommentEditor
                        postId={postId}
                        parentCommentId={_id}
                        setNewComment={setNewComment}
                        setIsEditorVisible={setIsEditorVisible}
                    />
                ) : null}
            </Stack>
        </>
    );
};

export default CommentItem;
