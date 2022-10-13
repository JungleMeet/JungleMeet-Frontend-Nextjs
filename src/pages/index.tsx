import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import HeroBanner from "@/components/MainPage/HeroBanner/HeroBanner";
import Footer from "@/components/FooterSection/Footer";
import styled from "styled-components";
import NavBar from "@/components/NavBarSection/NarBar";
import FeaturedMovie from "@/components/MainPage/FeaturedMovie/FeaturedMovie";

const PageContainer = styled.div`
  max-width: 1440px;
  background-color: #f4f5f7;
  margin: auto;
`;

const HomePage = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <HeroBanner />
            <PageContainer>
                <FeaturedMovie />
                <ExclusiveVideos />
            </PageContainer>
            <Footer />
        </>
    );
};

export default HomePage;
