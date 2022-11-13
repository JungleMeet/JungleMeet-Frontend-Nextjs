import React, { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import styled from "styled-components";
import { Editor } from "@tiptap/core";

const EmojiWrapper = styled.div`
  position: relative;
`;

const PickerWarpper = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  z-index: 999;
`;

type IEmojiPickerProps = {
    editor: Editor | null;
};

const EmojiPicker = ({ editor }: IEmojiPickerProps) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const onEmojiClick = (emojiObject: { emoji: string }) => {
        editor?.chain().focus().insertContent(emojiObject.emoji).run();
    };

    const toggleEmojiPicker = () => {
        !showEmojiPicker ? setShowEmojiPicker(true) : setShowEmojiPicker(false);
    };

    const pickerRef = useRef<HTMLDivElement>(null);

    // close emoji picker when clicking ouside of the div
    useEffect(() => {
        const handler = (event: any) => {
            if (!pickerRef.current?.contains(event.target as HTMLDivElement)) {
                setShowEmojiPicker(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <EmojiWrapper>
            <button onClick={toggleEmojiPicker} type="button">
                <Icon as={BsEmojiSmile} />
            </button>
            {showEmojiPicker && (
                <PickerWarpper ref={pickerRef}>
                    <Picker onEmojiClick={onEmojiClick} />
                </PickerWarpper>
            )}
        </EmojiWrapper>
    );
};

export default EmojiPicker;
