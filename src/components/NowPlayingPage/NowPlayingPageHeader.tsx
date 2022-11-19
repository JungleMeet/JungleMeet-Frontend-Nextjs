import { Flex, Heading } from "@chakra-ui/react";
import { Stack, Switch, Text } from "@chakra-ui/react";

const NowPlayingPageHeader = () => {
	return (
		<Flex alignItems="center" justifyContent="space-between" marginTop="70px" marginBottom="76px">
			<Heading fontSize={"h1"} fontFamily="heading">
				Now Playing
			</Heading>
			<Stack align="center" direction="row">
				<Switch size="md" />
				<Text fontSize={"text2"}>Watch Option</Text>
				<Switch size="md" />
				<Text fontSize={"text2"}>Watch Trailors</Text>
			</Stack>
		</Flex>
	)
}

export default NowPlayingPageHeader;