import {
    Flex,
    Heading,
    Box,
    Text,
    Grid,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useToast,
    IconButton,
} from "@chakra-ui/react";
import React from "react";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";
import { dateCreatedAt } from "../../../utils/dateCreateAt";
import DiscussionPostAuthor from "./DiscussionPostAuthor";
import { openLoginModal } from "@/app/reducer/loginModalSlice";
import { EditIcon, HamburgerIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

interface IDetailProps {
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
    isLogged,
    currentId,
    userRole,
    handleEditPost,
}: IDetailProps) => {
    const dispatch = useDispatch();
    const toast = useToast();

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

    return (
        <Grid>
            <Flex key={postId} direction={"column"}>
                <Box mt="100px">
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
                                        <MenuItem icon={<DeleteIcon />}>Delete post</MenuItem>
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
                                <DiscussionsFollowButton>
                                    <Text>Follow post </Text>
                                </DiscussionsFollowButton>
                            )}
                        </HStack>

                        <Flex alignItems="center" justifyContent="flex-end" flex="1">
                            <Text color="red" mr="10px">
                                {like} liked
                            </Text>
                            <HStack
                                align="center"
                                textColor="gray.500"
                                onClick={toggleClick}
                                _hover={{ color: "gray.50" }}
                            >
                                <DiscussionsLikeButton>
                                    <Text>Like</Text>
                                </DiscussionsLikeButton>
                            </HStack>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Grid>
    );
};

export default DiscussionsDetailHeader;
