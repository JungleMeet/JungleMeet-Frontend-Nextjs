import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import { Chakra } from "@/styles/Chakra";
import "../styles/styles.css";
import { appWithTranslation } from "next-i18next";
import { Spinner, Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function JungleMeetForumApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const handleChangeStart = (_url: any) => {
            setLoading(true);
        };

        const handleChangeComplete = (_url: any) => {
            setLoading(false);
        };

        router.events.on("routeChangeStart", handleChangeStart);
        router.events.on("routeChangeComplete", handleChangeComplete);
        router.events.on("routeChangeError", handleChangeComplete);

        return function cleanup() {
            router.events.off("routeChangeStart", handleChangeStart);
            router.events.off("routeChangeComplete", handleChangeComplete);
            router.events.off("routeChangeError", handleChangeComplete);
        };
    }, [router.events]);

    return (
        <Chakra cookies="pageProps.cookies">
            <Provider store={store}>
                {loading ? (
                    <Flex width="100vw" height="100vh" backgroundColor="gray.200">
                        <Box ml="50vw" mt="50vh" width="50px" font-size="30px">
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.400"
                                color="white"
                                size="xl"
                            />
                        </Box>
                    </Flex>
                ) : (
                    <Component {...pageProps} />
                )}
            </Provider>
        </Chakra>
    );
}

export default appWithTranslation(JungleMeetForumApp);
