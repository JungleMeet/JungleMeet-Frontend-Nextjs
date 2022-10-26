import { Flex, Heading, Divider, IconButton, Image } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";

const ReviewHeader = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" pt="70px">
                <Flex alignItems="center">
                    <Image src="/Dune.jpg" height="106px" width="72px"></Image>
                    <Flex direction="column" pl="36px">
                        <Heading fontSize="h4" pr="11px" color={"blue.500"}>
              Dune: Part One (2021)
                        </Heading>
                        <Heading fontSize={"h1"} fontFamily="heading">
              User Review
                        </Heading>
                    </Flex>
                </Flex>

                <Flex alignItems="center" pt="10px">
                    <Heading fontSize="h4" pr="11px">
            Write Review
                    </Heading>
                    <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label="create discussion"
                        size="sm"
                        icon={<EditIcon />}
                    />
                </Flex>
            </Flex>
            <Divider orientation="horizontal" mb="12px" mt="44px" />
        </>
    );
};

export default ReviewHeader;
