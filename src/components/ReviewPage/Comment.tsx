import React from "react";
import { isEmpty } from "lodash";

export interface ICommentProps {
    _id: string;
    content: string;
    visible: boolean;
    author: {
        _id: string;
        name: string;
        avatar: string;
    };
    mentionedUserId: string[];
    postId: string;
    parentCommentId: string;
    like: string[];
    createdAt: string;
    updatedAt: string;
    level: number;
    __V: number;
    children: ICommentProps[];
    // [key: string]: string | boolean | Array<any> | Object|null;
}
const Comment = ({ comments }: { comments: ICommentProps[] }): JSX.Element => {
    return (
        <>
            {comments.map((item: any) => {
                const {
                    _id,
                    content,
                    // visible,
                    // postId,
                    // createdAt,
                    // like,
                    author: {
                        name: authorName,
                        // _id: authorId,
                        // avatar
                    },
                } = item;
                return (
                    <div style={{ marginLeft: "25px", marginTop: "10px" }} key={_id}>
            Author: {`${authorName}`}
                        <br></br>
                        {`--- ${content}`}
                        {!isEmpty(item.children) ? <Comment comments={item.children} /> : null}
                    </div>
                );
            })}
        </>
    );
};

export default Comment;
