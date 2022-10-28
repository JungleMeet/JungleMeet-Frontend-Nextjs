import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import SeeMore from "../SeeMore";
import Movies from "./Movies";

const SectionContainer = styled.div`
  /*width: 840px;*/
`;

const NowPlaying = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>NowPlaying</SectionTitle>
                <SeeMore href="/nowplaying" />
            </SectionHeaderContainer>
            <Movies />
        </SectionContainer>
    );
};

export default NowPlaying;
