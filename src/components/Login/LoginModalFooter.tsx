import { Flex } from "@chakra-ui/react";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import styled from "styled-components";

const LoginIconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 114px;
  margin-top: 17px;
`;
interface IFooter {
    children: React.ReactNode;
}
const LoginModalFooter = ({ children }: IFooter) => {
    return (
        <>
            <Flex
                _before={{
                    content: '""',
                    borderBottom: "1px solid",
                    borderColor: "#000",
                    flexGrow: 1,
                    mr: "13px",
                    w: "auto",
                }}
                _after={{
                    content: '""',
                    borderBottom: "1px solid",
                    borderColor: "#000",
                    flexGrow: 1,
                    ml: "13px",
                    w: "auto",
                }}
                fontSize="text5"
                fontWeight="400"
                color="gray.500"
                lineHeight="32px"
                position="relative"
                alignItems="center"
                width="365px"
                margin="auto"
                mt="25px"
            >
                {children}
            </Flex>
            <LoginIconContainer>
                <AiFillTwitterCircle size="28px" />
                <AiFillGoogleCircle size="28px" />
            </LoginIconContainer>
        </>
    );
};

export default LoginModalFooter;
