import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import TMDBRanking from "../MainPage/TMDBRanking";
import TrailorsPlayButton from "./TrailorsPlayButton";

// interface IMovieProps {
//   movieName: string;
//   image: string;
//   director: string;
//   writers: string;
//   stars: string;
//   date: string;
//   length: string;
//   language: string;
// }

// const movie = [
//   {
//     movieName,
//     image,
//     src: "/Dune.jpg",
//     director,
//     writers,
//     stars,
//     date,
//     length,
//     language,
//   },
// ];

const Movie = () => {
    return (
        <Flex alignItems="center" justifyContent="space-between" pt="39px">
            <Flex alignItems="center" justifyContent="space-between">
                {/* <Image src={image} paddingTop="45px" /> */}
            </Flex>
            <Flex alignItems="center" pt="10px">
                <Heading fontSize="18px" pr="11px" pb="20px">
          TMDB Rating
                    <Flex alignItems="center" flexDirection="column">
                        <TMDBRanking gap={"10px"} tmdb={8.4} color={"#111827"} />
                    </Flex>
                    <span>609,000 Votes</span>
                </Heading>

                <Flex flexDirection="column" alignItems="center" padding="6px">
                    <Heading fontSize="h6" pr="11px">
            Trailors Option
                        <TrailorsPlayButton value={0} />
                    </Heading>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Movie;
