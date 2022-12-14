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
import { useTranslation } from "next-i18next";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { loginSuccess, loginError } from "@/app/reducer/loginSlice";
import { openForgotPassword } from "@/app/reducer/loginModalSlice";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
`;

const ButtonContainer = styled.div`
  margin-top: -25px;
  margin-bottom: -15px;
  display: flex;
  justify-content: flex-end;
  width: 359px;
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
    const { t } = useTranslation("home");

    const validateEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmailErrorMsg("");
        if (!value) {
            setEmailErrorMsg(t("home:loginEmailRequiredErrorMsg"));
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setEmailErrorMsg(t("home:loginEmailInvalidErrorMsg"));
        }
    };

    const validatePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPwdErrorMsg("");
        if (!value) {
            setPwdErrorMsg(t("home:loginPwdRequiredErrorMsg"));
        } else if (value.length < 6) {
            setPwdErrorMsg(t("home:loginPwdLenShortErrorMsg"));
        } else if (value.length > 50) {
            setPwdErrorMsg(t("home:loginPwdLenLongErrorMsg"));
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
                    const { token, userInfo } = res.data;
                    dispatch(loginSuccess(userInfo));
                    // console.log(isLogged);
                    // const bufferToken = Buffer.from(token).toString("hex");
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
                    placeholder={t("home:emailAddress")}
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
                    placeholder={t("home:password")}
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
            <ButtonContainer>
                <Button
                    variant="link"
                    fontSize="text5"
                    lineHeight="32px"
                    fontWeight="400"
                    color="blue.500"
                    onClick={() => dispatch(openForgotPassword())}
                >
                    {t("home:loginForgotPassword")}
                </Button>
            </ButtonContainer>
            <Button w="359px" h="50px" backgroundColor="lightBlue.600" type="submit" color="gray.50">
                {isLoading ? (
                    <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                    t("home:logInTitle")
                )}
            </Button>
        </Form>
    );
};

export default LoginForm;
