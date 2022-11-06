import SeeMore from "../SeeMore";
import { SectionContainer, SectionHeaderContainer, SectionTitle } from "../Containers";
import DisscusionPosts from "./DisscusionPosts";
import { useTranslation } from "next-i18next";


const PopularDisscusion = () => {
    const { t } = useTranslation("home");

    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>{t("home:popularDiscussionTitle")}</SectionTitle>
                <SeeMore href="/discussions" />
            </SectionHeaderContainer>
            <DisscusionPosts />
        </SectionContainer>
    );
};

export default PopularDisscusion;
