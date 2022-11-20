import {
    Button,
    FormControl,
    FormErrorMessage,
    InputRightElement,
    CircularProgress,
    useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignupFormInput from "./SignupFormInput";
import { useState } from "react";
import styled from "styled-components";
import { login, signup } from "@/utils/axiosUserApi";
import { useDispatch } from "react-redux";
import { signupError, signupSuccess } from "@/app/reducer/signupSlice";
import { loginError, loginSuccess } from "@/app/reducer/loginSlice";
import { useTranslation } from "next-i18next";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`;

interface ISignupForm {
    closeModal: () => void;
}

const SignupForm = ({ closeModal }: ISignupForm) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const dispatch = useDispatch();
    const { t } = useTranslation("home");


    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target as HTMLInputElement;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
        validateSignupInput(e);
    };

    const validateSignupInput = (
        e: React.ChangeEvent<HTMLInputElement> | (React.FocusEvent<HTMLInputElement> | undefined)
    ) => {
        const { name, value } = e?.target as HTMLInputElement;
        setError((prev) => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "username":
                    if (!value) {
                        stateObj[name] = t("home:SignUpUsernameRequiredErrorMsg");
                    }
                    break;
                case "email":
                    if (!value) {
                        stateObj[name] = t("home:SignUpEmailRequiredMsg");
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
                        stateObj[name] = t("home:SignUpEmailInvalidMsg");
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = t("home:SignUpPwdRequiredMsg");
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = t("home:SignUpPwdDoesn'tMatch");
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = t("home:SignUpConfirmPasswordRequired");
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = t("home:SignUpPwdDoesn'tMatch");
                    }
                    break;

                default:
                    break;
            }
            return stateObj;
        });
    };

    return (
        <Form
            onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                try {
                    const res = await signup(input.email, input.username, input.password);

                    toast({
                        position: "top",
                        title: "Signup Success!",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    });
                    setIsLoading(false);
                    closeModal();
                    dispatch(signupSuccess(res.data));
                    // Login the user after signup
                    const re = await login(input.email, input.password);
                    const { token, userInfo } = re.data;
                    dispatch(loginSuccess(userInfo));
                    console.log(userInfo);
                    console.log(token);

                    localStorage.setItem("token", token);
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));
                } catch (error: any) {
                    setIsLoading(false);
                    toast({
                        position: "top",
                        title: "Email or username already existed",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                    dispatch(signupError());
                    dispatch(loginError());
                }
            }}
        >
            <FormControl width="auto" p="0" isInvalid={error.email ? true : false} isRequired>
                <SignupFormInput
                    name="email"
                    type="email"
                    value={input.email}
                    placeholder={t("home:emailAddress")}
                    onChange={onInputChange}
                    onBlur={validateSignupInput}
                />
                <FormErrorMessage>{error.email}</FormErrorMessage>
            </FormControl>
            <FormControl width="auto" p="0" isInvalid={error.username ? true : false} isRequired>
                <SignupFormInput
                    name="username"
                    type="username"
                    value={input.username}
                    placeholder={t("home:userName")}
                    onChange={onInputChange}
                    onBlur={validateSignupInput}
                />
                <FormErrorMessage>{error.username}</FormErrorMessage>
            </FormControl>
            <FormControl width="auto" p="0" isInvalid={error.password ? true : false} isRequired>
                <SignupFormInput
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={input.password}
                    placeholder={t("home:password")}
                    onChange={onInputChange}
                    onBlur={validateSignupInput}
                />
                <InputRightElement w="55px" h="50px">
                    <Button
                        variant={"ghost"}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
                <FormErrorMessage>{error.password}</FormErrorMessage>
            </FormControl>
            <FormControl width="auto" p="0" isInvalid={error.confirmPassword ? true : false} isRequired>
                <SignupFormInput
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("home:confirmPassword")}
                    value={input.confirmPassword}
                    onChange={onInputChange}
                    onBlur={validateSignupInput}
                />
                <InputRightElement w="55px" h="50px">
                    <Button
                        variant={"ghost"}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
                <FormErrorMessage>{error.confirmPassword}</FormErrorMessage>
            </FormControl>
            <Button
                mt="8px"
                w="359px"
                h="50px"
                backgroundColor="lightBlue.600"
                type="submit"
                color="gray.50"
            >
                {isLoading ? <CircularProgress isIndeterminate size="24px" color="teal" /> : t("home:signUpTitle")}
            </Button>
        </Form>
    );
};

export default SignupForm;
