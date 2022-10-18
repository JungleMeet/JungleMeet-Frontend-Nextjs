<<<<<<< HEAD
import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import SeeMore from "../SeeMore";
import Movies from "./Movies";

const SectionContainer = styled.div`
  width: 840px;
  padding: 10px;
`;

const FeaturedMovie = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>Featured Movie</SectionTitle>
                <SeeMore />
            </SectionHeaderContainer>
            <Movies />
        </SectionContainer>
    );
};

export default FeaturedMovie;
||||||| 8850e32
=======
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
                <SectionTitle>Featured Movie</SectionTitle>
                <SeeMore />
            </SectionHeaderContainer>
            <Movies />
        </SectionContainer>
    );
};

export default FeaturedMovie;
>>>>>>> c82736b322d3629103b38d9d28bf52fec281b7e0
