import SeeMore from "../SeeMore";
import { SectionContainer, SectionHeaderContainer, SectionTitle } from "../Containers";
import DisscusionPosts from "./DisscusionPosts";

const PopularDisscusion = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>Popular Disscusion</SectionTitle>
                <SeeMore href="/discussions" />
            </SectionHeaderContainer>
            <DisscusionPosts />
        </SectionContainer>
    );
};

export default PopularDisscusion;
