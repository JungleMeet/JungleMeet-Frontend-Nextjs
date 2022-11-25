import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button, Stack, Text, useToast } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { openLoginModal } from "@/app/reducer/loginModalSlice";
import ReviewPosts from "@/components/MoviePage/PopularReview/ReviewPosts";
import {
    SectionContainer,
    SectionHeaderContainer,
    SectionTitle,
} from "@/components/MainPage/Containers";
import AddReview from "@/components/MoviePage/PopularReview/AddReview";

const PopularReview = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const toast = useToast();
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const [isEditorVisible, setIsEditorVisible] = useState(false);

    useEffect(() => {
        setIsEditorVisible(isLogged);
    }, [isLogged]);

    const toggleShowEditor = () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only registered users can make comments",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        }
        setIsEditorVisible((state) => !state);
    };

    return (
        <>
            <SectionContainer>
                <SectionHeaderContainer>
                    <Link href={`/movies/reviews/${id}`}>
                        <SectionTitle>Popular Review</SectionTitle>
                    </Link>
                    <Stack>
                        <Text
                            fontWeight="400"
                            fontSize="18px"
                            color="rose.700"
                            marginRight="800px"
                            lineHeight="24px"
                        ></Text>
                    </Stack>
                    {/* write a new review part using chakra-ui component */}
                    <Stack>
                        <Stack direction="row" spacing={4}>
                            {isEditorVisible ? (
                                <Button
                                    leftIcon={isEditorVisible ? <FaPen /> : <FaPen />}
                                    colorScheme="gray"
                                    variant="solid"
                                    onClick={toggleShowEditor}
                                >
                  Review
                                </Button>
                            ) : (
                                <Button
                                    leftIcon={isEditorVisible ? <TriangleUpIcon /> : <FaPen />}
                                    colorScheme="blue"
                                    variant="solid"
                                    onClick={toggleShowEditor}
                                >
                  Review
                                </Button>
                            )}
                        </Stack>
                    </Stack>
                    {/* write a new review part END */}
                </SectionHeaderContainer>
                <AddReview isEditorVisible={isLogged} postId={`${id}`} />

                <Link href={`/movies/reviews/${id}`}>
                    <Text
                        fontWeight="400"
                        fontSize="18px"
                        color="rose.700"
                        lineHeight="24px"
                        cursor={"pointer"}
                    >
                        <ReviewPosts />
                    </Text>
                </Link>
            </SectionContainer>
        </>
    );
};

export default PopularReview;
