import React from "react";
import { TitleInput } from "./NewPostPage.style";

interface IPostSingleLineInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
}

const PostSingleLineInput = ({
    onChange,
    value,
    placeholder,
    onKeyUp,
}: IPostSingleLineInputProps) => {
    return (
        <TitleInput
            placeholder={placeholder}
            name="title"
            type="text"
            onChange={onChange}
            value={value}
            onKeyUp={onKeyUp}
        />
    );
};

export default PostSingleLineInput;
