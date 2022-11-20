import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
interface UserProfileModalProps {
    modalName: string;
    isOpen: boolean;
    onClose: () => {};
    profiles: any;
}
export const UserProfileModal = ({
    modalName,
    isOpen,
    onClose,
    profiles,
}: UserProfileModalProps) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{}</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
