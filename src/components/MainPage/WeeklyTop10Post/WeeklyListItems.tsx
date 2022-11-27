import WeeklyList from "./WeeklyList";
import React, { useEffect, useState } from "react";
import { getPostsByView } from "@/utils/axiosPostApi";
import { OrderedList, ListItem } from "@chakra-ui/react";

const WeeklyListItems = () => {
    const [postLists, setPostLists] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await getPostsByView("views");
                const { data } = res.data;

                setPostLists(data);
            } catch (err) {
                return err;
            }
        };
        fetchPost();
    }, []);

    return (
        <OrderedList spacing="19px" pl="0">
            {postLists.slice(0, 3).map(({ _id, title }) => {
                return (
                    <ListItem key={_id} noOfLines={1}>
                        <WeeklyList postId={_id} title={title} icon={"/Fire.svg"} />{" "}
                    </ListItem>
                );
            })}

            {postLists.slice(4, 11).map(({ _id, title }) => {
                return (
                    <ListItem key={_id} noOfLines={1}>
                        <WeeklyList postId={_id} title={title} icon={""} />{" "}
                    </ListItem>
                );
            })}
        </OrderedList>
    );
};
export default WeeklyListItems;
