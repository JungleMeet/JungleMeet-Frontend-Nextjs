import { Flex, Text } from "@chakra-ui/react";

interface IWeeklyListProps {
  ranking: number;
  title: string;
}

const WeeklyList = ({ ranking, title }: IWeeklyListProps) => {
  return (
    <Flex
      gap="22"
      borderBottom="1px"
      borderBottomColor="#DFDFDF"
      paddingBottom="8px"
      paddingTop="19px"
    >
      <Text>{ranking}</Text>
      <Text color="#3B82F6">{title}</Text>
    </Flex>
  );
};

export default WeeklyList;
