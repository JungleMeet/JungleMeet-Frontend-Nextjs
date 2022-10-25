import SeeMore from "../SeeMore";
import Videos from "./Videos";
import { SectionContainer, SectionHeaderContainer, SectionTitle } from "../Containers";

const ExclusiveVideos = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>Exclusive Videos</SectionTitle>
                <SeeMore href="/" />
            </SectionHeaderContainer>
            <Videos />
        </SectionContainer>
    );
};

export default ExclusiveVideos;
