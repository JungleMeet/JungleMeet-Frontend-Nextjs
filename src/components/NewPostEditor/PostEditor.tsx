import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import CloudinaryUploader from "./CloudinaryUploader";
import PostContentEditor from "./PostContentEditor";

interface IPostEditorProps {
    type: "newPost" | "updatePost";
}

const PostEditor = ({ type }: IPostEditorProps) => {
    const router = useRouter();
    const existingBgImg = useSelector((state: any) => state.postEditing.bgImg);
    const [bgImg, setBgImg] = useState<string | undefined>(existingBgImg || undefined);

    if (type === "updatePost" && !bgImg) {
        router.push("/");
        return <div>redirecting...</div>;
    }

    return (
        <>
            <Heading
                as="h3"
                fontSize="h3"
                lineHeight="lh36"
                fontWeight="700"
                marginTop="100px"
                marginBottom="50px"
            >
                {type === "newPost" ? "Create Your Post in Discussion" : "Edit Your Post"}
            </Heading>
            <CloudinaryUploader 
                setBgImg={setBgImg} 
                bgImg={bgImg}                 
                displayText={"SELECT YOUR COVER IMAGE"}
                croppingAspectRatio={5.12}/>
            <PostContentEditor bgImg={bgImg} type={type} />
        </>
    );
};

export default PostEditor;
