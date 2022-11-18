import { TabList, Tab, Spinner, Icon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FiEdit } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";

interface IUserProfileTabs {
    isLoading: boolean;
    setCurrentTab: (value: string) => void;
}
const UserProfileTabs = ({ isLoading, setCurrentTab }: IUserProfileTabs) => {
    const { t } = useTranslation("home");
    const tabContent = [
        {
            tabTitle: t("home:myPosts"),
            icon: FiEdit,
        },
        {
            tabTitle: t("home:message"),
            icon: AiOutlineMessage,
        },
        {
            tabTitle: t("home:changePassword"),
            icon: HiOutlineSpeakerphone,
        },
    ];

    return (
        <TabList
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            bgColor="gray.100"
            color="gray.500"
            border="none"
            pb="27px"
            pt="27px"
            pr="220px"
        >
            {tabContent.map(({ tabTitle, icon }) => (
                <Tab
                    key={tabTitle}
                    fontSize="text2"
                    lineHeight="lh32"
                    fontWeight="600"
                    _selected={{
                        color: "#000",
                    }}
                    _focus={{ borderBottom: "2px solid #000" }}
                    p="0"
                    pb="11px"
                    ml="35px"
                    onClick={() => {
                        // setIsLoading(true);
                        setCurrentTab(tabTitle);
                    }}
                >
                    <Icon as={icon} mr="18px"></Icon>
                    <span>{tabTitle}</span>
                </Tab>
            ))}
            {isLoading && <Spinner />}
        </TabList>
    );
};

export default UserProfileTabs;
