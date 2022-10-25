import { Button, FormControl, FormErrorMessage } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
`;

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <FormControl width="auto" p="0">
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email Address / Username"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail((event.target as HTMLInputElement).value);
                    }}
                />
                <FormErrorMessage>{"Email should contain @"}</FormErrorMessage>
            </FormControl>
            <FormControl width="auto" p="0">
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword((event.target as HTMLInputElement).value);
                    }}
                />
                <FormErrorMessage>{}</FormErrorMessage>
            </FormControl>
            <Button w="359px" h="50px" backgroundColor="lightBlue.600" type="submit" color="gray.50">
        Log in
            </Button>
        </Form>
    );
};

export default LoginForm;
