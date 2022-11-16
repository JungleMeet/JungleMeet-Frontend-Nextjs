import { Flex, Heading, Divider, IconButton, Image } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";

export interface IReviewHeaderProps {
    resourceId: string
    title: string;
    poster: string;
}
const ReviewHeader = ({ headerInfo}: { headerInfo: IReviewHeaderProps[] }): JSX.Element => {
    // const [childrenHidden, setChildrenHidden] = useState(false);

    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" pt="70px">
                <Flex alignItems="center" key={headerInfo.resourceId}>
                    <Image src={headerInfo.poster} alt="movie poster" height="106px" width="72px"></Image>
                    <Flex direction="column" pl="36px">
                        <Heading fontSize="h4" pr="11px" color={"blue.500"}>
                            {headerInfo.title}
                        </Heading>
                        <Heading fontSize={"h1"} fontFamily="heading">
              Movie Review
                        </Heading>
                    </Flex>
                </Flex>

                <Flex alignItems="center" pt="10px">
                    <Heading fontSize="h4" pr="11px">
            Write Review
                    </Heading>
                    <IconButton
                        variant="outline"
                        colorScheme="#BE123C"
                        aria-label="create comment"
                        size="sm"
                        icon={<EditIcon />}
                    />
                </Flex>
            </Flex>
            <Divider orientation="horizontal" mb="12px" mt="28px" borderColor="grey.200" />
        </>
    );
};

export default ReviewHeader;
