import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ILikesProps {
    likesColor: string;
}

const Likes = ({ likesColor }: ILikesProps) => {
    return (
        <Flex>
            <Text color="red">10 liked</Text>
            <Text color={likesColor}>&nbsp; &bull; 23 views </Text>
            <Text color={likesColor}>&nbsp; &bull; 9 comments</Text>
        </Flex>
    );
};

export default Likes;
