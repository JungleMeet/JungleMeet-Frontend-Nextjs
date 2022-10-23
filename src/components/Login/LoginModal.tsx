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
    Flex
} from '@chakra-ui/react';
import styled from 'styled-components';
import LoginForm from './LoginForm/LoginForm';
import {AiFillGoogleCircle, AiFillTwitterCircle} from "react-icons/ai";

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
`
const LoginIconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 114px;
    margin-top: 17px;
`

const selectedTabStyle = {
    color: '#000',
    borderColor: '#000'
}

const LoginModal = ({isOpen, onClose}: ILoginModal) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent maxW='583px' minH='583px'>
                <ModalHeader
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    gap='11.65px'
                    padding='0'
                    marginTop='31px'
                >
                    <Image src='JungleMeetLogo.svg'></Image>
                    <LoginTitleContainer>Where the Exploration Begins</LoginTitleContainer>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tabs display='flex' flexDirection='column' alignItems='center'>
                        <TabList borderBottom='none' display='flex' gap='93px' mb='48px' mt='26px' >
                            <Tab 
                                fontFamily='secondary' 
                                w='119px' 
                                h='32px' 
                                fontSize='20px' 
                                p='0' 
                                color='gray.400' 
                                lineHeight='28px' 
                                borderBottom='1px solid' 
                                borderColor='gray.400' 
                                _selected={selectedTabStyle} 
                                _focus={{boxShadow:'none'}}
                            >Log in</Tab>
                            <Tab 
                                fontFamily='secondary' 
                                w='119px' 
                                h='32px' 
                                fontSize='20px' 
                                p='0' 
                                color='gray.400' 
                                lineHeight='28px' 
                                borderBottom='1px solid' 
                                borderColor='gray.400' 
                                _selected={selectedTabStyle} 
                                _focus={{boxShadow:'none'}}
                            >Sign up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel p='0'>
                                <LoginForm></LoginForm>
                            </TabPanel>    
                            <TabPanel p='0'>
                                <p>two!</p>
                            </TabPanel>
                            <Flex
                                _before={{
                                    content: '""',
                                    borderBottom: "1px solid",
                                    borderColor: '#000',
                                    flexGrow: 1,
                                    mr: '13px',
                                    w: '126px',
                                }}
                                _after={{
                                    content: '""',
                                    borderBottom: "1px solid",
                                    borderColor: '#000',
                                    flexGrow: 1,
                                    ml: '13px',
                                    w: '126px'
                                }}
                                fontSize='text5'
                                fontWeight='400'
                                color='gray.500'
                                lineHeight='32px'
                                position='relative'
                                alignItems='center'
                                width='359px'
                                margin='auto'
                                mt='25px'
                            >Log in with</Flex>
                            <LoginIconContainer >
                                <AiFillTwitterCircle size='28px'/>
                                <AiFillGoogleCircle size='28px'/>
                            </LoginIconContainer>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default LoginModal;