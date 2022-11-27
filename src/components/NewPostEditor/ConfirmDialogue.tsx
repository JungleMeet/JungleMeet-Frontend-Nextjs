import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";

interface IConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    handleCancel: () => void;
}

const ConfirmDialog = ({ isOpen, onClose, handleCancel }: IConfirmDialogProps) => {
    const cancelRef = useRef<HTMLButtonElement>(null);
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Cancel Editing
                    </AlertDialogHeader>

                    <AlertDialogBody>Are you sure? You post will not be saved.</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
              NO
                        </Button>
                        <Button colorScheme="red" onClick={handleCancel} ml={3}>
              YES
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default ConfirmDialog;
