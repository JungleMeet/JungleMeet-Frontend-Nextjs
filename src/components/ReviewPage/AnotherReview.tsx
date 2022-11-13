import { Flex, Stack, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ReviewLikeReplies from "./ReviewLikeReplies";
import ReviewAvatar from "./ReviewAvatar";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { dateCreatedAt } from "@/utils/dateCreateAt";
import { useRouter } from "next/router";

interface IReviewProps {
    postId: string;
    author: [
        {
            name: string;
            _id: string;
        }
    ];
    createdAt: string;
    content: string;
    repliesCount: number;
    mentionedUserId: string;
    name: string;
    _id: string;
    avatar: string;
    children: [
        {
            _id: string;
            content: string;
            createdAt: string;
            author: {
                name: string;
                _id: string;
            };
        }
    ];
}

const AnotherReview = () => {
    const [comments, setComments] = useState([]);
    const router = useRouter();
    const { id }: any = router.query;

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await getCommentsByCondition(id, "createdAt", 999, 0);
                const data: any = res.data;

                setComments(data);
            } catch (err) {
                return err;
            }
        };
        fetchComments();
    }, []);

    //     const dataToObject = Object.assign({},CommentData)
    //     console.log(dataToObject[0].author);

    return (
        <>
            {comments?.map(
                ({ _id, author, createdAt, content, avatar, children, mentionedUserId }: IReviewProps) => {
                    return (
                        <>
                            <Stack bg="rgba(243, 244, 246, 0.5)" pt="9px" pb="46px" pl="4px" mb="32px" key={_id}>
                                <Flex justify="space-between" align="center">
                                    <ReviewAvatar
                                        id={author[0]._id}
                                        author={author[0].name}
                                        createdAt={dateCreatedAt(createdAt)}
                                        avatar={avatar}
                                    />
                                    <ReviewLikeReplies likes={10} repliesCount={99} />
                                </Flex>
                                <Stack pl="100px" pt="-50px">
                                    <Text>{content}</Text>
                                    <Button
                                        size="sl"
                                        color="blue.500"
                                        fontSize={"text5"}
                                        width="50px"
                                        variant="unstyled"
                                    >
                    REPLY
                                    </Button>
                                </Stack>
                                {/*                                 <Stack pl="106px" pb="32px" key={children[0]._id}>  
                                    <ReviewAvatar id={children[0]?.author?._id} author={children[0]?.author?.name} createdAt={dateCreatedAt(children[0].createdAt)} avatar={avatar}/> 
                                    <Stack pl="48.75px">
                                        <Text fontSize={"text4"} fontWeight="500">
                                            {`@ ${mentionedUserId}`}
                                        </Text> 
                                        <Text>{children[0].content}</Text>                                
                                    </Stack>
                                    <Button
                                        size="sl"
                                        color="blue.500"
                                        fontSize={"text5"}
                                        width="70px"
                                        variant="unstyled"
                                    >
                                    REPLY
                                    </Button>
                                </Stack>
                                
                                <Button
                                    size="sl"
                                    color="blue.500"
                                    fontSize={"text5"}
                                    width="250px"
                                    variant="unstyled"
                                    pt="15px"
                                >
                                          See more replies (3 Replies)
                                </Button>
                                <Divider borderColor="grey.200" pt="30px" /> */}
                                {/* {comments.map((comment) => {
                                    return (
                                        <Stack key={comment._id}>
                                            <Comment  content={content} />
                                        </Stack>
                                    );
                                })} */}
                )
                            </Stack>
                        </>
                    );
                }
            )}
        </>
    );
};

export default AnotherReview;
