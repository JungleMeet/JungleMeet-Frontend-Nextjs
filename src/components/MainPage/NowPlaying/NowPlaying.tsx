import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import SeeMore from "../SeeMore";
import Movies from "./Movies";
import { useTranslation } from "next-i18next";

const SectionContainer = styled.div`
  width: 60%;
`;

const NowPlaying = () => {
    const { t } = useTranslation("home");

    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>{t("home:nowPlayingTitle")}</SectionTitle>
                <SeeMore href="/nowplaying" />
            </SectionHeaderContainer>
            <Movies />
        </SectionContainer>
    );
};

export default NowPlaying;
