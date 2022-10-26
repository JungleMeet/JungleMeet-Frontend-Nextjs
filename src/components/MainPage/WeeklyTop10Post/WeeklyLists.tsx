import styled from "styled-components";
import WeeklyList from "./WeeklyList";

const WeeklyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
const Lists = [
    { title: "The First post name", ranking: 1, icon: "/Fire.svg" },
    { title: "The Second post name", ranking: 2, icon: "/Fire.svg" },
    { title: "The Third post name", ranking: 3, icon: "/Fire.svg" },
    { title: "The Fourth post name", ranking: 4, icon: "" },
    { title: "The Fiveth post name", ranking: 5, icon: "/Growing.svg" },
    { title: "The Sixth post name", ranking: 6, icon: "" },
    { title: "The Seventh post name", ranking: 7, icon: "" },
    { title: "The Eighth post name", ranking: 8, icon: "" },
    { title: "The Nineth post name", ranking: 9, icon: "" },
    { title: "The Tenth post name", ranking: 10, icon: "" },
];

const WeeklyLists = () => {
    return (
        <WeeklyListContainer>
            {Lists.map(({ title, ranking, icon }) => {
                return <WeeklyList title={title} ranking={ranking} icon={icon} key={title} />;
            })}
        </WeeklyListContainer>
    );
};

export default WeeklyLists;
