import styled from "styled-components";
import WeeklyList from "./WeeklyList";

const WeeklyListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Lists = [
  { title: "The First post name", ranking: 1 },
  { title: "The Second post name", ranking: 2 },
  { title: "The Third post name", ranking: 3 },
  { title: "The Fourth post name", ranking: 4 },
  { title: "The Fiveth post name", ranking: 5 },
  { title: "The Sixth post name", ranking: 6 },
  { title: "The Seventh post name", ranking: 7 },
  { title: "The Eighth post name", ranking: 8 },
  { title: "The Nineth post name", ranking: 9 },
  { title: "The Tenth post name", ranking: 10 },
];

const WeeklyLists = () => {
  return (
    <WeeklyListContainer>
      {Lists.map(({ title, ranking }) => {
        return <WeeklyList title={title} ranking={ranking} key={title} />;
      })}
    </WeeklyListContainer>
  );
};

export default WeeklyLists;
