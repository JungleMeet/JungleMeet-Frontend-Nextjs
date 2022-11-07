import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

const Container = styled.span`
  left: 1373px;
  top: 708px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #3b82f6;
  cursor: pointer;
`;
interface IMore {
    href: string;
}

const More = ({ href }: IMore): JSX.Element => {
    const { t } = useTranslation("home");

    return (
        <Link href={href} style={{ cursor: "pointer" }}>
            <Container>{t("home:more")} &gt;&gt;</Container>
        </Link>
    );
};

export default More;
