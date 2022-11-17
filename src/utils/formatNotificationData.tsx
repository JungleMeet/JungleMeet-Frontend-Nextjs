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
                content = `${triggerUserName} commented on your ${targetPostTitle}`;
            }else{
                // someone commented on your following post
                content = `${triggerUserName} commented on your following post ${targetPostTitle}`;
            }
            break;
        }
        case 'replied': {
            // the post author will receive "someone commented on your post"
            if(useSecondPersonNarrative){
                content = `${triggerUserName} commented on your post`;
            }else{
                // someone commented on your following post
                content = `${triggerUserName} commented on your following post`;
            }
        }
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