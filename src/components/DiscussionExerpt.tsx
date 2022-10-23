import { Link, Text } from "@chakra-ui/react";
import React from "react";

interface IDiscussionExerptProps {
    content: string;
}

const DiscussionExerpt = ({ content }: IDiscussionExerptProps) => {
    return (
        <Text fontSize="text4" lineHeight="lh24" paddingBottom="24px">
            {content}
            <Link color="blue.500">Read All</Link>
        </Text>
    );
};

export default DiscussionExerpt;
