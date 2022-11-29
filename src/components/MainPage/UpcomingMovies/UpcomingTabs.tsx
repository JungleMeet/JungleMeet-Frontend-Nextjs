import { TabList, Tab, Image } from "@chakra-ui/react";
import { SectionSubTitleSeeMore } from "../Containers";
import SeeMore from "../SeeMore";
import { getPopular, getUpcoming, getTopRated } from "@/utils/axiosMovieApi";
import { useTranslation } from "next-i18next";
import { useState } from "react";

interface IUpcomingTabs {
    changeMovieListMethod: any;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

const UpcomingTabs = ({ changeMovieListMethod, isLoading, setIsLoading }: IUpcomingTabs) => {
    const { t } = useTranslation("home");
    const tabTitles = [t("home:upcomingTitle"), t("home:popularTitle"), t("home:top10Title")];

    const fetchMovies = async (tabTitle: string) => {
        if (tabTitle === t("home:upcomingTitle")) {
            try {
                const { data } = await getUpcoming();
                setIsLoading(false);
                changeMovieListMethod(data.slice(0, 10));
            } catch (err) {
                return err;
            }
        } else if (tabTitle === t("home:popularTitle")) {
            try {
                const { data } = await getPopular();
                setIsLoading(false);
                changeMovieListMethod(data.slice(0, 10));
            } catch (err) {
                return err;
            }
        } else {
            try {
                const { data } = await getTopRated();
                setIsLoading(false);
                // return (data);
                changeMovieListMethod(data.slice(0, 10));
            } catch (err) {
                return err;
            }
        }
    };
    const [showRunning, setShowRunning] = useState(false);

    const showElementForOneSec = () => {
        setShowRunning(true);
        setTimeout(() => {
            setShowRunning(false);
        }, 1000);
    };

    return (
        <TabList
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={["20px", "20px", "29px"]}
            mb="50px"
            color="gray.500"
            borderBottom="0"
        >
            {tabTitles.map((tabTitle) => (
                <Tab
                    key={tabTitle}
                    fontSize="h4"
                    lineHeight="36px"
                    fontWeight="500"
                    _selected={{
                        fontSize: "h3",
                        fontWeight: "700",
                        lineHeight: "36px",
                        color: "#000",
                    }}
                    _focus={{ border: "none" }}
                    _hover={{ textDecoration: "underline", textUnderlineOffset: "10px" }}
                    p="0"
                    onClick={() => {
                        setIsLoading(true);
                        fetchMovies(tabTitle);
                        showElementForOneSec();
                    }}
                >
                    {tabTitle}
                </Tab>
            ))}
            {/* {isLoading && <Spinner />} */}
            {showRunning && (
                <Image
                    src="/pikachu_running.gif"
                    width={"80px"}
                    position="absolute"
                    left={["418px", "418px", "514px"]}
                />
            )}
            <SectionSubTitleSeeMore>
                <SeeMore href="/allmovies" />
            </SectionSubTitleSeeMore>
        </TabList>
    );
};

export default UpcomingTabs;
