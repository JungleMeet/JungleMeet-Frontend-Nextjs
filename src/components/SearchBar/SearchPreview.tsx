import styled from "styled-components";
import React, { useEffect, useState } from "react";
import PreviewItem from "./PreviewItem";
import { isEmpty } from "lodash";
import { searchMovieName } from "@/utils/axiosMovieApi";
import BeatLoader from "react-spinners/BeatLoader";
import { PreviewItemProps } from "./PreviewItem";

const PreviewContainer = styled.div`
  position: absolute;
  z-index: 15;
  width: 507px;
  background-color: #e5e7e8;
  border-radius: 5px;
  transform: translateY(8px);
  max-height: 560px;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width:10px;
  }

`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ISearchPreviewProps {
    query: string;
}

const SearchPreview = ({ query }: ISearchPreviewProps): JSX.Element => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState<PreviewItemProps[]>([]);

    useEffect(() => {
        if (query.length > 2) {
            setLoading(true);
            searchMovieName(query).then(({ data }) => {
                isEmpty(data) ? setSearchResult([]) : setSearchResult(data);
                setLoading(false);
            });
        }
    }, [query]);

    if (query.length < 3) return <></>;
    return (
        <PreviewContainer>
            {loading ? (
                <LoaderContainer>
                    <BeatLoader color="#d736b4" />
                </LoaderContainer>
            ) : (
                searchResult?.map((item) => <PreviewItem key={item.resourceId} {...item} />)
            )}
        </PreviewContainer>
    );
};

export default SearchPreview;
