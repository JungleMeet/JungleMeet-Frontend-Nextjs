import { ListItem, OrderedList } from "@chakra-ui/react";
import More from "../More";
import { SectionContainer, SectionTitle } from "../Containers";

const WeeklyTop10Post = () => {
  return (
    <SectionContainer className="rank_container">
      <SectionTitle></SectionTitle>
      <More />

      <h1 className="rank_list_title">Weekly Top 10 Post</h1>
      <OrderedList>
        <div className="rank_list">
          <ListItem>The First post name</ListItem>
          <ListItem>The Second post name</ListItem>
          <ListItem>The Third post name</ListItem>
          <ListItem>The Fourth post name</ListItem>
          <ListItem>The Fifth post name</ListItem>
          <ListItem>The Sixth post name</ListItem>
          <ListItem>The Seventh post name</ListItem>
          <ListItem>The Eighth post name</ListItem>
          <ListItem>The Nineth post name</ListItem>
          <ListItem>The Tenth post name</ListItem>
        </div>
      </OrderedList>
    </SectionContainer>
  );
};
export default WeeklyTop10Post;
