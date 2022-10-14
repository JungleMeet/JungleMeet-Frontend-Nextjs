import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import HeroBanner from "@/components/MainPage/HeroBanner/HeroBanner";
import NewArrivalVideos from "@/components/MainPage/NewArrivalVideos/NewArrivals";
import Footer from "@/components/FooterSection/Footer";
import styled from "styled-components";
import NavBar from "@/components/NavBarSection/NarBar";
import FeaturedMovie from "@/components/MainPage/FeaturedMovie/FeaturedMovie";

const PageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const HomePage = (): JSX.Element => {
    return (
        <>
            <NavBar bgColor="transparent" />
            <HeroBanner />
            <PageContainer>
                <FeaturedMovie />
                <NewArrivalVideos />
                <ExclusiveVideos />
            </PageContainer>
            <Footer />
        </>
    );
};

export default HomePage;
