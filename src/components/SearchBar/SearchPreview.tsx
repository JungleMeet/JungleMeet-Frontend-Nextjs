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
  max-height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ababac; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
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
    clearQuery: () => void;
}

const SearchPreview = React.forwardRef<HTMLDivElement, ISearchPreviewProps>(
    ({ query, clearQuery }, ref) => {
        const {loading, searchResult}=useSearch(query)

        if (query.length < 2) return <></>;
        return (
            <PreviewContainer ref={ref}>
                {loading ? (
                    <LoaderContainer>
                        <BeatLoader color="#d736b4" />
                    </LoaderContainer>
                ) : (
                    searchResult?.map((item) => (
                        <PreviewItem key={item.resourceId} {...item} clearQuery={clearQuery} />
                    ))
                )}
            </PreviewContainer>
        );
    }
);

SearchPreview.displayName = "SearchPreview";

export default SearchPreview;

const useSearch=(query:string)=>{
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState<PreviewItemProps[]>([])

    useEffect( () => {
        const fetchResult= async ()=>{
            if (query.length > 1) {
                setLoading(true);
                const data= await searchMovieName(query)
                isEmpty(data) ? setSearchResult([]) : setSearchResult(data);
                setLoading(false);
            }
        }
        fetchResult()

    }, [query]);
    return ({loading, searchResult})
}