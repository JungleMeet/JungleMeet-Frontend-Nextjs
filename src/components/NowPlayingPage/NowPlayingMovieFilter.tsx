import { Stack, Switch, Text } from "@chakra-ui/react";

const NowPlayingMovieFilter = () => {
    return (
        <Stack align="center" direction="row">
            <Switch size="md" />
            <Text fontSize={"text2"}>Watch Option</Text>
            <Switch size="md" />
            <Text fontSize={"text2"}>Watch Trailors</Text>
        </Stack>
    );
};

export default NowPlayingMovieFilter;
