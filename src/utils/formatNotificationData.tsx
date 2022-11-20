import moment from "moment";
import parser from "html-react-parser";

export interface IformatNotificationData{
    _id: string,
    notifiedUserId: string,
    triggerUserId?:{
        _id: string;
        name: string;
        avatar?: string;
    }
    targetPostId?:{ 
        _id: string;
        title: string;
    },
    targetCommentId?:{
        _id: string;
        content: string;
    },
    action: string,
    viewed: boolean,
    useSecondPersonNarrative?: boolean,
    createdAt?: string,
    updatedAt?: string,
}

const replacePwithSpan = (str:string| undefined) => {
    const newStr = String(str).replace(/&lt;/g, '<').replace('<p>', '<span>').replace('</p>', '</span>');
    return newStr;
}

const formatNotificationData = ({
    _id, 
    notifiedUserId, 
    triggerUserId, 
    targetPostId, 
    targetCommentId, 
    action, 
    viewed, 
    useSecondPersonNarrative, 
    createdAt
}:IformatNotificationData) => {
    const triggerUserName = triggerUserId?.name.split(' ')[0];
    const triggerUserAvatar = triggerUserId?.avatar;
    const targetPostTitle = targetPostId?.title;
    const commentContent = replacePwithSpan(targetCommentId?.content);
    let content;
    const createTime = moment(createdAt).fromNow(); 
    switch(action){
        case 'commented': {
            // the post author will receive "someone commented on your post"
            if(useSecondPersonNarrative){
                content = parser(`<span style="font-weight: 700">${triggerUserName}</span> commented on <span style="font-weight: 700">${targetPostTitle}</span>`);
            }else{
                // someone commented on your following post
                content = parser(`<span style="font-weight: 700">${triggerUserName}</span> commented on your following post <span style="font-weight: 700">${targetPostTitle}</span>`);
            }
            break;
        }
        case 'replied': {
            // the post author will receive "someone replied to your comment"
            if(useSecondPersonNarrative){
                content = parser(`<span style="font-weight: 700">${triggerUserName}</span> replied to your comment <span style="font-weight: 700">${commentContent}</span>`);
            }
            break;
        }
        case 'published': {
            content = parser(`<span style="font-weight: 700">${triggerUserName}</span> published a new post <span style="font-weight: 700">${targetPostTitle}</span>`);
            break;
        }
        case 'followed': {
            content = parser(`<span style="font-weight: 700">${triggerUserName}</span> followed you`);
            break;
        }
        case 'likedComment': {
            if(useSecondPersonNarrative){
                content = parser(`<span style="font-weight: 700">${triggerUserName}</span> liked your comment <span style="font-weight: 700">${commentContent}</span>`);
            }
            break;
        }
        case 'likedPost': {
            if(useSecondPersonNarrative){
                content = parser(`<span style="font-weight: 700">${triggerUserName}</span> liked your post <span style="font-weight: 700">${targetPostTitle}</span>`);
            }
            break;
        }
        default:
    }

    return {
        _id, 
        triggerUserName,
        targetPostTitle,
        triggerUserAvatar,
        content,
        viewed, 
        createTime
    };
}

export default formatNotificationData;