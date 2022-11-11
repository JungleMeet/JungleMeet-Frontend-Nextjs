import { FormControl, FormErrorMessage, Text, Button, CircularProgress } from "@chakra-ui/react";
// import styled from "styled-components";
import { Form } from "./LoginForm/LoginForm";
import FormInput from "./LoginForm/FormInput";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmailErrorMsg("");
        if (!value) {
            setEmailErrorMsg("Email is required");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setEmailErrorMsg("Invalid email address");
        }
    };

    return (
        <Form
            onSubmit={async (event) => {
                event.preventDefault();
                setIsLoading(true);
            }}
        >
            <Text fontFamily="secondary" fontSize="text2" fontWeight="700" lineHeight="28px" mt="43px">
        Reset your password via email address
            </Text>
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
            <Button w="359px" h="50px" backgroundColor="lightBlue.600" type="submit" color="gray.50">
                {isLoading ? <CircularProgress isIndeterminate size="24px" color="teal" /> : "Send"}
            </Button>
        </Form>
    );
};

export default ForgotPassword;
