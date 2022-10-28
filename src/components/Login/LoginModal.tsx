import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Image,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";
import styled from "styled-components";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";
import LoginModalFooter from "./LoginModalFooter";

interface ILoginModal {
    isOpen: boolean;
    onClose: () => void;
}

const LoginTitleContainer = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  width: 200px;
  height: 24px;
  margin: 0 191px;
`;

const selectedTabStyle = {
    color: "#000",
    borderColor: "#000",
};

const LoginModal = ({ isOpen, onClose }: ILoginModal) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
            <ModalContent mt="30px" mb="10px" maxW="583px" minH="583px">
                <ModalHeader
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="11.65px"
                    padding="0"
                    marginTop="31px"
                >
                    <Image src="/JungleMeetLogo.svg"></Image>
                    <LoginTitleContainer>Where the Exploration Begins</LoginTitleContainer>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tabs display="flex" flexDirection="column" alignItems="center">
                        <TabList borderBottom="none" display="flex" gap="93px" mb="48px" mt="26px">
                            <Tab
                                fontFamily="secondary"
                                w="119px"
                                h="32px"
                                fontSize="20px"
                                p="0"
                                color="gray.400"
                                lineHeight="28px"
                                borderBottom="1px solid"
                                borderColor="gray.400"
                                _selected={selectedTabStyle}
                                _focus={{ boxShadow: "none" }}
                            >
                Log in
                            </Tab>
                            <Tab
                                fontFamily="secondary"
                                w="119px"
                                h="32px"
                                fontSize="20px"
                                p="0"
                                color="gray.400"
                                lineHeight="28px"
                                borderBottom="1px solid"
                                borderColor="gray.400"
                                _selected={selectedTabStyle}
                                _focus={{ boxShadow: "none" }}
                            >
                Sign up
                            </Tab>
                        </TabList>
                        <TabPanels mb="50px">
                            <TabPanel p="0">
                                <LoginForm></LoginForm>
                                <LoginModalFooter>Log in with</LoginModalFooter>
                            </TabPanel>
                            <TabPanel p="0">
                                <SignupForm></SignupForm>
                                <LoginModalFooter>Sign up with</LoginModalFooter>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default LoginModal;
