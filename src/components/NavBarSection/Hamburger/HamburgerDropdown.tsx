import { MenuItem, MenuList } from "@chakra-ui/react";
import HamburgerDropdownItem from "./HamburgerDropdownItem";
import styled from "styled-components";
import { IconType } from "react-icons";
import { GoSignOut } from "react-icons/go"
import { useDispatch } from "react-redux";
import { logout } from "@/app/reducer/loginSlice";

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

interface IHamburgerDropdown {
    menuList: {
        itemIcon: IconType;
        command: string;
        content: string;
    }[];
    menuTitle: string;
}
const HamburgerDropdown = ({ menuList, menuTitle }: IHamburgerDropdown) => {
    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(logout())
        localStorage.removeItem("userInfo")
        localStorage.removeItem("token")
    }

    return (
        <>
            <MenuList
                minW="180px"
                p="0"
                pl="21px"
                pr="21px"
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
            >
                <MenuListTitle>{menuTitle}</MenuListTitle>
                {menuList.map(({ itemIcon, ...rest }) => (
                    <HamburgerDropdownItem key={rest.content} Icon={itemIcon} {...rest} />
                ))}
                <MenuItem onClick={handleLogout} icon={<GoSignOut/>} mb="18px" p="0" color={"red"}>Log out</MenuItem>
            </MenuList>
        </>
    );
};

export default HamburgerDropdown;
