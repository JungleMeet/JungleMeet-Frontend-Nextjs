import { Image, Flex, Link } from "@chakra-ui/react";

interface IWeeklyListProps {
    title: string;
    icon: string;
    postId: string;
}

const WeeklyList = ({ title, icon, postId }: IWeeklyListProps) => {
    return (
        <Flex
            justifyContent="space-between"
            borderBottom="1px"
            borderBottomColor="gray.200"
            alignItems="center"
        >
            <Flex paddingBottom="8px" noOfLines={1}>
                <Link
                    href={`/discussions/${postId}`}
                    color="#3B82F6"
                    fontSize="text5"
                    fontWeight="500"
                    lineHeight="20px"
                >
                    {title}
                </Link>
            </Flex>
            <Image paddingLeft={"5px"} paddingBottom="10px" src={icon} alignItems="end" />
        </Flex>
    );
};

export default WeeklyList;
