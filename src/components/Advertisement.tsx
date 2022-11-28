import styled from "styled-components";

export const AdContainer = styled.div`
  position: fixed;
  width: 250px;
  overflow: hidden;
  top: 0;
  height: 100vh;
  padding-top: 5rem;
`;

export const AdContainerLeft = styled(AdContainer)`
  right: calc((100% - 1440px) / 2 + 1440px);
  background: linear-gradient(#047857, rgba(6, 95, 70, 0));
`;

export const AdContainerRight = styled(AdContainer)`
  left: calc(((100% - 1440px) / 2) + 1440px);
  background: linear-gradient(#b91c1c, rgba(177, 23, 60, 0));
`;

export const AdImg = styled.img`
  width: 250px;
`;
