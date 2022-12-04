import React from "react";
import PreviewItem from "./PreviewItem";
import BeatLoader from "react-spinners/BeatLoader";
import { PreviewItemProps } from "./PreviewItem";
import { LoaderContainer, PreviewContainer } from "./styles";

export interface ISearchPreviewProps {
    clearQuery: () => void;
    activeIndex: number;
    searchResult: PreviewItemProps[];
    loading: boolean;
}

const SearchPreview = React.forwardRef<HTMLDivElement, ISearchPreviewProps>(
    ({ searchResult, clearQuery, loading, activeIndex }, ref) => {
        return (
            <PreviewContainer ref={ref}>
                {loading ? (
                    <LoaderContainer>
                        <BeatLoader color="#d736b4" />
                    </LoaderContainer>
                ) : (
                    searchResult?.map((item, index) => (
                        <PreviewItem
                            key={item.resourceId}
                            {...item}
                            clearQuery={clearQuery}
                            isActive={index === activeIndex}
                        />
                    ))
                )}
            </PreviewContainer>
        );
    }
);

SearchPreview.displayName = "SearchPreview";

export default SearchPreview;
