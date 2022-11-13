import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { addNewPost } from "@/utils/axiosPostApi";
import Router from "next/router";
import PostContentEditor from "./PostContentEditor";
import PostSingleLineInput from "./PostSingleLineInput";

interface INewEditorProps {
    bgImg: string | undefined;
}

const NewPostEditor = ({ bgImg }: INewEditorProps) => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [token, setToken] = useState<any | null>("");
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        const localtoken = localStorage.getItem("token");
        setToken(localtoken);
    }, []);

    const handleSumble = async (e: any) => {
        e.preventDefault();
        if (!postTitle || !postContent) {
            toast({
                position: "top",
                title: "Post title and content can't be empty",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        try {
            await addNewPost(postTitle, postContent, hashtag, token, bgImg);
            Router.push("/discussions");
            setIsLoading(false);
            toast({
                position: "top",
                title: "Post Success!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSumble}>
            <PostContentEditor
                setPostContent={setPostContent}
                setPostTitle={setPostTitle}
                setHashtag={setHashtag}
                postTitle={postTitle}
                value={hashtag}
                onChange={(event) => setHashtag(event.target.value)}
            >
                <PostSingleLineInput
                    placeholder="Post Title"
                    value={postTitle}
                    onChange={(event) => setPostTitle(event.target.value)}
                />
            </PostContentEditor>
        </form>
    );
};

export default NewPostEditor;
