import {
    Flex,
    Heading,
    Box,
    Text,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useToast,
    IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";
import { dateCreatedAt } from "../../../utils/dateCreateAt";
import DiscussionPostAuthor from "./DiscussionPostAuthor";
import { openLoginModal } from "@/app/reducer/loginModalSlice";
import { EditIcon, HamburgerIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import {
    clickTheFollow,
    clickTheLike,
    likeClicked,
    followClicked,
    theLikeNum,
    setLikeNum,
} from "@/app/reducer/buttonSlice";
import { deletePost } from "@/utils/axiosPostApi";

interface IDetailProps {
    likeList?: string[];
    followList?: string[];
    avatar?: string;
    userId?: string;
    name?: string;
    title?: string;
    postId?: string;
    date?: string;
    like?: number;
    isLogged?: boolean;
    currentId?: string;
    userRole?: string;
    handleEditPost: () => void;
}

const DiscussionsDetailHeader = ({
    postId,
    userId,
    avatar,
    name,
    title,
    date,
    like,
    likeList,
    followList,
    isLogged,
    currentId,
    userRole,
    handleEditPost,
}: IDetailProps) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const theLike = useSelector((state: any) => state.button.like);
    const router = useRouter();

    useEffect(() => {
        const theUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
        dispatch(setLikeNum(like));

        if (followList?.includes(theUser?.userId)) {
            dispatch(followClicked());
        }

        if (likeList?.includes(theUser?.userId)) {
            dispatch(likeClicked());
        }
    }, []);

    const toggleClick = () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only registered users can follow/like",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        }
    };

    const toggleClickLike = () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only registered users can follow/like",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        } else {
            dispatch(clickTheLike());
            dispatch(theLikeNum());
        }
    };
    const toggleClickFollow = async () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only registered users can follow/like",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        } else {
            dispatch(clickTheFollow());
        }
    };
    const toggleDelete = async () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only admin can delete post",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        } else {
            const token = localStorage.getItem("token") || "";
            const { id }: { id?: string } = router.query;
            const theAdmin = JSON.parse(localStorage.getItem("userInfo") || "{}");

            if (!id) return;

            return deletePost(id, theAdmin.role, token)
                .then(() => {
                    toast({
                        position: "bottom",
                        title: "Deleted",
                        description: "The post has been deleted",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    router.back();
                    return true;
                })
                .catch((err) => {
                    toast({
                        position: "bottom",
                        title: "Deleted Failed",
                        description: err,
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    return false;
                });
        }
    };

    return (
        <Flex key={postId} direction={"column"}>
            {/* <Button
                w="100px"
                onClick={() => {
                    router.back();
                }}
                h="40px"
            >
                <Text>&lt; Back</Text>
            </Button> */}
            <Box mt="60px">
                <Heading fontSize="h2" color="gray.900" fontWeight="700" lineHeight="h2">
                    {title}
                </Heading>
                <Flex alignItems="center" mt="40px">
                    <DiscussionPostAuthor
                        id={userId}
                        avatar={avatar}
                        author={name}
                        createdAt={dateCreatedAt(date)}
                    />
                    <HStack ml="15px" align="center" textColor="gray.500" onClick={toggleClick}>
                        {isLogged && userRole == "admin" ? (
                            <Menu>
                                {" "}
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    bg="blue.200"
                                />
                                <MenuList
                                    bg="gray.300"
                                    _hover={{
                                        border: "none",
                                    }}
                                    _focus={{ border: "none" }}
                                >
                                    <MenuItem icon={<DeleteIcon />} onClick={toggleDelete}>
                    Delete post
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            ""
                        )}
                        {isLogged && userId === currentId ? (
                            <Menu>
                                {" "}
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    bg="blue.200"
                                />
                                <MenuList
                                    bg="gray.300"
                                    _hover={{
                                        border: "none",
                                    }}
                                    _focus={{ border: "none" }}
                                >
                                    <MenuItem icon={<EditIcon />} onClick={handleEditPost}>
                    Edit my post
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <HStack
                                align="center"
                                textColor="gray.500"
                                onClick={toggleClickFollow}
                                _hover={{ color: "gray.50" }}
                            >
                                <DiscussionsFollowButton />
                            </HStack>
                        )}
                    </HStack>

                    <Flex alignItems="center" justifyContent="flex-end" flex="1">
                        <Text color="red" mr="10px">
                            {theLike} liked
                        </Text>
                        <HStack align="center" onClick={toggleClickLike} _hover={{ color: "gray.50" }}>
                            <DiscussionsLikeButton />
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default DiscussionsDetailHeader;
