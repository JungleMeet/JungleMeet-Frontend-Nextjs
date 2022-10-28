import { Button, FormControl, FormErrorMessage, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignupFormInput from "./SignupFormInput";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`;

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                        stateObj[name] = "Please enter Username.";
                    }
                    break;
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter email.";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
                        stateObj[name] = "Invalid email address";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
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
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <FormControl width="auto" p="0" isInvalid={error.email ? true : false} isRequired>
                <SignupFormInput
                    name="email"
                    type="email"
                    value={input.email}
                    placeholder="Email Address"
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
                    placeholder="User Name"
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
                    placeholder="Password"
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
                    placeholder="Confirm Password"
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
        Sign up
            </Button>
        </Form>
    );
};

export default SignupForm;
