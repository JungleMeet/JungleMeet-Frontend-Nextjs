import styled from "styled-components";
import Hamburger from "../Hamburger/Hamburger";
import {
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LoginModal from "../../Login/LoginModal";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

const IconContainerStyles = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 84.75px;
`;

const IconContainer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [language, setLanguage] = useState("EN");
    const { i18n, t } = useTranslation("home");
    const router = useRouter();

    const onToggleLanguageClick = (newLocale: any) => {
        const { pathname, query } = router;
        router.push({ pathname, query }, router.asPath, { locale: newLocale });
    };

    return (
        <IconContainerStyles>
            <Link
                color="#FFFFFF"
                fontSize="text4"
                fontWeight="700"
                lineHeight="lh24"
                fontFamily="secondary"
                onClick={onOpen}
            >
                {t("home:loginAndRegister")}
            </Link>
            <LoginModal isOpen={isOpen} onClose={onClose} />
            <Hamburger />
            <Menu offset={[-30, 10]}>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    border="none"
                    bgColor="transparent"
                    color="#FFFFFF"
                    w="42px"
                    h="24px"
                    fontSize="text4"
                    fontFamily="secondary"
                    p="0"
                    _focus={{ border: "none" }}
                    _hover={{ backgroundColor: "none" }}
                    _active={{ backgroundColor: "none" }}
                >
                    {language}
                </MenuButton>
                <MenuList w="100%" minW="100px">
                    <MenuItem
                        h="20px"
                        justifyContent="center"
                        value="EN"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            setLanguage((e.target as HTMLButtonElement).value);
                            onToggleLanguageClick("en");
                            i18n.changeLanguage("en");
                        }}
                    >
            EN
                    </MenuItem>
                    <MenuItem
                        h="20px"
                        justifyContent="center"
                        value="ZH"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            setLanguage((e.target as HTMLButtonElement).value);
                            onToggleLanguageClick("zh-Hans");
                            i18n.changeLanguage("zh-Hans");
                        }}
                    >
            ZH
                    </MenuItem>
                    <MenuItem
                        h="20px"
                        justifyContent="center"
                        value="ESP"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            setLanguage((e.target as HTMLButtonElement).value);
                            onToggleLanguageClick("lad");
                            i18n.changeLanguage("lad");
                        }}
                    >
            ESP
                    </MenuItem>
                </MenuList>
            </Menu>
        </IconContainerStyles>
    );
};

export default IconContainer;
