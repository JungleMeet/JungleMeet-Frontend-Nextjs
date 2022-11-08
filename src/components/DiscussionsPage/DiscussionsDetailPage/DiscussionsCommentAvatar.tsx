import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { getUserById } from "@/utils/axiosUserApi";

interface IDiscussionsCommentAvatar {
    commentId: string;
    _id: string;
    name: string;
    avatar: string;
}

const DiscussionsCommentAvatar = ({ authorId }: any) => {
    const [commentAuthor, setCommentAuthor] = useState([]);

    const commentAuthorMemo = useMemo(() => commentAuthor, [commentAuthor]);

    useEffect(() => {
        const getCommentAvatar = async () => {
            try {
                const { data: author } = await getUserById(authorId);

                const result = [];
                result.push(author);

                setCommentAuthor(result);
            } catch (err) {
                console.log(err);
            }
        };
        getCommentAvatar();
    }, []);
    return (
        <>
            {commentAuthorMemo?.map(({ _id, name, avatar }: IDiscussionsCommentAvatar) => {
                return (
                    <Avatar
                        key={_id}
                        name={name}
                        src={avatar}
                        borderRadius="10px"
                        width="35px"
                        height="35px"
                        mr="20px"
                    ></Avatar>
                );
            })}
        </>
    );
};

export default DiscussionsCommentAvatar;
