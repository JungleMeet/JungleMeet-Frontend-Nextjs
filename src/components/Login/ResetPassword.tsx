import {
    Text,
    FormControl,
    FormErrorMessage,
    InputRightElement,
    Button,
    FormLabel,
    Input,
    Flex,
    CircularProgress,
    useToast,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { emailResetPwd } from "@/utils/axiosUserApi";

import { Form } from "./LoginForm/LoginForm";
// import FormInput from "./LoginForm/FormInput";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const ResetPwdContainer = styled.div`
  max-width: 1241px;
  margin-left: 87px;
  margin-right: 112px;
  border-radius: 5px;
  background-color: #f3f4f6;
  padding: 32px 94.15px 29px 75px;
`;
const ResetPwdForm = styled(Form)`
  gap: 50px;
  width: 100%;
`;

const ResetPassword = () => {
    const router = useRouter();
    const { code } = router.query;
    const codeString = code as string;
    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [pwdErrorMsg, setPwdErrorMsg] = useState("");
    const [show, setShow] = useState(false);
    const [showConfirmPwd, setShowConfirmPwd] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPwdErrorMsg, setConfirmPwdErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => setShow(!show);
    const handleConfirmClick = () => setShowConfirmPwd(!showConfirmPwd);
    const toast = useToast();

    const validateEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmailErrorMsg("");
        if (!value) {
            setEmailErrorMsg("Email is required");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setEmailErrorMsg("Invalid email address");
        }
    };

    const validatePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const validateConfirmPwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPwdErrorMsg("");
        if (!value) {
            setConfirmPwdErrorMsg("Password is required");
        } else if (value.length < 6) {
            setConfirmPwdErrorMsg("Password must be at least 6 characters");
        } else if (value.length > 50) {
            setConfirmPwdErrorMsg("Password is too long");
        } else if (value !== password) {
            setConfirmPwdErrorMsg("Passwords must match");
        }
    };
    return (
        <>
            <Text lineHeight="36px" fontSize="h3" fontWeight="700" mb="54px">
        Reset Password
            </Text>
            <ResetPwdContainer>
                <Text lineHeight="36px" fontSize="h3" fontWeight="700" mb="50px">
          Enter Your New Password
                </Text>
                <ResetPwdForm
                    onSubmit={async (event) => {
                        event.preventDefault();
                        setIsLoading(true);
                        try {
                            await emailResetPwd(codeString, email, password);
                            toast({
                                position: "top",
                                title: "Reset password Success!",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                            });
                            setIsLoading(false);
                            router.push("/");
                        } catch (error: any) {
                            setIsLoading(false);
                            const status = error.response.status;
                            status === 401
                                ? toast({
                                    position: "top",
                                    title: "No account with that email has been found",
                                    status: "error",
                                    duration: 2000,
                                    isClosable: true,
                                })
                                : status === 400
                                    ? toast({
                                        position: "top",
                                        title: "Reset password already expired",
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
                        isInvalid={emailErrorMsg ? true : false}
                        display="flex"
                        flexDirection="column"
                    >
                        <Flex width="100%">
                            <FormLabel w="125px">Email address</FormLabel>
                            <Input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setEmail((event.target as HTMLInputElement).value);
                                    validateEmailInput(event);
                                }}
                                variant="flushed"
                            />
                        </Flex>
                        <FormErrorMessage>{emailErrorMsg}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                        width="100%"
                        p="0"
                        isRequired
                        isInvalid={pwdErrorMsg ? true : false}
                        display="flex"
                        flexDirection="column"
                    >
                        <Flex width="100%">
                            <FormLabel w="125px">New Password</FormLabel>
                            <Input
                                name="password"
                                type={show ? "text" : "password"}
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setPassword((event.target as HTMLInputElement).value);
                                    validatePwdInput(event);
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
                            <FormLabel w="125px">Confirm Password</FormLabel>
                            <Input
                                name="confirmPassword"
                                type={showConfirmPwd ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setConfirmPassword((event.target as HTMLInputElement).value);
                                    validateConfirmPwdInput(event);
                                }}
                                variant="flushed"
                            />
                            <InputRightElement w="55px" h="50px">
                                <Button onClick={handleConfirmClick} variant={"ghost"}>
                                    {showConfirmPwd ? <ViewIcon /> : <ViewOffIcon />}
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
                        {isLoading ? <CircularProgress isIndeterminate size="24px" color="teal" /> : "Confirm"}
                    </Button>
                </ResetPwdForm>
            </ResetPwdContainer>
        </>
    );
};

export default ResetPassword;
