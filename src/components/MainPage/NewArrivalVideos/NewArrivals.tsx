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
                <SectionTitle>New Arrival</SectionTitle>
                <Text fontWeight="500" fontSize="20px" fontFamily="heading" color="gray.500">
          Popular
                </Text>
                <Text fontWeight="500" fontSize="20px" fontFamily="heading" color="gray.500">
          Newest
                </Text>
                <Text fontWeight="500" fontSize="20px" fontFamily="heading" color="gray.500">
          Top10
                </Text>
                <SectionSubTitleSeeMore>
                    <SeeMore href="/" />
                </SectionSubTitleSeeMore>
            </NewArrivalsSectionHeaderContainer>
            <VideoCards />
        </SectionContainer>
    );
};

export default NewArrivals;
