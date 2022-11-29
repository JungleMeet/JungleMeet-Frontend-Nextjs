import styled from "styled-components";

export const CommentContainer = styled.div`
  padding: 10px 0px 0px 35px;
  margin-bottom: 0px;
  background-color: #f9fafb;
  position: relative;
`;

export const CommentThread = styled.button`
  display: block;
  position: absolute;
  bottom: 0px;
  left: 43px;
  top: 72px;
  margin-bottom: 15px;
  border-right: ${({ isCollapsed }: { isCollapsed: boolean }) =>
        isCollapsed ? "5px double #E5E7EB" : "2px solid #E5E7EB"};
  width: 13px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    border-right: ${({ isCollapsed }: { isCollapsed: boolean }) =>
        isCollapsed ? "5px double #9d1304" : "2px solid #9d1304"};
  }
`;
