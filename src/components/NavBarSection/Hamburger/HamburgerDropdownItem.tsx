import { MenuItem } from "@chakra-ui/react";

interface itemProps {
    key: string;
    icon: any;
    command: string;
    content: string;
}

const HamburgerDropdownItem = (props: itemProps): JSX.Element => {
    return (
        <MenuItem icon={<props.icon />} command={props.command}>
            {props.content}
        </MenuItem>
    );
};

export default HamburgerDropdownItem;
