import { Flex, Text, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import HashtagPreview, { IHashtagsProps } from "./HashtagPreview";
import PostSingleLineInput from "./PostSingleLineInput";

interface IHashtagProps {
    hashtagsArray: IHashtagsProps[];
    setHashtagsArray: ({}: IHashtagsProps[]) => void;
}

const Hashtag = ({hashtagsArray, setHashtagsArray}:IHashtagProps) => {
    const [query, setQuery] = useState("");

    return (
        <>
            <Flex mt="14px" ml="6px" gap="10px" flexDirection="row">
                {hashtagsArray.length > 0 &&
          hashtagsArray?.map(({ _id, category }) => (
              <Box key={_id} color="blue.500" fontSize="text3" lineHeight="lh28">
              #{category},
              </Box>
          ))}
            </Flex>
            <Flex paddingTop="8px" marginLeft="8px" gap="25px" alignItems="center" position="relative">
                <Text fontSize="text3" fontWeight="700" lineHeight="lh28">
          #Hashtag
                </Text>

                <PostSingleLineInput
                    placeholder="Add your Hashtag here..."
                    value={query}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
                />

                <HashtagPreview
                    query={query}
                    setQuery={setQuery}
                    hashtagsArray={hashtagsArray}
                    setHashtagsArray={setHashtagsArray}
                />
            </Flex>
        </>
    );
};

export default Hashtag;
