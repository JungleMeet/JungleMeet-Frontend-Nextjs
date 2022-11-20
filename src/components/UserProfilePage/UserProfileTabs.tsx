import { TabList, Tab, Spinner, Icon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FiEdit } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";

interface IUserProfileTabs {
    isLoading: boolean;
    setCurrentTab: (value: string) => void;
    isSelf: boolean;
    userName: string;
}
const UserProfileTabs = ({ isLoading, setCurrentTab, isSelf, userName }: IUserProfileTabs) => {
    const { t } = useTranslation("home");
    const tabContent = [
        {
            tabTitle: t("home:myPosts"),
            EnglishTitle: "My Posts",
            icon: FiEdit,
        },
        {
            tabTitle: t("home:message"),
            EnglishTitle: "Message",
            icon: AiOutlineMessage,
        },
        {
            tabTitle: t("home:changePassword"),
            EnglishTitle: "Change Password",
            icon: HiOutlineSpeakerphone,
        },
    ];
    const firstName = userName.split(" ")[0];

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
            // pr="220px"
        >
            {isSelf ? (
                tabContent.map(({ tabTitle, EnglishTitle, icon }) => (
                    <Tab
                        key={EnglishTitle}
                        fontSize="text2"
                        lineHeight="lh32"
                        fontWeight="600"
                        _selected={{
                            color: "#000",
                            borderBottom: "2px solid #000",
                        }}
                        _focus={{ borderBottom: "2px solid #000" }}
                        p="0"
                        pb="11px"
                        ml="35px"
                        onClick={() => {
                            // setIsLoading(true);
                            setCurrentTab(EnglishTitle);
                        }}
                    >
                        <Icon as={icon} mr="18px"></Icon>
                        <span>{tabTitle}</span>
                    </Tab>
                ))
            ) : (
                <Tab
                    key={t("home:myPosts")}
                    fontSize="text2"
                    lineHeight="lh32"
                    fontWeight="600"
                    _selected={{
                        color: "#000",
                        borderBottom: "2px solid #000",
                    }}
                    _focus={{ borderBottom: "2px solid #000" }}
                    p="0"
                    pb="11px"
                    ml="35px"
                    onClick={() => {
                        // setIsLoading(true);
                        setCurrentTab("My Posts");
                    }}
                >
                    <Icon as={FiEdit} mr="18px"></Icon>
                    <span>{`${firstName}'s Posts`}</span>
                </Tab>
            )}
            {isLoading && <Spinner ml="10px" />}
        </TabList>
    );
};

export default UserProfileTabs;
