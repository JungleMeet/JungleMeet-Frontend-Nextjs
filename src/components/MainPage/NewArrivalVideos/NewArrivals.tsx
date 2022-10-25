import SeeMore from "../SeeMore";
import VideoCards from "./VideoCards";
import { Text } from "@chakra-ui/react";
import {
    SectionContainer,
    NewArrivalsSectionHeaderContainer,
    SectionTitle,
    SectionSubTitleSeeMore,
} from "../Containers";

const NewArrivals = () => {
    return (
        <SectionContainer>
            <NewArrivalsSectionHeaderContainer max-width="150px">
                <SectionTitle>Upcoming Movies</SectionTitle>
                <Text
                    fontWeight="500"
                    fontSize="20px"
                    fontFamily="heading"
                    color="gray.500"
                    line-height="47px"
                >
          Popular
                </Text>
                <Text
                    fontWeight="500"
                    fontSize="20px"
                    fontFamily="heading"
                    color="gray.500"
                    line-height="47px"
                >
          Newest
                </Text>
                <Text
                    fontWeight="500"
                    fontSize="20px"
                    fontFamily="heading"
                    color="gray.500"
                    line-height="47px"
                >
          Top10
                </Text>
                <SectionSubTitleSeeMore>
                    <SeeMore />
                </SectionSubTitleSeeMore>
            </NewArrivalsSectionHeaderContainer>
            <VideoCards />
        </SectionContainer>
    );
};

export default NewArrivals;
