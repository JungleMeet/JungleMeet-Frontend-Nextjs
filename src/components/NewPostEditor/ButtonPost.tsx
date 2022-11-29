import React from "react";
import { Image } from "@chakra-ui/react";
import ButtonRow from "./ButtonRow";

export interface IButtonPostProps {
    children: React.ReactNode;
    isLoading: boolean;
    disabled: boolean;
}

const ButtonPost = ({ children, isLoading, disabled }: IButtonPostProps) => {
    return (
        <ButtonRow
            disabled={disabled}
            isLoading={isLoading}
            color="#fff"
            backgroundColor="blue.500"
            _hover={{
                background: "blue.800",
            }}
            type="submit"
        >
            <Image src="/documentPostIcon.svg" marginRight="14px" boxSize="18px" />
            {children}
        </ButtonRow>
    );
};

export default ButtonPost;
