import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import HeroBanner from "@/components/MainPage/HeroBanner/HeroBanner";
import UpcomingMovies from "@/components/MainPage/UpcomingMovies/UpcomingMovies";
import Footer from "@/components/FooterSection/Footer";
import styled from "styled-components";
import NavBar from "@/components/NavBarSection/NarBar";
import FeaturedMovie from "@/components/MainPage/FeaturedMovie/FeaturedMovie";
import PopularDisscusion from "@/components/MainPage/PopularDisscusion/PopularDisscusion";
import WeeklyTop10Post from "@/components/MainPage/WeeklyTop10Post/WeeklyTop10Post";
import { Flex } from "@chakra-ui/react";

export const PageContainer = styled.div`
    max-width: 1440px;
    margin: auto;
    padding: 98px;
    padding-bottom: 0;
`;

const HomePage = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <HeroBanner />
            <PageContainer>
                <Flex>
                    <FeaturedMovie />
                    <WeeklyTop10Post />
                </Flex>
                <UpcomingMovies />
                <ExclusiveVideos />
                <PopularDisscusion />
            </PageContainer>
            <Footer />
        </>
    );
};

export default HomePage;
