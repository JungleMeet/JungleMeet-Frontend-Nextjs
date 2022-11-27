import { Flex, Heading, Divider, Stack, Switch, Text, Select } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";

interface IReviewFilterProps {
    reviews: number;
}

const ReviewFilter = ({ reviews }: IReviewFilterProps) => {
    const { t } = useTranslation("home");
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Heading fontSize={"text1"}>{t("home:displaySetting")}</Heading>
                    <Stack align="center" direction="row">
                        <Switch size="md" pl="21px" />
                        <Text fontSize={"text2"} fontWeight="400">
                            {t("home:comingSoon")}
                        </Text>
                    </Stack>
                    <Heading fontSize={"text1"} pl="40px">
                        {t("home:total")}:
                    </Heading>
                    <Text fontSize={"text3"} pl="16px">
                        {reviews} {t("home:reviews")}
                    </Text>
                </Flex>
                <Flex alignItems="center">
                    <Heading fontSize={"text1"} pr="17px">
                        {t("home:sortedByTitle")}:
                    </Heading>
                    <Select
                        height="53px"
                        width="176px"
                        variant="outline"
                        fontSize={"text2"}
                        borderColor="grey.300"
                        defaultValue={t("home:mostRecentOption")}
                    >
                        <option value="createdAt">{t("home:mostRecentOption")}</option>
                    </Select>
                </Flex>
            </Flex>
            <Divider orientation="horizontal" mt="13px" mb="16.71px" borderColor="grey.200" />
        </>
    );
};

export default ReviewFilter;
