import moment from "moment";

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
    targetCommentId?: string,
    action: string,
    viewed: boolean,
    useSecondPersonNarrative?: boolean,
    createdAt?: string,
    updatedAt?: string,
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
    let content;
    const createTime = moment(createdAt).fromNow(); 
    switch(action){
        case 'commented': {
            // the post author will receive "someone commented on your post"
            if(useSecondPersonNarrative){
                content = `${triggerUserName} commented on ${targetPostTitle}`;
            }else{
                // someone commented on your following post
                content = `${triggerUserName} commented on your following post ${targetPostTitle}`;
            }
            break;
        }
        case 'replied': {
            // the post author will receive "someone replied to your comment"
            if(useSecondPersonNarrative){
                content = `${triggerUserName} replied to your comment`;
            }
            break;
        }
        case 'published': {
            content = `${triggerUserName} published a new post ${targetPostTitle}`;
            break;
        }
        case 'followed': {
            content = `${triggerUserName} followed you`;
            break;
        }
        case 'likedComment': {
            if(useSecondPersonNarrative){
                content = `${triggerUserName} liked your comment`;
            }
            break;
        }
        case 'likedPost': {
            if(useSecondPersonNarrative){
                content = `${triggerUserName} liked your post ${targetPostTitle}`;
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