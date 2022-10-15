import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import More from "../More";
import WeeklyLists from "./WeeklyList";

const SectionContainer = styled.div`
  width: 300px;
  padding: 10px;
`;

const WeeklyTop10Post = () => {
  return (
    <SectionContainer>
      <SectionHeaderContainer>
        <SectionTitle>Weekly Top 10 Post</SectionTitle>
        <More />
      </SectionHeaderContainer>
      <WeeklyLists />
    </SectionContainer>
  );
};

export default WeeklyTop10Post;
