import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import { Chakra } from "@/styles/Chakra";

function JungleMeetForumApp({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return (
    <Chakra cookies={pageProps.cookies}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Chakra>
  );
=======
    return (
        <Chakra cookies={pageProps.cookies}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Chakra>
    );
>>>>>>> main
}

export default JungleMeetForumApp;
