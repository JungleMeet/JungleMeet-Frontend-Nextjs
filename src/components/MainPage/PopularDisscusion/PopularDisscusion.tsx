import SeeMore from "../SeeMore";
import { SectionContainer, SectionHeaderContainer, SectionTitle } from "../Containers";
import DisscusionPosts from "./DisscusionPosts";
import Link from 'next/link';

const PopularDisscusion = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>Popular Disscusion</SectionTitle>
                <Link href='/discussions' style={{cursor: 'pointer'}}><SeeMore/></Link>
            </SectionHeaderContainer>
            <DisscusionPosts />
        </SectionContainer>
    );
};

export default PopularDisscusion;
