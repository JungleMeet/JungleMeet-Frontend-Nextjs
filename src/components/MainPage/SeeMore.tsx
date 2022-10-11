import styled from "styled-components";

const Container = styled.span`
  font-family: sans-serif;
  color: #be123c;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  padding-top: 18px;
`;
interface ISeemore {
    onClick?: () => void;
}

const SeeMore = ({ onClick }: ISeemore): JSX.Element => {
    return <Container onClick={onClick}>See more &gt;</Container>;
};

export default SeeMore;
