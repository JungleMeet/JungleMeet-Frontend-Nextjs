interface IMessage {
    setIsLoading: (value: boolean) => void;
}

const Message = ({ setIsLoading }: IMessage) => {
    setIsLoading(false);
    return <span>message</span>;
};

export default Message;
