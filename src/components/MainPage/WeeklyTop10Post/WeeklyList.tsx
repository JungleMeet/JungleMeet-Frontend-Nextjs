import { Image, Flex, Text } from "@chakra-ui/react";

interface IWeeklyListProps {
    ranking: number;
    title: string;
    icon: string;
}

const WeeklyList = ({ ranking, title, icon }: IWeeklyListProps) => {
    return (
        <Flex
            justifyContent="space-between"
            borderBottom="1px"
            borderBottomColor="#DFDFDF"
            alignItems="center"
        >
            <Flex gap="22" paddingBottom="8px" paddingTop="19px">
                <Text>{ranking}</Text>
                <Text color="#3B82F6">{title}</Text>
            </Flex>
            <Image src={icon} alignItems="end" />
        </Flex>
    );
};

export default WeeklyList;
