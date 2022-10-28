import { Input } from "@chakra-ui/react";

const placeHolderStyle = {
    fontFamily: "secondary",
    fontSize: "text4",
    fontWeight: "400",
    color: "gray.400",
};

interface IFormInput {
    name: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement> | undefined) => void;
}

const SignupFormInput = ({ onBlur, onChange, ...rest }: IFormInput) => {
    return (
        <Input
            {...rest}
            _placeholder={placeHolderStyle}
            w="359px"
            h="50px"
            borderColor="gray.400"
            pl="21px"
            pt="15px"
            pb="15px"
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default SignupFormInput;
