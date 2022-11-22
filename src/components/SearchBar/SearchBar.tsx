import { Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import SearchPreview from "./SearchPreview";
import { useTranslation } from "next-i18next";

const SearchButton = styled.button`
  position: relative;
  left: -30px;
  background: transparent;
  z-index: 2;
`;

const EscPrompt = styled.span`
  position: absolute;
  background: transparent;
  z-index: 2;
  font-size: 16px;
  color: #797878;
  right: 55px;
  top: 8px;
`;

const SearchBarContainer = styled.div`
  position: relative;
  height: auto;
`;

const SearchBar = () => {
    const router = useRouter();
    const { t } = useTranslation("home");
    const [query, setQuery] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    const detectEsc = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") setQuery("");
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push(`/search?name=${query}`);
        setQuery("");
    };

    return (
        <SearchBarContainer>
            <form onSubmit={handleSubmit}>
                <InputGroup h="36px">
                    <Input
                        _placeholder={{
                            color: "#FFFFFF",
                            fontSize: "text4",
                            fontWeight: "400",
                            lineHeight: "lh24",
                        }}
                        placeholder={t("home:searchPlaceholder")}
                        borderRadius="6px"
                        fontFamily="secondary"
                        color="#FFFFFF"
                        onKeyDown={detectEsc}
                        onChange={handleInput}
                        value={query}
                        w="100%"
                    />
                    <SearchButton onClick={handleSubmit}>
                        <SearchIcon color={"white"} boxSize="18px" />
                    </SearchButton>
                    {!isEmpty(query) && <EscPrompt>ESC to close</EscPrompt>}
                </InputGroup>
            </form>
            <SearchPreview query={query} />
        </SearchBarContainer>
    );
};

export default SearchBar;
