import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import styled from "styled-components";
import WeeklyTop10Post from "@/components/MainPage/WeeklyTop10Post/WeeklyTop10Post";

const PageContainer = styled.div`
  max-width: 1440px;
  background-color: #f4f5f7;
  margin: auto;
`;

const HomePage = (): JSX.Element => {
  return (
    <PageContainer>
      <ExclusiveVideos />
      <WeeklyTop10Post />
    </PageContainer>
  );
};

export default HomePage;
