import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import More from "../More";
import WeeklyLists from "./WeeklyLists";

const SectionContainer = styled.div`
  width: 600px;
  padding-left: 56px;
`;

const WeeklyTop10Post = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer style={{marginBottom: '22px'}}>
                <SectionTitle style={{fontSize: '24px'}}>Weekly Top 10 Post</SectionTitle>
                <More />
            </SectionHeaderContainer>
            <WeeklyLists />
        </SectionContainer>
    );
};

export default WeeklyTop10Post;
