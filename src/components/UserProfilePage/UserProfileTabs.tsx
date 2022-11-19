import { TabList, Tab, Spinner, Icon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FiEdit } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";

interface IUserProfileTabs {
    isLoading: boolean;
    setCurrentTab: Dispatch<SetStateAction<() => never>>;
    isSelf: boolean;
    userName: string;
}
const UserProfileTabs = ({ isLoading, setCurrentTab, isSelf, userName }: IUserProfileTabs) => {
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
                tabContent.map(({ tabTitle, icon }) => (
                    <Tab
                        key={tabTitle}
                        fontSize="text2"
                        lineHeight="lh32"
                        fontWeight="600"
                        _selected={{
                            color: "#000",
                            borderBottom: "2px solid #000"
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
                ))
            ) : (
                <Tab
                    key={t("home:myPosts")}
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
                        setCurrentTab(t("home:myPosts"));
                    }}
                >
                    <Icon as={FiEdit} mr="18px"></Icon>
                    <span>{`${firstName}'s Posts`}</span>
                </Tab>
            )}
            {isLoading && <Spinner ml='10px'/>}
        </TabList>
    );
};

export default UserProfileTabs;
