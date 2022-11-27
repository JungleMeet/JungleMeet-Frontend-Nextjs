import Videos from "./Videos";
import { SectionContainer, SectionHeaderContainer, SectionTitle } from "../Containers";
import { useTranslation } from "next-i18next";

const ExclusiveVideos = () => {
    const { t } = useTranslation("home");

    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>{t("home:exclusiveVideosTitle")}</SectionTitle>
            </SectionHeaderContainer>
            <Videos />
        </SectionContainer>
    );
};

export default ExclusiveVideos;
