import styled from "styled-components";

const Container = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #3b82f6;
`;
interface IMore {
  onClick?: () => void;
}

const More = ({ onClick }: IMore): JSX.Element => {
  return <Container onClick={onClick}>More &gt;</Container>;
};

export default More;
