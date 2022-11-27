import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const router = useRouter();

    useEffect(() => {
    // router cannot be used on server side
    // use useEffect to call it after rendering
        if (!isLogged) router.push("/");
    }, []);

    if (!isLogged)
        return (
        // the loader is here because router.push returns a promise, it will take a while to redirect
            <BeatLoader color="#d736b4" />
        );

    return children;
};

export default RequireAuth;
