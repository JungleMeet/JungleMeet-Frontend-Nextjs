import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import More from "../More";
import WeeklyLists from "./WeeklyLists";

const SectionContainer = styled.div`
  width: 600px;
  padding-left: 56px;
`;

const WeeklyTop10Header = styled(SectionHeaderContainer)`
  margin-bottom: 22px;
`;

const WeeklyTop10Title = styled(SectionTitle)`
  font-size: 24px;
`;
const WeeklyTop10Post = () => {
    return (
        <SectionContainer>
            <WeeklyTop10Header>
                <WeeklyTop10Title>Weekly Top 10 Post</WeeklyTop10Title>
                <More href="/" />
            </WeeklyTop10Header>
            <WeeklyLists />
        </SectionContainer>
    );
};

export default WeeklyTop10Post;
