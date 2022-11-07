import { Flex, Heading, Divider, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { useTranslation } from "next-i18next";

// import AddDiscussionBtn from "./AddDiscussionBtn";

const DiscussionHeader = () => {
    const { t } = useTranslation("home");

    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" pt="100px">
                <Heading fontSize={"h1"} fontFamily="heading">
                    {t("home:discussionListTitle")}
                </Heading>
                <Flex alignItems="center" pt="10px">
                    <Heading fontSize="h4" pr="11px">
                        {t("home:createDiscussionTitle")}
                    </Heading>
                    <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label="create discussion"
                        size="sm"
                        icon={<AddIcon />}
                    />
                </Flex>
            </Flex>
            <Divider orientation="horizontal" mb="12px" mt="44px" borderColor="grey.200" />
        </>
    );
};

export default DiscussionHeader;
