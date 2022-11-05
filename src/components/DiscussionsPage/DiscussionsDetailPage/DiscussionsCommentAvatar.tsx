import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { getPosts } from "@/utils/axiosPostApi";
import { getUserById } from "@/utils/axiosUserApi";
import { getComments } from "@/utils/axiosCommentApi";

interface IDiscussionsCommentAvatar {
    _id: string;
    name: string;
    avatar: string;
}

const DiscussionsCommentAvatar = () => {
    const [commentAuthor, setCommentAuthor] = useState([]);

    const commentAuthorMemo = useMemo(() => commentAuthor, [commentAuthor]);

    useEffect(() => {
        const getCommentAvatar = async () => {
            try {
                const { data } = await getPosts();
                const allPost = data.data;

                const [id] = allPost.slice(0, 1).map((item: any) => {
                    return item._id;
                });

                const { data: comment } = await getComments(id);

                const name = comment.map((item: any) => {
                    return item.author;
                });

                const author = await getUserById(name.toString());

                const result = [];
                result.push(author.data);

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
                        src={name}
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
