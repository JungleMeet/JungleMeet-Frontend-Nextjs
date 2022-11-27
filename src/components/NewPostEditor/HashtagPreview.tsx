import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import BeatLoader from "react-spinners/BeatLoader";
import { LoaderContainer, PreviewContainer } from "./NewPostPage.style";
import { addNewHashtag, searchHashtag } from "@/utils/axiosHashtagApi";
import { Flex, Button } from "@chakra-ui/react";

export interface IHashtagPreviewProps {
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
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState<IHashtagsProps[]>([]);
    const [selectedHashtag, setSelectedHashtag] = useState<IHashtagsProps>();

    // only search when user types in more than two character
    const conditionalQuery = query.length > 1;
    // showing the query that doesn't match any hashtags in the database
    const matchQuery = searchResult.filter((i) => i.category === query);

    useEffect(() => {
        if (conditionalQuery) {
            setIsLoading(true);
            const fetchHashtags = async () => {
                const { data } = await searchHashtag(query);
                isEmpty(data) ? setSearchResult([]) : setSearchResult(data);
                setIsLoading(false);
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

    const handleCreateHashtag = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await addNewHashtag(query);
            setSelectedHashtag({ _id: data._id, category: data.category });
            setIsLoading(false);
            setSearchResult([]);
            setQuery("");
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    console.log(hashtagsArray);

    return (
        <PreviewContainer>
            {isLoading ? (
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
            {conditionalQuery && matchQuery.length === 0 && (
                <Button
                    m=" 5px 15px "
                    width="464px"
                    justifyContent="left"
                    as="i"
                    color="blue.500"
                    fontSize="text3"
                    lineHeight="lh28"
                    onClick={(e) => handleCreateHashtag(e)}
                >
          #{query}
                </Button>
            )}
        </PreviewContainer>
    );
};

export default HashtagPreview;
