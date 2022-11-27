import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
} from "@chakra-ui/react";
import CloudinaryUploader from "@/components/NewPostEditor/CloudinaryUploader";

export interface ImageUploadModalProps {
    modalName: string;
    isOpen: boolean;
    onClose: () => void;
    croppingAspectRatio: number;
    displayText: string;
    setImg: (value: string) => void;
    img: string;
    onClick: any;
}
export const ImageUploadModal = ({
    modalName,
    isOpen,
    onClose,
    croppingAspectRatio,
    displayText,
    setImg,
    img,
    onClick,
}: ImageUploadModalProps) => {
    return (
        <>
            <Modal size={"md"} isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
                <ModalContent mt="30px" mb="10px" maxW="583px" minH="389px">
                    <ModalHeader
                        w={"100%"}
                        textAlign="center"
                        gap="11.65px"
                        padding="0"
                        marginTop="30px"
                        mb="13px"
                    >
                        <Text fontWeight={"700"} lineHeight="32px" fontSize={"24px"} color="black">
                            {modalName}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CloudinaryUploader
                            setBgImg={setImg}
                            bgImg={img}
                            croppingAspectRatio={croppingAspectRatio}
                            displayText={displayText}
                        />
                        <Button left="50%" ml="-40px" onClick={onClick}>
                            <Text w="80px">Confirm</Text>
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
