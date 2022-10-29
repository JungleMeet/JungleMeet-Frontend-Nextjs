import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";

interface IPlayingMovieTrailerModelProps {
    isOpen: boolean;
    onClose: () => void;
    // youtubeLink: string;
}

const PlayingMovieTrailerModel = ({ isOpen, onClose }: IPlayingMovieTrailerModelProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
            <ModalContent mt="30px" mb="10px" maxW="583px" minH="583px">
                <ModalCloseButton />
                <ModalBody>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/PdEKecHDhG4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PlayingMovieTrailerModel;
