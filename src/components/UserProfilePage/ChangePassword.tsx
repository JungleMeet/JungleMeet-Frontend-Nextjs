import styled from "styled-components";
import {
    Text,
    useToast,
    FormControl,
    Flex,
    FormLabel,
    Input,
    InputRightElement,
    Button,
    FormErrorMessage,
    CircularProgress,
} from "@chakra-ui/react";
import { Form } from "../Login/LoginForm/LoginForm";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { changePwd } from "@/utils/axiosUserApi";

const ChangePasswordContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  background-color: #f3f4f6;
  padding-top: 21px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 49px;
`;
const ChangePwdForm = styled(Form)`
  gap: 50px;
  width: 100%;
`;

interface IChangePassword {
    setIsLoading: (value: boolean) => void;
}

const ChangePassword = ({ setIsLoading }: IChangePassword) => {
    const [pwdErrorMsg, setPwdErrorMsg] = useState("");
    const [show, setShow] = useState(false);
    const [showNewPwd, setShowNewPwd] = useState(false);
    const [password, setPassword] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmPwdErrorMsg, setConfirmPwdErrorMsg] = useState("");
    const [isChanging, setIsChanging] = useState(false);
    const [token, setToken] = useState<string | null>("");
    const toast = useToast();

    const handleClick = () => setShow(!show);
    const handleConfirmClick = () => setShowNewPwd(!showNewPwd);

    const validatePreviousPwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPwdErrorMsg("");
        if (!value) {
            setPwdErrorMsg("Password is required");
        } else if (value.length < 6) {
            setPwdErrorMsg("Password must be at least 6 characters");
        } else if (value.length > 50) {
            setPwdErrorMsg("Password is too long");
        }
    };

    const validateNewPwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPwdErrorMsg("");
        if (!value) {
            setConfirmPwdErrorMsg("Password is required");
        } else if (value.length < 6) {
            setConfirmPwdErrorMsg("Password must be at least 6 characters");
        } else if (value.length > 50) {
            setConfirmPwdErrorMsg("Password is too long");
        }
    };

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        setToken(localToken);
    });
    return (
        <ChangePasswordContainer>
            <Text lineHeight="lh24" fontSize="h6" fontWeight="700" mb="25px">
        Change Password
            </Text>
            <ChangePwdForm
                onSubmit={async (event) => {
                    event.preventDefault();
                    setIsChanging(true);
                    try {
                        await changePwd(token, password, newPwd);
                        toast({
                            position: "top",
                            title: "Change password Success!",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                        });
                        setIsChanging(false);
                    } catch (error: any) {
                        setIsChanging(false);
                        const status = error.response.status;
                        status === 401
                            ? toast({
                                position: "top",
                                title: "Wrong password, try again",
                                status: "error",
                                duration: 2000,
                                isClosable: true,
                            })
                            : toast({
                                position: "top",
                                title: "Reset password failed",
                                status: "error",
                                duration: 2000,
                                isClosable: true,
                            });
                    }
                }}
            >
                <FormControl
                    width="100%"
                    p="0"
                    isRequired
                    isInvalid={pwdErrorMsg ? true : false}
                    display="flex"
                    flexDirection="column"
                >
                    <Flex width="100%">
                        <FormLabel w="125px">Previous Password</FormLabel>
                        <Input
                            name="password"
                            type={show ? "text" : "password"}
                            value={password}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword((event.target as HTMLInputElement).value);
                                validatePreviousPwdInput(event);
                            }}
                            variant="flushed"
                        />
                        <InputRightElement w="55px" h="50px">
                            <Button onClick={handleClick} variant={"ghost"}>
                                {show ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </Flex>
                    <FormErrorMessage>{pwdErrorMsg}</FormErrorMessage>
                </FormControl>
                <FormControl
                    width="100%"
                    p="0"
                    isRequired
                    isInvalid={confirmPwdErrorMsg ? true : false}
                    display="flex"
                    flexDirection="column"
                >
                    <Flex width="100%">
                        <FormLabel w="125px">New Password</FormLabel>
                        <Input
                            name="newPwd"
                            type={showNewPwd ? "text" : "password"}
                            value={newPwd}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNewPwd((event.target as HTMLInputElement).value);
                                validateNewPwdInput(event);
                            }}
                            variant="flushed"
                        />
                        <InputRightElement w="55px" h="50px">
                            <Button onClick={handleConfirmClick} variant={"ghost"}>
                                {showNewPwd ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </Flex>
                    <FormErrorMessage>{confirmPwdErrorMsg}</FormErrorMessage>
                </FormControl>
                <Button
                    type="submit"
                    variant="ghost"
                    alignSelf="flex-end"
                    fontWeight="600"
                    fontSize="text2"
                    lineHeight="28px"
                    color="blue.500"
                >
                    {isChanging ? <CircularProgress isIndeterminate size="24px" color="teal" /> : "Save"}
                </Button>
            </ChangePwdForm>
        </ChangePasswordContainer>
    );
};

export default ChangePassword;
