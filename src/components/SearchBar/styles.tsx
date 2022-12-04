import styled from "styled-components";

export const SearchButton = styled.button`
  position: relative;
  left: -30px;
  background: transparent;
  z-index: 2;
`;

export const EscPrompt = styled.span`
  position: absolute;
  background: transparent;
  z-index: 2;
  font-size: 16px;
  color: #797878;
  right: 55px;
  top: 8px;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  height: auto;
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
  width: 100%;
`;

export const PreviewContainer = styled.div`
  position: absolute;
  z-index: 15;
  width: 507px;
  background-color: #e5e7e8;
  border-radius: 5px;
  transform: translateY(8px);
  max-height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ababac; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IPreviewItemContainerProps {
    isActive: boolean;
}
export const PreviewItemContainer = styled.div<IPreviewItemContainerProps>`
  padding: 20px 16px 20px 16px;
  border-top: 0.5px #ffffff7d solid;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#b8b9b87d" : null)};
  :hover {
    background-color: #b8b9b87d;
  }
`;
