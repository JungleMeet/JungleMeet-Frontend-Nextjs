import SeeMore from "../SeeMore";
import { SectionContainer, SectionHeaderContainer, SectionTitle } from "../Containers";
import DisscusionPosts from "./DisscusionPosts";
import Link from "next/link";

const PopularDisscusion = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <Link href="/discussions">
                    <SectionTitle>Popular Discussion</SectionTitle>
                </Link>
                <SeeMore href="/discussions" />
            </SectionHeaderContainer>
            <DisscusionPosts />
        </SectionContainer>
    );
};

export default PopularDisscusion;
