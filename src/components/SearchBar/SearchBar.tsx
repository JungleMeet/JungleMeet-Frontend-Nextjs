import { Input, InputGroup, useOutsideClick } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { debounce, isEmpty } from "lodash";
import { useRouter } from "next/router";
import SearchPreview from "./SearchPreview";
import { useTranslation } from "next-i18next";
import { EscPrompt, SearchBarContainer, SearchButton } from "./styles";
import { searchMovieName } from "@/utils/axiosMovieApi";
import { PreviewItemProps } from "./PreviewItem";
import usePostIdForMovieId from "@/hooks/usePostIdForMovieId";
import React from "react";

interface ISearchBarProps {
    maxWidth: string;
}

const SearchBar = ({ maxWidth }: ISearchBarProps) => {
    const router = useRouter();
    const { t } = useTranslation("home");
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [canSearchPreviewOpen, setCanSearchPreviewOpen] = useState(true);
    const previewRef = useRef(null);
    const { loading, searchResult } = useSearch(query);
    const createMoviePostByResourceId = usePostIdForMovieId();
    const searchInputRef = useRef<HTMLInputElement>(null);

    useOutsideClick({
        ref: previewRef,
        handler: () => setCanSearchPreviewOpen(false),
    });
    const debounceSetQuery = debounce(setQuery, 300);

    useEffect(() => {
        debounceSetQuery(input);
        return debounceSetQuery.cancel;
    }, [input]);

    const activateSearch = (e: globalThis.KeyboardEvent) => {
        const element = e.target as HTMLElement;
        if (
            element.tagName === "INPUT" ||
      element.tagName === "textarea" ||
      element.className.includes("ProseMirror")
        )
            return;

        if (e.key === "/") {
            searchInputRef.current?.focus();
            e.preventDefault();
        }
    };

    useEffect(() => {
    // set up global listener for search hotkey
        window.addEventListener("keydown", (e) => activateSearch(e));

        return window.removeEventListener("keydown", (e) => activateSearch(e));
    }, []);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setCanSearchPreviewOpen(true);
    };
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case "Escape":
                if (!query) setInput("");
                setQuery("");
                break;

            case "ArrowDown":
                setActiveIndex((prev) => {
                    if (searchResult.length === 0) return prev;
                    return prev < searchResult.length - 1 ? prev + 1 : prev;
                });
                break;

            case "ArrowUp":
                event.preventDefault();
                setActiveIndex((prev) => {
                    if (searchResult.length === 0) return prev;
                    return prev > 0 ? prev - 1 : prev;
                });
                break;

            case "Home":
                setActiveIndex(0);
                break;

            case "End":
                setActiveIndex(searchResult.length - 1);
                break;

            default:
                break;
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (searchResult.length > 0 && activeIndex > -1 && query.length > 0) {
            return createMoviePostByResourceId(searchResult[activeIndex].resourceId);
        }
        router.push(`/search?name=${input}`);
        setInput("");
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
                        onKeyDown={handleKeyDown}
                        onChange={handleInput}
                        value={input}
                        w="100%"
                        minW="270px"
                        ref={searchInputRef}
                    />
                    <SearchButton onClick={handleSubmit}>
                        <SearchIcon color={"white"} boxSize="18px" />
                    </SearchButton>
                    {!isEmpty(query) && <EscPrompt>ESC to close</EscPrompt>}
                </InputGroup>
            </form>
            {canSearchPreviewOpen &&
        (query.length > 1 ? (
            <SearchPreview
                ref={previewRef}
                clearQuery={clearQuery}
                searchResult={searchResult}
                loading={loading}
                activeIndex={activeIndex}
            />
        ) : null)}
        </SearchBarContainer>
    );
};

export default SearchBar;

const useSearch = (query: string) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState<PreviewItemProps[]>([]);

    useEffect(() => {
        const fetchResult = async () => {
            if (query.length > 1) {
                setLoading(true);
                const { data } = await searchMovieName(query);
                isEmpty(data) ? setSearchResult([]) : setSearchResult(data);
                setLoading(false);
            }
        };
        fetchResult();
    }, [query]);
    return { loading, searchResult };
};
