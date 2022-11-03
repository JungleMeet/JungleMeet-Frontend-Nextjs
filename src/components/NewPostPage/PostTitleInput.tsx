import React from "react";
import { TitleInput } from "./NewPostPage.style";

interface IPostTitleInput {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const PostTitleInput = ({ onChange, value }: IPostTitleInput) => {
    return (
        <TitleInput
            placeholder="Post Title"
            name="title"
            type="text"
            onChange={onChange}
            value={value}
        />
    );
};

export default PostTitleInput;
