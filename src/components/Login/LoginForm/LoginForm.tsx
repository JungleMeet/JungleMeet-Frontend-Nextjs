import {
    Button,
    FormControl,
    FormErrorMessage,
    InputRightElement,
    CircularProgress,
    useToast,
} from "@chakra-ui/react";
import FormInput from "./FormInput";
import { useState } from "react";
import { login } from "@/utils/axiosUserApi";
import styled from "styled-components";
// import { Buffer } from "buffer";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { loginSuccess, loginError } from "@/app/reducer/loginSlice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
`;

interface ILoginForm {
    closeModal: () => void;
}
const LoginForm = ({ closeModal }: ILoginForm) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [pwdErrorMsg, setPwdErrorMsg] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();

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

    return (
        <Form
            onSubmit={async (event) => {
                event.preventDefault();
                setIsLoading(true);
                try {
                    const res = await login(email, password);
                    toast({
                        position: "top",
                        title: "Login Success!",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    });
                    setIsLoading(false);
                    closeModal();
                    const { token, user_info: userInfo } = res.data;
                    dispatch(loginSuccess(res.data));
                    // const bufferToken = Buffer.from(token, "base64").toString("ascii");
                    localStorage.setItem("token", token);
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));
                } catch (error: any) {
                    setIsLoading(false);
                    toast({
                        position: "top",
                        title: "Invalid email or password",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                    dispatch(loginError());
                    // console.log(isLogged);
                }
            }}
        >
            <FormControl width="auto" p="0" isRequired isInvalid={emailErrorMsg ? true : false}>
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail((event.target as HTMLInputElement).value);
                        validateEmailInput(event);
                    }}
                />
                <FormErrorMessage>{emailErrorMsg}</FormErrorMessage>
            </FormControl>
            <FormControl width="auto" p="0" isRequired isInvalid={pwdErrorMsg ? true : false}>
                <FormInput
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword((event.target as HTMLInputElement).value);
                        validatePwdInput(event);
                    }}
                />
                <InputRightElement w="55px" h="50px">
                    <Button onClick={handleClick} variant={"ghost"}>
                        {show ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
                <FormErrorMessage>{pwdErrorMsg}</FormErrorMessage>
            </FormControl>
            <Button w="359px" h="50px" backgroundColor="lightBlue.600" type="submit" color="gray.50">
                {isLoading ? <CircularProgress isIndeterminate size="24px" color="teal" /> : "Log in"}
            </Button>
        </Form>
    );
};

export default LoginForm;
