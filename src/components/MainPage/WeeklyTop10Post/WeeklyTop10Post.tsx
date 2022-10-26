import styled from "styled-components";
import { SectionHeaderContainer } from "../Containers";
import More from "../More";
import WeeklyLists from "./WeeklyLists";

const SectionContainer = styled.div`
  width: 600px;
  padding-left: 56px;
`;

const SectionTitle = styled.div`
  margin-bottom: 22px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  padding-top: 10px;
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
