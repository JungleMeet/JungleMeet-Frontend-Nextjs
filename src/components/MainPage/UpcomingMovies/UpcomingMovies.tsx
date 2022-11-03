import MovieCards from "./MovieCards";
import { Tabs, TabPanels } from "@chakra-ui/react";
import { getUpcoming } from "@/utils/axiosMovieApi";
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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const { data } = await getUpcoming();
                setIsLoading(false);
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
                <UpcomingTabs
                    changeMovieListMethod={setUpcomingMovies}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <TabPanels>
                    {upcomingMovies.length > 0 && <MovieCards movieList={upcomingMovies} />}
                </TabPanels>
            </Tabs>
        </SectionContainer>
    );
};

export default UpcomingMovies;
