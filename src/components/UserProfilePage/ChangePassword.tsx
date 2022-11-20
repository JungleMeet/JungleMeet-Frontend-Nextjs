interface IChangePassword {
    setIsLoading: (value: boolean) => void;
}

const ChangePassword = ({ setIsLoading }: IChangePassword) => {
    setIsLoading(false);
    return <span>change password</span>;
};

export default ChangePassword;
