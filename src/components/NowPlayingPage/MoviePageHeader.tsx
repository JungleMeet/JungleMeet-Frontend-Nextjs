import { Flex, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import MovieSort from "./MovieSort";

const HeaderFilter = styled.div``;

interface IMoviePageHeaderProps {
    header: string;
    children: React.ReactNode;
}
const MoviePageHeader = ({ header, children }: IMoviePageHeaderProps): JSX.Element => {
    return (
        <Flex alignItems="center" justifyContent="space-between" marginTop="70px" marginBottom="76px">
            <Heading fontSize={"h1"} fontFamily="heading">
                {header}
            </Heading>
            <HeaderFilter>{children}</HeaderFilter>
            <MovieSort />
        </Flex>
    );
};

export default MoviePageHeader;
