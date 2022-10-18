// import styled from "styled-components";
import VideoThumbnail from "./VideoThumbnail";
import VideoCardInfo from "./VideoCardInfo";
import CarouselContainer from "@/components/CarouselContainer";
import { Carousel } from "@mantine/carousel";

// const VideosContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: row;
/* gap: 49px;
  overflow: hidden; */
// `;

const videoList = [
    {
        id: 1,
        src: "/Dune.jpg",
        title: "Dune",
        country: "USA",
        year: 1966,
        imdb: "8.0",
        likes: "88%",
        type: "action",
    },
    {
        id: 2,
        src: "/NoTimeToDie.jpg",
        title: "No Time To Die",
        country: "USA",
        year: 2002,
        imdb: "7.8",
        likes: "80%",
        type: "Action/Thriller",
    },
    {
        id: 3,
        src: "Shangqi.jpg",
        title: "Shang-Chi and the Legend of the Ten Rings",
        country: "USA",
        year: 2016,
        imdb: "8.4",
        likes: "70%",
        type: "action",
    },
    {
        id: 4,
        src: "/DontBreath2.jpg",
        title: "Dont Breath 2",
        country: "USA",
        year: 2001,
        imdb: "9.2",
        likes: "90%",
        type: "action",
    },
    {
        id: 5,
        src: "/DontBreath2.jpg",
        title: "Dont Breath 2",
        country: "USA",
        year: 1966,
        imdb: "8.2",
        likes: "90%",
        type: "action",
    },
    {
        id: 6,
        src: "/DontBreath2.jpg",
        title: "Dont Breath 2",
        country: "USA",
        year: 1966,
        imdb: "8.2",
        likes: "90%",
        type: "action",
    },
    {
        id: 7,
        src: "/DontBreath2.jpg",
        title: "Dont Breath 2",
        country: "USA",
        year: 1966,
        imdb: "8.2",
        likes: "90%",
        type: "action",
    },
];

const VideoCards = () => {
    return (
    // <VideosContainer>
        <CarouselContainer loop={true} slideSize="160px">
            {videoList.map((info) => {
                return (
                // eslint-disable-next-line react/jsx-key
                    <Carousel.Slide gap={49}>
                        <VideoThumbnail src={info.src} title={info.title} key={info.id} />

                        <VideoCardInfo
                            title={info.title}
                            country={info.country}
                            year={info.year}
                            imdb={info.imdb}
                            likes={info.likes}
                            type={info.type}
                            key={info.id}
                        />
                    </Carousel.Slide>
                );
            })}
        </CarouselContainer>
    // </VideosContainer>
    );
};

export default VideoCards;
