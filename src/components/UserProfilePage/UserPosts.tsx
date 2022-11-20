import { useState, useEffect } from "react";
import { CurrentPagePostProps } from "@/components/DiscussionsPage/DiscussionsPage";
import Discussion from "@/components/DiscussionsPage/Discussion";
import { getPostsByUserId } from "@/utils/axiosPostApi";

interface IUserPosts {
    queryUserId: string;
    setIsLoading: (value: boolean) => void;
}
const UserPosts = ({ queryUserId, setIsLoading }: IUserPosts) => {
    const [userPost, setUserPost] = useState<CurrentPagePostProps[]>([]);
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        const fetchUserPost = async () => {
            try {
                setIsLoading(true);
                const postResponse = await getPostsByUserId(
                    3,
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
    }, []);
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
        </>
    );
};

export default UserPosts;
