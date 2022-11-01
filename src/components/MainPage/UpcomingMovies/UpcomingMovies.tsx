import MovieCards from "./MovieCards";
import { Tabs, TabPanels } from "@chakra-ui/react";
import { getUpcoming } from "@/utils/axiosApi";
import { useState, useEffect } from "react";
import { SectionContainer } from "../Containers";
import UpcomingTabs from "./UpcomingTabs";

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<
    {
        poster: string;
        title: string;
        resourceId: number;
        voteAverage: number;
        genreNames: {
            id: number;
            name: string;
        }[];
    }[]
    >([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getUpcoming();

                setUpcomingMovies(data.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <SectionContainer>
            <Tabs>
                <UpcomingTabs changeMovieListMethod={setUpcomingMovies} />
                <TabPanels>
                    {upcomingMovies.length > 0 && <MovieCards movieList={upcomingMovies} />}
                </TabPanels>
            </Tabs>
        </SectionContainer>
    );
};

export default UpcomingMovies;
