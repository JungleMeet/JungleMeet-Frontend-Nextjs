import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import BeatLoader from "react-spinners/BeatLoader";
import { LoaderContainer, PreviewContainer } from "./NewPostPage.style";
import { searchHashtag } from "@/utils/axiosHashtagApi";
import { Flex, Button } from "@chakra-ui/react";

interface IHashtagPreviewProps {
    query: string;
    setQuery: (value: string) => void;
    hashtagsArray: IHashtagsProps[];
    setHashtagsArray: ({}: IHashtagsProps[]) => void;
}

export interface IHashtagsProps {
    _id: string;
    category: string;
}

const HashtagPreview = ({
    query,
    setQuery,
    hashtagsArray,
    setHashtagsArray,
}: IHashtagPreviewProps) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState<IHashtagsProps[]>([]);
    const [selectedHashtag, setSelectedHashtag] = useState<IHashtagsProps>();

    useEffect(() => {
    // only search when user types in more than two character
        if (query.length > 1) {
            setLoading(true);
            const fetchHashtags = async () => {
                const { data } = await searchHashtag(query);
                isEmpty(data) ? setSearchResult([]) : setSearchResult(data);
                setLoading(false);
            };
            fetchHashtags();
        }
        if (query.length === 0) {
            setSearchResult([]);
        }
    }, [query]);

    useEffect(() => {
        selectedHashtag && setHashtagsArray([...hashtagsArray, selectedHashtag]);
    }, [selectedHashtag]);

    const handleSelectHashtag = ({ _id, category }: IHashtagsProps) => {
        setSelectedHashtag({ _id, category });
        setSearchResult([]);
        setQuery("");
    };

    const matchQuery = searchResult.filter((i) => i.category === query);

    const handleCreatHashtag = () => {};

    return (
        <PreviewContainer>
            {loading ? (
                <LoaderContainer>
                    <BeatLoader color="#d736b4" />
                </LoaderContainer>
            ) : (
                searchResult?.map(({ _id, category }) => (
                    <Flex key={_id} p=" 5px 15px ">
                        <Button
                            width="100%"
                            justifyContent="left"
                            as="i"
                            color="blue.500"
                            fontSize="text3"
                            lineHeight="lh28"
                            onClick={() => handleSelectHashtag({ _id, category })}
                        >
              #{category}
                        </Button>
                    </Flex>
                ))
            )}
            {query.length > 1 && matchQuery.length === 0 && (
                <Button
                    m=" 5px 15px "
                    width="464px"
                    justifyContent="left"
                    as="i"
                    color="blue.500"
                    fontSize="text3"
                    lineHeight="lh28"
                    onClick={() => handleCreatHashtag()}
                >
          #{query}
                </Button>
            )}
        </PreviewContainer>
    );
};

export default HashtagPreview;
