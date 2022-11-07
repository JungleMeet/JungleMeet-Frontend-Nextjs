import { Flex, Switch, Stack, Heading, Divider, Text } from "@chakra-ui/react";
import React from "react";
import DiscussionSort from "./DiscussionSort";
import { useTranslation } from "next-i18next";

const DiscussionFilter = () => {
    const { t } = useTranslation("home");

    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Heading fontSize={"text1"}>{t("home:displaySetting")}</Heading>
                    <Stack align="center" direction="row">
                        <Switch size="md" pl="44px" />
                        <Text fontSize={"text2"}>{t("home:coverOption")}</Text>
                        <Switch size="md" pl="47px" />
                        <Text fontSize={"text2"}>{t("home:abstractOption")}</Text>
                    </Stack>
                </Flex>
                <DiscussionSort />
            </Flex>
            <Divider orientation="horizontal" mt="13px" borderColor="grey.200" />
        </>
    );
};

export default DiscussionFilter;
