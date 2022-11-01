import { Text, Stack, Divider } from "@chakra-ui/react";
import React from "react";
import RepliesAuthor from "./RepliesAuthor";

interface IRepliesProps {
    author: string;
    createdAt: string;
    parent: string;
    reply: string;
}
const Replies = ({ author, createdAt, parent, reply }: IRepliesProps) => {
    return (
        <Stack pl="106px" pb="32px">
            <RepliesAuthor author={author} createdAt={createdAt} />
            <Stack pl="48.75px">
                <Text fontSize={"text4"} fontWeight="500">
          @{parent}
                </Text>
                <Text>{reply}</Text>
                <Text color="blue.500" fontSize={"text5"} pt="20px">
          REPLY
                </Text>
                <Text color="blue.500" fontSize={"text5"} pt="15px">
          See more replies (3 Replies)
                </Text>
            </Stack>
            <Divider borderColor="grey.200" pt="30px" />
        </Stack>
    );
};
export default Replies;
