import { Button, Flex } from "@chakra-ui/react";

interface ICategoryButton {
    type: {
        id: number;
        name: string;
    }[];
}
const CategoryButton = ({ type }: ICategoryButton) => {
    return (
        <Flex marginTop="14.5px" marginBottom="13px" gap="3px" flexWrap="nowrap" overflow="hidden">
            {type.map(({ id, name }) => (
                <Button
                    variant="link"
                    key={id}
                    fontSize="text6"
                    fontWeight="700"
                    lineHeight="15.62px"
                    fontFamily="secondary"
                    minW="auto"
                    color="gray.400"
                >
                    {name}
                </Button>
            ))}
        </Flex>
    );
};

export default CategoryButton;
