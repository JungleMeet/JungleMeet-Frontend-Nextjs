import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import More from "../More";
import WeeklyListItems from "./WeeklyListItems";
import { useTranslation } from "next-i18next";
import { Link } from "@chakra-ui/react";

const SectionContainer = styled.div`
  width: 30%;
  padding-left: 56px;
  @media (max-width: 60em) {
    width: 100%;
  }
`;

const WeeklyTop10Header = styled(SectionHeaderContainer)`
  margin-bottom: 22px;
`;

const WeeklyTop10Title = styled(SectionTitle)`
  font-size: 24px;
`;
const WeeklyTop10Post = () => {
    const { t } = useTranslation("home");
    return (
        <SectionContainer>
            <WeeklyTop10Header>
                <WeeklyTop10Title>
                    <Link href="/discussions">{t("home:weeklyTop10")}</Link>
                </WeeklyTop10Title>
                <More href="/discussions" />
            </WeeklyTop10Header>
            <WeeklyListItems />
        </SectionContainer>
    );
};

export default WeeklyTop10Post;
