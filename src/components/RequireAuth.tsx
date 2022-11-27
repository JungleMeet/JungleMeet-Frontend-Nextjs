import React from "react";
import { useSelector } from "react-redux";
import LoginModal from "./Login/LoginModal";

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
    const isLogged = useSelector((state: any) => state.login.isLogged);
    // const [isModalOpen, setIsModalOpen]=useState(!isLogged)

    // useEffect(() => {
    // // router cannot be used on server side
    // // use useEffect to call it after rendering
    //     if (!isLogged) {
    //         router.push("/")
    //     }
    // }, []);

    // if (!isLogged)
    //     return (
    //     // the loader is here because router.push returns a promise, it will take a while to redirect
    //         <BeatLoader color="#d736b4" />
    //     );

    if (!isLogged) return <LoginModal isOpen={!isLogged} onClose={() => {}} />;

    return isLogged && children;
};

export default RequireAuth;
