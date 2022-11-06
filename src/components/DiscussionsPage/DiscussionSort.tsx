import { Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "@/app/reducer/pageSlice";
import { useTranslation } from "next-i18next";


const DiscussionSort = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation("home");

    return (
        <Flex alignItems="center">
            <label htmlFor="sort">
                <Heading fontSize={"text1"} pr="17px">
                    {t("home:sortedByTitle")}:
                </Heading>
            </label>
            <Select
                // placeholder="Most Recent"
                height="53px"
                width="176px"
                variant="outline"
                fontSize={"text2"}
                borderColor="grey.300"
                defaultValue={t("home:mostRecentOption")}
                onChange={(e) => dispatch(setSortBy(e.target.value))}
            >
                <option value="createdAt">{t("home:mostRecentOption")}</option>
                <option value="views">{t("home:mostViewedOption")}</option>
            </Select>
        </Flex>
    );
};

export default DiscussionSort;
