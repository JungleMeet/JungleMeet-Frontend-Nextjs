import styled from "styled-components";

const Container = styled.span`
  left: 1373px;
  top: 708px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  // padding-top: 14px;
  color: #3b82f6;
  cursor: pointer;
`;
interface IMore {
    onClick?: () => void;
}

const More = ({ onClick }: IMore): JSX.Element => {
    return <Container onClick={onClick}>More &gt;&gt;</Container>;
};

export default More;
