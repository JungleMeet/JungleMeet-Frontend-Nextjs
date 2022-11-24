import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import HeroBanner from "@/components/MainPage/HeroBanner/HeroBanner";
import UpcomingMovies from "@/components/MainPage/UpcomingMovies/UpcomingMovies";
import Footer from "@/components/FooterSection/Footer";
import styled from "styled-components";
import NavBar from "@/components/NavBarSection/NarBar";
import NowPlaying from "@/components/MainPage/NowPlaying/NowPlaying";
import PopularDisscusion from "@/components/MainPage/PopularDisscusion/PopularDisscusion";
import WeeklyTop10Post from "@/components/MainPage/WeeklyTop10Post/WeeklyTop10Post";
import { Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const PageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  padding: 98px;
  padding-bottom: 0;
  width: 100%;
`;

interface IgetStaticProps {
    locale: string;
}
export async function getStaticProps({ locale }: IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const HomePage = (): JSX.Element => {
    return (
        <PageContainer>
            <NavBar />
            <HeroBanner />
            <ContentWrapper>
                <Flex>
                    <NowPlaying />
                    <WeeklyTop10Post />
                </Flex>
                <UpcomingMovies />
                <ExclusiveVideos />
                <PopularDisscusion />
            </ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default HomePage;
