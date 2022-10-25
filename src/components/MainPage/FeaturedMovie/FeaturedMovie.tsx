import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import SeeMore from "../SeeMore";
import Movies from "./Movies";

const SectionContainer = styled.div`
  width: 840px;
  margin-bottom: 90px;
`;

const FeaturedMovie = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>NowPlaying</SectionTitle>
                <SeeMore />
            </SectionHeaderContainer>
            <Movies />
        </SectionContainer>
    );
};

export default FeaturedMovie;
