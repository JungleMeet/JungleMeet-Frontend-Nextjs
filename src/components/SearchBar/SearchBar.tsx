import { Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

const SearchButton = styled.button`
  position: relative;
  left: -30px;
  background: transparent;
  z-index: 10;
`;

const SearchBar = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push(`/search?name=${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup w="525px" h="36px">
                <Input
                    _placeholder={{
                        color: "#FFFFFF",
                        fontSize: "text4",
                        fontWeight: "400",
                        lineHeight: "lh24",
                    }}
                    placeholder="What do you want to watch?"
                    borderRadius="6px"
                    fontFamily="secondary"
                    color="#FFFFFF"
                    onChange={handleInput}
                    value={query}
                />
                <SearchButton onClick={handleSubmit}>
                    <SearchIcon color={"white"} boxSize="18px" />
                </SearchButton>
            </InputGroup>
        </form>
    );
};

export default SearchBar;
