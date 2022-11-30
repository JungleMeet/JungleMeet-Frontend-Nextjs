import { Input, InputGroup, useOutsideClick } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { debounce, isEmpty } from "lodash";
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

interface ISearchBarContainer {
    maxWidth: string;
}

const SearchBarContainer = styled.div`
  position: relative;
  height: auto;
  max-width: ${({ maxWidth }: ISearchBarContainer) => maxWidth};
  //   max-width: 525px;
  width: 100%;
`;

const SearchBar = ({ maxWidth }: { maxWidth: string }) => {
    const router = useRouter();
    const { t } = useTranslation("home");
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");
    const [canSearchPreviewOpen, setCanSearchPreviewOpen] = useState(true);
    const previewRef = useRef(null);
    useOutsideClick({
        ref: previewRef,
        handler: () => setCanSearchPreviewOpen(false),
    });
    const debounceSetQuery = debounce(setQuery, 300);

    useEffect(() => {
        debounceSetQuery(input);
        return debounceSetQuery.cancel;
    }, [input]);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setCanSearchPreviewOpen(true);
    };
    const detectEsc = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") setQuery("");
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push(`/search?name=${query}`);
        setQuery("");
    };

    const clearQuery = () => setQuery("");

    return (
        <SearchBarContainer maxWidth={maxWidth}>
            <form onSubmit={handleSubmit}>
                <InputGroup h="36px" w="100%">
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
                        value={input}
                        w="100%"
                        minW="270px"
                    />
                    <SearchButton onClick={handleSubmit}>
                        <SearchIcon color={"white"} boxSize="18px" />
                    </SearchButton>
                    {!isEmpty(query) && <EscPrompt>ESC to close</EscPrompt>}
                </InputGroup>
            </form>
            {canSearchPreviewOpen && (
                <SearchPreview ref={previewRef} query={query} clearQuery={clearQuery} />
            )}
        </SearchBarContainer>
    );
};

export default SearchBar;
