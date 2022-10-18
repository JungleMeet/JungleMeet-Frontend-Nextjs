import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import { Chakra } from "@/styles/Chakra";
import "../styles/styles.css";
function JungleMeetForumApp({ Component, pageProps }: AppProps) {
    return (
        <Chakra cookies="pageProps.cookies">
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Chakra>
    );
}

export default JungleMeetForumApp;
