import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1440px;
  background-color: #f4f5f7;
  margin: auto;
`;

const HomePage = (): JSX.Element => {
  return (
    <PageContainer>
      <ExclusiveVideos />
    </PageContainer>
  );
};

export default HomePage;
