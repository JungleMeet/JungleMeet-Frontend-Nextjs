import { Flex, Text, Link, Spacer, Stack, Heading, Box, Image, Divider } from "@chakra-ui/react";
import { PostsContainer } from "./PostsContainer";
import React from "react";
import ExpandableText from "./ExpandableText";

interface PostCardInfoProps {
  title: string;
  src: string;
  date: Date;
  name: string;
  like: number;
  views: number;
  comments: number;
  description: string;
}

const PostCardInfoProps: React.FC<PostCardInfoProps> = (props) => {
  return (
    <PostsContainer>
      <Box>
        <Flex flex="1" flexDirection="row" justifyContent="flex-start">
          <Image
            src={props.src}
            alt="Post Thumbnail"
            width="89px"
            height="129px"
            mr="17px"
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />

          <Box w="100%">
            <Stack pb="4px">
              <Link textUnderlineOffset="5px">
                <Heading fontSize="h6">{props.title}</Heading>
              </Link>
            </Stack>
            <Box pb="13px" fontSize="text5" lineHeight="lh32" textColor="gray.400">
              <Flex alignItems="center">
                <Box display="flex">
                  <Text>
                    By&nbsp;
                    <Link _hover={{ textColor: "black" }} mr="5px">
                      {props.name}
                    </Link>
                  </Text>

                  <Text>{props.date.toLocaleDateString("en-AU")}</Text>
                </Box>
                <Spacer />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  fontSize="text5"
                  lineHeight="lh32"
                  textColor="gray.400"
                >
                  <Text textColor="red.500"> {props.like} likes&nbsp; </Text>
                  <Text> &bull; {props.views} views &bull;</Text>
                  <Link _hover={{ textColor: "black" }} mr="5px">
                    <Text> &nbsp;{props.comments} comments</Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
            <ExpandableText noOfLines={2}>
              <Text fontSize="text5" lineHeight="lh32">
                {props.description}
              </Text>
            </ExpandableText>
          </Box>
        </Flex>
        <Divider marginTop="18px" />
      </Box>
    </PostsContainer>
  );
};

export default PostCardInfoProps;
