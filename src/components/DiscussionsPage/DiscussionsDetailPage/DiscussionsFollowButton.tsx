import { Button, Text, Icon } from "@chakra-ui/react";
import { MdOutlineFavorite, MdAssistantPhoto } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toggleLikeButton, toggleFollowButton } from "@/utils/axiosPostApi";
import { useSelector } from "react-redux";

const useGetData = () => {
    const router = useRouter();
    const { id }: any = router.query;
    const [token, setToken] = useState<any | null>("");
    const [userId, setUserId] = useState<any | null>("");

    useEffect(() => {
        const localtoken = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        setToken(localtoken);
        setUserId(userId);
    }, []);
    return {
        id,
        token,
        userId,
    };
};

export const DiscussionsLikeButton = () => {
    const theLikeState = useSelector((state: any) => state.button.likeState);
    const [buttonState, setButtonState] = useState(false);

    useEffect(() => {
        setButtonState(theLikeState);
    }, [theLikeState]);

    const { id, token, userId } = useGetData();

    const likeButtonClick = async () => {
        try {
            const res = await toggleLikeButton(id, userId, token);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Button
            bg={buttonState ? "red.400" : "gray.200"}
            _hover={
                buttonState
                    ? {
                        background: "",
                    }
                    : {
                        background: "red.400",
                        border: "none",
                    }
            }
            textColor={buttonState ? "gray.50" : "gray.500"}
            _focus={{ border: "none" }}
            width="84px"
            height="37px"
            onClick={likeButtonClick}
        >
            <Icon as={MdOutlineFavorite} mr="5px" />
            <Text>{buttonState ? "Unlike" : "like"}</Text>
        </Button>
    );
};

const DiscussionsFollowButton = () => {
    const theFollowState = useSelector((state: any) => state.button.followState);
    const [buttonState, setButtonState] = useState(false);

    useEffect(() => {
        setButtonState(theFollowState);
    }, [theFollowState]);

    const { id, token, userId } = useGetData();

    const followButtonClick = async () => {
        try {
            await toggleFollowButton(id, userId, token);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Button
            bg={buttonState ? "blue.400" : "gray.200"}
            mr="10px"
            _hover={
                buttonState
                    ? {
                        background: "",
                    }
                    : {
                        background: "blue.400",
                        border: "none",
                    }
            }
            textColor={buttonState ? "gray.50" : "gray.500"}
            _focus={{ border: "none" }}
            width="145px"
            height="37px"
            onClick={followButtonClick}
        >
            <Icon as={MdAssistantPhoto} mr="5px" />

            <Text>{buttonState ? "Unfollow post" : "Follow post"}</Text>
        </Button>
    );
};

export default DiscussionsFollowButton;
