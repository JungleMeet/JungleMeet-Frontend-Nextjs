import Seemore from "../components/seemore";
import styled from "styled-components";
import Videos from "./videos/videos";

const SectionContainer = styled.div`
  width: 100%;
  /* background-color: aqua; */
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1368px;
`;

const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
`;

const ExclusiveVideos = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Exclusive Videos</SectionTitle>
        <Seemore />
      </SectionHeader>
      <Videos />
    </SectionContainer>
  );
};

export default ExclusiveVideos;
