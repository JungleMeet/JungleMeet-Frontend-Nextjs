import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Image,
} from "@chakra-ui/react";
import React, {memo} from "react";

interface IPlayingMovieTrailerModelProps {
    isOpen: boolean;
    onClose: () => void;
    src?: string;
}

const PlayingMovieTrailerModel = ({ isOpen, onClose, src }: IPlayingMovieTrailerModelProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
            <ModalContent maxW="1290px" backgroundColor="#000">
                <ModalHeader background="#000">
                    <Image src="/JungleMeetLogoWhiteText.svg" alt="logo of jungle meet" />
                </ModalHeader>
                <ModalCloseButton color="#fff" _focus={{ border: "none" }} />
                <ModalBody padding="5px">
                    <iframe
                        width="1280"
                        height="720"
                        src={src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default memo(PlayingMovieTrailerModel);
