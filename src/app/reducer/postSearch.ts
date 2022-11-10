interface postState {
    postResult:Array<T>;
    isPostCollapsed:boolean;
    postPage: number;
    haveMorePostResults: boolean;
    subsequentPostLoading: boolean;
}

export const initialPostState={
    postResult:[],
    isPostCollapsed:true,
    postPage:1,
    haveMorePostResults:true,
    subsequentPostLoading:false,
}


export const postReducer=(state:postState, action:{type:string, payload?:any}):postState=>{
    const {payload}=action
    switch (action.type){
        case 'initializaion':
            return {...initialPostState}
            
        case 'emptyResult':{
            return {...state, haveMorePostResults:false}
        };
        case 'getPostData':{
            const newResult=state.postResult.concat(payload)
            return {...state,postResult:newResult}
        };
        case "setSubsequentLoading":{
            return {...state, subsequentPostLoading: payload}
        }
        case "noMorePostResults":{
            return {...state, haveMorePostResults:payload}
        }
        case "expandSearchResult":{
            return {...state, isPostCollapsed:false}
        }
        case "fetchNextPostPage":{
            return {...state, postPage: state.postPage+1}
        }
        default:
            return state
    }
}
