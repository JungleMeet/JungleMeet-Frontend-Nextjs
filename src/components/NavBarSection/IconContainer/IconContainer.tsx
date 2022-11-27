import styled from "styled-components";
import Hamburger from "../Hamburger/Hamburger";
import {
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    // useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LoginModal from "../../Login/LoginModal";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import UserNameAndMessage from "./UserNameAndMessage";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken } from "@/utils/axiosUserApi";
import { tokenValid } from "@/app/reducer/loginSlice";
import { openLoginModal, closeForgotPasswordModal } from "@/app/reducer/loginModalSlice";
import { useMediaQuery } from "@chakra-ui/react";

const IconContainerStyles = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 5.89%;
`;

const MenuListTitle = styled.div`
  // margin-left: 21px;
  margin-top: 13px;
  margin-bottom: 14px;
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: #9ca3af;
`;

const IconContainer = ({ showSearchBar }: { showSearchBar: boolean }) => {
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const dispatch = useDispatch();
    const isLoginModalOpen = useSelector((state: any) => state.loginModal.isLoginModalOpen);
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [language, setLanguage] = useState("EN");
    const { i18n, t } = useTranslation("home");
    const router = useRouter();
    const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
    const [isSmallerThan60em] = useMediaQuery("(max-width: 60em)");

    const onToggleLanguageClick = (newLocale: any) => {
        const { pathname, query } = router;
        router.push({ pathname, query }, router.asPath, { locale: newLocale });
    };

    useEffect(() => {
        const defaultLng = localStorage.getItem("lauguage");
        setLanguage(defaultLng ? defaultLng : "EN");

        const token = localStorage.getItem("token");
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        const verify = async () => {
            try {
                const res = await verifyToken(token);
                if (res.data) {
                    dispatch(tokenValid(userInfo));
                }
            } catch (e) {
                return e;
            }
        };
        if (token) {
            verify();
        }
    }, [isLogged]);

    useEffect(() => {
        if (isSmallerThan60em !== isMinWidthMedium) {
            setIsMinWidthMedium(isSmallerThan60em);
        }
    }, [isSmallerThan60em]);

    return (
        <IconContainerStyles>
            {isLogged ? (
                <UserNameAndMessage></UserNameAndMessage>
            ) : (
                <Link
                    color="#FFFFFF"
                    fontSize="text4"
                    fontWeight="700"
                    lineHeight="lh24"
                    fontFamily="secondary"
                    onClick={() => dispatch(openLoginModal())}
                    minW="50.47px"
                >
                    {t("home:loginAndRegister")}
                </Link>
            )}
            <LoginModal isOpen={isLoginModalOpen} onClose={() => dispatch(closeForgotPasswordModal())} />
            {!showSearchBar && (
                <>
                    <Hamburger />
                    <Menu offset={[-86, 10]}>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            border="none"
                            bgColor="transparent"
                            color="#FFFFFF"
                            w="48px"
                            h="24px"
                            fontSize="text4"
                            fontFamily="secondary"
                            p="0"
                            _focus={{ border: "none" }}
                            _hover={{ backgroundColor: "none" }}
                            _active={{ backgroundColor: "none" }}
                            minW="48px"
                        >
                            {language ? language : "EN"}
                        </MenuButton>
                        <MenuList
                            w="100%"
                            minW="100px"
                            _before={{
                                position: "absolute",
                                content: "''",
                                width: "0",
                                height: "0px",
                                borderBottom: "15px solid white",
                                borderRight: " 15px solid transparent",
                                borderLeft: "15px solid transparent",
                                top: "-5px",
                                right: "5px",
                            }}
                            p="0"
                            pl="21px"
                            pr="21px"
                        >
                            <MenuListTitle>Language</MenuListTitle>
                            <MenuItem
                                h="20px"
                                justifyContent="center"
                                value="EN"
                                p="0"
                                pl="36px"
                                pr="36px"
                                mb="18px"
                                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                    setLanguage((e.target as HTMLButtonElement).value);
                                    onToggleLanguageClick("en");
                                    localStorage.setItem("lauguage", "EN");
                                    i18n.changeLanguage("en");
                                }}
                            >
                EN
                            </MenuItem>
                            <MenuItem
                                p="0"
                                h="20px"
                                pl="36px"
                                pr="36px"
                                justifyContent="center"
                                value="ZH"
                                mb="18px"
                                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                    setLanguage((e.target as HTMLButtonElement).value);
                                    onToggleLanguageClick("zh-Hans");
                                    localStorage.setItem("lauguage", "ZH");
                                    i18n.changeLanguage("zh-Hans");
                                }}
                            >
                ZH
                            </MenuItem>
                            <MenuItem
                                p="0"
                                pl="36px"
                                pr="36px"
                                h="20px"
                                justifyContent="center"
                                value="ESP"
                                mb="18px"
                                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                    setLanguage((e.target as HTMLButtonElement).value);
                                    onToggleLanguageClick("lad");
                                    localStorage.setItem("lauguage", "ESP");
                                    i18n.changeLanguage("lad");
                                }}
                            >
                ESP
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </>
            )}
            {/* <Hamburger /> */}
            {/* <Menu offset={[-86, 10]}>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    border="none"
                    bgColor="transparent"
                    color="#FFFFFF"
                    w="48px"
                    h="24px"
                    fontSize="text4"
                    fontFamily="secondary"
                    p="0"
                    _focus={{ border: "none" }}
                    _hover={{ backgroundColor: "none" }}
                    _active={{ backgroundColor: "none" }}
                    minW='48px'
                >
                    {language ? language : "EN"}
                </MenuButton>
                <MenuList
                    w="100%"
                    minW="100px"
                    _before={{
                        position: "absolute",
                        content: "''",
                        width: "0",
                        height: "0px",
                        borderBottom: "15px solid white",
                        borderRight: " 15px solid transparent",
                        borderLeft: "15px solid transparent",
                        top: "-5px",
                        right: "5px",
                    }}
                    p="0"
                    pl="21px"
                    pr="21px"
                >
                    <MenuListTitle>Language</MenuListTitle>
                    <MenuItem
                        h="20px"
                        justifyContent="center"
                        value="EN"
                        p="0"
                        pl="36px"
                        pr="36px"
                        mb="18px"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            setLanguage((e.target as HTMLButtonElement).value);
                            onToggleLanguageClick("en");
                            localStorage.setItem("lauguage", "EN");
                            i18n.changeLanguage("en");
                        }}
                    >
            EN
                    </MenuItem>
                    <MenuItem
                        p="0"
                        h="20px"
                        pl="36px"
                        pr="36px"
                        justifyContent="center"
                        value="ZH"
                        mb="18px"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            setLanguage((e.target as HTMLButtonElement).value);
                            onToggleLanguageClick("zh-Hans");
                            localStorage.setItem("lauguage", "ZH");
                            i18n.changeLanguage("zh-Hans");
                        }}
                    >
            ZH
                    </MenuItem>
                    <MenuItem
                        p="0"
                        pl="36px"
                        pr="36px"
                        h="20px"
                        justifyContent="center"
                        value="ESP"
                        mb="18px"
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                            setLanguage((e.target as HTMLButtonElement).value);
                            onToggleLanguageClick("lad");
                            localStorage.setItem("lauguage", "ESP");
                            i18n.changeLanguage("lad");
                        }}
                    >
            ESP
                    </MenuItem>
                </MenuList>
            </Menu> */}
        </IconContainerStyles>
    );
};

export default IconContainer;
