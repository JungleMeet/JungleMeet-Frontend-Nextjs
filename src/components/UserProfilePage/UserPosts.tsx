import { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
import { CurrentPagePostProps } from "@/components/DiscussionsPage/DiscussionsPage";
import Discussion from "@/components/DiscussionsPage/Discussion";
import { getPostsByUserId } from "@/utils/axiosPostApi";

interface IUserPosts {
    queryUserId: string;
    setIsLoading: (value: boolean) => void;
}
const UserPosts = ({ queryUserId, setIsLoading }: IUserPosts) => {
    const [userPost, setUserPost] = useState<CurrentPagePostProps[]>([]);
    const [displayNumber, setDisplayNumber] = useState(3);
    const loadMore = () => {
        setDisplayNumber((displayNumber) => {
            return displayNumber + 3;
        });
    };
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        const fetchUserPost = async () => {
            try {
                setIsLoading(true);
                const postResponse = await getPostsByUserId(
                    displayNumber,
                    0,
                    "createdAt",
                    queryUserId === userInfo.userId ? userInfo.userId : queryUserId
                )!;
                setIsLoading(false);
                setUserPost(postResponse.data.data);
            } catch (e) {
                setIsLoading(false);
                return e;
            }
        };
        fetchUserPost();
    }, [displayNumber]);
    return (
        <>
            {userPost?.map(
                ({
                    _id,
                    title,
                    content,
                    releaseDateRightFormat,
                    hashtag,
                    bgImg,
                    author,
                    likeCount,
                    viewNumber,
                    commentCount,
                }: CurrentPagePostProps) => (
                    <Discussion
                        key={_id}
                        postId={_id}
                        hashtag={hashtag}
                        src={bgImg}
                        title={title}
                        name={author}
                        date={releaseDateRightFormat}
                        like={likeCount}
                        views={viewNumber}
                        comments={commentCount}
                        description={content}
                    />
                )
            )}
            <Button
                onClick={loadMore}
                w="176px"
                left={"50%"}
                ml={"-88px"}
                h="40px"
                backgroundColor={"gray.400"}
                borderRadius={"5px"}
            >
                <Text
                    textAlign={"center"}
                    top="50%"
                    h="28px"
                    color="white"
                    lineHeight={"28px"}
                    fontWeight={600}
                    fontSize={"16px"}
                >
                    {" "}
          Load More
                </Text>
            </Button>
        </>
    );
};

export default UserPosts;
