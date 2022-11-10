import { IPostResultItemProps } from "@/components/Search/PostResultItem";

type PostSearchResultType = Omit<IPostResultItemProps, "keyword">;

interface postState {
    postResult: Array<PostSearchResultType>;
    isPostCollapsed: boolean;
    postPage: number;
    haveMorePostResults: boolean;
    subsequentPostLoading: boolean;
    pageLimit: number;
}

export const initialPostState = {
    postResult: [],
    isPostCollapsed: true,
    postPage: 1,
    haveMorePostResults: true,
    subsequentPostLoading: false,
    pageLimit: 10,
};

export const postReducer = (
    state: postState,
    action: { type: string; payload?: any }
): postState => {
    const { payload } = action;
    switch (action.type) {
        case "initialization":
            return { ...initialPostState };
        case "noResult": {
            return { ...state, haveMorePostResults: false };
        }
        case "setinitialPostData": {
            const haveMoreResult = payload.length >3;
            return { ...state, postResult: payload, haveMorePostResults: haveMoreResult };
        }
        case "setPostData": {
            const newResult = state.postResult.concat(payload);
            const haveMoreResult = !(payload.length < 10);
            return { ...state, postResult: newResult, haveMorePostResults: haveMoreResult };
        }
        case "startSubsequentLoading": {
            return { ...state, subsequentPostLoading: true };
        }
        case "completeSubsequentLoading": {
            return { ...state, subsequentPostLoading: false };
        }
        case "expandSearchResult": {
            // a bit risky here, because there is no new payload here. it use the initial result's payload
            const haveMoreResult = !(state.postResult.length <10)
            return { ...state, isPostCollapsed: false, haveMorePostResults:haveMoreResult };
        }
        case "fetchNextPostPage": {
            return { ...state, postPage: state.postPage + 1 };
        }
        default:
            return state;
    }
};
