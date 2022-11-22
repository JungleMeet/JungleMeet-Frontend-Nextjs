import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import SeeMore from "../SeeMore";
import Movies from "./Movies";
import { useTranslation } from "next-i18next";
import CarouselContainer from "@/components/CarouselContainer";
// import { Carousel } from "@mantine/carousel";

const SectionContainer = styled.div`
  width: 70%;
  overflow: hidden;
`;

const NowPlaying = () => {
    const { t } = useTranslation("home");

    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>{t("home:nowPlayingTitle")}</SectionTitle>
                <SeeMore href="/nowplaying" />
            </SectionHeaderContainer>
            <CarouselContainer slideSize="160px"></CarouselContainer>
            <Movies />
        </SectionContainer>
    );
};

export default NowPlaying;
