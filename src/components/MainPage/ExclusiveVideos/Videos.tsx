import { useEffect, useState } from "react";
import styled from "styled-components";
import Video from "./VideoThumbnail";
import { IVideoThumbnailProps } from "./VideoThumbnail";

const VideosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 48px;
  padding: 10px;
  overflow: hidden;
`;

const staticSrc = [
    { src: "https://www.youtube.com/embed/DUnQcJz76Ck", title: "The Super Mario Bros" },
    { src: "https://www.youtube.com/embed/szby7ZHLnkA", title: "Sonic the Hedgehog" },
    { src: "https://www.youtube.com/embed/9kK86zmhpWc", title: "Pikachu's Cutest Moments" },
];

const Videos = () => {
    const [videoList, setVideoList] = useState<IVideoThumbnailProps[]>([]); // 这里是否需要定义type？是不是有默认值就不需要type了？

    useEffect(() => {
        setVideoList(staticSrc);
    }, []);

    return (
        <VideosContainer>
            {videoList.map(({ src, title }) => {
                return <Video src={src} title={title} key={title} />;
            })}
        </VideosContainer>
    );
};

export default Videos;
