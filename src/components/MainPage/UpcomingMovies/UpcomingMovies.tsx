import SeeMore from "../SeeMore";
import MovieCards from "./MovieCards";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
// import axiosApi from "@/utils/axiosApi";
import { getUpcoming } from "@/utils/axiosApi";
import { useState, useEffect } from "react";
import {
    SectionContainer,
    // SectionTitle,
    SectionSubTitleSeeMore,
} from "../Containers";

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<
    {
        poster: string;
        title: string;
        resourceId: number;
        voteAverage: number;
        genres: string;
    }[]
    >([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getUpcoming();
                // console.log(data);

                setUpcomingMovies(data.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    // console.log(upcomingMovies);
    }, []);
    console.log(upcomingMovies);
    // const upcomingMoviesMemo = useMemo(() => movieList, [movieList]);

    return (
        <SectionContainer>
            <Tabs>
                <TabList
                    w="100%"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="29px"
                    mb="50px"
                    color="gray.500"
                    borderBottom="0"
                >
                    <Tab
                        fontSize="h4"
                        lineHeight="36px"
                        fontWeight="500"
                        _selected={{
                            fontSize: "30px",
                            fontWeight: "700",
                            lineHeight: "36px",
                            color: "#000",
                        }}
                        _focus={{ border: "none" }}
                        p="0"
                    >
            Upcoming Movies
                    </Tab>
                    <Tab
                        fontSize="h4"
                        lineHeight="36px"
                        fontWeight="500"
                        _selected={{
                            fontSize: "30px",
                            fontWeight: "700",
                            lineHeight: "36px",
                            color: "#000",
                        }}
                        _focus={{ border: "none" }}
                        p="0"
                    >
            Popular
                    </Tab>
                    <Tab
                        fontSize="h4"
                        lineHeight="36px"
                        fontWeight="500"
                        _selected={{
                            fontSize: "30px",
                            fontWeight: "700",
                            lineHeight: "36px",
                            color: "#000",
                        }}
                        _focus={{ border: "none" }}
                        p="0"
                    >
            Newest
                    </Tab>
                    <Tab
                        fontSize="h4"
                        lineHeight="36px"
                        fontWeight="500"
                        _selected={{
                            fontSize: "30px",
                            fontWeight: "700",
                            lineHeight: "36px",
                            color: "#000",
                        }}
                        _focus={{ border: "none" }}
                        p="0"
                    >
            Top 10
                    </Tab>
                    <SectionSubTitleSeeMore>
                        <SeeMore href="/" />
                    </SectionSubTitleSeeMore>
                </TabList>
                <TabPanels>
                    {/* <TabPanel p="0"> */}
                    <MovieCards movieList={upcomingMovies} />
                    {/* </TabPanel> */}
                    {/* <TabPanel p="0">
                        <MovieCards movieList={movieList} />
                    </TabPanel>
                    <TabPanel p="0">
                        <MovieCards movieList={movieList} />
                    </TabPanel>
                    <TabPanel p="0">
                        <MovieCards movieList={movieList} />
                    </TabPanel> */}
                </TabPanels>
            </Tabs>
        </SectionContainer>
    );
};

export default UpcomingMovies;
