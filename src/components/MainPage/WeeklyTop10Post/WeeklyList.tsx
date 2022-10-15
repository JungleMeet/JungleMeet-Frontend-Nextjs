import styled from "styled-components";

const WeeklyListContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const WeeklyList = [
  {
    title: "The First post name",
  },
  {
    title: "The Second post name",
  },
  { title: "The Third post name" },
  { title: "The Fourth post name" },
];

const WeeklyLists = () => {
  return (
    <WeeklyListContainer>
      {WeeklyLists.map(({ title }) => {
        return <WeeklyList title={title} key={title} />;
      })}
    </WeeklyListContainer>
  );
};

export default WeeklyLists;
