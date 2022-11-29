import styled from "styled-components";

interface IWrapperProps {
    height: string;
}

interface ImageButtonWrapper {
    bgImg: string | undefined;
}

export const Wrapper = styled.div<IWrapperProps>`
  border: 3px solid #000;
  border-radius: 10px;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  margin-top: 30px;
  min-height: ${({ height }) => height};
  position: relative;
  padding-bottom: 1rem;
`;

export const MenuBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px 20px;
  border-bottom: 3px solid #000;
  width: 100%;
`;

export const TitleInput = styled.input`
  margin-top: 3px;
  color: #000;
  border: 3px solid #000;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  height: 48px;
  padding: 10px 20px;
  font-size: 1.3rem;
  background-color: #e5e7eb;
`;

export const ImageButtonWrapper = styled.button<ImageButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 3px dashed #000;
  height: 240px;
  gap: 40px;
  cursor: pointer;
  width: 100%;
  background-image: url(${({ bgImg }) => bgImg});
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImagePlus = styled.div`
  ::after {
    content: "+";
    position: absolute;
    font-size: 55px;
    font-weight: 700;
    top: 5px;
    left: 35px;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const PreviewContainer = styled.div`
  position: absolute;
  z-index: 15;
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  top: auto;
  bottom: 55px;
  left: 110px;
  max-height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ababac; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    /* border: 3px solid orange;  creates padding around scroll thumb */
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
