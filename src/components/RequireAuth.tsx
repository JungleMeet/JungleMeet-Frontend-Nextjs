import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import LoginModal from "./Login/LoginModal";

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const [isModalOpen, setIsModalOpen] = useState(true )
    const prevLoginState=useRef(false)

    useEffect(() => {
        // it exclude the situation where where a registered user just logs out (prevLoginState===true)
        // when both booleans are false, it means the fresh visit to this page
        if (isLogged===false && prevLoginState.current===false){ 
            setIsModalOpen(true)
        } 
        if (isLogged===true){setIsModalOpen(false)} 
        prevLoginState.current=isLogged
    }, [isLogged]);

    if (!isLogged) return (<LoginModal isOpen={isModalOpen} onClose={()=>{}}/> );

    return isLogged && children;
};

export default RequireAuth;
