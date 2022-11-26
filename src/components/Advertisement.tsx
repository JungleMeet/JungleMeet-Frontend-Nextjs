import styled from "styled-components";

export const AdContainer = styled.div`
  position: fixed;
  /* background-color: #262626; */
  /* height: 100vh; */
  min-width: 200px;
  padding-top: 2rem;
  border: 1px solid grey;
  top: 40%;
  box-shadow: grey 5px 5px 5px 0px;
`;

export const AdContainerLeft = styled(AdContainer)`
  left: calc((100% - 1440px) / 2 - 200px);
  /* background-color: #1E792C; */
`;

export const AdContainerRight = styled(AdContainer)`
  right: calc((100% - 1440px) / 2 - 200px);
  /* background-color: #c54245; */
`;
