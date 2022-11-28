import styled, { css } from "styled-components";

export const CommentContainer = styled.div`
  padding: 5px 0px 0px 54.5px;
  margin-bottom: 0px;
  background-color: #f9fafb;
  position: relative;
`;

const hoverStyle = css`
  :hover {
    border-right: ${({ isCollapsed }: { isCollapsed: boolean }) =>
        isCollapsed ? "6px double #9d1304" : "2px solid #9d1304"};
  }
`;

interface ICommentThreadProps {
    isCollapsed: boolean;
    hasChildren: boolean;
}

export const CommentThread = styled.button<ICommentThreadProps>`
  display: block;
  position: absolute;
  bottom: 0;
  left: 65px;
  top: 70px;
  border-right: ${({ isCollapsed }) =>
        isCollapsed ? "6px double #cbcacab3" : "2px solid #cbcacab3"};
  width: 13px;
  cursor: pointer;
  z-index: 10;
  ${({ hasChildren }) => hasChildren && hoverStyle}
`;
