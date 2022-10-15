import styled from "styled-components";

const Container = styled.span`
  position: absolute;
  width: 59px;
  height: 20px;
  left: 1283px;
  top: 708px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3b82f6;
`;
interface IMore {
  onClick?: () => void;
}

const More = ({ onClick }: IMore): JSX.Element => {
  return <Container onClick={onClick}>More &gt;&gt;</Container>;
};

export default More;
