import type { NextPage } from "next";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement,
//   increment,
//   clear,
//   incrementByAmount,
//   changeCounter,
// } from "../app/reducer/counterSlice";
// import ThemeToggleButton from "../components/ThemeToggleButton";
// import { Button, Box, Flex, Heading, Text } from "@chakra-ui/react";
// import ExclusiveVideos from "./mainPage/exclusiveVideos";

const Home: NextPage = () => {
  // const count = useSelector(changeCounter);
  // const dispatch = useDispatch();
  return (
    <>
      {/* <Flex align="center" justify="center" flexDirection="column" maxW="60rem">
        <Heading mt="24px" mb={4}>
          Welcome to Jungle Meet Forum
        </Heading>
        <ThemeToggleButton />
        <Button mt="24px" aria-label="Clear value" onClick={() => dispatch(clear())}>
          Clear
        </Button>
        <Box mt="12px" display="flex" flexDirection="row" alignItems="center">
          <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <CountWrapper>
            <Text m="8px" as="span" fontSize="6xl">
              {count}
            </Text>
          </CountWrapper>
          <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Box>
        <Button
          mt="12px"
          mb="24px"
          aria-label="Clear value"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Plus 100
        </Button>
      </Flex> */}
      {/* <ExclusiveVideos /> */}
    </>
  );
};

// // TODO sample
// const CountWrapper = styled.span`
//   color: orange;
// `;

export default Home;

export { getServerSideProps } from "../styles/Chakra";