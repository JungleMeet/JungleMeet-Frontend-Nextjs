import { Flex, Text, Avatar, Link } from "@chakra-ui/react";
import React from "react";
// import { dateCreatedAt } from "../utils/dateCreateAt";

interface ICreatedByTheAuthorProps {
    id?: string;
    gap: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    imageSize: string;
    author?: string;
    createdAt: string;
    avatar?: string;
}

const CreatedBy = ({
    id,
    gap,
    fontSize,
    lineHeight,
    fontWeight,
    imageSize,
    author,
    createdAt,
    avatar,
}: ICreatedByTheAuthorProps) => {
    // const authorName = author.split(" ")[1];
    return (
        <Flex
            id={id}
            gap={gap}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            margin="15px 0"
            alignItems="center"
        >
            <Avatar name={author} src={avatar} borderRadius="10px" width="38px" height="38px"></Avatar>
            {/* <Image src= {avatar ? avatar :"/noun-user-circle-1918168.svg"} width={imageSize} /> */}
            <Text textColor="blue.500" fontWeight="700">
                {" "}
                <Link _hover={{ textColor: "black" }} mr="5px" href={"/userprofile/" + id}>
                    {author}
                </Link>
            </Text>
            <Text textColor="gray.500" fontSize="text5" fontWeight="500">
                {createdAt}
            </Text>
        </Flex>
    );
};

export default CreatedBy;
