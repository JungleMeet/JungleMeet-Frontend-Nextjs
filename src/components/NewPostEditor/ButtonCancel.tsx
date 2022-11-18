import { CloseIcon } from "@chakra-ui/icons";
import React from "react";
import ButtonRow from "./ButtonRow";

export interface IButtonCancelProps {
    children: React.ReactNode;
    onClick: () => void;
}

const ButtonCancel = ({ children, onClick }: IButtonCancelProps) => {
    return (
        <ButtonRow
            color="#000"
            backgroundColor="#fff"
            border="1px solid #000"
            onClick={onClick}
            type="reset"
        >
            <CloseIcon marginRight="14px" boxSize="14px" />
            {children}
        </ButtonRow>
    );
};

export default ButtonCancel;
