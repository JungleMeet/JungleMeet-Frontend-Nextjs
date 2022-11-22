import React from "react";
import { TitleInput } from "./NewPostPage.style";

interface IPostSingleLineInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
}

const PostSingleLineInput = ({
    onChange,
    value,
    placeholder,
    onKeyDown,
}: IPostSingleLineInputProps) => {
    return (
        <TitleInput
            placeholder={placeholder}
            name="title"
            type="text"
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
        />
    );
};

export default PostSingleLineInput;
